/*! For license information please see d8eeb780.87729399.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[15316],{17008:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(2488),i=t(62780);const a={tags:["FAQ"]},s="Jetbrain FAQ",o={id:"dev/ide/jetbrain/jetbrain-faq",title:"Jetbrain FAQ",description:"Project Storage",source:"@site/../notes/dev/ide/jetbrain/jetbrain-faq.md",sourceDirName:"dev/ide/jetbrain",slug:"/dev/ide/jetbrain/faq",permalink:"/notes/dev/ide/jetbrain/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/ide/jetbrain/jetbrain-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1708697175,formattedLastUpdatedAt:"Feb 23, 2024",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"Jetbrain IDE",permalink:"/notes/dev/ide/jetbrain/"},next:{title:"Gateway",permalink:"/notes/dev/ide/jetbrain/gateway"}},l={},c=[{value:"Project Storage",id:"project-storage",level:2},{value:"Status bar - Git branch",id:"status-bar---git-branch",level:2},{value:"macOS \u83b7\u53d6 datasource \u7684\u5bc6\u7801",id:"macos-\u83b7\u53d6-datasource-\u7684\u5bc6\u7801",level:2},{value:"Code Vision hints evaluation",id:"code-vision-hints-evaluation",level:2},{value:"Cannot connect to already running IDE instance. Exception: Process 621 is still running",id:"cannot-connect-to-already-running-ide-instance-exception-process-621-is-still-running",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"jetbrain-faq",children:"Jetbrain FAQ"}),"\n",(0,r.jsx)(n.h2,{id:"project-storage",children:"Project Storage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# projects/default\nls $HOME/Library/Application\\ Support/JetBrains/DataGrip*\n\nls $HOME/Library/Application\\ Support/JetBrains/DataGrip2023.3/consoles/db\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:".idea/dataSources.xml"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"status-bar---git-branch",children:"Status bar - Git branch"}),"\n",(0,r.jsx)(n.p,{children:"\u6062\u590d\u72b6\u6001\u680f\u7684 Git \u5206\u652f\u663e\u793a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"View -> Apperance -> Status bar widgets -> Git Branch"}),"\n",(0,r.jsx)(n.li,{children:"\u89c6\u56fe - \u5916\u89c2 - \u72b6\u6001\u680f\u5fae\u4ef6 - Git \u5206\u652f"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"macos-\u83b7\u53d6-datasource-\u7684\u5bc6\u7801",children:"macOS \u83b7\u53d6 datasource \u7684\u5bc6\u7801"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u590d\u5236 datasource - \u5b9e\u9645\u4e3a XML"}),"\n",(0,r.jsx)(n.li,{children:"\u7c98\u8d34\u51fa\u6765\uff0c\u83b7\u53d6\u5230 UUID"}),"\n",(0,r.jsx)(n.li,{children:"\u6253\u5f00 Keychain Access\uff0c\u5728 login \u91cc \u641c\u7d22 UUID"}),"\n",(0,r.jsx)(n.li,{children:"\u67e5\u770b\u5bc6\u7801\u5373\u53ef"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"code-vision-hints-evaluation",children:"Code Vision hints evaluation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u663e\u793a\u4f7f\u7528\u60c5\u51b5"}),"\n",(0,r.jsx)(n.li,{children:"\u5360\u7528\u66f4\u591a CPU"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.jetbrains.com/help/rider/Code_Vision.html",children:"https://www.jetbrains.com/help/rider/Code_Vision.html"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"cannot-connect-to-already-running-ide-instance-exception-process-621-is-still-running",children:"Cannot connect to already running IDE instance. Exception: Process 621 is still running"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'ls "$HOME/Library/Application Support/JetBrains/IntelliJIdea2023.2"\n\nls $HOME/Library/Application\\ Support/JetBrains/*/.lock\nrm $HOME/Library/Application\\ Support/JetBrains/*/.lock\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},38088:(e,n,t)=>{var r=t(96651),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,a={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,r)&&!l.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:i,type:e,key:c,ref:d,props:a,_owner:o.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>s});var r=t(96651);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);