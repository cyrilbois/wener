/*! For license information please see f01135fa.97cc7fd4.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[95540],{68020:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var r=t(2488),s=t(62780);const d={title:"NextDNS"},o="NextDNS",c={id:"service/network/nextdns",title:"NextDNS",description:"- DoH \u4ee3\u7406\u5ba2\u6237\u7aef nextdns/nextdns",source:"@site/../notes/service/network/nextdns.md",sourceDirName:"service/network",slug:"/service/network/nextdns",permalink:"/notes/service/network/nextdns",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/nextdns.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1620724087,formattedLastUpdatedAt:"May 11, 2021",frontMatter:{title:"NextDNS"},sidebar:"docs",previous:{title:"Network FAQ",permalink:"/notes/service/network/faq"},next:{title:"nps",permalink:"/notes/service/network/nps"}},i={},l=[];function a(e){const n={a:"a",br:"br",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"nextdns",children:"NextDNS"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["DoH \u4ee3\u7406\u5ba2\u6237\u7aef ",(0,r.jsx)(n.a,{href:"https://github.com/nextdns/nextdns",children:"nextdns/nextdns"})]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"conf"}),(0,r.jsx)(n.th,{children:"value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IPv4"}),(0,r.jsxs)(n.td,{children:["45.90.28.53",(0,r.jsx)(n.br,{}),"45.90.30.53"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"DoT/QUIC"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<ID>.dns.nextdns.io"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"DoH"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"https://dns.nextdns.io/<ID>"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IPv6"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"2a07:a8c0::<ID>:<ID>"}),(0,r.jsx)(n.br,{}),(0,r.jsx)(n.code,{children:"2a07:a8c1::<ID>:<ID>"})]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"dnsmasq"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-conf",children:"no-resolv\nbogus-priv\nstrict-order\nserver=2a07:a8c1::\nserver=45.90.30.0\nserver=2a07:a8c0::\nserver=45.90.28.0\nadd-cpe-id=<ID>\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},38088:(e,n,t)=>{var r=t(96651),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,d={},l=null,a=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,r)&&!i.hasOwnProperty(r)&&(d[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===d[r]&&(d[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:a,props:d,_owner:c.current}}n.Fragment=d,n.jsx=l,n.jsxs=l},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>o});var r=t(96651);const s={},d=r.createContext(s);function o(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);