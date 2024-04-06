/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use std::sync::Arc;

use allocative::Allocative;
use anyhow::Context;
use async_trait::async_trait;
use buck2_core::cells::cell_path::CellPath;
use buck2_core::cells::name::CellName;
use buck2_core::cells::paths::CellRelativePath;
use buck2_core::cells::unchecked_cell_rel_path::UncheckedCellRelativePath;
use buck2_core::cells::CellResolver;
use buck2_core::fs::paths::file_name::FileNameBuf;
use buck2_core::fs::project_rel_path::ProjectRelativePath;
use buck2_core::fs::project_rel_path::ProjectRelativePathBuf;
use buck2_events::dispatch::console_message;
use buck2_futures::cancellation::CancellationContext;
use cmp_any::PartialEqAny;
use derivative::Derivative;
use dice::DiceComputations;
use dice::Key;
use dupe::Dupe;

use crate::dice::cells::HasCellResolver;
use crate::dice::data::HasIoProvider;
use crate::dice::file_ops::delegate::keys::FileOpsKey;
use crate::dice::file_ops::delegate::keys::FileOpsValue;
use crate::file_ops::RawDirEntry;
use crate::file_ops::RawPathMetadata;
use crate::file_ops::ReadDirOutput;
use crate::file_ops::SimpleDirEntry;
use crate::ignores::all_cells::HasCellFileIgnores;
use crate::ignores::file_ignores::CellFileIgnores;
use crate::io::IoProvider;

/// Note: Everything in this mini-module exists only so that it can be replaced by a `TestFileOps`
/// in unittests
mod keys {
    use std::sync::Arc;

    use allocative::Allocative;
    use buck2_core::cells::name::CellName;
    use derive_more::Display;
    use dupe::Dupe;

    use crate::dice::file_ops::delegate::FileOpsDelegate;

    #[derive(Clone, Dupe, Display, Debug, Eq, Hash, PartialEq, Allocative)]
    #[display(fmt = "{:?}", self)]
    pub struct FileOpsKey(pub CellName);

    #[derive(Dupe, Clone, Allocative)]
    pub struct FileOpsValue(#[allocative(skip)] pub Arc<dyn FileOpsDelegate>);
}

#[async_trait]
pub trait FileOpsDelegate: Send + Sync {
    async fn read_file_if_exists(
        &self,
        path: &'async_trait CellRelativePath,
    ) -> anyhow::Result<Option<String>>;

    /// Return the list of file outputs, sorted.
    async fn read_dir(&self, path: &'async_trait CellRelativePath)
    -> anyhow::Result<ReadDirOutput>;

    async fn is_ignored(&self, path: &'async_trait CellRelativePath) -> anyhow::Result<bool>;

    async fn read_path_metadata_if_exists(
        &self,
        path: &'async_trait CellRelativePath,
    ) -> anyhow::Result<Option<RawPathMetadata>>;

    fn eq_token(&self) -> PartialEqAny;
}

impl PartialEq for dyn FileOpsDelegate {
    fn eq(&self, other: &Self) -> bool {
        self.eq_token() == other.eq_token()
    }
}

/// A `FileOpsDelegate` implementation that calls out to the `IoProvider` to read files.
///
/// This is used for everything except 1) tests, and 2) external cells.
#[derive(Clone, Dupe, Derivative, Allocative)]
#[derivative(PartialEq)]
struct IoFileOpsDelegate {
    // Safe to ignore because `io` does not change during the lifetime of the daemon.
    #[derivative(PartialEq = "ignore")]
    io: Arc<dyn IoProvider>,
    cells: CellResolver,
    ignores: Arc<CellFileIgnores>,
    cell: CellName,
}

impl IoFileOpsDelegate {
    fn resolve(&self, path: &CellRelativePath) -> ProjectRelativePathBuf {
        let cell_root = self.cells.get(self.cell).unwrap().path();
        cell_root.as_project_relative_path().join(path)
    }

    fn get_cell_path(&self, path: &ProjectRelativePath) -> anyhow::Result<CellPath> {
        self.cells.get_cell_path(path)
    }

    fn io_provider(&self) -> &dyn IoProvider {
        self.io.as_ref()
    }
}

#[async_trait]
impl FileOpsDelegate for IoFileOpsDelegate {
    async fn read_file_if_exists(
        &self,
        path: &'async_trait CellRelativePath,
    ) -> anyhow::Result<Option<String>> {
        // TODO(cjhopman): error on ignored paths, maybe.
        let project_path = self.resolve(path);
        self.io_provider().read_file_if_exists(project_path).await
    }

    async fn read_dir(
        &self,
        path: &'async_trait CellRelativePath,
    ) -> anyhow::Result<ReadDirOutput> {
        // TODO(cjhopman): This should also probably verify that the parent chain is not ignored.
        self.ignores
            .check(UncheckedCellRelativePath::new(path))
            .into_result()
            .with_context(|| format!("Error checking whether dir `{}` is ignored", path))?;

        let project_path = self.resolve(path);
        let mut entries = self
            .io_provider()
            .read_dir(project_path)
            .await
            .with_context(|| format!("Error listing dir `{}`", path))?;

        // Make sure entries are deterministic, since read_dir isn't.
        entries.sort_by(|a, b| a.file_name.cmp(&b.file_name));

        let is_ignored = |file_name: &str| {
            let mut cell_relative_path_buf;
            let cell_relative_path: &str = if path.is_empty() {
                file_name
            } else {
                cell_relative_path_buf =
                    String::with_capacity(path.as_str().len() + 1 + file_name.len());
                cell_relative_path_buf.push_str(path.as_str());
                cell_relative_path_buf.push('/');
                cell_relative_path_buf.push_str(file_name);
                &cell_relative_path_buf
            };

            let cell_relative_path = UncheckedCellRelativePath::unchecked_new(cell_relative_path);
            let is_ignored = self.ignores.check(cell_relative_path).is_ignored();
            anyhow::Ok(is_ignored)
        };

        // Filter out any entries that are ignored.
        let mut included_entries = Vec::new();
        for e in entries {
            let RawDirEntry {
                file_type,
                file_name,
            } = e;

            if !is_ignored(&file_name)? {
                let file_name = match FileNameBuf::try_from_or_get_back(file_name) {
                    Ok(file_name) => file_name,
                    Err(file_name) => {
                        console_message(format!(
                            "File name `{file_name}` is not valid. \
                                Add the path to `project.ignore` to mute this message",
                        ));
                        continue;
                    }
                };
                included_entries.push(SimpleDirEntry {
                    file_name,
                    file_type,
                });
            }
        }

        Ok(ReadDirOutput {
            included: included_entries.into(),
        })
    }

    async fn read_path_metadata_if_exists(
        &self,
        path: &'async_trait CellRelativePath,
    ) -> anyhow::Result<Option<RawPathMetadata>> {
        let project_path = self.resolve(path);

        let res = self
            .io_provider()
            .read_path_metadata_if_exists(project_path)
            .await
            .with_context(|| format!("Error accessing metadata for path `{}`", path))?;
        res.map(|meta| meta.try_map(|path| Ok(Arc::new(self.get_cell_path(&path)?))))
            .transpose()
    }

    async fn is_ignored(&self, path: &'async_trait CellRelativePath) -> anyhow::Result<bool> {
        Ok(self
            .ignores
            .check(UncheckedCellRelativePath::new(path))
            .is_ignored())
    }

    fn eq_token(&self) -> PartialEqAny {
        PartialEqAny::new(self)
    }
}

pub(crate) async fn get_delegated_file_ops(
    dice: &mut DiceComputations<'_>,
    cell: CellName,
) -> buck2_error::Result<Arc<dyn FileOpsDelegate>> {
    #[async_trait]
    impl Key for FileOpsKey {
        type Value = buck2_error::Result<FileOpsValue>;
        async fn compute(
            &self,
            ctx: &mut DiceComputations,
            _cancellations: &CancellationContext,
        ) -> Self::Value {
            let cells = ctx.get_cell_resolver().await?;
            let io = ctx.global_data().get_io_provider();

            let ignores = ctx.new_cell_ignores(self.0).await?;

            Ok(FileOpsValue(Arc::new(IoFileOpsDelegate {
                io,
                cells,
                ignores,
                cell: self.0,
            })))
        }

        fn equality(x: &Self::Value, y: &Self::Value) -> bool {
            match (x, y) {
                (Ok(x), Ok(y)) => *x.0 == *y.0,
                _ => false,
            }
        }

        fn validity(x: &Self::Value) -> bool {
            x.is_ok()
        }
    }

    Ok(dice.compute(&FileOpsKey(cell)).await??.0)
}

pub mod testing {
    pub use super::keys::FileOpsKey;
    pub use super::keys::FileOpsValue;
}
