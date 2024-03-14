/*! For license information please see 0d0b224d.6af7b743.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[21036],{32860:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var i=l(2488),s=l(62780);const r={title:"CSS Rule"},t="CSS Rule",c={id:"web/style/css-rule",title:"CSS Rule",description:"width",source:"@site/../notes/web/style/css-rule.md",sourceDirName:"web/style",slug:"/web/style/css-rule",permalink:"/notes/web/style/css-rule",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/style/css-rule.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1662344272,formattedLastUpdatedAt:"Sep 5, 2022",frontMatter:{title:"CSS Rule"},sidebar:"docs",previous:{title:"Layout",permalink:"/notes/web/style/css-layout"},next:{title:"CSS Selector",permalink:"/notes/web/style/css-selector"}},d={},h=[{value:"width",id:"width",level:2},{value:"theme",id:"theme",level:2},{value:"color",id:"color",level:2},{value:"@layer",id:"layer",level:2},{value:"\u5bf9\u9f50\u548c\u6392\u5217",id:"\u5bf9\u9f50\u548c\u6392\u5217",level:2},{value:"flexbox",id:"flexbox",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"css-rule",children:"CSS Rule"}),"\n",(0,i.jsx)(n.h2,{id:"width",children:"width"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"min-content - \u56fa\u6709\u7684\u6700\u5c0f\u5bbd\u5ea6"}),"\n",(0,i.jsx)(n.li,{children:"max-content - \u56fa\u6709\u7684\u6700\u5927\u5bbd\u5ea6"}),"\n",(0,i.jsx)(n.li,{children:"fit-content = min(max-content, max(min-content, fill-available))"}),"\n",(0,i.jsx)(n.li,{children:"stretch"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fit-content(<length-percentage>)"})," -> ",(0,i.jsx)(n.code,{children:"min(max-content, max(min-content, <length-percentage>))"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u76ee\u524d\u6d4f\u89c8\u5668\u8fd8\u6ca1\u6709\u652f\u6301"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/width",children:"https://developer.mozilla.org/en-US/docs/Web/CSS/width"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"theme",children:"theme"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"prefers-color-scheme light,dark"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'\x3c!-- \u544a\u8bc9\u6d4f\u89c8\u5668\u652f\u6301\u914d\u8272 - \u4e14\u4f18\u5148\u9009\u62e9 dark --\x3e\n<meta name="color-scheme" content="dark light" />\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:":root {\n  /* \u8868\u793a\u652f\u6301\u914d\u7f6e\u65b9\u6848 */\n  color-scheme: dark light;\n}\n\n/* \u6839\u636e\u7528\u6237\u914d\u7f6e\u9009\u62e9 */\nbody {\n  background-color: gainsboro;\n}\n@media (prefers-color-scheme: dark) {\n  body {\n    background-color: darkslategray;\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"color",children:"color"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u547d\u540d\u989c\u8272"}),"\n",(0,i.jsxs)(n.li,{children:["\u7279\u6b8a\u989c\u8272\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"transparent"}),"\n",(0,i.jsx)(n.li,{children:"currentcolor"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u7cfb\u7edf\u989c\u8272\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Canvas \u5e94\u7528\u6216\u6587\u6863\u80cc\u666f\u8272"}),"\n",(0,i.jsx)(n.li,{children:"CanvasText \u5e94\u7528\u6216\u6587\u6863\u6587\u672c\u524d\u666f\u8272"}),"\n",(0,i.jsx)(n.li,{children:"LinkText - non-active, non-visited - \u84dd\u8272"}),"\n",(0,i.jsx)(n.li,{children:"VisitedText - visited - \u7d2b\u8272"}),"\n",(0,i.jsx)(n.li,{children:"ActiveText - active - \u7ea2\u8272"}),"\n",(0,i.jsx)(n.li,{children:"ButtonFace - \u6309\u94ae\u80cc\u666f\u989c\u8272"}),"\n",(0,i.jsx)(n.li,{children:"ButtonText"}),"\n",(0,i.jsx)(n.li,{children:"ButtonBorder"}),"\n",(0,i.jsx)(n.li,{children:"Field - input \u80cc\u666f\u8272"}),"\n",(0,i.jsx)(n.li,{children:"FieldText"}),"\n",(0,i.jsx)(n.li,{children:"Highlight - \u9009\u4e2d\u6587\u672c\u80cc\u666f\u989c\u8272 ::selection"}),"\n",(0,i.jsx)(n.li,{children:"HighlightText - \u9009\u4e2d\u6587\u672c\u989c\u8272"}),"\n",(0,i.jsx)(n.li,{children:"SelectedItem - \u9009\u4e2d\u5143\u7d20\u80cc\u666f\u8272 - \u4f8b\u5982 checkbox"}),"\n",(0,i.jsx)(n.li,{children:"SelectedItemText"}),"\n",(0,i.jsx)(n.li,{children:"Mark - mark \u6807\u7b7e"}),"\n",(0,i.jsx)(n.li,{children:"MarkText"}),"\n",(0,i.jsx)(n.li,{children:"GrayText - disabled \u7684\u989c\u8272"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.w3.org/TR/css-color/",children:"CSS Color Module Level 4"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"layer",children:"@layer"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Chrome 99+, FF97+"}),"\n",(0,i.jsx)(n.li,{children:"\u5b9a\u4e49\u7ea7\u8054\u5c42\u7ea7"}),"\n",(0,i.jsx)(n.li,{children:"\u6ca1\u6709\u5728 \u5c42 \u91cc\u7684\u4f1a\u9ed8\u8ba4\u5728\u4e00\u4e2a\u533f\u540d\u5c42"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"/* 1. \u547d\u540d\u5c42 */\n@layer layer-name {\n  /*rules*/\n}\n/* 2. \u5b9a\u4e49\u5c42 - \u4f18\u5148\u7ea7\u5360\u4f4d - \u7b2c\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e\u5f88\u91cd\u8981\uff0c\u548c\u4e4b\u540e\u518d\u6dfb\u52a0\u89c4\u5219 */\n/* \u8d8a\u540e\u4f18\u5148\u7ea7\u8d8a\u9ad8 */\n@layer theme, layout, utilities;\n/* 3. \u533f\u540d\u5c42 - \u547d\u540d\u5c42\u4e4b\u540e - \u4f18\u5148\u7ea7\u6700\u9ad8 - \u7b49\u540c\u4e8e\u6ca1\u6709\u5b9a\u4e49\u5c42 */\n@layer {\n  /*rules*/\n}\n\n/* 4. import \u5230 \u5c42 */\n@import 'theme.css' layer(utilities);\n@import 'theme.css' layer; /* \u533f\u540d\u5c42 */\n\n/* \u5d4c\u5957\u5c42 */\n@layer framework {\n  @layer layout {\n  }\n}\n\n/* \u540e\u7eed\u589e\u52a0\u89c4\u5219\u5230\u5d4c\u5957\u5c42 */\n@layer framework.layout {\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<link rel="stylesheet" href="zxx-lib.css" layer="lib" />\n<link rel="stylesheet" href="zxx-lib.css" layer />\n<link rel="stylesheet" href="zxx-lib.css" layer media="supports(at-rule(@layer))" />\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@layer",children:"@layer"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5bf9\u9f50\u548c\u6392\u5217",children:"\u5bf9\u9f50\u548c\u6392\u5217"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"{align,justify}-{items,self,content}"}),"\n",(0,i.jsxs)(n.li,{children:["align & justify\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"align - Block Axis"}),"\n",(0,i.jsx)(n.li,{children:"justify - Inline Axis"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"align-self \u9ed8\u8ba4 stretch"}),"\n",(0,i.jsxs)(n.li,{children:["flex - flex-direction\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"justify - \u4e3b\u8f74"}),"\n",(0,i.jsx)(n.li,{children:"align - \u526f\u8f74"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["alignment\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4f4d\u7f6e\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"center"}),"\n",(0,i.jsx)(n.li,{children:"start - \u53d7 \u4e66\u5199\u6a21\u5f0f\u5f71\u54cd"}),"\n",(0,i.jsx)(n.li,{children:"end"}),"\n",(0,i.jsx)(n.li,{children:"self-start"}),"\n",(0,i.jsx)(n.li,{children:"self-end"}),"\n",(0,i.jsx)(n.li,{children:"flex-start"}),"\n",(0,i.jsx)(n.li,{children:"flex-end"}),"\n",(0,i.jsx)(n.li,{children:"left"}),"\n",(0,i.jsx)(n.li,{children:"right"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u57fa\u7ebf\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"baseline"}),"\n",(0,i.jsx)(n.li,{children:"first baseline"}),"\n",(0,i.jsx)(n.li,{children:"last baseline"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5206\u5e03\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"stretch"}),"\n",(0,i.jsx)(n.li,{children:"space-between"}),"\n",(0,i.jsx)(n.li,{children:"space-around"}),"\n",(0,i.jsx)(n.li,{children:"space-evenly"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["safe & unsafe\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"safe - \u6ea2\u51fa\u65f6\u4f7f\u7528 start"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment",children:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"flexbox",children:"flexbox"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"flex item has a 100% by default"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},38088:(e,n,l)=>{var i=l(96651),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,l){var i,r={},h=null,o=null;for(i in void 0!==l&&(h=""+l),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(o=n.ref),n)t.call(n,i)&&!d.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:s,type:e,key:h,ref:o,props:r,_owner:c.current}}n.Fragment=r,n.jsx=h,n.jsxs=h},2488:(e,n,l)=>{e.exports=l(38088)},62780:(e,n,l)=>{l.d(n,{I:()=>c,M:()=>t});var i=l(96651);const s={},r=i.createContext(s);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);