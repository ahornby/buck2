/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use buck2_node::attrs::configured_attr::ConfiguredAttr;
use buck2_node::attrs::display::AttrDisplayWithContextExt;
use buck2_node::attrs::inspect_options::AttrInspectOptions;
use buck2_node::nodes::configured::ConfiguredTargetNode;
use buck2_query::query::environment::QueryTarget;
use flatbuffers::FlatBufferBuilder;
use flatbuffers::WIPOffset;

mod fbs {
    pub use crate::explain_generated::explain::Build;
    pub use crate::explain_generated::explain::BuildArgs;
    pub use crate::explain_generated::explain::CodePointer;
    pub use crate::explain_generated::explain::CodePointerArgs;
    pub use crate::explain_generated::explain::ConfiguredTargetLabel;
    pub use crate::explain_generated::explain::ConfiguredTargetLabelArgs;
    pub use crate::explain_generated::explain::ConfiguredTargetNode;
    pub use crate::explain_generated::explain::ConfiguredTargetNodeArgs;
}

enum AttrField {
    Other,
    StringList(Vec<String>),
    StringDict(Vec<(String, String)>),
}

pub(crate) fn gen_fbs(
    data: Vec<ConfiguredTargetNode>,
) -> anyhow::Result<FlatBufferBuilder<'static>> {
    let mut builder = FlatBufferBuilder::new();

    let targets: Result<Vec<_>, _> = data
        .iter()
        .map(|node| target_to_fbs(&mut builder, node))
        .collect();

    let targets = builder.create_vector(&targets?);
    let build = fbs::Build::create(
        &mut builder,
        &fbs::BuildArgs {
            targets: Some(targets),
        },
    );
    builder.finish(build, None);
    Ok(builder)
}

fn target_to_fbs<'a>(
    builder: &'_ mut FlatBufferBuilder<'static>,
    node: &'_ ConfiguredTargetNode,
) -> anyhow::Result<WIPOffset<fbs::ConfiguredTargetNode<'a>>, anyhow::Error> {
    // special attrs
    let name = builder.create_shared_string(&node.name());
    let target_label = get_target_label(builder, node);

    let oncall = node.oncall().map(|v| builder.create_shared_string(v));
    let type_ = builder.create_shared_string(node.rule_type().name());
    let package = builder.create_shared_string(&node.buildfile_path().to_string());
    let target_configuration =
        builder.create_shared_string(&node.target_configuration().to_string());
    let execution_platform = builder.create_shared_string(&node.execution_platform()?.id());
    let deps = {
        let res = &node
            .deps()
            .map(|d| get_target_label(builder, d))
            .collect::<Vec<WIPOffset<fbs::ConfiguredTargetLabel>>>();
        builder.create_vector(res)
    };

    let code_pointer = node
        .root_location()
        .map(|l| fbs::CodePointerArgs {
            file_path: Some(builder.create_shared_string(&l.file)),
            line: l.line as i32,
        })
        .as_ref()
        .map(|r| fbs::CodePointer::create(builder, r));

    let srcs = node
        .get("srcs", AttrInspectOptions::DefinedOnly)
        .map(|v| match categorize(v.value) {
            AttrField::StringList(v) => v.len(),
            AttrField::StringDict(v) => v.len(),
            AttrField::Other => 0,
        })
        .unwrap_or(0) as i64;

    let target = fbs::ConfiguredTargetNode::create(
        builder,
        &fbs::ConfiguredTargetNodeArgs {
            name: Some(name),
            // special attrs
            label: Some(target_label),
            type_: Some(type_),
            deps: Some(deps),
            package: Some(package),
            oncall,
            target_configuration: Some(target_configuration),
            execution_platform: Some(execution_platform),
            srcs,
            code_pointer,
        },
    );
    Ok(target)
}

fn get_target_label<'a>(
    builder: &mut FlatBufferBuilder<'static>,
    node: &ConfiguredTargetNode,
) -> WIPOffset<fbs::ConfiguredTargetLabel<'a>> {
    let label = &node.label();
    let target_label = builder.create_shared_string(&label.unconfigured().to_string());
    let cfg = builder.create_shared_string(&label.cfg().to_string());
    let exec_cfg = label
        .exec_cfg()
        .as_ref()
        .map(|c| builder.create_shared_string(&c.to_string()));
    fbs::ConfiguredTargetLabel::create(
        builder,
        &fbs::ConfiguredTargetLabelArgs {
            target_label: Some(target_label),
            cfg: Some(cfg),
            exec_cfg,
        },
    )
}

fn categorize(a: ConfiguredAttr) -> AttrField {
    match a {
        ConfiguredAttr::List(v) => {
            let mut list = vec![];
            v.0.iter().for_each(|v| {
                match v {
                    ConfiguredAttr::String(v) => list.push(v.0.to_string()),
                    _ => list.push(
                        v.as_display_no_ctx()
                            .to_string()
                            .trim_matches('"')
                            .to_owned(),
                    ), // TODO iguridi: make a "printer_for_explain" for attrs
                }
            });
            AttrField::StringList(list)
        }
        ConfiguredAttr::Tuple(v) => {
            let mut list = vec![];
            v.0.iter().for_each(|v| {
                match v {
                    ConfiguredAttr::String(v) => list.push(v.0.to_string()),
                    _ => list.push(
                        v.as_display_no_ctx()
                            .to_string()
                            .trim_matches('"')
                            .to_owned(),
                    ), // TODO iguridi: make a "printer_for_explain" for attrs
                }
            });
            AttrField::StringList(list)
        }
        ConfiguredAttr::Dict(v) => {
            let string_pairs: Vec<_> =
                v.0.iter()
                    .map(|(k, v)| match (k, v) {
                        (ConfiguredAttr::String(k), ConfiguredAttr::String(v)) => {
                            (k.0.to_string(), v.0.to_string())
                        }
                        _ => (
                            k.as_display_no_ctx()
                                .to_string()
                                .trim_matches('"')
                                .to_owned(),
                            v.as_display_no_ctx()
                                .to_string()
                                .trim_matches('"')
                                .to_owned(),
                        ), // TODO iguridi: make a "printer_for_explain" for attrs
                    })
                    .collect();
            AttrField::StringDict(string_pairs)
        }
        ConfiguredAttr::OneOf(v, _) => categorize(*v),
        _ => AttrField::Other,
    }
}

#[cfg(test)]
mod tests {
    use buck2_core::configuration::data::ConfigurationData;
    use buck2_core::execution_types::execution::ExecutionPlatform;
    use buck2_core::execution_types::execution::ExecutionPlatformResolution;
    use buck2_core::execution_types::executor_config::CommandExecutorConfig;
    use buck2_core::package::package_relative_path::PackageRelativePath;
    use buck2_core::target::label::label::TargetLabel;
    use buck2_interpreter_for_build::call_stack::StarlarkCallStackWrapper;
    use buck2_node::attrs::attr::Attribute;
    use buck2_node::attrs::attr_type::list::ListLiteral;
    use buck2_node::attrs::attr_type::AttrType;
    use buck2_node::attrs::coerced_attr::CoercedAttr;
    use buck2_node::attrs::coerced_path::CoercedPath;
    use buck2_node::call_stack::StarlarkCallStack;
    use buck2_util::arc_str::ArcSlice;
    use dupe::Dupe;
    use starlark::codemap::FileSpan;
    use starlark::errors::Frame;
    use starlark::eval::CallStack;

    use super::*;
    pub use crate::explain_generated::explain::Build;

    #[test]
    fn test_srcs_count() {
        let data = gen_data(
            vec![(
                "srcs",
                Attribute::new(None, "", AttrType::list(AttrType::source(false))),
                CoercedAttr::List(ListLiteral(ArcSlice::new([
                    CoercedAttr::SourceFile(CoercedPath::File(
                        PackageRelativePath::new("foo/bar").unwrap().to_arc(),
                    )),
                    CoercedAttr::SourceFile(CoercedPath::File(
                        PackageRelativePath::new("foo/bar2").unwrap().to_arc(),
                    )),
                ]))),
            )],
            vec![],
        );

        let fbs = gen_fbs(data).unwrap();
        let fbs = fbs.finished_data();
        let build = flatbuffers::root::<Build>(fbs).unwrap();
        let target = build.targets().unwrap().get(0);

        assert_things(target, build);
        assert_eq!(target.srcs(), 2);
    }

    fn assert_things(target: fbs::ConfiguredTargetNode<'_>, build: fbs::Build<'_>) {
        // special attrs
        let label = target.label().unwrap();
        assert!(label.cfg().unwrap().contains("<testing>#"));
        assert_eq!(label.target_label().unwrap(), "cell//pkg:foo");
        assert_eq!(target.name(), Some("foo"));
        assert_eq!(target.type_(), Some("foo_lib"));
        assert_eq!(target.package(), Some("cell//pkg:BUCK"));
        assert_eq!(target.oncall(), None);
        assert_eq!(target.execution_platform(), Some("cell//pkg:bar"));
        assert_eq!(
            target.code_pointer().unwrap().file_path(),
            Some("cell/pkg/BUCK")
        );
        assert_eq!(target.code_pointer().unwrap().line(), 0);
        assert_eq!(target.deps().unwrap().is_empty(), true);

        let target2 = build.targets().unwrap().get(1);
        assert_eq!(
            target2.label().unwrap().target_label(),
            Some("cell//pkg:baz"),
        );
    }

    fn gen_data(
        attrs: Vec<(
            &str,
            buck2_node::attrs::attr::Attribute,
            buck2_node::attrs::coerced_attr::CoercedAttr,
        )>,
        internal_attrs: Vec<(
            &str,
            buck2_node::attrs::attr::Attribute,
            buck2_node::attrs::coerced_attr::CoercedAttr,
        )>,
    ) -> Vec<ConfiguredTargetNode> {
        // Setup data
        let target_label = TargetLabel::testing_parse("cell//pkg:foo");
        let configured_target_label = target_label.configure(ConfigurationData::testing_new());

        let execution_platform_resolution = {
            let platform_label = TargetLabel::testing_parse("cell//pkg:bar");
            let platform = ExecutionPlatform::platform(
                platform_label,
                ConfigurationData::testing_new(),
                CommandExecutorConfig::testing_local(),
            );
            ExecutionPlatformResolution::new(Some(platform), Vec::new())
        };

        let target = ConfiguredTargetNode::testing_new(
            configured_target_label,
            "foo_lib",
            execution_platform_resolution.dupe(),
            attrs,
            internal_attrs,
            Some(StarlarkCallStack::new(StarlarkCallStackWrapper(
                CallStack {
                    frames: vec![Frame {
                        name: "foo".to_owned(),
                        location: Some(FileSpan::new(
                            "cell/pkg/BUCK".to_owned(),
                            "source".to_owned(),
                        )),
                    }],
                },
            ))),
        );

        let target_label2 = TargetLabel::testing_parse("cell//pkg:baz");
        let configured_target_label2 = target_label2.configure(ConfigurationData::testing_new());
        let target2 = ConfiguredTargetNode::testing_new(
            configured_target_label2,
            "foo_lib",
            execution_platform_resolution,
            vec![],
            vec![],
            None,
        );
        vec![target, target2]
    }
}
