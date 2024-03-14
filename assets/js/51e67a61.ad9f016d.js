/*! For license information please see 51e67a61.ad9f016d.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[84320],{69076:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=s(2488),r=s(62780);const i={title:"Asterisk Debian"},a="Asterisk Debian",o={id:"voip/asterisk/asterisk-debian",title:"Asterisk Debian",description:"- Why ?",source:"@site/../notes/voip/asterisk/asterisk-debian.md",sourceDirName:"voip/asterisk",slug:"/voip/asterisk/debian",permalink:"/notes/voip/asterisk/debian",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/voip/asterisk/asterisk-debian.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1622434864,formattedLastUpdatedAt:"May 31, 2021",frontMatter:{title:"Asterisk Debian"},sidebar:"docs",previous:{title:"Asterisk \u914d\u7f6e",permalink:"/notes/voip/asterisk/conf"},next:{title:"Asterisk \u6743\u5a01\u6307\u5357,\u7b2c\u56db\u7248",permalink:"/notes/voip/asterisk/the-definitive-guide-4th"}},l={},c=[{value:"\u6e90\u7801\u5b89\u88c5",id:"\u6e90\u7801\u5b89\u88c5",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"asterisk-debian",children:"Asterisk Debian"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Why ?\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Asterisk \u5bf9 AlpineLinux musl \u517c\u5bb9\u4e0d\u597d - \u5076\u5c14\u4f1a\u51fa\u73b0 segfault"}),"\n",(0,n.jsxs)(t.li,{children:["debian glibc, \u5305\u6301\u7eed\u7ef4\u62a4\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u7f3a\u70b9 - \u4e0d\u662f\u6700\u65b0 LTS, debian 10 \u548c 11 \u90fd\u662f asterisk 16"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["debian asterisk ",(0,n.jsx)(t.a,{href:"https://tracker.debian.org/pkg/asterisk",children:"tracker"})]}),"\n",(0,n.jsxs)(t.li,{children:["packages ",(0,n.jsx)(t.a,{href:"https://packages.debian.org/search?keywords=asterisk",children:"asterisk"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"\u6e90\u7801\u5b89\u88c5",children:"\u6e90\u7801\u5b89\u88c5"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"apt update && apt upgrade\napt install gcc g++ make patch libedit-dev uuid-dev libxml2-dev libsqlite3-dev libssl-dev\ncd /usr/src/ && wget https://downloads.asterisk.org/pub/telephony/asterisk/asterisk-18-current.tar.gz\ntar -xzf asterisk-18.*\ncd asterisk-18.*\n\n# contrib \u53ef\u9009\n# \u62c9\u53d6 res_mp3 \u6e90\u7801\n# contrib/scripts/get_mp3_source.sh\n# contrib/scripts/install_prereq install\n\n./configure --with-jansson-bundled\nmake menuselect\n\nmake && make all && make install\n# \u53ef\u9009\nmake samples\nmake progdocs\n\n# init \u811a\u672c\nmake config\n\nsystemctl start asterisk\nsystemctl enable asterisk\n\nasterisk -rvvv\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},38088:(e,t,s)=>{var n=s(96651),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var n,i={},c=null,d=null;for(n in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,n)&&!l.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:r,type:e,key:c,ref:d,props:i,_owner:o.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},2488:(e,t,s)=>{e.exports=s(38088)},62780:(e,t,s)=>{s.d(t,{I:()=>o,M:()=>a});var n=s(96651);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);