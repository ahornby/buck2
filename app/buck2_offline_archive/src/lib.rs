/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use std::ffi::OsStr;
use std::fmt;
use std::path::Path;
// Note: Using this because we don't need to propagate async in the offline
// archiver program.
use std::process::Command;

use anyhow::Context;
use buck2_core::fs::paths::abs_path::AbsPathBuf;
use buck2_core::fs::paths::forward_rel_path::ForwardRelativePathBuf;
use buck2_core::fs::project_rel_path::ProjectRelativePathBuf;

#[derive(Clone, Debug, serde::Serialize, serde::Deserialize)]
pub struct RelativeSymlink {
    pub link: ProjectRelativePathBuf,
    pub target: ProjectRelativePathBuf,
}

#[derive(Clone, Debug, serde::Serialize, serde::Deserialize)]
pub struct ExternalSymlink {
    pub link: ProjectRelativePathBuf,
    pub target: AbsPathBuf,
    pub remaining_path: Option<ForwardRelativePathBuf>,
}

/// Structured format for an "offline archive manifest", which contains information
/// necessary to perform a fully offline build of a particular target.
///
/// This manifest is generated by running:
///   `buck2 debug io-trace export-manifest`
#[derive(Debug, Clone, serde::Serialize, serde::Deserialize)]
pub struct OfflineArchiveManifest {
    /// The repository revision this archive was generated from.
    pub repository: RepositoryMetadata,
    /// List of project-relative paths that are required to perform a build.
    pub paths: Vec<ProjectRelativePathBuf>,
    /// List of project-relative symlinks with targets inside the project.
    pub relative_symlinks: Vec<RelativeSymlink>,
    /// List of project-relative symlinks with targets outside the project.
    pub external_symlinks: Vec<ExternalSymlink>,
}

/// Repository information for an "offline archive manifest". Contains metadata
/// about the repository this manifest was generated from.
#[derive(Debug, Clone, PartialEq, serde::Serialize, serde::Deserialize)]
pub struct RepositoryMetadata {
    /// Repository revision this manifest came from.
    pub revision: String,
    /// Repository name.
    pub name: String,
}

impl RepositoryMetadata {
    pub fn from_cwd() -> anyhow::Result<Self> {
        Self::from_path(std::env::current_dir().context("Error getting current directory")?)
    }

    pub fn from_path<P: AsRef<Path>>(path: P) -> anyhow::Result<Self> {
        let revision = hg_in(&path, ["whereami"])?;
        let name = hg_in(path, ["config", "remotefilelog.reponame"])?;
        Ok(Self { revision, name })
    }
}

impl fmt::Display for RepositoryMetadata {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}@{}", self.name, self.revision)
    }
}

fn hg_in<I, S, P>(path: P, args: I) -> anyhow::Result<String>
where
    I: IntoIterator<Item = S>,
    S: AsRef<OsStr>,
    P: AsRef<Path>,
{
    let result = Command::new("hg")
        .args(args)
        .current_dir(path.as_ref())
        .env("HGPLAIN", "1")
        .output()
        .context("failed to dispatch hg command")?;
    if result.status.success() {
        let out = String::from_utf8(result.stdout).context("hg stdout to string")?;
        let out = out.trim();
        if out.is_empty() {
            anyhow::bail!("expected to be run in hg repository");
        } else {
            Ok(out.to_owned())
        }
    } else {
        let err = String::from_utf8(result.stderr).context("hg stderr to string")?;
        Err(anyhow::anyhow!(err))
    }
}
