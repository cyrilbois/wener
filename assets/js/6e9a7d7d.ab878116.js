/*! For license information please see 6e9a7d7d.ab878116.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[33888],{92032:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(2488),s=t(62780);const i={title:"Registry"},o="\u5bb9\u5668\u6ce8\u518c\u4e2d\u5fc3",c={id:"devops/container/container-registry",title:"Registry",description:"- DockerHub",source:"@site/../notes/devops/container/container-registry.md",sourceDirName:"devops/container",slug:"/devops/container/registry",permalink:"/notes/devops/container/registry",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/container/container-registry.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1680070123,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{title:"Registry"},sidebar:"docs",previous:{title:"Container Image",permalink:"/notes/devops/container/image"},next:{title:"containerd",permalink:"/notes/devops/container/containerd"}},a={},l=[];function d(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u5bb9\u5668\u6ce8\u518c\u4e2d\u5fc3",children:"\u5bb9\u5668\u6ce8\u518c\u4e2d\u5fc3"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["DockerHub\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u533f\u540d\u7528\u6237 100 pull/6h/ip"}),"\n",(0,r.jsx)(n.li,{children:"\u8ba4\u8bc1\u7528\u6237 200 pull/6h/ip"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["quay.io\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u76ee\u524d\u6ca1\u6709\u9650\u5236"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://quay.io/plans/",children:"https://quay.io/plans/"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'TOKEN=$(curl --user \'username:password\' "https://auth.docker.io/token?service=registry.docker.io&scope=repository:ratelimitpreview/test:pull" | jq -r .token)\ncurl --head -H "Authorization: Bearer $TOKEN" https://registry-1.docker.io/v2/ratelimitpreview/test/manifests/latest\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"/etc/containers/registries.conf"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'[[registry]]\nprefix=" docker.io/library"\nlocation="quay.io/libpod"\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/containers/image/blob/main/docs/containers-registries.conf.5.md",children:"https://github.com/containers/image/blob/main/docs/containers-registries.conf.5.md"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},38088:(e,n,t)=>{var r=t(96651),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,i={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,r)&&!a.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:d,props:i,_owner:c.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>o});var r=t(96651);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);