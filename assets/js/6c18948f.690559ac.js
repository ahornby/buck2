"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4674],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>u,mdx:()=>b,useMDXComponents:()=>d,withMDXComponents:()=>s});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){return function(n){var t=d(n.components);return a.createElement(e,o({},n,{components:t}))}},d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(t),u=r,m=s["".concat(i,".").concat(u)]||s[u]||f[u]||o;return t?a.createElement(m,c(c({ref:n},l),{},{components:t})):a.createElement(m,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[m]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},32147:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=t(87462),r=(t(67294),t(3905)),o=t(44996);const i={id:"key_concepts",title:"Key Concepts"},c="Key concepts",p={unversionedId:"concepts/key_concepts",id:"concepts/key_concepts",title:"Key Concepts",description:"Buck2 has a number of fundamental concepts:",source:"@site/../docs/concepts/key_concepts.md",sourceDirName:"concepts",slug:"/concepts/key_concepts",permalink:"/docs/concepts/key_concepts",draft:!1,tags:[],version:"current",frontMatter:{id:"key_concepts",title:"Key Concepts"},sidebar:"manualSidebar",previous:{title:"Bootstrapping Buck2",permalink:"/docs/bootstrapping"},next:{title:"Concept Map",permalink:"/docs/concepts/concept_map"}},l={},s=[{value:"Buck2&#39;s dependency graph",id:"buck2s-dependency-graph",level:3},{value:"Multiple Buck2 projects in a single repository",id:"multiple-buck2-projects-in-a-single-repository",level:3},{value:"See also",id:"see-also",level:3}],d={toc:s};function u(e){let{components:n,...t}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"key-concepts"},"Key concepts"),(0,r.mdx)("p",null,"Buck2 has a number of fundamental concepts:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"A ",(0,r.mdx)("a",{parentName:"li",href:"/docs/concepts/build_rule"},(0,r.mdx)("strong",{parentName:"a"},(0,r.mdx)("em",{parentName:"strong"},"build rule")))," describes how to produce an output file\nfrom a set of input files. Most build rules are specific to a particular\nlanguage or platform. For example, you would use the\n",(0,r.mdx)("a",{parentName:"li",href:"../../api/rules/#cxx_binary"},(0,r.mdx)("inlineCode",{parentName:"a"},"cxx_binary"))," rule to create a C++ binary, but\nyou would use the ",(0,r.mdx)("a",{parentName:"li",href:"../../api/rules/#android_binary"},(0,r.mdx)("inlineCode",{parentName:"a"},"android_binary"))," rule to\ncreate an Android APK."),(0,r.mdx)("li",{parentName:"ul"},"A ",(0,r.mdx)("a",{parentName:"li",href:"/docs/concepts/build_target"},(0,r.mdx)("strong",{parentName:"a"},(0,r.mdx)("em",{parentName:"strong"},"build target")))," is a string that uniquely identifies a\nbuild rule. It can be thought of as a URI for the build rule within the Buck2\nproject."),(0,r.mdx)("li",{parentName:"ul"},"A ",(0,r.mdx)("a",{parentName:"li",href:"/docs/concepts/build_rule"},(0,r.mdx)("strong",{parentName:"a"},(0,r.mdx)("em",{parentName:"strong"},"build file")))," defines one or more build rules. In Buck2,\nbuild files are typically named ",(0,r.mdx)("inlineCode",{parentName:"li"},"BUCK"),". A ",(0,r.mdx)("inlineCode",{parentName:"li"},"BUCK")," file is analogous to the\n",(0,r.mdx)("inlineCode",{parentName:"li"},"Makefile")," used by the Make utility. In your project, you will usually have a\nseparate ",(0,r.mdx)("inlineCode",{parentName:"li"},"BUCK")," file for each buildable unit of software\u2014such as a binary or\nlibrary. For large projects, you could have hundreds of ",(0,r.mdx)("inlineCode",{parentName:"li"},"BUCK")," files.")),(0,r.mdx)("p",null,"A Buck2 ",(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("em",{parentName:"strong"},"package"))," comprises of: a Buck2 build file (a ",(0,r.mdx)("inlineCode",{parentName:"p"},"BUCK")," file), all\nfiles\u2014such as source files and headers\u2014in the same directory as the ",(0,r.mdx)("inlineCode",{parentName:"p"},"BUCK")," file\nor in subdirectories, provided those subdirectories do not themselves contain a\n",(0,r.mdx)("inlineCode",{parentName:"p"},"BUCK")," file. To say it another way, a ",(0,r.mdx)("inlineCode",{parentName:"p"},"BUCK")," file defines the root of a package,\nbut Buck2 packages might not include all their subdirectories because Buck2\npackages do not overlap or contain other Buck2 packages. For example, in the\nfollowing diagram, the BUCK file in directory ",(0,r.mdx)("inlineCode",{parentName:"p"},"app-dir-1")," defines that directory\nas the root of a package\u2014which is labeled ",(0,r.mdx)("strong",{parentName:"p"},"Package A")," in the diagram. The\ndirectory ",(0,r.mdx)("inlineCode",{parentName:"p"},"app-dir-2")," is part of Package A because it is a subdirectory of\n",(0,r.mdx)("inlineCode",{parentName:"p"},"app-dir-1"),", but does not itself contain a BUCK file. Now, consider directory\n",(0,r.mdx)("inlineCode",{parentName:"p"},"app-dir-3"),". Because ",(0,r.mdx)("inlineCode",{parentName:"p"},"app-dir-3")," contains a BUCK file it is the root of a new\npackage (",(0,r.mdx)("strong",{parentName:"p"},"Package B"),"). Although ",(0,r.mdx)("inlineCode",{parentName:"p"},"app-dir-3")," is a subdirectory of ",(0,r.mdx)("inlineCode",{parentName:"p"},"app-dir-1"),",\nit is ",(0,r.mdx)("em",{parentName:"p"},"not")," part of Package A. Buck2 has the concept of a ",(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("em",{parentName:"strong"},"cell")),", which\ndefines a directory tree of one or more Buck2 packages. A Buck2 build could\ninvolve multiple cells. Cells often correspond to repositories, but this isn't\nrequired. The root of a Buck2 cell contains a global configuration file called\n",(0,r.mdx)("a",{parentName:"p",href:"/docs/concepts/buckconfig"},(0,r.mdx)("strong",{parentName:"a"},(0,r.mdx)("inlineCode",{parentName:"strong"},".buckconfig"))),". Note that although the cell root should\ncontain a ",(0,r.mdx)("inlineCode",{parentName:"p"},".buckconfig"),", the presence of a ",(0,r.mdx)("inlineCode",{parentName:"p"},".buckconfig")," file doesn't in itself\ndefine a cell. Rather, ",(0,r.mdx)("em",{parentName:"p"},"the cells involved in a build are defined at the time\nBuck2 is invoked"),"; they are specified in the ",(0,r.mdx)("inlineCode",{parentName:"p"},".buckconfig")," for the Buck2\n",(0,r.mdx)("em",{parentName:"p"},"project")," (see below). A Buck2 ",(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("em",{parentName:"strong"},"project"))," is defined by the ",(0,r.mdx)("inlineCode",{parentName:"p"},".buckconfig"),"\nwhere Buck2 is invoked, or if that directory doesn't contain a ",(0,r.mdx)("inlineCode",{parentName:"p"},".buckconfig"),",\nthe project is defined by the ",(0,r.mdx)("inlineCode",{parentName:"p"},".buckconfig")," in the nearest ancestor directory.\nThe ",(0,r.mdx)("inlineCode",{parentName:"p"},".buckconfig")," for the project specifies the cells that constitute the Buck2\nproject. Specifically, these cells are specified in the\n",(0,r.mdx)("a",{parentName:"p",href:"/docs/concepts/buckconfig#cells"},"cells")," section of the ",(0,r.mdx)("inlineCode",{parentName:"p"},".buckconfig"),". Note that the\ndirectory tree rooted at this ",(0,r.mdx)("inlineCode",{parentName:"p"},".buckconfig")," is automatically considered a cell\nby Buck2; in other words, the project's ",(0,r.mdx)("inlineCode",{parentName:"p"},".buckconfig")," doesn't need to specify\nthe project cell explicitly\u2014although it is a good practice to do so."),(0,r.mdx)("img",{src:(0,o.default)("/img/packages-1.png"),alt:"justifyContent"}),(0,r.mdx)("h3",{id:"buck2s-dependency-graph"},"Buck2's dependency graph"),(0,r.mdx)("p",null,"Every build rule can have zero or more dependencies. You can specify these\ndependencies using, for example, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"deps")," argument to the build rule. For more\ninformation about specifying dependencies, consult the reference page for the\nbuild rule you are using. These dependencies form a directed graph, called the\n",(0,r.mdx)("em",{parentName:"p"},"target graph"),'. Buck2 requires the graph to be acyclic. When building the output\nof a build rule, all of the rule\'s transitive dependencies are built first. This\nmeans that the graph is built in a "bottom-up" fashion. A build rule knows only\nwhich rules it depends on, not which rules depend on it. This makes the graph\neasier to reason about and enables Buck2 to identify independent subgraphs that\ncan be built in parallel. It also enables Buck2 to determine the minimal set of\nbuild targets that need to be rebuilt.'),(0,r.mdx)("h3",{id:"multiple-buck2-projects-in-a-single-repository"},"Multiple Buck2 projects in a single repository"),(0,r.mdx)("p",null,"Buck2 is designed to build multiple deliverables from a single repository\u2014that\nis, a ",(0,r.mdx)("em",{parentName:"p"},"monorepo"),"\u2014rather than from multiple repositories. Support for the\nmonorepo design motivated Buck2's support for cells and projects. It is\nFacebook's experience that maintaining all dependencies in the same repository\nmakes it easier to ensure that all developers have the correct version of the\ncode and simplifies the process of making atomic commits."),(0,r.mdx)("h3",{id:"see-also"},"See also"),(0,r.mdx)("p",null,"Take a look at the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/concepts/concept_map"},"Concept Map")," for a visualization of how\nBuck2 concepts interact with each other. Also see the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/concepts/glossary"},"Glossary"),"."))}u.isMDXComponent=!0}}]);