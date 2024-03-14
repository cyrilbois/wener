/*! For license information please see f8779364.bd7dc9e5.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[2692],{17708:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(2488),o=t(62780);const s={title:"fx"},i="fx",l={id:"languages/go/lib/fx",title:"fx",description:"- uber-go/fx",source:"@site/../notes/languages/go/lib/fx.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/fx",permalink:"/notes/languages/go/lib/fx",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/lib/fx.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1664421654,formattedLastUpdatedAt:"Sep 29, 2022",frontMatter:{title:"fx"},sidebar:"docs",previous:{title:"entgo",permalink:"/notes/languages/go/lib/ent"},next:{title:"fyne",permalink:"/notes/languages/go/lib/fyne"}},a={},c=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"fx",children:"fx"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/uber-go/fx",children:"uber-go/fx"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u57fa\u4e8e\u53cd\u5c04\u7684\u52a8\u6001 IoC \u5bb9\u5668"}),"\n",(0,r.jsxs)(n.li,{children:["\u5185\u90e8\u4e3a ",(0,r.jsx)(n.a,{href:"https://github.com/uber-go/dig",children:"uber-go/dig"})," - DI"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["fx.Supply \u4e0d\u80fd\u76f4\u63a5\u63d0\u4f9b interface\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Go \u7c7b\u578b\u68c0\u6d4b\u4e0d\u5230, \u4f7f\u7528 constructor \u8fd4\u56de"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"fx.In \u548c fx.Out \u8981\u6c42\u5b57\u6bb5 exported"}),"\n",(0,r.jsx)(n.li,{children:"\u4e0d\u652f\u6301 lazy - \u9762\u5411\u542f\u52a8\u65f6\u521d\u59cb\u5316\u8bbe\u8ba1\uff0c\u800c\u975e\u8bf7\u6c42\u65f6\u914d\u7f6e"}),"\n"]})}),"\n",(0,r.jsxs)(n.admonition,{title:"\u4f7f\u7528 IoC \u53ef\u80fd\u5bfc\u81f4\u7ef4\u62a4\u6027\u53d8\u5dee",type:"caution",children:[(0,r.jsx)(n.p,{children:"\u4f7f\u7528 fx \u4f5c\u4e3a container \u867d\u7136\u5f53\u65f6\u4f7f\u7528\u65f6\u6784\u5efa\u8d77\u6765\u5bb9\u6613\uff0c\u4f46\u662f\u4e00\u6bb5\u65f6\u95f4\u540e\u518d\u7406\u89e3\u903b\u8f91\u9700\u8981\u4e00\u5b9a\u65f6\u95f4\u3002"}),(0,r.jsx)(n.p,{children:"\u66ff\u4ee3\u9009\u62e9:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Service Context \u5bf9\u8c61 - \u5305\u542b\u6240\u6709\u7684\u4f9d\u8d56\u4fe1\u606f\uff0c\u900f\u660e"}),"\n",(0,r.jsxs)(n.li,{children:["\u9009\u62e9 ",(0,r.jsx)(n.a,{href:"/notes/languages/go/lib/wire",children:"wire"})," - \u7f16\u8bd1\u65f6\u751f\u6210"]}),"\n"]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'type HandlerParams struct {\n  fx.In // consume - \u591a\u5165\u53c2 - \u589e\u5f3a\u53ef\u8bfb\u6027\n\n  Users    *UserGateway\n  Comments *CommentGateway\n  Posts    *PostGateway\n  Votes    *VoteGateway\n  AuthZ    *AuthZGateway\n\n  Cache *redis.Client `optional:"true"` // \u53ef\u9009\u53c2\u6570\n\n  WriteToConn  *sql.DB `name:"rw"`      // \u547d\u540d\n  ReadFromConn *sql.DB `name:"ro" optional:"true"`\n\n  Handlers []Handler `group:"server"`   // \u591a\u5b9e\u4f8b - \u4e0d\u4fdd\u8bc1\u987a\u5e8f\n}\n\ntype ConnectionResult struct {\n  fx.Out // provide\n\n  ReadWrite *sql.DB `name:"rw"`\n  ReadOnly  *sql.DB `name:"ro"`\n\n  Handler Handler `group:"server"`\n\n  Handler []int `group:"server"`         // Consume as [][]int\n  Handler []int `group:"server,flatten"` // Consume as []int\n}\n\nfunc NewConnection(p HandlerParams) ConnectionResult {\n  // ...\n}\n\n// \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 Annotated \u914d\u7f6e\u540d\u5b57\u548c\u5206\u7ec4\nfx.Provide(fx.Annotated{\n  Name: "ro",\n  Group: "server",\n  Target: NewReadOnlyConnection,\n})\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},38088:(e,n,t)=>{var r=t(96651),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,s={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,r)&&!a.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:c,ref:d,props:s,_owner:l.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>i});var r=t(96651);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);