/*! For license information please see 1816d8b7.564dffff.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[35852],{61360:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var n=r(2488),i=r(62780);const s={title:"\u6307\u6807"},o="Metrics",c={id:"service/observability/metrics/README",title:"\u6307\u6807",description:"- Micrometer",source:"@site/../notes/service/observability/metrics/README.md",sourceDirName:"service/observability/metrics",slug:"/service/observability/metrics/",permalink:"/notes/service/observability/metrics/",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/metrics/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1641638108,formattedLastUpdatedAt:"Jan 8, 2022",frontMatter:{title:"\u6307\u6807"},sidebar:"docs",previous:{title:"Syslog",permalink:"/notes/service/observability/logging/syslog"},next:{title:"Cortex",permalink:"/notes/service/observability/metrics/cortex"}},l={},a=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ul:"ul",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"metrics",children:"Metrics"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://micrometer.io/",children:"Micrometer"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://micrometer.io/docs/concepts",children:"\u6982\u5ff5"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u7eac\u5ea6\u65b9\u5f0f: \u7eac\u5ea6\u3001\u7ea7\u8054"}),"\n",(0,n.jsx)(t.li,{children:"\u9891\u7387\u805a\u5408: \u5ba2\u6237\u7aef\u805a\u5408\u3001\u670d\u52a1\u7aef\u805a\u5408"}),"\n",(0,n.jsx)(t.li,{children:"\u4e0a\u62a5\u65b9\u5f0f: \u63a8\u3001\u62c9"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Spring Boot ",(0,n.jsx)(t.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-metrics.html",children:"Production-ready Metrics"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u57fa\u4e8e Micrometer"}),"\n",(0,n.jsxs)(t.li,{children:["\u5bf9 Prometheus \u66b4\u9732 ",(0,n.jsx)(t.code,{children:"/actuator/prometheus"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u6307\u6807\u672c\u8eab\u662f\u591a\u7ef4\u6570\u636e"}),"\n"]})})]})}function u(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},38088:(e,t,r)=>{var n=r(96651),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,s={},a=null,d=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!l.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:i,type:e,key:a,ref:d,props:s,_owner:c.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},2488:(e,t,r)=>{e.exports=r(38088)},62780:(e,t,r)=>{r.d(t,{I:()=>c,M:()=>o});var n=r(96651);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);