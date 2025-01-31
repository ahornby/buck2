"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3445],{65317:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>i});var s=t(74848),a=t(28453);const o={id:"expand-external-cell",title:"expand-external-cell"},l=void 0,r={id:"users/commands/expand-external-cell",title:"expand-external-cell",description:"These are the flags/commands under buck2 expand-external-cell and their --help output:",source:"@site/../docs/users/commands/expand-external-cell.generated.md",sourceDirName:"users/commands",slug:"/users/commands/expand-external-cell",permalink:"/docs/users/commands/expand-external-cell",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"expand-external-cell",title:"expand-external-cell"},sidebar:"main",previous:{title:"docs",permalink:"/docs/users/commands/docs"},next:{title:"help-env",permalink:"/docs/users/commands/help-env"}},c={},i=[];function d(e){const n={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["These are the flags/commands under ",(0,s.jsx)(n.code,{children:"buck2 expand-external-cell"})," and their ",(0,s.jsx)(n.code,{children:"--help"})," output:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Expand the contents of an external cell into the repo.\n\nThe contents are placed at the path you specified for this cell in your buckconfig.\n\nIf you additionally remove the entry from the `external_cells` section of your buckconfig, you can\nedit the files directly in the repo and see those edits reflected in your build.\n\nNote that this creates a point-in-time snapshot. The files in the repo will not be updated if you eg\nchange the git commit of the cell in the future.\n\nUsage: buck2-release expand-external-cell [OPTIONS] [CELLS]...\n\nArguments:\n  [CELLS]...\n          \n\nOptions:\n      --all-cells\n          Expand all cells that Buck2 knows about\n\n  -h, --help\n          Print help (see a summary with '-h')\n\nUniversal Options:\n  -v, --verbose <VERBOSITY>\n          How verbose buck should be while logging.\n          \n          Values: 0 = Quiet, errors only; 1 = Show status. Default; 2 = more info about errors; 3 =\n          more info about everything; 4 = more info about everything + stderr;\n          \n          It can be combined with specific log items (stderr, full_failed_command, commands,\n          actions, status, stats, success) to fine-tune the verbosity of the log. Example usage\n          \"-v=1,stderr\"\n          \n          [default: 1]\n\n      --oncall <ONCALL>\n          The oncall executing this command\n\n      --client-metadata <CLIENT_METADATA>\n          Metadata key-value pairs to inject into Buck2's logging. Client metadata must be of the\n          form `key=value`, where `key` is a snake_case identifier, and will be sent to backend\n          datasets\n\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var s=t(96540);const a={},o=s.createContext(a);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);