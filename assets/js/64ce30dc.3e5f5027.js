/*! For license information please see 64ce30dc.3e5f5027.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[84492],{29232:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var t=n(2488),r=n(62780);const o={tags:["Kubernetes"]},i="JuiceFS on Kubernetes",c={id:"service/storage/juicefs/juicefs-k8s",title:"JuiceFS on Kubernetes",description:"- CSI",source:"@site/../notes/service/storage/juicefs/juicefs-k8s.md",sourceDirName:"service/storage/juicefs",slug:"/service/storage/juicefs/k8s",permalink:"/notes/service/storage/juicefs/k8s",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/storage/juicefs/juicefs-k8s.md",tags:[{label:"Kubernetes",permalink:"/notes/tags/kubernetes"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1709090151,formattedLastUpdatedAt:"Feb 28, 2024",frontMatter:{tags:["Kubernetes"]},sidebar:"docs",previous:{title:"JuiceFS FAQ",permalink:"/notes/service/storage/juicefs/faq"},next:{title:"MinIO",permalink:"/notes/service/storage/minio/"}},a={},u=[];function l(e){const s={a:"a",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"juicefs-on-kubernetes",children:"JuiceFS on Kubernetes"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"CSI"}),"\n",(0,t.jsxs)(s.li,{children:["\u53ef\u4ee5\u914d\u7f6e pathPattern=",(0,t.jsx)(s.code,{children:'"${.PVC.namespace}-${.PVC.name}"'}),"\uff0c\u751f\u6210\u7684 pv \u540d\u5b57\u66f4\u6613\u8bfb"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Secret\nmetadata:\n  name: juicefs-secret\ntype: Opaque\nstringData:\n  name: <JUICEFS_NAME>\n  metaurl: <META_URL>\n  storage: s3\n  bucket: https://<BUCKET>.s3.<REGION>.amazonaws.com\n  access-key: <ACCESS_KEY>\n  secret-key: <SECRET_KEY>\n  # \u8bbe\u7f6e Mount Pod \u65f6\u533a\uff0c\u9ed8\u8ba4\u4e3a UTC\u3002\n  # envs: "{TZ: Asia/Shanghai}"\n  # \u5982\u9700\u5728 Mount Pod \u4e2d\u521b\u5efa\u6587\u4ef6\u7cfb\u7edf\uff0c\u4e5f\u53ef\u4ee5\u5c06\u66f4\u591a juicefs format \u53c2\u6570\u586b\u5165 format-options\u3002\n  # format-options: trash-days=1,block-size=4096\n\n---\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: juicefs\nprovisioner: csi.juicefs.com\nparameters:\n  csi.storage.k8s.io/provisioner-secret-name: juicefs-secret\n  csi.storage.k8s.io/provisioner-secret-namespace: default\n  csi.storage.k8s.io/node-publish-secret-name: juicefs-secret\n  csi.storage.k8s.io/node-publish-secret-namespace: default\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"/var/lib/juicefs/volume/PV_NAME"}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://juicefs.com/docs/csi/introduction/",children:"https://juicefs.com/docs/csi/introduction/"})}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},38088:(e,s,n)=>{var t=n(96651),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,s,n){var t,o={},u=null,l=null;for(t in void 0!==n&&(u=""+n),void 0!==s.key&&(u=""+s.key),void 0!==s.ref&&(l=s.ref),s)i.call(s,t)&&!a.hasOwnProperty(t)&&(o[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===o[t]&&(o[t]=s[t]);return{$$typeof:r,type:e,key:u,ref:l,props:o,_owner:c.current}}s.Fragment=o,s.jsx=u,s.jsxs=u},2488:(e,s,n)=>{e.exports=n(38088)},62780:(e,s,n)=>{n.d(s,{I:()=>c,M:()=>i});var t=n(96651);const r={},o=t.createContext(r);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);