/*! For license information please see 39646022.c33b07d3.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6688],{20752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var r=n(2488),s=n(62780);const i={title:"WebAuthn"},a="WebAuthn",o={id:"service/auth/webauthn",title:"WebAuthn",description:"WebAuthn\u4f7f\u7528\u4e00\u5bf9\u516c\u94a5\u548c\u79c1\u94a5\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002\u79c1\u94a5\u5b58\u50a8\u5728\u7528\u6237\u7684\u8bbe\u5907\u4e0a\uff0c\u800c\u516c\u94a5\u5219\u5b58\u50a8\u5728\u670d\u52a1\u5668\u4e0a\u3002\u5f53\u7528\u6237\u5c1d\u8bd5\u767b\u5f55\u65f6\uff0c\u670d\u52a1\u5668\u4f1a\u53d1\u9001\u4e00\u4e2a\u6311\u6218\uff0c\u7528\u6237\u7684\u8bbe\u5907\u4f1a\u4f7f\u7528\u79c1\u94a5\u5bf9\u5176\u8fdb\u884c\u7b7e\u540d\uff0c\u7136\u540e\u670d\u52a1\u5668\u53ef\u4ee5\u4f7f\u7528\u516c\u94a5\u6765\u9a8c\u8bc1\u7b7e\u540d\u3002\u8fd9\u79cd\u65b9\u6cd5\u7684\u4f18\u70b9\u662f\uff0c\u5373\u4f7f\u653b\u51fb\u8005\u80fd\u591f\u62e6\u622a\u901a\u4fe1\uff0c\u4ed6\u4eec\u4e5f\u65e0\u6cd5\u4f7f\u7528\u6355\u83b7\u7684\u4fe1\u606f\u6765\u5192\u5145\u7528\u6237\uff0c\u56e0\u4e3a\u4ed6\u4eec\u6ca1\u6709\u79c1\u94a5\u3002",source:"@site/../notes/service/auth/webauthn.md",sourceDirName:"service/auth",slug:"/service/auth/webauthn",permalink:"/notes/service/auth/webauthn",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/auth/webauthn.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1699268951,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{title:"WebAuthn"},sidebar:"docs",previous:{title:"UMA",permalink:"/notes/service/auth/uma"},next:{title:"Backend as a Service",permalink:"/notes/service/baas/"}},c={},h=[];function l(e){const t={a:"a",blockquote:"blockquote",h1:"h1",li:"li",p:"p",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"webauthn",children:"WebAuthn"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"WebAuthn\u4f7f\u7528\u4e00\u5bf9\u516c\u94a5\u548c\u79c1\u94a5\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002\u79c1\u94a5\u5b58\u50a8\u5728\u7528\u6237\u7684\u8bbe\u5907\u4e0a\uff0c\u800c\u516c\u94a5\u5219\u5b58\u50a8\u5728\u670d\u52a1\u5668\u4e0a\u3002\u5f53\u7528\u6237\u5c1d\u8bd5\u767b\u5f55\u65f6\uff0c\u670d\u52a1\u5668\u4f1a\u53d1\u9001\u4e00\u4e2a\u6311\u6218\uff0c\u7528\u6237\u7684\u8bbe\u5907\u4f1a\u4f7f\u7528\u79c1\u94a5\u5bf9\u5176\u8fdb\u884c\u7b7e\u540d\uff0c\u7136\u540e\u670d\u52a1\u5668\u53ef\u4ee5\u4f7f\u7528\u516c\u94a5\u6765\u9a8c\u8bc1\u7b7e\u540d\u3002\u8fd9\u79cd\u65b9\u6cd5\u7684\u4f18\u70b9\u662f\uff0c\u5373\u4f7f\u653b\u51fb\u8005\u80fd\u591f\u62e6\u622a\u901a\u4fe1\uff0c\u4ed6\u4eec\u4e5f\u65e0\u6cd5\u4f7f\u7528\u6355\u83b7\u7684\u4fe1\u606f\u6765\u5192\u5145\u7528\u6237\uff0c\u56e0\u4e3a\u4ed6\u4eec\u6ca1\u6709\u79c1\u94a5\u3002"}),"\n"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/notes/service/auth/passkeys",children:"Passkeys"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://webauthn.io/",children:"https://webauthn.io/"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/WebAuthn",children:"https://en.wikipedia.org/wiki/WebAuthn"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/herrjemand/awesome-webauthn",children:"https://github.com/herrjemand/awesome-webauthn"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://webauthn.guide/",children:"https://webauthn.guide/"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://news.ycombinator.com/item?id=31836922",children:"HN"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Keycloak\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://keycloak.ch/keycloak-tutorials/tutorial-webauthn/",children:"https://keycloak.ch/keycloak-tutorials/tutorial-webauthn/"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/keycloak/keycloak-documentation/blob/main/server_admin/topics/authentication/webauthn.adoc",children:"https://github.com/keycloak/keycloak-documentation/blob/main/server_admin/topics/authentication/webauthn.adoc"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://passkeys.dev/docs/tools-libraries/libraries/",children:"https://passkeys.dev/docs/tools-libraries/libraries/"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},38088:(e,t,n)=>{var r=n(96651),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,n){var r,i={},h=null,l=null;for(r in void 0!==n&&(h=""+n),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:h,ref:l,props:i,_owner:o.current}}t.Fragment=i,t.jsx=h,t.jsxs=h},2488:(e,t,n)=>{e.exports=n(38088)},62780:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>a});var r=n(96651);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);