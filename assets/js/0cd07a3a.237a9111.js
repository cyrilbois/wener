/*! For license information please see 0cd07a3a.237a9111.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[89284],{12568:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(2488),o=r(62780);const s={slug:"sni-proxy",title:"\u57fa\u4e8e SNI \u5b9e\u73b0\u65e0\u611f\u5168\u5c40\u4ee3\u7406",tags:["\u4ee3\u7406","\u8fd0\u7ef4"]},a="\u57fa\u4e8e SNI \u5b9e\u73b0\u65e0\u611f\u5168\u5c40\u4ee3\u7406",i={permalink:"/story/sni-proxy",editUrl:"https://github.com/wenerme/wener/edit/master/story/../story/2023/2023-06-21-sni-proxy.md",source:"@site/../story/2023/2023-06-21-sni-proxy.md",title:"\u57fa\u4e8e SNI \u5b9e\u73b0\u65e0\u611f\u5168\u5c40\u4ee3\u7406",description:"\u57fa\u672c\u7ed3\u6784",date:"2023-06-21T00:00:00.000Z",formattedDate:"June 21, 2023",tags:[{label:"\u4ee3\u7406",permalink:"/story/tags/\u4ee3\u7406"},{label:"\u8fd0\u7ef4",permalink:"/story/tags/\u8fd0\u7ef4"}],readingTime:3.835,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"sni-proxy",title:"\u57fa\u4e8e SNI \u5b9e\u73b0\u65e0\u611f\u5168\u5c40\u4ee3\u7406",tags:["\u4ee3\u7406","\u8fd0\u7ef4"]},unlisted:!1,prevItem:{title:"\u4e3a\u4ec0\u4e48\u9009\u62e9 Alpine Linux?",permalink:"/story/why-alpine"},nextItem:{title:"\u6062\u590d\u7fa4\u6656\u6570\u636e\u76d8",permalink:"/story/recover-synology"}},l={authorsImageUrls:[]},c=[];function p(e){const t={mermaid:"mermaid",p:"p",strong:"strong",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"\u57fa\u672c\u7ed3\u6784"})}),"\n",(0,n.jsx)(t.mermaid,{value:"flowchart TD\n    Router[\u8def\u7531] --\x3e |DNS| Lan[\u4ee3\u7406\u8282\u70b9<br/>dnsmasq]\n    Lan --\x3e |172.32.1.1| SNI[SNI \u4ee3\u7406<br/>gost] --\x3e |\u4e0a\u6e38\u4ee3\u7406| Proxy[clash/socket/http]"})]})}function u(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},38088:(e,t,r)=>{var n=r(96651),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,s={},c=null,p=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)a.call(t,n)&&!l.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:p,props:s,_owner:i.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},2488:(e,t,r)=>{e.exports=r(38088)},62780:(e,t,r)=>{r.d(t,{I:()=>i,M:()=>a});var n=r(96651);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);