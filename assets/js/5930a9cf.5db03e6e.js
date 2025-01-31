"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97],{78312:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=t(74848),s=t(28453);const a={id:"index",title:"Why BXL"},r=void 0,o={id:"bxl/index",title:"Why BXL",description:"Buck2 Extension Language (BXL)",source:"@site/../docs/bxl/index.md",sourceDirName:"bxl",slug:"/bxl/",permalink:"/docs/bxl/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"index",title:"Why BXL"},sidebar:"main",previous:{title:"Dep Files",permalink:"/docs/rule_authors/dep_files"},next:{title:"Tutorial",permalink:"/docs/bxl/tutorial"}},l={},c=[{value:"Buck2 Extension Language (BXL)",id:"buck2-extension-language-bxl",level:2},{value:"When should I use BXL over Buck2 API/CLI?",id:"when-should-i-use-bxl-over-buck2-apicli",level:2},{value:"Example Use Cases",id:"example-use-cases",level:2},{value:"Generate a project for IDE",id:"generate-a-project-for-ide",level:3},{value:"Build an LSP",id:"build-an-lsp",level:3},{value:"Perform graph analysis",id:"perform-graph-analysis",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"buck2-extension-language-bxl",children:"Buck2 Extension Language (BXL)"}),"\n",(0,i.jsx)(n.p,{children:"BXL is a Starlark-based script that enables integrators to inspect and interact\nwith the Buck2 graph."}),"\n",(0,i.jsx)(n.p,{children:"Integrators are able to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Write Starlark code that queries, analyzes, and builds on the Buck2 graph."}),"\n",(0,i.jsx)(n.li,{children:"Introspect and interact with the Buck2 graph structures natively, via\nStarlark, in a safe, controlled manner."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Introspection of the Buck2 graph can occur at the unconfigured, configured,\nproviders, and action stages. There are also APIs offered to allow BXL to accept\ncustom command line argument, output artifacts, and print results to stdout."}),"\n",(0,i.jsxs)(n.p,{children:["BXL leverages Buck2 core's incremental\n",(0,i.jsx)(n.a,{href:"./faq#when-is-my-bxl-script-cached",children:"caching"}),". It also has support for\n",(0,i.jsx)(n.a,{href:"./how_tos/basic_how_tos#running-actions",children:"running actions"}),",\n",(0,i.jsx)(n.a,{href:"./how_tos/how_to_run_actions_based_on_the_content_of_artifact",children:"dynamic outputs"}),",\nand ",(0,i.jsx)(n.a,{href:"./how_tos/how_to_cache_and_share_operations",children:"anonymous targets"}),". In\naddition, BXL has\n",(0,i.jsx)(n.a,{href:"./how_tos/basic_how_tos#profiling-testing-and-debugging-a-bxl-script",children:"profiling"}),"\ncapabilities, and allows users to add their own\n",(0,i.jsx)(n.a,{href:"./how_tos/how_to_collect_telemetry_events",children:"telemetry"})," directly within the BXL\nscripts."]}),"\n",(0,i.jsx)(n.p,{children:"BXL is considered to be mostly stable, with a bit more active development here\nand there."}),"\n",(0,i.jsx)(n.h2,{id:"when-should-i-use-bxl-over-buck2-apicli",children:"When should I use BXL over Buck2 API/CLI?"}),"\n",(0,i.jsx)(n.p,{children:"There are many overlaps between BXL and Buck2 (for example, both can run cquery\nand both can build targets). It\u2019s possible that one use case could be handled by\nboth BXL and Buck2."}),"\n",(0,i.jsx)(n.p,{children:"Following are some specific recommendations to help decide when to use BXL over\nregular Buck2:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Use/inspect resolved attributes that are not exposed/accessible to users via\nnormal Buck2 operations."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This includes introspecting the Starlark object of providers, analyzing the\nStarlark object of a rule\u2019s attr before and after coercing and resolution,\nand introspecting intermediate query results."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["Reduce/eliminate the need to make several Buck2 calls within your program,\nsuch as running several subprocesses to call ",(0,i.jsx)(n.code,{children:"cquery"})," several times."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["With BXL, you can just call the BXL script once in a subprocess, potentially\nreducing the amount of code you need to write in your program. For example,\nif you need to call cquery and build several times, you can put that all\nwithin a single BXL script and run ",(0,i.jsx)(n.code,{children:"buck2 bxl"})," once, rather than running\n",(0,i.jsx)(n.code,{children:"buck2 cquery"})," and ",(0,i.jsx)(n.code,{children:"buck2 build"})," several times."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reduce/eliminate the need to manually parse Buck2 output format within your\nprogram, and any bugs that may come with manual parsing"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Some languages are more verbose than others when it comes to string parsing."}),"\n",(0,i.jsx)(n.li,{children:"BXL scripts are written in Starlark, which is basically a deterministic,\nimmutable Python. BXL is able to directly introspect Starlark objects (such\nas rules and target nodes, and so on) and call methods on these objects\ninstead of parsing them over Buck2\u2019s output."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example-use-cases",children:"Example Use Cases"}),"\n",(0,i.jsx)(n.h3,{id:"generate-a-project-for-ide",children:"Generate a project for IDE"}),"\n",(0,i.jsx)(n.p,{children:"IDE project generation is roughly as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Form the target graph for the project target"}),"\n",(0,i.jsx)(n.li,{children:"Perform some filtering on the graph targets if needed. This depends on the\ntarget's configuration."}),"\n",(0,i.jsxs)(n.li,{children:["For each target, generate the project target metadata, including:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"compiler flags"}),"\n",(0,i.jsx)(n.li,{children:"linker flags"}),"\n",(0,i.jsx)(n.li,{children:"paths to generated files"}),"\n",(0,i.jsx)(n.li,{children:"inputs and outputs for each targets"}),"\n",(0,i.jsxs)(n.li,{children:["the paths relative to some ",(0,i.jsx)(n.code,{children:"PATH"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Write a single file translating this metadata into a format understood by the\nIDE"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"An example BXL flow for generating a project for IDE might be:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Add some command line arguments to accept a target (or subtarget) to generate\nthe project"}),"\n",(0,i.jsx)(n.li,{children:"Run analysis on the project target with a specific configuration to filter the\ngraph targets"}),"\n",(0,i.jsx)(n.li,{children:"For each resulting target, inspect the providers and attributes to extract the\nrequired metadata information. BXL uses filesystem operations to handle paths\nwithin the project"}),"\n",(0,i.jsx)(n.li,{children:"Run actions based on the linker/compiler flags, and build artifacts as needed\nto generate a project"}),"\n",(0,i.jsx)(n.li,{children:"Write a single file containing the metadata obtained from previous steps"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"build-an-lsp",children:"Build an LSP"}),"\n",(0,i.jsx)(n.p,{children:"A compilation database is a database containing information about which compile\noptions are used to build the files in a project. Language Server Protocols\n(LSPs) uses the compilation database to provide language features like auto\ncomplete, go to definition, and find all references for the user within an\nIDE/editor."}),"\n",(0,i.jsx)(n.p,{children:"An example BXL flow for building a C++ LSP might be:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Add a command line argument to accept a file"}),"\n",(0,i.jsx)(n.li,{children:"Run owners cquery in BXL to get the owning target of the file"}),"\n",(0,i.jsx)(n.li,{children:"Run analysis on the owning target to get the desired clang flags"}),"\n",(0,i.jsx)(n.li,{children:"Use BXL to write the clang flags to the disk in compilation database format"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"perform-graph-analysis",children:"Perform graph analysis"}),"\n",(0,i.jsx)(n.p,{children:"Some example graph analysis functionalities might be:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Run an analysis in BXL on a set of targets, and then inspect their providers,\nand build some subtargets"}),"\n",(0,i.jsx)(n.li,{children:"Run a uquery on some set of targets, and inspect the resulting nodes' coerced\nattributes"}),"\n",(0,i.jsx)(n.li,{children:"Run a cquery on some set of targets with a specific configuration, and inspect\nthe resulting nodes' attributes before and after resolution"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);