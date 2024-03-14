/*! For license information please see cae6d94a.98635337.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[72891],{49444:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var d=s(2488),l=s(62780);const t={title:"deno"},i="deno",r={id:"web/deno/README",title:"deno",description:"- denoland/deno",source:"@site/../notes/web/deno/README.md",sourceDirName:"web/deno",slug:"/web/deno/",permalink:"/notes/web/deno/",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/deno/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693122196,formattedLastUpdatedAt:"Aug 27, 2023",frontMatter:{title:"deno"},sidebar:"docs",previous:{title:"CORS",permalink:"/notes/web/cors"},next:{title:"Deno Awesome",permalink:"/notes/web/deno/awesome"}},o={},c=[{value:"deno.json",id:"denojson",level:2},{value:"Node vs Deno",id:"node-vs-deno",level:2},{value:"deno deploy",id:"deno-deploy",level:2}];function h(n){const e={a:"a",admonition:"admonition",code:"code",del:"del",h1:"h1",h2:"h2",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.M)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.h1,{id:"deno",children:"deno"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.a,{href:"https://github.com/denoland/deno",children:"denoland/deno"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"MIT, Rust"}),"\n",(0,d.jsx)(e.li,{children:"\u57fa\u4e8e V8"}),"\n",(0,d.jsx)(e.li,{children:"\u5185\u7f6e \u5305\u7ba1\u7406\u3001tsc\u3001fmt\u3001test\u3001bundle\u3001lint\u3001lsp \u7b49\u529f\u80fd"}),"\n",(0,d.jsx)(e.li,{children:"\u901a\u8fc7 url \u5f15\u7528\u5916\u90e8\u6a21\u5757 - \u8fd0\u884c\u65f6\u4e0b\u8f7d"}),"\n",(0,d.jsx)(e.li,{children:"\u4e25\u683c\u7684\u6743\u9650\u7ba1\u7406 - \u6c99\u76d2\u529f\u80fd\u5f3a"}),"\n",(0,d.jsxs)(e.li,{children:["\u529f\u80fd\u7406\u5ff5\u7c7b\u4f3c\u4e8e golang\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"stdlib \u53c2\u7167 go \u5b9e\u73b0"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.li,{children:"Deno \u5168\u5c40\u547d\u540d\u7a7a\u95f4"}),"\n",(0,d.jsx)(e.li,{children:"~/.deno/bin - deno install \u4f4d\u7f6e"}),"\n"]}),"\n",(0,d.jsx)(e.admonition,{type:"info",children:(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["WebStorm deno fmt ",(0,d.jsx)(e.a,{href:"https://youtrack.jetbrains.com/issue/WEB-50743/Support-deno-fmt-as-formatter",children:"WEB-50743"})]}),"\n"]})}),"\n",(0,d.jsx)(e.admonition,{type:"caution",children:(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["deno \u975e\u5e38\u96be\u7ba1\u7406\u4f9d\u8d56\u7248\u672c - \u56e0\u4e3a\u7248\u672c\u53f7 pin \u5728 import \u8def\u5f84\u4e0a\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u4e0d\u65b9\u4fbf\u4fee\u6539\u548c\u5f15\u7528"}),"\n",(0,d.jsx)(e.li,{children:"\u5f88\u53ef\u80fd\u5f15\u5165\u591a\u4e2a\u7248\u672c"}),"\n",(0,d.jsx)(e.li,{children:"\u4e0d pin \u7248\u672c\u4f1a\u4f7f\u7528 latest\uff0c\u5bfc\u81f4\u4f9d\u8d56\u5347\u7ea7\u540e\u811a\u672c\u5f02\u5e38 - \u9ed8\u8ba4\u6ca1\u6709 lock"}),"\n",(0,d.jsx)(e.li,{children:"import map \u4e0d\u65b9\u4fbf\u4f9d\u8d56\u6a21\u5757\u5f15\u5165"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["deno \u4e0d\u652f\u6301 AlpineLinux, CentOS 7\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsxs)(e.del,{children:["Release musl builds ",(0,d.jsx)(e.a,{href:"https://github.com/denoland/deno/issues/3711",children:"#3711"})]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"alpine 3.19+ \u652f\u6301"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["Release centos7 compatible binaries ",(0,d.jsx)(e.a,{href:"https://github.com/denoland/deno/issues/1658",children:"#1658"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["deno \u4e0d\u652f\u6301 gRPC\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["grpc-node \u4e5f\u65e0\u6cd5\u517c\u5bb9 Deno - \u56e0\u4e3a Deno HTTP2 \u7f3a\u5c11 trailing headers ",(0,d.jsx)(e.a,{href:"https://github.com/grpc/grpc-node/issues/1791#issuecomment-911984475",children:"grpc-node#1791"})]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-ts",children:"// HTTP \u670d\u52a1\u5668\nconst listener = Deno.listen({ port: 8000 });\nconsole.log('http://localhost:8000/');\n\nfor await (const conn of listener) {\n  serve(conn);\n}\n\nasync function serve(conn: Deno.Conn) {\n  for await (const { respondWith } of Deno.serveHttp(conn)) {\n    respondWith(new Response('Hello world'));\n  }\n}\n"})}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-bash",children:"# bundle \u4e3a\u5355\u4e2a\u6587\u4ef6 - \u8f93\u51fa\u4e3a js\ndeno bundle scripts/main.ts cli.js\ndeno run cli.js\n\n# compile \u4e3a\u53ef\u6267\u884c\u6587\u4ef6 - \u6253\u5305 deno - \u7ea6 70MB\n# -A \u7ed9\u6240\u6709\u6743\u9650\n# --target \u751f\u6210\u5176\u4ed6\u5e73\u53f0 - \u7b2c\u4e00\u6b21\u6267\u884c\u4f1a\u4e0b\u8f7d deno \u5230 DENO_DIR\n# x86_64-unknown-linux-gnu, x86_64-pc-windows-msvc, x86_64-apple-darwin, aarch64-apple-darwin\ndeno compile -o cli --allow-write --allow-read scripts/main.ts\n./cli\n"})}),"\n",(0,d.jsx)(e.h2,{id:"denojson",children:"deno.json"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"deno.jsonc"}),"\n",(0,d.jsx)(e.li,{children:"deno.json"}),"\n",(0,d.jsx)(e.li,{children:(0,d.jsx)(e.a,{href:"https://deno.land/manual/getting_started/configuration_file.md",children:"https://deno.land/manual/getting_started/configuration_file.md"})}),"\n",(0,d.jsx)(e.li,{children:(0,d.jsx)(e.a,{href:"https://deno.land/x/deno/cli/schemas/config-file.v1.json",children:"https://deno.land/x/deno/cli/schemas/config-file.v1.json"})}),"\n"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-bash",children:"# \u751f\u6210 lock.json\ndeno cache --lock=lock.json --lock-write --unstable main.ts\n"})}),"\n",(0,d.jsx)(e.h2,{id:"node-vs-deno",children:"Node vs Deno"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Node"}),(0,d.jsx)(e.th,{children:"Deno"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"npm i -g"}),(0,d.jsx)(e.td,{children:"deno install"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"npm i"}),(0,d.jsx)(e.td,{children:"not needed"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"node"}),(0,d.jsx)(e.td,{children:"deno run"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"eslint"}),(0,d.jsx)(e.td,{children:"deno lint"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"prettier"}),(0,d.jsx)(e.td,{children:"deno fmt"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"rollup/webpack/..."}),(0,d.jsx)(e.td,{children:"deno bundle"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"package.json"}),(0,d.jsx)(e.td,{children:"Deno.json, import_map.json"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"tsc"}),(0,d.jsx)(e.td,{children:"not needed - built-in"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"documentation"}),(0,d.jsx)(e.td,{children:"deno doc"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"jest/ava/tap/..."}),(0,d.jsx)(e.td,{children:"deno test"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"benchmarks"}),(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"https://deno.land/std/testing/bench.ts",children:"https://deno.land/std/testing/bench.ts"})})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"nodemon"}),(0,d.jsx)(e.td,{children:"deno run/lint/test --watch"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"nexe/pkg"}),(0,d.jsx)(e.td,{children:"deno compile"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"npm explain"}),(0,d.jsx)(e.td,{children:"deno info"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"nvm"}),(0,d.jsx)(e.td,{children:"deno upgrade"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"tsserver"}),(0,d.jsx)(e.td,{children:"deno lsp"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"c8/istanbul"}),(0,d.jsx)(e.td,{children:"deno coverage"})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"deno-deploy",children:"deno deploy"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"deno \u5b98\u65b9\u63d0\u4f9b\u7684 serverless \u670d\u52a1"}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.a,{href:"https://deno.com/deploy/docs/pricing-and-limits",children:"\u5b9a\u4ef7 & \u9650\u5236"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"100k req/day, 1000 req/min"}),"\n",(0,d.jsx)(e.li,{children:"512 MB, \u6bcf\u6b21\u8bf7\u6c42 50 ms"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:(0,d.jsx)(e.a,{href:"https://deno.com/deploy",children:"https://deno.com/deploy"})}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.a,{href:"https://crux.land",children:"https://crux.land"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u514d\u8d39\u6258\u7ba1 \u2264 20kB \u7684 deno \u6a21\u5757"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,l.M)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(h,{...n})}):h(n)}},38088:(n,e,s)=>{var d=s(96651),l=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(n,e,s){var d,t={},c=null,h=null;for(d in void 0!==s&&(c=""+s),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(h=e.ref),e)i.call(e,d)&&!o.hasOwnProperty(d)&&(t[d]=e[d]);if(n&&n.defaultProps)for(d in e=n.defaultProps)void 0===t[d]&&(t[d]=e[d]);return{$$typeof:l,type:n,key:c,ref:h,props:t,_owner:r.current}}e.Fragment=t,e.jsx=c,e.jsxs=c},2488:(n,e,s)=>{n.exports=s(38088)},62780:(n,e,s)=>{s.d(e,{I:()=>r,M:()=>i});var d=s(96651);const l={},t=d.createContext(l);function i(n){const e=d.useContext(t);return d.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),d.createElement(t.Provider,{value:e},n.children)}}}]);