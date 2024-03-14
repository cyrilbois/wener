/*! For license information please see e00cc864.7965db12.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[46376],{3540:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(2488),r=t(62780);const i={title:"Minio ACL"},s="Minio ACL",a={id:"service/storage/minio/minio-acl",title:"Minio ACL",description:"\u53ea\u5141\u8bb8\u8bbf\u95ee\u5355\u4e2a Bucket",source:"@site/../notes/service/storage/minio/minio-acl.md",sourceDirName:"service/storage/minio",slug:"/service/storage/minio/acl",permalink:"/notes/service/storage/minio/acl",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/storage/minio/minio-acl.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1675652392,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"Minio ACL"},sidebar:"docs",previous:{title:"MinIO",permalink:"/notes/service/storage/minio/"},next:{title:"Minio FAQ",permalink:"/notes/service/storage/minio/faq"}},c={},l=[{value:"\u53ea\u5141\u8bb8\u8bbf\u95ee\u5355\u4e2a Bucket",id:"\u53ea\u5141\u8bb8\u8bbf\u95ee\u5355\u4e2a-bucket",level:2},{value:"\u57fa\u4e8e Bucket \u524d\u7f00\u9650\u5236\u8bbf\u95ee",id:"\u57fa\u4e8e-bucket-\u524d\u7f00\u9650\u5236\u8bbf\u95ee",level:2},{value:"writeonly",id:"writeonly",level:2},{value:"readonly",id:"readonly",level:2},{value:"readwrite",id:"readwrite",level:2},{value:"ConsoleAdmin",id:"consoleadmin",level:2},{value:"diagnostics",id:"diagnostics",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"minio-acl",children:"Minio ACL"}),"\n",(0,o.jsx)(n.h2,{id:"\u53ea\u5141\u8bb8\u8bbf\u95ee\u5355\u4e2a-bucket",children:"\u53ea\u5141\u8bb8\u8bbf\u95ee\u5355\u4e2a Bucket"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["s3:*"],\n      "Resource": ["arn:aws:s3:::demo/*"]\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u57fa\u4e8e-bucket-\u524d\u7f00\u9650\u5236\u8bbf\u95ee",children:"\u57fa\u4e8e Bucket \u524d\u7f00\u9650\u5236\u8bbf\u95ee"}),"\n",(0,o.jsx)(n.p,{children:"\u5b9e\u73b0\u7c7b\u4f3c\u591a\u79df\u6237\u80fd\u529b"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["s3:*"],\n      "Resource": ["arn:aws:s3:::demo-*"]\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"writeonly",children:"writeonly"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["s3:PutObject"],\n      "Resource": ["arn:aws:s3:::*"]\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"readonly",children:"readonly"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["s3:GetBucketLocation", "s3:GetObject"],\n      "Resource": ["arn:aws:s3:::*"]\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"readwrite",children:"readwrite"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["s3:*"],\n      "Resource": ["arn:aws:s3:::*"]\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"consoleadmin",children:"ConsoleAdmin"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["admin:*"]\n    },\n    {\n      "Effect": "Allow",\n      "Action": ["s3:*"],\n      "Resource": ["arn:aws:s3:::*"]\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"diagnostics",children:"diagnostics"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": [\n        "admin:OBDInfo",\n        "admin:Profiling",\n        "admin:ServerInfo",\n        "admin:ServerTrace",\n        "admin:TopLocksInfo",\n        "admin:ConsoleLog"\n      ],\n      "Resource": ["arn:aws:s3:::*"]\n    }\n  ]\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},38088:(e,n,t)=>{var o=t(96651),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var o,i={},l=null,d=null;for(o in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,o)&&!c.hasOwnProperty(o)&&(i[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===i[o]&&(i[o]=n[o]);return{$$typeof:r,type:e,key:l,ref:d,props:i,_owner:a.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>s});var o=t(96651);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);