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
use buck2_core::target::label::label::TargetLabel;
use dupe::Dupe;
use dupe::IterDupedExt;

use crate::configuration::resolved::ConfigurationSettingKey;

/// The constraint introduced on execution platform resolution by
/// a toolchain rule (reached via a toolchain_dep).
#[derive(Debug, Dupe, Clone, PartialEq, Eq, Hash, Allocative)]
pub struct ToolchainConstraints(Arc<ToolchainConstraintsImpl>);

#[derive(Debug, PartialEq, Eq, Hash, Allocative)]
struct ToolchainConstraintsImpl {
    exec_deps: Vec<TargetLabel>,
    exec_compatible_with: Vec<ConfigurationSettingKey>,
}

impl ToolchainConstraints {
    pub fn new(
        exec_deps: &[TargetLabel],
        exec_compatible_with: &[ConfigurationSettingKey],
        inherited_toolchains: &[ToolchainConstraints],
    ) -> Self {
        Self(Arc::new(ToolchainConstraintsImpl {
            exec_deps: inherited_toolchains
                .iter()
                .flat_map(|i| &i.0.exec_deps)
                .chain(exec_deps)
                .duped()
                .collect(),
            exec_compatible_with: inherited_toolchains
                .iter()
                .flat_map(|i| &i.0.exec_compatible_with)
                .chain(exec_compatible_with)
                .duped()
                .collect(),
        }))
    }

    pub fn exec_deps(&self) -> impl Iterator<Item = &TargetLabel> {
        self.0.exec_deps.iter()
    }

    pub fn exec_compatible_with(&self) -> impl Iterator<Item = &ConfigurationSettingKey> {
        self.0.exec_compatible_with.iter()
    }
}
