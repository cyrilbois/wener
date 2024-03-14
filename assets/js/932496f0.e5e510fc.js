/*! For license information please see 932496f0.e5e510fc.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[48696],{3684:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var r=i(2488),c=i(62780);const t={title:"favicon"},o="favicon",s={id:"web/favicon",title:"favicon",description:"- \u5efa\u8bae\u4e00\u4e2a\u5927\u7684 png + svg \u5373\u53ef",source:"@site/../notes/web/favicon.md",sourceDirName:"web",slug:"/web/favicon",permalink:"/notes/web/favicon",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/favicon.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1701580433,formattedLastUpdatedAt:"Dec 3, 2023",frontMatter:{title:"favicon"},sidebar:"docs",previous:{title:"yjs",permalink:"/notes/web/editor/yjs"},next:{title:"AlpineJS",permalink:"/notes/web/framework/alpinejs"}},a={},l=[{value:"dark",id:"dark",level:2},{value:"favicon",id:"favicon-1",level:2}];function h(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",pre:"pre",ul:"ul",...(0,c.M)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"favicon",children:"favicon"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u5efa\u8bae\u4e00\u4e2a\u5927\u7684 png + svg \u5373\u53ef\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"png \u63a8\u8350 128+"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"favicon.ico \u662f\u672a\u538b\u7f29 bitmap - \u6bd4\u8f83\u5927 - \u5efa\u8bae\u505a 16x16"}),"\n",(0,r.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://realfavicongenerator.net/",children:"real favicon generator"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u751f\u6210\u5de5\u5177"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://stackoverflow.com/questions/48956465",children:"Favicon Standard - 2021 - svg, ico, png and dimensions?"})}),"\n",(0,r.jsxs)(e.li,{children:["wikipedia ",(0,r.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Favicon",children:"favicon"})]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://gist.github.com/leommoore/6415005",children:"favicon-cheat-sheet"})}),"\n",(0,r.jsxs)(e.li,{children:["We analyzed 425k favicons ",(0,r.jsx)(e.a,{href:"https://news.ycombinator.com/item?id=28933391",children:"HN"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'<link rel="icon" href="favicon.ico" type="image/ico" />\n<link rel="icon" href="favicon.svg" type="image/svg+xml" />\n\n<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />\n<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />\n<link rel="shortcut icon" href="/icons/favicon.ico" />\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"#convert favicon.svg -resize 64 favicon.png\nconvert favicon.svg -define icon:auto-resize=64,48,32,16 favicon.ico\n\nbrew install librsvg\nrsvg-convert -h 128 -w 128 --keep-aspect-ratio --background-color=none favicon.svg > favicon.png\ncp favicon.png in.png\nconvert in.png -gravity center -background transparent -extent 128x128 favicon.png\noxipng -o max -i 0 --strip safe *.png\n"})}),"\n",(0,r.jsx)(e.h2,{id:"dark",children:"dark"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"svg style \u63a7\u5236"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-xml",children:'<svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">\n  <style>\n    rect {\n      fill: green;\n    }\n    @media (prefers-color-scheme: dark) {\n      rect {\n        fill: red;\n      }\n    }\n  </style>\n  <rect width="50" height="50" rx="5" />\n</svg>\n'})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsx)(e.li,{children:"js \u63a7\u5236"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'<head>\n  <link rel="icon" href="a.png" id="light-scheme-icon" />\n  <link rel="icon" href="b.png" id="dark-scheme-icon" />\n</head>\n<script>\n  matcher = window.matchMedia(\'(prefers-color-scheme: dark)\');\n  matcher.addListener(onUpdate);\n  onUpdate();\n\n  lightSchemeIcon = document.querySelector(\'link#light-scheme-icon\');\n  darkSchemeIcon = document.querySelector(\'link#dark-scheme-icon\');\n\n  function onUpdate() {\n    if (matcher.matches) {\n      lightSchemeIcon.remove();\n      document.head.append(darkSchemeIcon);\n    } else {\n      document.head.append(lightSchemeIcon);\n      darkSchemeIcon.remove();\n    }\n  }\n<\/script>\n'})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://catalin.red/svg-favicon-light-dark-theme/",children:"https://catalin.red/svg-favicon-light-dark-theme/"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"favicon-1",children:"favicon"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"https://www.google.com/s2/favicons?domain=wener.me&sz=256\nhttps://icons.duckduckgo.com/ip3/wener.me.ico\nhttps://icon.horse/icon/wener.me\nhttps://favicongrabber.com/api/grab/wener.me\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"https://favicongrabber.com/api/grab/wener.me"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/antongunov/favicongrabber.com",children:"https://github.com/antongunov/favicongrabber.com"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/pomdtr/fetch-favicon",children:"pomdtr/fetch-favicon"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://github.com/BlackGlory/parse-favicon",children:"BlackGlory/parse-favicon"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Parse HTML to get icon"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/mat/besticon",children:"mat/besticon"})}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,c.M)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},38088:(n,e,i)=>{var r=i(96651),c=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(n,e,i){var r,t={},l=null,h=null;for(r in void 0!==i&&(l=""+i),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(h=e.ref),e)o.call(e,r)&&!a.hasOwnProperty(r)&&(t[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===t[r]&&(t[r]=e[r]);return{$$typeof:c,type:n,key:l,ref:h,props:t,_owner:s.current}}e.Fragment=t,e.jsx=l,e.jsxs=l},2488:(n,e,i)=>{n.exports=i(38088)},62780:(n,e,i)=>{i.d(e,{I:()=>s,M:()=>o});var r=i(96651);const c={},t=r.createContext(c);function o(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:o(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);