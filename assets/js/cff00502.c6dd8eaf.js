/*! For license information please see cff00502.c6dd8eaf.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[67888],{51664:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var t=s(2488),r=s(62780);const l={title:"expect"},a="expect",i={id:"os/linux/shell/expect",title:"expect",description:"- expect.1",source:"@site/../notes/os/linux/shell/expect.md",sourceDirName:"os/linux/shell",slug:"/os/linux/shell/expect",permalink:"/notes/os/linux/shell/expect",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/shell/expect.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1619945683,formattedLastUpdatedAt:"May 2, 2021",frontMatter:{title:"expect"},sidebar:"docs",previous:{title:"doas",permalink:"/notes/os/linux/shell/doas"},next:{title:"find",permalink:"/notes/os/linux/shell/find"}},c={},o=[{value:"SSH \u8f93\u5165\u5bc6\u7801",id:"ssh-\u8f93\u5165\u5bc6\u7801",level:2},{value:"SCP \u53d1\u9001\u6587\u4ef6",id:"scp-\u53d1\u9001\u6587\u4ef6",level:2},{value:"\u5d4c\u5165\u5230 Shell",id:"\u5d4c\u5165\u5230-shell",level:2},{value:"interact: received eof from spawn_id exp0",id:"interact-received-eof-from-spawn_id-exp0",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"expect",children:"expect"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://man7.org/linux/man-pages/man1/expect.1.html",children:"expect.1"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-expect",children:'set username [lindex $argv 0];\nset password [lindex $argv 1];\n\n# \u663e\u793a\nsend_user "$username $password"\n\n# \u9ed8\u8ba4\u53c2\u6570\nset argv [lassign $argv username password]\nif {$username eq ""} {set username default_user}\nif {$password eq ""} {set password default_password}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ssh-\u8f93\u5165\u5bc6\u7801",children:"SSH \u8f93\u5165\u5bc6\u7801"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'#!/usr/local/bin/expect\nspawn ssh admin@127.0.0.1\nexpect "password:"\nsend "PASSWOPD\\n";\ninteract\n'})}),"\n",(0,t.jsx)(n.h2,{id:"scp-\u53d1\u9001\u6587\u4ef6",children:"SCP \u53d1\u9001\u6587\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'#!/usr/local/bin/expect\nset argv [lassign $argv src dst]\nif {$dst eq ""} {set dst $src}\n\nspawn  scp -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -P 22 $src admin@192.168.1.1:/tmp/$dst\nexpect "password:"\nsend [exec cat password.txt];\nsend "\\n"\ninteract\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u5d4c\u5165\u5230-shell",children:"\u5d4c\u5165\u5230 Shell"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"expect <(cat << EOD\n# ...\ninteract\nEOD\n)\n"})}),"\n",(0,t.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(n.h2,{id:"interact-received-eof-from-spawn_id-exp0",children:"interact: received eof from spawn_id exp0"}),"\n",(0,t.jsx)(n.p,{children:"\u907f\u514d\u7528 stdin \u4f20\u5165\u811a\u672c"})]})}function p(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},38088:(e,n,s)=>{var t=s(96651),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,s){var t,l={},o=null,d=null;for(t in void 0!==s&&(o=""+s),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,t)&&!c.hasOwnProperty(t)&&(l[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===l[t]&&(l[t]=n[t]);return{$$typeof:r,type:e,key:o,ref:d,props:l,_owner:i.current}}n.Fragment=l,n.jsx=o,n.jsxs=o},2488:(e,n,s)=>{e.exports=s(38088)},62780:(e,n,s)=>{s.d(n,{I:()=>i,M:()=>a});var t=s(96651);const r={},l=t.createContext(r);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);