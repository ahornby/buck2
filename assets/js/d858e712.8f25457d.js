"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9321],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>b,useMDXComponents:()=>f,withMDXComponents:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){return function(t){var r=f(t.components);return n.createElement(e,l({},t,{components:r}))}},f=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=f(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=f(r),u=o,s=d["".concat(a,".").concat(u)]||d[u]||m[u]||l;return r?n.createElement(s,i(i({ref:t},c),{},{components:r})):n.createElement(s,i({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},12031:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const l={id:"file_node"},a="file_node type",i={unversionedId:"api/bxl/file_node",id:"api/bxl/file_node",title:"file_node type",description:"Wrapper around the cell relative path to the file or directory.",source:"@site/../docs/api/bxl/file_node.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/file_node",permalink:"/docs/api/bxl/file_node",draft:!1,tags:[],version:"current",frontMatter:{id:"file_node"},sidebar:"manualSidebar",previous:{title:"ensured_artifact_group type",permalink:"/docs/api/bxl/ensured_artifact_group"},next:{title:"file_set type",permalink:"/docs/api/bxl/file_set"}},p={},c=[{value:"file_node.cell",id:"file_nodecell",level:2},{value:"file_node.path",id:"file_nodepath",level:2}],d={toc:c};function f(e){let{components:t,...r}=e;return(0,o.mdx)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"file_node-type"},(0,o.mdx)("inlineCode",{parentName:"h1"},"file_node")," type"),(0,o.mdx)("p",null,"Wrapper around the cell relative path to the file or directory."),(0,o.mdx)("h2",{id:"file_nodecell"},"file","_","node.cell"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"file_node.cell: str\n")),(0,o.mdx)("p",null,"The cell name for the file_node."),(0,o.mdx)("hr",null),(0,o.mdx)("h2",{id:"file_nodepath"},"file","_","node.path"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"file_node.path: str\n")),(0,o.mdx)("p",null,"The cell relative path as a string."))}f.isMDXComponent=!0}}]);