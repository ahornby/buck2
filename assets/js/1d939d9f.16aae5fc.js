"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7114],{82535:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=t(74848),a=t(28453);const i={id:"profile",title:"profile"},s=void 0,r={id:"users/commands/profile",title:"profile",description:"These are the flags/commands under buck2 profile and their --help output:",source:"@site/../docs/users/commands/profile.generated.md",sourceDirName:"users/commands",slug:"/users/commands/profile",permalink:"/docs/users/commands/profile",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"profile",title:"profile"},sidebar:"main",previous:{title:"lsp",permalink:"/docs/users/commands/lsp"},next:{title:"query",permalink:"/docs/users/commands/query"}},l={},c=[];function d(e){const n={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["These are the flags/commands under ",(0,o.jsx)(n.code,{children:"buck2 profile"})," and their ",(0,o.jsx)(n.code,{children:"--help"})," output:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"Run starlark profiler\n\nUsage: buck2-release profile [OPTIONS] <COMMAND>\n\nCommands:\n  analysis  Profile analysis\n  loading   Profile `BUCK` file evaluation\n  bxl       Profile BXL script\n  help      Print this message or the help of the given subcommand(s)\n\nOptions:\n  -h, --help\n          Print help (see a summary with '-h')\n\nUniversal Options:\n  -v, --verbose <VERBOSITY>\n          How verbose buck should be while logging.\n          \n          Values: 0 = Quiet, errors only; 1 = Show status. Default; 2 = more info about errors; 3 =\n          more info about everything; 4 = more info about everything + stderr;\n          \n          It can be combined with specific log items (stderr, full_failed_command, commands,\n          actions, status, stats, success) to fine-tune the verbosity of the log. Example usage\n          \"-v=1,stderr\"\n          \n          [default: 1]\n\n      --oncall <ONCALL>\n          The oncall executing this command\n\n      --client-metadata <CLIENT_METADATA>\n          Metadata key-value pairs to inject into Buck2's logging. Client metadata must be of the\n          form `key=value`, where `key` is a snake_case identifier, and will be sent to backend\n          datasets\n\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"Profile analysis\n\nUsage: buck2-release profile analysis [OPTIONS] --output <PATH> --mode <MODE> [TARGET_PATTERNS]...\n\nArguments:\n  [TARGET_PATTERNS]...\n          \n\nOptions:\n  -r, --recursive\n          In analysis profiling, capture the profile of the target and its dependencies, and output\n          the merged profile\n\n  -o, --output <PATH>\n          Output file path for profile data.\n          \n          File will be created if it does not exist, and overwritten if it does.\n\n      --mode <MODE>\n          Profile mode.\n          \n          Memory profiling modes have suffixes either `-allocated` or `-retained`.\n          \n          `-retained` means memory kept in frozen starlark heap after analysis complete. `-retained`\n          does not work when profiling loading, because no memory is retained after loading and\n          frozen heap is not even created. This is probably what you want when profiling analysis.\n          \n          `-allocated` means allocated memory, including memory which is later garbage collected.\n          \n          [possible values: time-flame, heap-flame-allocated, heap-flame-retained,\n          heap-summary-allocated, heap-summary-retained, statement, bytecode, bytecode-pairs,\n          typecheck, coverage, none]\n\n  -h, --help\n          Print help (see a summary with '-h')\n\nTarget Configuration Options:\n  -u, --target-universe <TARGET_UNIVERSE>\n          Comma separated list of targets to construct a configured target universe.\n          \n          When the option is specified, command targets are be resolved in this universe.\n          Additionally, `--target-platforms=` and `--modifier=` flags are be used to configure the\n          universe targets, not the command targets.\n          \n          This argument is particularly recommended on most non-trivial cqueries. In the absence of\n          this argument, buck2 will use the target literals in your cquery expression as the value\n          for this argument, which may not be what you want.\n\n      --target-platforms <PLATFORM>\n          Configuration target (one) to use to configure targets\n\n  -m, --modifier <VALUE>\n          A configuration modifier to configure all targets on the command line. This may be a\n          constraint value target.\n\nBuckconfig Options:\n  -c, --config <SECTION.OPTION=VALUE>\n          List of config options\n\n      --config-file <PATH>\n          List of config file paths\n\n      --fake-host <HOST>\n          [possible values: default, linux, macos, windows]\n\n      --fake-arch <ARCH>\n          [possible values: default, aarch64, x8664]\n\n      --fake-xcode-version <VERSION-BUILD>\n          Value must be formatted as: version-build (e.g., 14.3.0-14C18 or 14.1-14B47b)\n\n      --reuse-current-config\n          Re-uses any `--config` values (inline or via modefiles) if there's a previous command,\n          otherwise the flag is ignored.\n          \n          If there is a previous command and `--reuse-current-config` is set, then the old config is\n          used, ignoring any overrides.\n          \n          If there is no previous command but the flag was set, then the flag is ignored, the\n          command behaves as if the flag was not set at all.\n\n      --exit-when-different-state\n          Used for exiting a concurrent command when a different state is detected\n\n      --preemptible <PREEMPTIBLE>\n          Used to configure when this command could be preempted by another command for the same\n          isolation dir.\n          \n          Normally, when you run two commands - from different terminals, say - buck2 will attempt\n          to run them in parallel. However, if the two commands are based on different state, that\n          is they either have different configs or different filesystem states, buck2 cannot run\n          them in parallel. The default behavior in this case is to block the second command until\n          the first completes.\n\n          Possible values:\n          - never:            (default) When another command starts that cannot run in parallel with\n            this one, block that command\n          - always:           When another command starts, interrupt this command, *even if they\n            could run in parallel*. There is no good reason to use this other than that it provides\n            slightly nicer superconsole output\n          - ondifferentstate: When another command starts that cannot run in parallel with this one,\n            interrupt this command\n\nStarlark Options:\n      --disable-starlark-types\n          Disable runtime type checking in Starlark interpreter.\n          \n          This option is not stable, and can be used only locally to diagnose evaluation performance\n          problems.\n\n      --stack\n          Record or show target call stacks.\n          \n          Starlark call stacks will be included in duplicate targets error.\n          \n          If a command outputs targets (like `targets` command), starlark call stacks will be\n          printed after the targets.\n\nConsole Options:\n      --console <super|simple|...>\n          Which console to use for this command\n          \n          [env: BUCK_CONSOLE=]\n          [default: auto]\n          [possible values: auto, none, simple, simplenotty, simpletty, super]\n\n      --ui <UI>...\n          Configure additional superconsole ui components.\n          \n          Accepts a comma-separated list of superconsole components to add. Possible values are:\n          \n          dice - shows information about evaluated dice nodes debugevents - shows information about\n          the flow of events from buckd\n          \n          These components can be turned on/off interactively. Press 'h' for help when superconsole\n          is active.\n\n          Possible values:\n          - dice\n          - debugevents\n          - io:          I/O panel\n          - re:          RE panel\n\n      --no-interactive-console\n          Disable console interactions\n          \n          [env: BUCK_NO_INTERACTIVE_CONSOLE=]\n\nEvent Log Options:\n      --event-log <PATH>\n          Write events to this log file\n\n      --write-build-id <PATH>\n          Write command invocation id into this file\n\n      --unstable-write-invocation-record <PATH>\n          Write the invocation record (as JSON) to this path. No guarantees whatsoever are made\n          regarding the stability of the format\n\n      --command-report-path <PATH>\n          Write the command report to this path. A command report is always written to\n          `buck-out/v2/<uuid>/command_report` even without this flag\n\nUniversal Options:\n  -v, --verbose <VERBOSITY>\n          How verbose buck should be while logging.\n          \n          Values: 0 = Quiet, errors only; 1 = Show status. Default; 2 = more info about errors; 3 =\n          more info about everything; 4 = more info about everything + stderr;\n          \n          It can be combined with specific log items (stderr, full_failed_command, commands,\n          actions, status, stats, success) to fine-tune the verbosity of the log. Example usage\n          \"-v=1,stderr\"\n          \n          [default: 1]\n\n      --oncall <ONCALL>\n          The oncall executing this command\n\n      --client-metadata <CLIENT_METADATA>\n          Metadata key-value pairs to inject into Buck2's logging. Client metadata must be of the\n          form `key=value`, where `key` is a snake_case identifier, and will be sent to backend\n          datasets\n\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"Profile `BUCK` file evaluation\n\nUsage: buck2-release profile loading [OPTIONS] --output <PATH> --mode <MODE> [TARGET_PATTERNS]...\n\nArguments:\n  [TARGET_PATTERNS]...\n          \n\nOptions:\n  -r, --recursive\n          In analysis profiling, capture the profile of the target and its dependencies, and output\n          the merged profile\n\n  -o, --output <PATH>\n          Output file path for profile data.\n          \n          File will be created if it does not exist, and overwritten if it does.\n\n      --mode <MODE>\n          Profile mode.\n          \n          Memory profiling modes have suffixes either `-allocated` or `-retained`.\n          \n          `-retained` means memory kept in frozen starlark heap after analysis complete. `-retained`\n          does not work when profiling loading, because no memory is retained after loading and\n          frozen heap is not even created. This is probably what you want when profiling analysis.\n          \n          `-allocated` means allocated memory, including memory which is later garbage collected.\n          \n          [possible values: time-flame, heap-flame-allocated, heap-flame-retained,\n          heap-summary-allocated, heap-summary-retained, statement, bytecode, bytecode-pairs,\n          typecheck, coverage, none]\n\n  -h, --help\n          Print help (see a summary with '-h')\n\nTarget Configuration Options:\n  -u, --target-universe <TARGET_UNIVERSE>\n          Comma separated list of targets to construct a configured target universe.\n          \n          When the option is specified, command targets are be resolved in this universe.\n          Additionally, `--target-platforms=` and `--modifier=` flags are be used to configure the\n          universe targets, not the command targets.\n          \n          This argument is particularly recommended on most non-trivial cqueries. In the absence of\n          this argument, buck2 will use the target literals in your cquery expression as the value\n          for this argument, which may not be what you want.\n\n      --target-platforms <PLATFORM>\n          Configuration target (one) to use to configure targets\n\n  -m, --modifier <VALUE>\n          A configuration modifier to configure all targets on the command line. This may be a\n          constraint value target.\n\nBuckconfig Options:\n  -c, --config <SECTION.OPTION=VALUE>\n          List of config options\n\n      --config-file <PATH>\n          List of config file paths\n\n      --fake-host <HOST>\n          [possible values: default, linux, macos, windows]\n\n      --fake-arch <ARCH>\n          [possible values: default, aarch64, x8664]\n\n      --fake-xcode-version <VERSION-BUILD>\n          Value must be formatted as: version-build (e.g., 14.3.0-14C18 or 14.1-14B47b)\n\n      --reuse-current-config\n          Re-uses any `--config` values (inline or via modefiles) if there's a previous command,\n          otherwise the flag is ignored.\n          \n          If there is a previous command and `--reuse-current-config` is set, then the old config is\n          used, ignoring any overrides.\n          \n          If there is no previous command but the flag was set, then the flag is ignored, the\n          command behaves as if the flag was not set at all.\n\n      --exit-when-different-state\n          Used for exiting a concurrent command when a different state is detected\n\n      --preemptible <PREEMPTIBLE>\n          Used to configure when this command could be preempted by another command for the same\n          isolation dir.\n          \n          Normally, when you run two commands - from different terminals, say - buck2 will attempt\n          to run them in parallel. However, if the two commands are based on different state, that\n          is they either have different configs or different filesystem states, buck2 cannot run\n          them in parallel. The default behavior in this case is to block the second command until\n          the first completes.\n\n          Possible values:\n          - never:            (default) When another command starts that cannot run in parallel with\n            this one, block that command\n          - always:           When another command starts, interrupt this command, *even if they\n            could run in parallel*. There is no good reason to use this other than that it provides\n            slightly nicer superconsole output\n          - ondifferentstate: When another command starts that cannot run in parallel with this one,\n            interrupt this command\n\nStarlark Options:\n      --disable-starlark-types\n          Disable runtime type checking in Starlark interpreter.\n          \n          This option is not stable, and can be used only locally to diagnose evaluation performance\n          problems.\n\n      --stack\n          Record or show target call stacks.\n          \n          Starlark call stacks will be included in duplicate targets error.\n          \n          If a command outputs targets (like `targets` command), starlark call stacks will be\n          printed after the targets.\n\nConsole Options:\n      --console <super|simple|...>\n          Which console to use for this command\n          \n          [env: BUCK_CONSOLE=]\n          [default: auto]\n          [possible values: auto, none, simple, simplenotty, simpletty, super]\n\n      --ui <UI>...\n          Configure additional superconsole ui components.\n          \n          Accepts a comma-separated list of superconsole components to add. Possible values are:\n          \n          dice - shows information about evaluated dice nodes debugevents - shows information about\n          the flow of events from buckd\n          \n          These components can be turned on/off interactively. Press 'h' for help when superconsole\n          is active.\n\n          Possible values:\n          - dice\n          - debugevents\n          - io:          I/O panel\n          - re:          RE panel\n\n      --no-interactive-console\n          Disable console interactions\n          \n          [env: BUCK_NO_INTERACTIVE_CONSOLE=]\n\nEvent Log Options:\n      --event-log <PATH>\n          Write events to this log file\n\n      --write-build-id <PATH>\n          Write command invocation id into this file\n\n      --unstable-write-invocation-record <PATH>\n          Write the invocation record (as JSON) to this path. No guarantees whatsoever are made\n          regarding the stability of the format\n\n      --command-report-path <PATH>\n          Write the command report to this path. A command report is always written to\n          `buck-out/v2/<uuid>/command_report` even without this flag\n\nUniversal Options:\n  -v, --verbose <VERBOSITY>\n          How verbose buck should be while logging.\n          \n          Values: 0 = Quiet, errors only; 1 = Show status. Default; 2 = more info about errors; 3 =\n          more info about everything; 4 = more info about everything + stderr;\n          \n          It can be combined with specific log items (stderr, full_failed_command, commands,\n          actions, status, stats, success) to fine-tune the verbosity of the log. Example usage\n          \"-v=1,stderr\"\n          \n          [default: 1]\n\n      --oncall <ONCALL>\n          The oncall executing this command\n\n      --client-metadata <CLIENT_METADATA>\n          Metadata key-value pairs to inject into Buck2's logging. Client metadata must be of the\n          form `key=value`, where `key` is a snake_case identifier, and will be sent to backend\n          datasets\n\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"Profile BXL script\n\nUsage: buck2-release profile bxl [OPTIONS] --output <PATH> --mode <MODE> <BXL label> [-- <BXL INPUT ARGS>...]\n\nArguments:\n  <BXL label>\n          The bxl function to execute as defined by the label of form\n          `<cell>//path/file.bxl:<function>`\n\n  [BXL INPUT ARGS]...\n          Arguments passed to the bxl script\n\nOptions:\n  -M, --materializations <MATERIALIZATIONS>\n          Materialize (or skip) the final artifacts, bypassing buckconfig.\n          \n          [possible values: all, none]\n\n      --user-event-log <PATH>\n          Write user events to this log file. Both user and internal events are written to main\n          event log. If this flag is specified, user events are additionally written to user event\n          log. Log format is JSONL, uncompressed if no known extensions are detected, or you can\n          explicitly specify the compression via the file extension (ex: `.json-lines.gz` would be\n          gzip compressed, `.json-lines.zst` would be zstd compressed). Resulting log is is\n          compatible with `buck2 log show-user`\n\n      --build-report <PATH>\n          Print a build report\n          \n          `--build-report=-` will print the build report to stdout `--build-report=<filepath>` will\n          write the build report to the file\n\n      --enable-optional-validations <VALIDATION_NAMES>\n          Comma separated list of validation names to run that are marked optional.\n          \n          By default, validations marked as optional are skipped. This option overrides the\n          behaviour and executes those validations.\n\n      --build-report-options <BUILD_REPORT_OPTIONS>\n          Comma separated list of build report options.\n          \n          The following options are supported:\n          \n          `fill-out-failures`: fill out failures the same way Buck1 would.\n          \n          `package-project-relative-paths`: emit the project-relative path of packages for the\n          targets that were built.\n\n  -j, --num-threads <THREADS>\n          Number of threads to use during execution (default is # cores)\n\n      --local-only\n          Enable only local execution. Will reject actions that cannot execute locally\n          \n          [env: BUCK_OFFLINE_BUILD=]\n\n      --remote-only\n          Enable only remote execution. Will reject actions that cannot execute remotely\n\n      --prefer-local\n          Enable hybrid execution. Will prefer executing actions that can execute locally on the\n          local host\n\n      --prefer-remote\n          Enable hybrid execution. Will prefer executing actions that can execute remotely on RE and\n          will avoid racing local and remote execution\n\n      --unstable-no-execution\n          Experimental: Disable all execution\n\n      --no-remote-cache\n          Do not perform remote cache queries or cache writes. If remote execution is enabled, the\n          RE service might still deduplicate actions, so for e.g. benchmarking, using a random\n          isolation dir is preferred\n          \n          [env: BUCK_OFFLINE_BUILD=]\n\n      --write-to-cache-anyway\n          Could be used to enable the action cache writes on the RE worker when no_remote_cache is\n          specified\n\n      --eager-dep-files\n          Process dep files when they are generated (i.e. after running a command that produces dep\n          files), rather than when they are used (i.e. before re-running a command that previously\n          produced dep files). Use this when debugging commands that produce dep files. Note that\n          commands that previously produced dep files will not re-run: only dep files produced\n          during this command will be eagerly loaded\n\n      --upload-all-actions\n          Uploads every action to the RE service, regardless of whether the action needs to execute\n          on RE.\n          \n          This is useful when debugging builds and trying to inspect actions which executed\n          remotely. It's possible that the action result is cached but the action itself has\n          expired. In this case, downloading the action itself would fail. Enabling this option\n          would unconditionally upload all actions, thus you will not hit any expiration issues.\n\n      --fail-fast\n          If Buck hits an error, do as little work as possible before exiting.\n          \n          To illustrate the effect of this flag, consider an invocation of `build :foo :bar`. The\n          default behavior of buck is to do enough work to get a result for the builds of each of\n          `:foo` and `:bar`, and no more. This means that buck will continue to complete the build\n          of `:bar` after the build of `:foo` has failed; however, once one dependency of `:foo` has\n          failed, other dependencies will be cancelled unless they are needed by `:bar`.\n          \n          This flag changes the behavior of buck to not wait on `:bar` to complete once `:foo` has\n          failed. Generally, this flag only has an effect on builds that specify multiple targets.\n          \n          `--keep-going` changes the behavior of buck to not only wait on `:bar` once one dependency\n          of `:foo` has failed, but to additionally attempt to build other dependencies of `:foo` if\n          possible.\n\n      --keep-going\n          If Buck hits an error, continue doing as much work as possible before exiting.\n          \n          See `--fail-fast` for more details.\n\n      --skip-missing-targets\n          If target is missing, then skip building instead of throwing error\n\n      --skip-incompatible-targets\n          If target is incompatible with the specified configuration, skip building instead of\n          throwing error. This does not apply to targets specified with glob patterns `/...` or `:`\n          which are skipped unconditionally\n\n      --materialize-failed-inputs\n          Materializes inputs for failed actions which ran on RE\n\n  -o, --output <PATH>\n          Output file path for profile data.\n          \n          File will be created if it does not exist, and overwritten if it does.\n\n      --mode <MODE>\n          Profile mode.\n          \n          Memory profiling modes have suffixes either `-allocated` or `-retained`.\n          \n          `-retained` means memory kept in frozen starlark heap after analysis complete. `-retained`\n          does not work when profiling loading, because no memory is retained after loading and\n          frozen heap is not even created. This is probably what you want when profiling analysis.\n          \n          `-allocated` means allocated memory, including memory which is later garbage collected.\n          \n          [possible values: time-flame, heap-flame-allocated, heap-flame-retained,\n          heap-summary-allocated, heap-summary-retained, statement, bytecode, bytecode-pairs,\n          typecheck, coverage, none]\n\n  -h, --help\n          Print help (see a summary with '-h')\n\nTarget Configuration Options:\n  -u, --target-universe <TARGET_UNIVERSE>\n          Comma separated list of targets to construct a configured target universe.\n          \n          When the option is specified, command targets are be resolved in this universe.\n          Additionally, `--target-platforms=` and `--modifier=` flags are be used to configure the\n          universe targets, not the command targets.\n          \n          This argument is particularly recommended on most non-trivial cqueries. In the absence of\n          this argument, buck2 will use the target literals in your cquery expression as the value\n          for this argument, which may not be what you want.\n\n      --target-platforms <PLATFORM>\n          Configuration target (one) to use to configure targets\n\n  -m, --modifier <VALUE>\n          A configuration modifier to configure all targets on the command line. This may be a\n          constraint value target.\n\nBuckconfig Options:\n  -c, --config <SECTION.OPTION=VALUE>\n          List of config options\n\n      --config-file <PATH>\n          List of config file paths\n\n      --fake-host <HOST>\n          [possible values: default, linux, macos, windows]\n\n      --fake-arch <ARCH>\n          [possible values: default, aarch64, x8664]\n\n      --fake-xcode-version <VERSION-BUILD>\n          Value must be formatted as: version-build (e.g., 14.3.0-14C18 or 14.1-14B47b)\n\n      --reuse-current-config\n          Re-uses any `--config` values (inline or via modefiles) if there's a previous command,\n          otherwise the flag is ignored.\n          \n          If there is a previous command and `--reuse-current-config` is set, then the old config is\n          used, ignoring any overrides.\n          \n          If there is no previous command but the flag was set, then the flag is ignored, the\n          command behaves as if the flag was not set at all.\n\n      --exit-when-different-state\n          Used for exiting a concurrent command when a different state is detected\n\n      --preemptible <PREEMPTIBLE>\n          Used to configure when this command could be preempted by another command for the same\n          isolation dir.\n          \n          Normally, when you run two commands - from different terminals, say - buck2 will attempt\n          to run them in parallel. However, if the two commands are based on different state, that\n          is they either have different configs or different filesystem states, buck2 cannot run\n          them in parallel. The default behavior in this case is to block the second command until\n          the first completes.\n\n          Possible values:\n          - never:            (default) When another command starts that cannot run in parallel with\n            this one, block that command\n          - always:           When another command starts, interrupt this command, *even if they\n            could run in parallel*. There is no good reason to use this other than that it provides\n            slightly nicer superconsole output\n          - ondifferentstate: When another command starts that cannot run in parallel with this one,\n            interrupt this command\n\nStarlark Options:\n      --disable-starlark-types\n          Disable runtime type checking in Starlark interpreter.\n          \n          This option is not stable, and can be used only locally to diagnose evaluation performance\n          problems.\n\n      --stack\n          Record or show target call stacks.\n          \n          Starlark call stacks will be included in duplicate targets error.\n          \n          If a command outputs targets (like `targets` command), starlark call stacks will be\n          printed after the targets.\n\nConsole Options:\n      --console <super|simple|...>\n          Which console to use for this command\n          \n          [env: BUCK_CONSOLE=]\n          [default: auto]\n          [possible values: auto, none, simple, simplenotty, simpletty, super]\n\n      --ui <UI>...\n          Configure additional superconsole ui components.\n          \n          Accepts a comma-separated list of superconsole components to add. Possible values are:\n          \n          dice - shows information about evaluated dice nodes debugevents - shows information about\n          the flow of events from buckd\n          \n          These components can be turned on/off interactively. Press 'h' for help when superconsole\n          is active.\n\n          Possible values:\n          - dice\n          - debugevents\n          - io:          I/O panel\n          - re:          RE panel\n\n      --no-interactive-console\n          Disable console interactions\n          \n          [env: BUCK_NO_INTERACTIVE_CONSOLE=]\n\nEvent Log Options:\n      --event-log <PATH>\n          Write events to this log file\n\n      --write-build-id <PATH>\n          Write command invocation id into this file\n\n      --unstable-write-invocation-record <PATH>\n          Write the invocation record (as JSON) to this path. No guarantees whatsoever are made\n          regarding the stability of the format\n\n      --command-report-path <PATH>\n          Write the command report to this path. A command report is always written to\n          `buck-out/v2/<uuid>/command_report` even without this flag\n\nUniversal Options:\n  -v, --verbose <VERBOSITY>\n          How verbose buck should be while logging.\n          \n          Values: 0 = Quiet, errors only; 1 = Show status. Default; 2 = more info about errors; 3 =\n          more info about everything; 4 = more info about everything + stderr;\n          \n          It can be combined with specific log items (stderr, full_failed_command, commands,\n          actions, status, stats, success) to fine-tune the verbosity of the log. Example usage\n          \"-v=1,stderr\"\n          \n          [default: 1]\n\n      --oncall <ONCALL>\n          The oncall executing this command\n\n      --client-metadata <CLIENT_METADATA>\n          Metadata key-value pairs to inject into Buck2's logging. Client metadata must be of the\n          form `key=value`, where `key` is a snake_case identifier, and will be sent to backend\n          datasets\n\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(96540);const a={},i=o.createContext(a);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);