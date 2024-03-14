/*! For license information please see c35dce42.6c286dbc.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[44728],{5948:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var t=r(2488),o=r(62780);const a={title:"MarkDoc"},s="MarkDoc",c={id:"web/editor/markdoc",title:"MarkDoc",description:"- markdoc/markdoc",source:"@site/../notes/web/editor/markdoc.md",sourceDirName:"web/editor",slug:"/web/editor/markdoc",permalink:"/notes/web/editor/markdoc",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/editor/markdoc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1654595483,formattedLastUpdatedAt:"Jun 7, 2022",frontMatter:{title:"MarkDoc"},sidebar:"docs",previous:{title:"Low Code Awesome",permalink:"/notes/web/editor/low-code/awesome"},next:{title:"markdown-it",permalink:"/notes/web/editor/markdown-it"}},i={},d=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"Why not MDX",id:"why-not-mdx",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"markdoc",children:"MarkDoc"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/markdoc/markdoc",children:"markdoc/markdoc"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"by Stripe"}),"\n",(0,t.jsx)(n.li,{children:"CommonMark \u8d85\u96c6 - \u53d6\u6d88\u7f29\u8fdb\u4ee3\u7801\u5757\u8bed\u6cd5\u3001\u53d6\u6d88 setext heading"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"\u540e\u7f00 mdoc"}),"\n",(0,t.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["parser ",(0,t.jsx)(n.a,{href:"https://github.com/markdown-it/markdown-it",children:"markdown-it/markdown-it"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://markdoc.io/sandbox",children:"https://markdoc.io/sandbox"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm add @markdoc/markdoc\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5185\u7f6e nodes - ",(0,t.jsx)(n.a,{href:"https://markdoc.io/docs/nodes#built-in-nodes",children:"https://markdoc.io/docs/nodes#built-in-nodes"})]}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u7f6e tags - if, else, table, partial"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u7f6e\u51fd\u6570 - equals, and, or, not, default, debug"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import Markdoc from '@markdoc/markdoc';\n\nconst source = `\n---\ntitle: Doc title\n---\n\n# {% $markdoc.frontmatter.title %} {% #overview %}\n\n{% callout type=\"check\" %}\n  More content\n{% /callout %}\n`;\n\nconst ast = Markdoc.parse(source);\nconst content = Markdoc.transform(ast, {\n  nodes: {\n    heading: {\n      render: 'Heading',\n      attributes: {\n        id: { type: String },\n        level: { type: Number },\n      },\n    },\n  },\n  tags: {\n    callout: {\n      render: 'Callout',\n      attributes: {\n        title: {\n          type: String,\n          description: 'The title displayed at the top of the callout',\n        },\n      },\n    },\n  },\n  variables: {\n    author: {\n      name: 'Wener',\n    },\n  },\n  functions: {\n    includes: {\n      transform(parameters, config) {\n        const [array, value] = Object.values(parameters);\n\n        return Array.isArray(array) ? array.includes(value) : false;\n      },\n    },\n  },\n  partials: {\n    'header.md': Markdoc.parse(`# My header`),\n  },\n});\n\n// toHTML\nconst html = Markdoc.renderers.html(content);\n// React\nconst children = Markdoc.renderers.react(content, React, { components });\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdoc",children:'\x3c!-- Tag+\u5c5e\u6027 --\x3e\n{% callout type="check" %}\n  More content\n{% /callout %}\n\n{% image src="" /%}\n\n\x3c!-- Annotation --\x3e\n# Header {% #custom-id %}\n# Heading {% .custom-class-name-here %}\n\n\x3c!-- \u53d8\u91cf --\x3e\n{% $variable %}\n{% $markdoc.frontmatter.title %}\n\n\x3c!-- \u51fd\u6570 --\x3e\n# {% titleCase($markdoc.frontmatter.title) %}\n\n{% if equals(1, 2) %}\nShow the password\n{% /if %}\n\n{% tag title=uppercase($key) /%}\n'})}),"\n",(0,t.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(n.h2,{id:"why-not-mdx",children:"Why not MDX"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["MDX\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5141\u8bb8\u4efb\u610f JS - docs as code"}),"\n",(0,t.jsx)(n.li,{children:"\u5141\u8bb8\u4efb\u610f\u4ee3\u7801\u5bfc\u81f4\u6700\u7ec8\u4f1a\u8fc7\u5ea6\u590d\u6742"}),"\n",(0,t.jsxs)(n.li,{children:["\u8981\u6c42\u8bed\u6cd5\u4e25\u683c\u6b63\u786e - \u9519\u8bef\u65e0\u6cd5\u7f16\u8bd1 - \u4f8b\u5982: \u4e0d\u5141\u8bb8\u5355\u72ec\u5b58\u5728 ",(0,t.jsx)(n.code,{children:"<"})," - \u4f1a\u5bfc\u81f4\u89e3\u6790\u9519\u8bef"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Markdoc\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u9650\u5b9a\u5141\u8bb8\u7684 tag - docs as data"}),"\n",(0,t.jsx)(n.li,{children:"declarative"}),"\n",(0,t.jsx)(n.li,{children:"\u9488\u5bf9\u6587\u6863\u4e66\u5199"}),"\n",(0,t.jsx)(n.li,{children:"\u5141\u8bb8\u4e00\u5b9a\u7684\u9519\u8bef\u8bed\u6cd5"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},38088:(e,n,r)=>{var t=r(96651),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var t,a={},d=null,l=null;for(t in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,t)&&!i.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===a[t]&&(a[t]=n[t]);return{$$typeof:o,type:e,key:d,ref:l,props:a,_owner:c.current}}n.Fragment=a,n.jsx=d,n.jsxs=d},2488:(e,n,r)=>{e.exports=r(38088)},62780:(e,n,r)=>{r.d(n,{I:()=>c,M:()=>s});var t=r(96651);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);