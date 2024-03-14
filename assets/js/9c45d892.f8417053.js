/*! For license information please see 9c45d892.f8417053.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[67893],{87116:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=t(2488),o=t(62780);const r={title:"Low Code Design",tags:["Design"]},i="Low Code Design",l={id:"web/editor/low-code/README",title:"Low Code Design",description:"- Low Code - \u8bb2\u7a76 \u7f16\u8f91\uff0c\u5173\u8054\uff0c\u4efb\u610f \u7ec4\u4ef6",source:"@site/../notes/web/editor/low-code/README.md",sourceDirName:"web/editor/low-code",slug:"/web/editor/low-code/",permalink:"/notes/web/editor/low-code/",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/editor/low-code/README.md",tags:[{label:"Design",permalink:"/notes/tags/design"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1704307832,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{title:"Low Code Design",tags:["Design"]},sidebar:"docs",previous:{title:"lexical",permalink:"/notes/web/editor/lexical"},next:{title:"Low Code Awesome",permalink:"/notes/web/editor/low-code/awesome"}},d={},a=[{value:"\u767e\u5ea6 Aims",id:"\u767e\u5ea6-aims",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"low-code-design",children:"Low Code Design"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Low Code - \u8bb2\u7a76 \u7f16\u8f91\uff0c\u5173\u8054\uff0c\u4efb\u610f \u7ec4\u4ef6"}),"\n",(0,s.jsxs)(n.li,{children:["\u7ec4\u4ef6\u7684\u7279\u6027\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u914d\u7f6e\u5316"}),"\n",(0,s.jsx)(n.li,{children:"Schema\u5316"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"\u53ef\u4ee5\u53c2\u8003\u8bbe\u8ba1\uff0c\u53ea\u5b9e\u73b0\u914d\u7f6e\u5316"}),"\n"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6a21\u578b\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ProseMirror \u7684 Schema \u6a21\u578b\u503c\u5f97\u501f\u9274\u53c2\u8003"}),"\n",(0,s.jsx)(n.li,{children:"HTML/JSX - type/tag, attributes, children"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6a21\u578b=\u5e8f\u5217\u5316\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5e8f\u5217\u5316 \u5143\u7d20 - \u6700\u7b80\u5355"}),"\n",(0,s.jsx)(n.li,{children:"\u5e8f\u5217\u5316 \u64cd\u4f5c - \u4e8b\u4ef6"}),"\n",(0,s.jsx)(n.li,{children:"\u5e8f\u5217\u5316 \u72b6\u6001 - \u54cd\u5e94\u3001\u6761\u4ef6"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// React Element \u6a21\u578b\nconst reactElement = {\n  // \u7c7b\u578b\u8bc6\u522b\n  $$typeof: REACT_ELEMENT_TYPE,\n\n  // \u7ec4\u4ef6\u7c7b\u578b\n  type: type,\n  key: key,\n  ref: ref,\n  props: props, // dev \u65f6 Object.freeze\n};\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"./x-render.md",children:"x-render"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u57fa\u4e8e JSON schema \u6269\u5c55\u5904\u7406\u5c5e\u6027"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u767e\u5ea6-aims",children:"\u767e\u5ea6 Aims"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  // \u6ce8\u518c\u7684\u7c7b\u578b\n  "type": "page",\n  // \u7ec4\u4ef6\u80fd\u5904\u7406\u7684\u5c5e\u6027\n  "title": "Demo",\n  // children\n  "body": [\n    {\n      "type": "form",\n      "actions": [],\n      "debug": true,\n      "mode": "horizontal",\n      // \u914d\u7f6e\u8868\u5355\u5904\u7406\u903b\u8f91\n      "api": {\n        "method": "post",\n        "url": "/amis/api/mock2/form/saveForm",\n        "data": {\n          // \u6570\u636e\u66ff\u6362\n          "user.name": "${name|default:undefined}",\n          "email": "${email}"\n        }\n      },\n      "body": [\n        {\n          "type": "radios",\n          "name": "status",\n          "value": "1",\n          "label": "\u72b6\u6001",\n          "options": {\n            "1": "\u79bb\u7ebf",\n            "2": "\u5728\u7ebf"\n          }\n        },\n        {\n          "type": "mapping",\n          "name": "status",\n          "label": "\u72b6\u6001\u5c55\u793a",\n          "map": {\n            "1": "\u79bb\u7ebf",\n            "2": "\u5728\u7ebf"\n          },\n          // \u6839\u636e\u72b6\u6001\u53d8\u5316\u7c7b\u578b\n          "className": {\n            "text-muted": "this.status == \'1\'",\n            "text-success": "this.status == \'2\'"\n          }\n        },\n        {\n          "type": "select",\n          // \u5b9a\u4e49 select \u7684\u6570\u636e\u6e90\n          "source": {\n            "method": "get",\n            "url": "/amis/api/mock2/options/level2?a=${a}",\n            "sendOn": "this.a === 2"\n          }\n        }\n      ]\n    }\n  ]\n}\n'})})]})}function m(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},38088:(e,n,t)=>{var s=t(96651),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var s,r={},a=null,c=null;for(s in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,s)&&!d.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:o,type:e,key:a,ref:c,props:r,_owner:l.current}}n.Fragment=r,n.jsx=a,n.jsxs=a},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>i});var s=t(96651);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);