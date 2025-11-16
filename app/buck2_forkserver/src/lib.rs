/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is dual-licensed under either the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree or the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree. You may select, at your option, one of the
 * above-listed licenses.
 */

#![feature(error_generic_member_access)]

#[cfg(unix)]
pub mod client;

#[cfg(unix)]
pub mod command;

#[cfg(unix)]
pub(crate) mod convert;

#[cfg(unix)]
pub mod launch;

#[cfg(unix)]
pub(crate) mod service;
