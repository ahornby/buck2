"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3423],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>p,MDXProvider:()=>m,mdx:()=>b,useMDXComponents:()=>l,withMDXComponents:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){return function(t){var r=l(t.components);return n.createElement(e,o({},t,{components:r}))}},l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,c=u["".concat(i,".").concat(m)]||u[m]||h[m]||o;return r?n.createElement(c,d(d({ref:t},p),{},{components:r})):n.createElement(c,d({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[c]="string"==typeof e?e:a,i[1]=d;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},96762:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"cheat_sheet",title:"Cheat Sheet"},i="Buck2 Cheat Sheet",d={unversionedId:"users/cheat_sheet",id:"users/cheat_sheet",title:"Cheat Sheet",description:"This section provides example command lines that you can use to obtain",source:"@site/../docs/users/cheatsheet.md",sourceDirName:"users",slug:"/users/cheat_sheet",permalink:"/docs/users/cheat_sheet",draft:!1,tags:[],version:"current",frontMatter:{id:"cheat_sheet",title:"Cheat Sheet"},sidebar:"manualSidebar",previous:{title:"utargets",permalink:"/docs/users/commands/utargets"},next:{title:"Common Issues",permalink:"/docs/users/faq/common_issues"}},s={},p=[{value:"How do I find all the targets for a package?",id:"how-do-i-find-all-the-targets-for-a-package",level:3},{value:"How do I specify more than one target to <code>buck2 cquery</code>?",id:"how-do-i-specify-more-than-one-target-to-buck2-cquery",level:3},{value:"How do I get the attribute names and values for the targets returned by a query?",id:"how-do-i-get-the-attribute-names-and-values-for-the-targets-returned-by-a-query",level:3},{value:"How do I perform a query<strong> *</strong>inside<strong>* </strong>of a rule?",id:"how-do-i-perform-a-query-inside-of-a-rule",level:3},{value:"How do I find the dependencies for a target?",id:"how-do-i-find-the-dependencies-for-a-target",level:3},{value:"How do I find the buildfile that contains the target that owns a source file?",id:"how-do-i-find-the-buildfile-that-contains-the-target-that-owns-a-source-file",level:3}],u={toc:p};function l(e){let{components:t,...r}=e;return(0,a.mdx)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"buck2-cheat-sheet"},"Buck2 Cheat Sheet"),(0,a.mdx)("p",null,"This section provides example command lines that you can use to obtain\ninformation about Buck2 and about your build. These techniques can help you to\nunderstand how your build works and to troubleshoot issues with your build.\nThese examples use the ",(0,a.mdx)("a",{parentName:"p",href:"../query/cquery"},(0,a.mdx)("inlineCode",{parentName:"a"},"buck2 cquery"))," command. We recommend\ncquery over uquery in most cases because cquery operates on the configured\ngraph, which means that targets have had the expected configurations applied on\nthem."),(0,a.mdx)("hr",null),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"How do I find all the targets for a package?"),(0,a.mdx)("li",{parentName:"ul"},"How do I specify more than one target to ",(0,a.mdx)("inlineCode",{parentName:"li"},"buck2 cquery"),"?"),(0,a.mdx)("li",{parentName:"ul"},"How do I get the attribute names and values for the targets that result from a\nquery?"),(0,a.mdx)("li",{parentName:"ul"},"How do I perform a query inside of a rule?"),(0,a.mdx)("li",{parentName:"ul"},"How do I find the dependencies for a target, that is, the targets on which a\nspecified target depends?"),(0,a.mdx)("li",{parentName:"ul"},"How do I find the reverse-dependencies for a target, that is, the targets that\ndepend on a specified target?"),(0,a.mdx)("li",{parentName:"ul"},"How do I find the build file that contains the target that owns a source file?")),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"how-do-i-find-all-the-targets-for-a-package"},"How do I find all the targets for a package?"),(0,a.mdx)("p",null,"Specify a ",(0,a.mdx)("em",{parentName:"p"},"build target pattern")," that represents the targets in the package."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"buck2 cquery //path/to/dir/...\n")),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 cquery")," command can accept a\n",(0,a.mdx)("a",{parentName:"p",href:"../../concepts/target_pattern"},"build target pattern")," as a parameter. If you\nspecify a build target pattern, Buck2 evaluates this pattern and shows all the\nbuild targets that match it."),(0,a.mdx)("h3",{id:"how-do-i-specify-more-than-one-target-to-buck2-cquery"},"How do I specify more than one target to ",(0,a.mdx)("inlineCode",{parentName:"h3"},"buck2 cquery"),"?"),(0,a.mdx)("p",null,"Use the ",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 cquery set()")," operator. The following command line returns the\ntarget ",(0,a.mdx)("inlineCode",{parentName:"p"},"main")," in the build file in the root of the Buck2 project and all the\ntargets from the build file in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"myclass")," subdirectory of the root."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"buck2 cquery \"set( '//:main' '//myclass:' )\"\n")),(0,a.mdx)("h3",{id:"how-do-i-get-the-attribute-names-and-values-for-the-targets-returned-by-a-query"},"How do I get the attribute names and values for the targets returned by a query?"),(0,a.mdx)("p",null,"Add the ",(0,a.mdx)("inlineCode",{parentName:"p"},"--output-attribute <ATTRIBUTE>")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"--output-all-attributes")," option to\nthe command line, followed by regular expressions that represent the attributes\nof interest."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"buck2 cquery \"deps(//foo:bar)\" --output-attribute 'name' 'exported_headers'\n")),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"--output-attribute")," option enables you to specify which attributes Buck2\nshould return. Instead of returning the names of the targets that match the\nquery expression, Buck2 returns the names and values of the specified attributes\nfor those targets in JSON format. Attributes are specified as regular\nexpressions. For example, ",(0,a.mdx)("inlineCode",{parentName:"p"},"'.*'")," matches all attributes. See the\n",(0,a.mdx)("a",{parentName:"p",href:"../query/cquery"},(0,a.mdx)("inlineCode",{parentName:"a"},"buck2 cquery")," docs")," for more details. The output for the\nexample query above might look something like the following."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'{"//foo/bar/lib:lib" : {"exported_headers" : [ "App/util.h" ],"name" : "lib"},"//foo/bar:app" : {"exported_headers" : [ "App/lib.h" ],"name" : "app"}}\n')),(0,a.mdx)("h3",{id:"how-do-i-perform-a-query-inside-of-a-rule"},"How do I perform a query",(0,a.mdx)("strong",{parentName:"h3"}," ","*"),"inside",(0,a.mdx)("strong",{parentName:"h3"},"*"," "),"of a rule?"),(0,a.mdx)("p",null,"Buck2 supports certain string parameter macros to be used when defining a\ntarget. You can use the query macros as such:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'$(query_targets "queryfunction(//:foo)")\n$(query_outputs "queryfunction(//:foo)")\n$(query_targets_and_outputs [SEPARATOR] "queryfunction(//:foo)")\n')),(0,a.mdx)("p",null,"Note, however, that the query macros are supported only for\n",(0,a.mdx)("a",{parentName:"p",href:"../../api/rules/#genrule"},(0,a.mdx)("inlineCode",{parentName:"a"},"genrule"))," and\n",(0,a.mdx)("a",{parentName:"p",href:"../../api/rules/#apk_genrule"},(0,a.mdx)("inlineCode",{parentName:"a"},"apk_genrule")),"."),(0,a.mdx)("h3",{id:"how-do-i-find-the-dependencies-for-a-target"},"How do I find the dependencies for a target?"),(0,a.mdx)("p",null,"Use the ",(0,a.mdx)("inlineCode",{parentName:"p"},"deps()")," operator."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"buck2 cquery \"deps('//foo:bar')\"\nbuck2 cquery \"deps('//foo:bar', 1, first_order_deps())\"\nbuck2 cquery \"deps(set('//foo:bar' '//foo:lib' '//foo/baz:util'))\"\n")),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"deps")," operator finds the dependencies of the specified targets. The first\nargument represents the targets of interest. This can be a single\n",(0,a.mdx)("a",{parentName:"p",href:"../../concepts/build_target"},"build target")," or\n",(0,a.mdx)("a",{parentName:"p",href:"../../concepts/target_pattern"},"build target pattern"),", or a set of these. The\noptional second argument is the ",(0,a.mdx)("em",{parentName:"p"},"depth")," of the search for dependencies from the\nspecified targets. For example, ",(0,a.mdx)("inlineCode",{parentName:"p"},"1"),", as shown in the example above, returns only\nthe direct dependencies. If you do not provide this argument, the output is the\ncomplete set of transitive dependencies. How do I find the reverse-dependencies\nfor a target, that is, the targets that",(0,a.mdx)("strong",{parentName:"p"}," ","*"),"depend on",(0,a.mdx)("strong",{parentName:"p"},"*"," "),"a specified\ntarget? Use the ",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 cquery rdeps()")," (reverse dependencies) operator. The\nfollowing example, returns the targets in the\n",(0,a.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Transitive_closure"},"transitive closure")," of\n",(0,a.mdx)("inlineCode",{parentName:"p"},"//foo:bar")," that depend directly on ",(0,a.mdx)("inlineCode",{parentName:"p"},"//example:baz"),"."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"buck2 cquery \"rdeps('//foo:bar', '//example:baz', 1)\"\n")),(0,a.mdx)("h3",{id:"how-do-i-find-the-buildfile-that-contains-the-target-that-owns-a-source-file"},"How do I find the buildfile that contains the target that owns a source file?"),(0,a.mdx)("p",null,"In order to find the build file associated with a source file, combine the\n",(0,a.mdx)("inlineCode",{parentName:"p"},"owner")," operator with ",(0,a.mdx)("inlineCode",{parentName:"p"},"buildfile"),". For example,"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"buck2 cquery \"buildfile(owner('foo/bar/main.cpp'))\"\n")),(0,a.mdx)("p",null,"first finds the targets that ",(0,a.mdx)("em",{parentName:"p"},"own")," ",(0,a.mdx)("inlineCode",{parentName:"p"},"foo/bar/main.cpp")," and then returns the build\nfiles, such as ",(0,a.mdx)("inlineCode",{parentName:"p"},"foo/bar/BUCK"),", that define those targets."))}l.isMDXComponent=!0}}]);