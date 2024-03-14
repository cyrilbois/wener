/*! For license information please see 819500ce.00c3b164.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[94872],{29304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=n(2488),l=n(62780);const a={title:"earthly"},o="earthly",s={id:"dev/build/earthly",title:"earthly",description:"- earthly/earthly",source:"@site/../notes/dev/build/earthly.md",sourceDirName:"dev/build",slug:"/dev/build/earthly",permalink:"/notes/dev/build/earthly",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/build/earthly.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1634309581,formattedLastUpdatedAt:"Oct 15, 2021",frontMatter:{title:"earthly"},sidebar:"docs",previous:{title:"distcc",permalink:"/notes/dev/build/distcc"},next:{title:"just",permalink:"/notes/dev/build/just"}},d={},i=[];function c(e){const t={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"earthly",children:"earthly"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/earthly/earthly",children:"earthly/earthly"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Makefile + Dockerfile = Earthfile"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# macOS\nbrew install earthly/earthly/earthly && earthly bootstrap\n# macOS manual\ncurl -LO https://github.com/earthly/earthly/releases/download/v0.5.24/earthly-darwin-amd64\nchmod +x earthly-darwin-amd64\nmv earthly-darwin-amd64 ~/go/bin/earthly\n\nearthly +docker\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Earthfile",children:'FROM golang:alpine\nWORKDIR /go-example\n\ndeps:\n    COPY go.mod go.sum ./\n    RUN go mod download\n    # Output these back in case go mod download changes them.\n    SAVE ARTIFACT go.mod AS LOCAL go.mod\n    SAVE ARTIFACT go.sum AS LOCAL go.sum\n\nbuild:\n    FROM +deps\n    COPY main.go .\n    RUN go build -o build/go-example main.go\n    SAVE ARTIFACT build/go-example /go-example AS LOCAL build/go-example\n\ndocker:\n    COPY +build/go-example .\n    ENTRYPOINT ["/go-example/go-example"]\n    SAVE IMAGE go-example:latest\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"~/.earthly/config.yml"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"global:\n  # ~/.earthly/install_id\n  disable_analytics: true\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.earthly.dev/docs/earthly-config",children:"https://docs.earthly.dev/docs/earthly-config"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},38088:(e,t,n)=>{var r=n(96651),l=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,a={},i=null,c=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!d.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:l,type:e,key:i,ref:c,props:a,_owner:s.current}}t.Fragment=a,t.jsx=i,t.jsxs=i},2488:(e,t,n)=>{e.exports=n(38088)},62780:(e,t,n)=>{n.d(t,{I:()=>s,M:()=>o});var r=n(96651);const l={},a=r.createContext(l);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);