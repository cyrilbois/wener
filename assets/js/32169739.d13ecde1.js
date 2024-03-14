/*! For license information please see 32169739.d13ecde1.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68052],{99860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var s=n(2488),r=n(62780);const c={title:"mCaptcha"},a="mCaptcha",o={id:"service/selfhost/mcaptcha",title:"mCaptcha",description:"- mCaptcha/mCaptcha",source:"@site/../notes/service/selfhost/mcaptcha.md",sourceDirName:"service/selfhost",slug:"/service/selfhost/mcaptcha",permalink:"/notes/service/selfhost/mcaptcha",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/selfhost/mcaptcha.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1690946986,formattedLastUpdatedAt:"Aug 2, 2023",frontMatter:{title:"mCaptcha"},sidebar:"docs",previous:{title:"SelfHost",permalink:"/notes/service/selfhost/"},next:{title:"PhotoPrism",permalink:"/notes/service/selfhost/photoprism"}},i={},l=[{value:"Client",id:"client",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"mcaptcha",children:"mCaptcha"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/mCaptcha/mCaptcha",children:"mCaptcha/mCaptcha"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"AGPL-3.0, Rust"}),"\n",(0,s.jsx)(t.li,{children:"\u4f9d\u8d56 postgres, redis"}),"\n",(0,s.jsx)(t.li,{children:"\u652f\u6301\u591a\u7ad9\u70b9"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# https://github.com/mCaptcha/mCaptcha/blob/master/config/default.toml\n# -e MCAPTCHA_SERVER_COOKIE_SECRET=\ndocker run --rm -it \\\n  -p 7000:7000 \\\n  -e DATABASE_URL=postgres://mcaptcha:password@postgres:5432/mcaptcha \\\n  -e MCAPTCHA_REDIS_URL=redis://redis/ \\\n  -e RUST_LOG=debug \\\n  -e MCAPTCHA_DEBUG=true \\\n  -e PORT=7000 \\\n  --name mcaptcha mcaptcha/mcaptcha\n"})}),"\n",(0,s.jsx)(t.h2,{id:"client",children:"Client"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"@mcaptcha/core-glue"}),"\n",(0,s.jsxs)(t.li,{children:["React\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/mCaptcha/glue/blob/master/packages/react/src/index.tsx",children:"https://github.com/mCaptcha/glue/blob/master/packages/react/src/index.tsx"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"\u901a\u8fc7 iframe \u5d4c\u5165"}),"\n",(0,s.jsx)(t.li,{children:"\u6210\u529f\u540e\u62ff\u5230\u4e00\u4e2a token\uff0c\u901a\u8fc7 form \u63d0\u4ea4\u7ed9\u670d\u52a1\u7aef"}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},38088:(e,t,n)=>{var s=n(96651),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,c={},l=null,h=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)a.call(t,s)&&!i.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===c[s]&&(c[s]=t[s]);return{$$typeof:r,type:e,key:l,ref:h,props:c,_owner:o.current}}t.Fragment=c,t.jsx=l,t.jsxs=l},2488:(e,t,n)=>{e.exports=n(38088)},62780:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>a});var s=n(96651);const r={},c=s.createContext(r);function a(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);