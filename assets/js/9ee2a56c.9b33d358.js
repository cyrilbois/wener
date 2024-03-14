/*! For license information please see 9ee2a56c.9b33d358.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[82188],{75400:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var s=t(2488),r=t(62780);const l={tags:["FAQ"]},i="NLP FAQ",o={id:"ai/nlp/nlp-faq",title:"NLP FAQ",description:"segmentation vs tokenization",source:"@site/../notes/ai/nlp/nlp-faq.md",sourceDirName:"ai/nlp",slug:"/ai/nlp/faq",permalink:"/notes/ai/nlp/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ai/nlp/nlp-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1695042174,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"NPL Awesome",permalink:"/notes/ai/nlp/awesome"},next:{title:"OCR Awesome",permalink:"/notes/ai/nlp/ocr/awesome"}},a={},c=[{value:"segmentation vs tokenization",id:"segmentation-vs-tokenization",level:2},{value:"Intl.Segmenter",id:"intlsegmenter",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"nlp-faq",children:"NLP FAQ"}),"\n",(0,s.jsx)(n.h2,{id:"segmentation-vs-tokenization",children:"segmentation vs tokenization"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["tokenization \u662f segmentation\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u66f4\u7ec6\u5206\u9886\u57df"}),"\n",(0,s.jsx)(n.li,{children:"\u5206\u8bcd"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["segmentation\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u66f4\u5bbd\u6cdb\u7684\u6982\u5ff5"}),"\n",(0,s.jsx)(n.li,{children:"\u5206\u51fa\u6765\u7684\u4e0d\u4e00\u5b9a\u662f \u8bcd"}),"\n",(0,s.jsx)(n.li,{children:"\u4f8b\u5982\uff1a Sentence Segmentation"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"intlsegmenter",children:"Intl.Segmenter"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["granularity\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"grapheme"}),"\n",(0,s.jsx)(n.li,{children:"word"}),"\n",(0,s.jsx)(n.li,{children:"sentence"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["localeMatcher\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"best fit"}),"\n",(0,s.jsx)(n.li,{children:"lookup"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const segmenter = new Intl.Segmenter('zh-CN', { granularity: 'word' });\nconst segments = segmenter.segment('\u4eca\u5929\u5929\u6c14\u771f\u7684\u597d\u597d\uff0c\u597d\u60f3\u51fa\u53bb\u73a9\u3002');\nconsole.table(Array.from(segments));\n\nconsole.log(Intl.Segmenter.supportedLocalesOf(['zh'], { localeMatcher: 'lookup', granularity: 'string' }));\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},38088:(e,n,t)=>{var s=t(96651),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,l={},c=null,d=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,s)&&!a.hasOwnProperty(s)&&(l[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===l[s]&&(l[s]=n[s]);return{$$typeof:r,type:e,key:c,ref:d,props:l,_owner:o.current}}n.Fragment=l,n.jsx=c,n.jsxs=c},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>i});var s=t(96651);const r={},l=s.createContext(r);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);