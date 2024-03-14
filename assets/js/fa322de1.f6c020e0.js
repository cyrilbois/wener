/*! For license information please see fa322de1.f6c020e0.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[3004],{8184:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var i=r(2488),s=r(62780);const l={title:"Vue"},c="Vue",d={id:"web/framework/vue",title:"Vue",description:"\u751f\u547d\u5468\u671f",source:"@site/../notes/web/framework/vue.md",sourceDirName:"web/framework",slug:"/web/framework/vue",permalink:"/notes/web/framework/vue",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/framework/vue.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1628617278,formattedLastUpdatedAt:"Aug 10, 2021",frontMatter:{title:"Vue"},sidebar:"docs",previous:{title:"uniapp",permalink:"/notes/web/framework/uniapp"},next:{title:"wails",permalink:"/notes/web/framework/wails"}},t={},o=[{value:"Server Render",id:"server-render",level:2},{value:"Tips",id:"tips",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"vue",children:"Vue"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u751f\u547d\u5468\u671f"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"http://vuejs.org/images/lifecycle.png",alt:""})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"http://mint-ui.github.io/",children:"http://mint-ui.github.io/"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# \u4e4b\u6240\u4ee5\u4f7f\u7528 yarn \u662f\u56e0\u4e3a yran \u66f4\u5feb\u66f4\u65b9\u4fbf\n# npm i -g yarn # \u5982\u679c\u6ca1\u6709 yarn \u53ef\u5148\u5b89\u88c5 yarn\nyarn global add vue@latest\n# \u521b\u5efa\u4e00\u4e2a\u9879\u76ee\u76ee\u5f55\nmkdir my-project\ncd my-project\n# \u521d\u59cb\u5316 vue \u9879\u76ee\nvue init webpack .\n# \u6ce8\u610f\u5173\u6389\u6240\u6709\u6d4b\u8bd5 \u548c lint\n\n# \u5e38\u7528\u7684\u4f9d\u8d56\nyarn add font-awesome ionicons moment vue-router\nmkdir -p src/{api,pages}\ntouch src/{api,pages}/index.js src/{router,base,conf}.js\n"})}),"\n",(0,i.jsx)(n.h2,{id:"server-render",children:"Server Render"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u670d\u52a1\u7aef\u6e32\u67d3\u6846\u67b6 ",(0,i.jsx)(n.a,{href:"https://github.com/nuxt/nuxt.js",children:"https://github.com/nuxt/nuxt.js"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"tips",children:"Tips"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Vue \u57fa\u672c\u5143\u7d20\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6307\u4ee4"}),"\n",(0,i.jsx)(n.li,{children:"\u5c5e\u6027"}),"\n",(0,i.jsx)(n.li,{children:"\u8ba1\u7b97\u5c5e\u6027"}),"\n",(0,i.jsx)(n.li,{children:"\u8fc7\u6ee4\u5668"}),"\n",(0,i.jsx)(n.li,{children:"\u65b9\u6cd5"}),"\n",(0,i.jsx)(n.li,{children:"\u76d1\u89c6 (watch)"}),"\n",(0,i.jsx)(n.li,{children:"\u7ec4\u4ef6"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6307\u4ee4\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u8bed\u6cd5 ",(0,i.jsx)(n.code,{children:'\u6307\u4ee4:\u53c2\u6570.\u4fee\u9970\u7b26="\u7ed1\u5b9a\u503c"'})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"v-bind"})," \u6570\u636e\u7ed1\u5b9a\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u8bed\u6cd5 ",(0,i.jsx)(n.code,{children:'v-bind:\u5c5e\u6027="\u5c5e\u6027\u5b57\u6bb5"'})]}),"\n",(0,i.jsx)(n.li,{children:"\u5355\u5411"}),"\n",(0,i.jsxs)(n.li,{children:["\u7f29\u5199 ",(0,i.jsx)(n.code,{children:":\u5c5e\u6027"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"v-model"})," \u6a21\u578b\u7ed1\u5b9a\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53cc\u5411\u7ed1\u5b9a"}),"\n",(0,i.jsx)(n.li,{children:"\u4e3b\u8981\u7528\u4e8e\u8868\u5355\u5143\u7d20"}),"\n",(0,i.jsxs)(n.li,{children:["\u4fee\u9970\u7b26\u5305\u62ec\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:".lazy"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:".number"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:".trim"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"v-on"})," \u4e8b\u4ef6\u7ed1\u5b9a\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u8bed\u6cd5 ",(0,i.jsx)(n.code,{children:'v-on:\u4e8b\u4ef6\u7c7b\u578b.\u4fee\u9970\u7b26="\u4ee3\u7801 | \u65b9\u6cd5\u540d | \u65b9\u6cd5\u8c03\u7528"'})]}),"\n",(0,i.jsx)(n.li,{children:"\u65b9\u6cd5\u8c03\u7528\u65f6\u53ef\u4f7f\u7528 $event \u6765\u8bbf\u95ee\u539f event \u5bf9\u8c61"}),"\n",(0,i.jsxs)(n.li,{children:["\u7f29\u5199 ",(0,i.jsx)(n.code,{children:"@\u4e8b\u4ef6\u540d.\u4fee\u9970\u7b26"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u4fee\u9970\u7b26\u5305\u62ec\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:".stop"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:".prevent"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:".capture"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:".self"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5728\u5904\u7406\u6309\u952e\u4e8b\u4ef6\u65f6\u53ef\u4f7f\u7528\u7684\u4fee\u9970\u7b26\u8fd8\u5305\u62ec\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"enter"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"tab"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"delete"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f1a\u540c\u65f6\u6355\u83b7\u5220\u9664\u548c\u5012\u9000\u952e(Backspace)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"esc"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"space"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"up"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"down"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"left"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"right"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6309\u952e\u4e8b\u4ef6\u53ef\u4f7f\u7528\u8bed\u6cd5 ",(0,i.jsx)(n.code,{children:"@\u6309\u952e\u4e8b\u4ef6.\u952e\u503c"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},38088:(e,n,r)=>{var i=r(96651),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var i,l={},o=null,h=null;for(i in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(h=n.ref),n)c.call(n,i)&&!t.hasOwnProperty(i)&&(l[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===l[i]&&(l[i]=n[i]);return{$$typeof:s,type:e,key:o,ref:h,props:l,_owner:d.current}}n.Fragment=l,n.jsx=o,n.jsxs=o},2488:(e,n,r)=>{e.exports=r(38088)},62780:(e,n,r)=>{r.d(n,{I:()=>d,M:()=>c});var i=r(96651);const s={},l=i.createContext(s);function c(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);