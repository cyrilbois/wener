/*! For license information please see 0f138ef1.73e2e5a8.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[58700],{42800:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var s=r(2488),i=r(62780);const l={title:"Parser FAQ",tags:["FAQ"]},t="Parser FAQ",c={id:"languages/parser/parser-faq",title:"Parser FAQ",description:"Antlr vs PEG",source:"@site/../notes/languages/parser/parser-faq.md",sourceDirName:"languages/parser",slug:"/languages/parser/faq",permalink:"/notes/languages/parser/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/parser/parser-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1661507210,formattedLastUpdatedAt:"Aug 26, 2022",frontMatter:{title:"Parser FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Parser Awesome",permalink:"/notes/languages/parser/awesome"},next:{title:"Parser Glossary",permalink:"/notes/languages/parser/glossary"}},d={},a=[{value:"Antlr vs PEG",id:"antlr-vs-peg",level:2},{value:"OctetString",id:"octetstring",level:2}];function o(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"parser-faq",children:"Parser FAQ"}),"\n",(0,s.jsx)(e.h2,{id:"antlr-vs-peg",children:"Antlr vs PEG"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["PEG - Parsing expression grammar\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u662f\u4e00\u5957\u901a\u7528\u7684 \u89e3\u6790\u8868\u8fbe\u6587\u6cd5"}),"\n",(0,s.jsx)(e.li,{children:"\u4e0d\u540c\u8bed\u8a00\u6709\u4e0d\u540c\u5b9e\u73b0\uff0c\u4f46\u80fd\u529b\u548c\u5904\u7406\u903b\u8f91\u76f8\u540c"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Antlr\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u662f\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"LL(*)"})," \u8bed\u6cd5\u89e3\u6790\u5668\u5b9e\u73b0"]}),"\n",(0,s.jsx)(e.li,{children:"\u6838\u5fc3\u4e3a Java \u8bed\u8a00\uff0c\u53ef\u4ee5\u751f\u6210\u4e0d\u540c\u76ee\u6807\u8bed\u8a00"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u4e66\u5199\u8bed\u6cd5\u533a\u522b"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["PEG\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u8bed\u6cd5\u7ed3\u6784\u66f4\u7b80\u5355\uff0c\u7c7b\u4f3c\u4e8e\u62fc\u88c5\u590d\u6742\u6b63\u5219\uff0c\u4e0d\u533a\u5206\u8bed\u6cd5\u548c\u8bcd\u6cd5"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u903b\u8f91\u81ea\u4e0a\u4e0b\u4e0b\u4e00\u6b21\u6027\u6267\u884c\u51fa\u7ed3\u679c"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Antlr\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u8bed\u6cd5\u533a\u5206\u8bcd\u6cd5\u548c\u8bed\u6cd5 - Lexer \u548c Grammar"}),"\n",(0,s.jsx)(e.li,{children:"\u89e3\u6790\u662f\u6709\u5206\u8bcd\u903b\u8f91 - Tokenize"}),"\n",(0,s.jsx)(e.li,{children:"\u5c06 Token \u653e\u5165 Grammar \u903b\u8f91\u5f97\u5230\u6700\u7ec8\u7684 AST"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u6982\u5ff5\u7406\u8bba\u533a\u522b"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["PEG\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u7c7b\u4f3c CFG \u4f46\u5e76\u4e0d\u662f\u5b50\u96c6\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u4f8b\u5982 ",(0,s.jsx)(e.code,{children:"A{n}B{n}C{n}"})," \u80fd\u8868\u8fbe\u4e0a\u4e0b\u6587\u76f8\u5173\u8bed\u6cd5"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u6ca1\u6709\u4e8c\u4e49\u6027\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"A / AB"})," \u6c38\u8fdc\u4e0d\u4f1a\u5339\u914d\u5230\u7b2c\u4e8c\u4e2a\u89c4\u5219"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Lookahead \u53ef\u4ee5\u5305\u542b\u9012\u5f52\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5982\u679c PEG \u4e0d\u5305\u542b\u9012\u5f52 LA \u5219\u53ef\u4ee5\u7ffb\u8bd1\u4e3a Antlr"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Antlr\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"LL(*)"}),", CFG \u5b50\u96c6"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"A / AB"})," \u53ef\u80fd\u5339\u914d\u7b2c\u4e8c\u4e2a\u89c4\u5219"]}),"\n",(0,s.jsx)(e.li,{children:"Lookahead \u53ea\u80fd\u662f\u7b80\u5355\u7684\u6a21\u5f0f - DFA"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u529f\u80fd\u533a\u522b"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["PEG\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u529f\u80fd\u7b80\u5355\uff0c\u6bcf\u4e2a\u8bed\u8a00\u4e00\u822c\u90fd\u6709\u5b9e\u73b0\uff0c\u8bed\u6cd5\u4e0d\u540c\u4f46\u76f8\u4f3c"}),"\n",(0,s.jsx)(e.li,{children:"\u4e00\u822c\u6309\u9700\u6355\u83b7 text \u5185\u5bb9"}),"\n",(0,s.jsxs)(e.li,{children:["\u4e66\u5199\u590d\u6742\u8bed\u6cd5\u9700\u8981\u6ce8\u610f\u4f18\u5148\u7ea7 - ",(0,s.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Operator-precedence_parser",children:"Operator-precedence parser"})]}),"\n",(0,s.jsx)(e.li,{children:"\u4e0d\u80fd\u5de6\u9012\u5f52"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Antlr\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u529f\u80fd\u5f3a\u5927\uff0c\u652f\u6301\u975e\u5e38\u591a\u8bed\u8a00"}),"\n",(0,s.jsx)(e.li,{children:"\u5468\u8fb9\u5de5\u5177\u8f83\u591a - IDE \u652f\u6301"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-antlr",children:"// PEG \u4f18\u5148\u7ea7 - \u6709\u5e8f\uff0c\u65e0\u6b67\u4e49\nAddExp: MultiExp ( '+' MultiExp)*\nMultiExp: Primary ( '*' Primary)\nPrimary: [0-9]+\n\n// Antlr \u4f18\u5148\u7ea7 - \u5de6\u9012\u5f52\nexpression\n  : expression '*' expression\n  | expression '+' expression\n  | Int\n  ;\nInt: [0-9]+ ;\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://arxiv.org/abs/1207.0443",children:"Left Recursion in Parsing Expression Grammars"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"octetstring",children:"OctetString"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Sequence of Byte"}),"\n",(0,s.jsx)(e.li,{children:"ASN.1 OCTET STRING - TLV"}),"\n",(0,s.jsxs)(e.li,{children:["LDAP - OID\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"1.3.6.1.4.1.1466.115.121.1.40"}),"\n",(0,s.jsx)(e.li,{children:"Microsoft Active Directory 2.5.5.10"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://docs.microsoft.com/en-us/windows/win32/seccertenroll/about-octet-string",children:"https://docs.microsoft.com/en-us/windows/win32/seccertenroll/about-octet-string"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://ldapwiki.com/wiki/OctetString",children:"https://ldapwiki.com/wiki/OctetString"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.iso.org/obp/ui/#iso:std:iso-iec:8825:-7:ed-2:v1:en",children:"https://www.iso.org/obp/ui/#iso:std:iso-iec:8825:-7:ed-2:v1:en"})}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.M)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},38088:(n,e,r)=>{var s=r(96651),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(n,e,r){var s,l={},a=null,o=null;for(s in void 0!==r&&(a=""+r),void 0!==e.key&&(a=""+e.key),void 0!==e.ref&&(o=e.ref),e)t.call(e,s)&&!d.hasOwnProperty(s)&&(l[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps)void 0===l[s]&&(l[s]=e[s]);return{$$typeof:i,type:n,key:a,ref:o,props:l,_owner:c.current}}e.Fragment=l,e.jsx=a,e.jsxs=a},2488:(n,e,r)=>{n.exports=r(38088)},62780:(n,e,r)=>{r.d(e,{I:()=>c,M:()=>t});var s=r(96651);const i={},l=s.createContext(i);function t(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);