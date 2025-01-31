"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[961],{36768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=n(74848),s=n(28453);const a={id:"faq",title:"FAQs"},r=void 0,c={id:"bxl/faq",title:"FAQs",description:"When is my BXL script cached?",source:"@site/../docs/bxl/faq.md",sourceDirName:"bxl",slug:"/bxl/faq",permalink:"/docs/bxl/faq",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"faq",title:"FAQs"},sidebar:"main",previous:{title:"Understanding Labels and Nodes in Buck2",permalink:"/docs/bxl/explanation/labels_and_nodes"},next:{title:"Architectural Model",permalink:"/docs/developers/architecture/buck2"}},o={},d=[{value:"When is my BXL script cached?",id:"when-is-my-bxl-script-cached",level:2},{value:"What\u2019s the difference between <code>ctx.output.print()</code> and <code>print()</code>?",id:"whats-the-difference-between-ctxoutputprint-and-print",level:2},{value:"What do I need to know about ensured artifacts",id:"what-do-i-need-to-know-about-ensured-artifacts",level:2},{value:"What is the difference between dynamic outputs and anon targets?",id:"what-is-the-difference-between-dynamic-outputs-and-anon-targets",level:2},{value:"Can I mutate types returned by BXL APIs?",id:"can-i-mutate-types-returned-by-bxl-apis",level:2},{value:"What is run synchronously vs asynchronously?",id:"what-is-run-synchronously-vs-asynchronously",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"when-is-my-bxl-script-cached",children:"When is my BXL script cached?"}),"\n",(0,i.jsxs)(t.p,{children:["The entire BXL script is represented as a single node on the DICE graph (Buck2\u2019s\ninternal dependency graph). When the script\u2019s input changes, the entire node is\ninvalidated and needs to be recomputed. For example, if a BXL function calls\nuquery, then uses the result to do a cquery and then a build, if Buck2 detects\nthat any of the recorded calls to uquery, cquery, and build changes, then the\nentire BXL script will be reran. The computations themselves (uquery, cquery,\nand build) will still be incrementally evaluated via DICE, so we are not\nrerunning ",(0,i.jsx)(t.em,{children:"every"})," computation entirely within the BXL."]}),"\n",(0,i.jsx)(t.p,{children:"When the BXL script creates artifacts and ensures them, those artifacts are\ncached separately in an action outside of the BXL execution. This means that the\nartifacts produced by BXL are cached separately from the BXL script itself, much\nlike the computations within a BXL."}),"\n",(0,i.jsx)(t.p,{children:"During 2023, there is a plan to add finer grain incrementality to make better\nuse of DICE\u2019s existing incrementality support."}),"\n",(0,i.jsxs)(t.h2,{id:"whats-the-difference-between-ctxoutputprint-and-print",children:["What\u2019s the difference between ",(0,i.jsx)(t.code,{children:"ctx.output.print()"})," and ",(0,i.jsx)(t.code,{children:"print()"}),"?"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"ctx.output.print()"})," writes items to stdout by buck2 even when the script is\ncached. Items written to the output stream are considered to be the results of\na BXL script, which will be displayed to stdout by buck2 even when the script\nis cached."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"print()"})," is offered by Starlark via the stdlib. This prints anything you want\nbut won\u2019t be provided to stdout at the end of a BXL script. These can be used\nto print to stderr. NOTE: ",(0,i.jsx)(t.code,{children:"print()"})," statements don't show up if the script has\nbeen cached."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"what-do-i-need-to-know-about-ensured-artifacts",children:"What do I need to know about ensured artifacts"}),"\n",(0,i.jsxs)(t.p,{children:["An ",(0,i.jsx)(t.code,{children:"ensured_artifact"})," prints out the relative or absolute path via\n",(0,i.jsx)(t.code,{children:"ctx.output.print()"}),", depending on if called with ",(0,i.jsx)(t.code,{children:"abs_path()"})," or ",(0,i.jsx)(t.code,{children:"rel_path"}),"(),\nbut will print out ",(0,i.jsx)(t.code,{children:"<ensured artifact bound to <some path>>"})," via ",(0,i.jsx)(t.code,{children:"print()"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"This is intentional because when the ensured artifact is created within BXL, it\nhas not been materialized yet. It will be materialized after the BXL script\nfinishes executing, and Buck2 core performs some additional actions after the\nBXL script."}),"\n",(0,i.jsx)(t.p,{children:"This is a safeguard to prevent people from misusing the artifact path and\npassing it into an action without the artifact having been materialized or\npassing an absolute path into RE, which can actually mess up RE and render the\naction not shareable across users. In addition, it makes these actions\nseparately cacheable from the BXL execution."}),"\n",(0,i.jsx)(t.h2,{id:"what-is-the-difference-between-dynamic-outputs-and-anon-targets",children:"What is the difference between dynamic outputs and anon targets?"}),"\n",(0,i.jsxs)(t.p,{children:["Dynamic outputs are meant for\n",(0,i.jsx)(t.a,{href:"/docs/rule_authors/dynamic_dependencies",children:"dynamic dependencies"}),". The context\ntype is a ",(0,i.jsx)(t.code,{children:"bxl_ctx"}),". Dynamic outputs are ran asynchronously outside of the BXL\nexecution."]}),"\n",(0,i.jsxs)(t.p,{children:["Anon targets are meant for sharing work betwen multiple BXLs. The context type\nis a normal rule analysis ",(0,i.jsx)(t.code,{children:"context"}),". Anon targets are ",(0,i.jsx)(t.code,{children:"await"}),"-ed inline with\nyour BXL function."]}),"\n",(0,i.jsx)(t.h2,{id:"can-i-mutate-types-returned-by-bxl-apis",children:"Can I mutate types returned by BXL APIs?"}),"\n",(0,i.jsx)(t.p,{children:"The data types produced by BXL API calls are always immutable."}),"\n",(0,i.jsx)(t.h2,{id:"what-is-run-synchronously-vs-asynchronously",children:"What is run synchronously vs asynchronously?"}),"\n",(0,i.jsx)(t.p,{children:"Starlark itself is run synchronously. However, certain BXL APIs are evaluated\nasynchronously."}),"\n",(0,i.jsx)(t.p,{children:"If you pass in multiple inputs to builds, queries, or analyses, the execution of\nthese API calls will be blocking, but the inputs themselves will be evaluated in\nparallel within the execution."}),"\n",(0,i.jsxs)(t.p,{children:["Ensuring artifacts, dynamic outputs, anon targets, and resolving promises will\nhappen ",(0,i.jsx)(t.em,{children:"after"})," the Starlark script is executed."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(96540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);