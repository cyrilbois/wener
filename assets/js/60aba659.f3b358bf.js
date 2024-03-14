/*! For license information please see 60aba659.f3b358bf.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[97412],{43552:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var t=s(2488),i=s(62780);const l={tags:["FAQ"]},r="TailwindCSS FAQ",a={id:"web/style/tailwindcss/tailwindcss-faq",title:"TailwindCSS FAQ",description:"As of Tailwind CSS v2.2, lightBlue has been renamed to sky.",source:"@site/../notes/web/style/tailwindcss/tailwindcss-faq.md",sourceDirName:"web/style/tailwindcss",slug:"/web/style/tailwindcss/faq",permalink:"/notes/web/style/tailwindcss/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/style/tailwindcss/tailwindcss-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1709090151,formattedLastUpdatedAt:"Feb 28, 2024",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"TailwindCSS Awesome",permalink:"/notes/web/style/tailwindcss/awesome"},next:{title:"TailwindCSS Version",permalink:"/notes/web/style/tailwindcss/version"}},o={},d=[{value:"As of Tailwind CSS v2.2, <code>lightBlue</code> has been renamed to <code>sky</code>.",id:"as-of-tailwind-css-v22-lightblue-has-been-renamed-to-sky",level:2},{value:"prettier-plugin-tailwindcss",id:"prettier-plugin-tailwindcss",level:2},{value:"rem -&gt; px",id:"rem---px",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"tailwindcss-faq",children:"TailwindCSS FAQ"}),"\n",(0,t.jsxs)(n.h2,{id:"as-of-tailwind-css-v22-lightblue-has-been-renamed-to-sky",children:["As of Tailwind CSS v2.2, ",(0,t.jsx)(n.code,{children:"lightBlue"})," has been renamed to ",(0,t.jsx)(n.code,{children:"sky"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"warn - As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`.\nwarn - Update your configuration file to silence this warning.\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const colors = require('tailwindcss/colors');\n// \u5ffd\u7565\u5f03\u7528\u7684\u989c\u8272\ndelete colors['lightBlue'];\ndelete colors['warmGray'];\ndelete colors['trueGray'];\ndelete colors['coolGray'];\ndelete colors['blueGray'];\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/tailwindlabs/tailwindcss/issues/4690#issuecomment-1046087220",children:"https://github.com/tailwindlabs/tailwindcss/issues/4690#issuecomment-1046087220"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"prettier-plugin-tailwindcss",children:"prettier-plugin-tailwindcss"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"custom > component > utility"}),"\n",(0,t.jsxs)(n.li,{children:["utility\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"sort by override"}),"\n",(0,t.jsx)(n.li,{children:"modifiers last"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"h -> w"}),"\n",(0,t.jsx)(n.li,{children:"x -> y"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/tailwindlabs/prettier-plugin-tailwindcss",children:"https://github.com/tailwindlabs/prettier-plugin-tailwindcss"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"rem---px",children:"rem -> px"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["rem to px ",(0,t.jsx)(n.a,{href:"https://github.com/tailwindlabs/tailwindcss/issues/1232",children:"#1232"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},38088:(e,n,s)=>{var t=s(96651),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var t,l={},d=null,c=null;for(t in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)r.call(n,t)&&!o.hasOwnProperty(t)&&(l[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===l[t]&&(l[t]=n[t]);return{$$typeof:i,type:e,key:d,ref:c,props:l,_owner:a.current}}n.Fragment=l,n.jsx=d,n.jsxs=d},2488:(e,n,s)=>{e.exports=s(38088)},62780:(e,n,s)=>{s.d(n,{I:()=>a,M:()=>r});var t=s(96651);const i={},l=t.createContext(i);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);