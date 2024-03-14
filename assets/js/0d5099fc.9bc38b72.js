/*! For license information please see 0d5099fc.9bc38b72.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[62368],{19156:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=s(2488),r=s(62780);const l={title:"Kubernetest \u5b58\u50a8\u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},i="Kubernetest \u5b58\u50a8\u5e38\u89c1\u95ee\u9898",o={id:"devops/kubernetes/storage/k8s-storage-faq",title:"Kubernetest \u5b58\u50a8\u5e38\u89c1\u95ee\u9898",description:"OpenEBS vs Longhorn",source:"@site/../notes/devops/kubernetes/storage/k8s-storage-faq.md",sourceDirName:"devops/kubernetes/storage",slug:"/devops/kubernetes/storage/k8s-storage-faq",permalink:"/notes/devops/kubernetes/storage/k8s-storage-faq",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/storage/k8s-storage-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655970411,formattedLastUpdatedAt:"Jun 23, 2022",frontMatter:{title:"Kubernetest \u5b58\u50a8\u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},sidebar:"docs",previous:{title:"NFS",permalink:"/notes/devops/kubernetes/storage/k8s-nfs"},next:{title:"Local Path Provisioner",permalink:"/notes/devops/kubernetes/storage/local-path-provisioner"}},a={},d=[{value:"OpenEBS vs Longhorn",id:"openebs-vs-longhorn",level:2},{value:"pv \u5220\u9664\u4e0d\u4e86",id:"pv-\u5220\u9664\u4e0d\u4e86",level:2},{value:"volume already bound to a different claim",id:"volume-already-bound-to-a-different-claim",level:2},{value:"driver name driver.longhorn.io not found in the list of registered CSI drivers",id:"driver-name-driverlonghornio-not-found-in-the-list-of-registered-csi-drivers",level:2},{value:"\u8bbe\u7f6e\u9ed8\u8ba4 StorageClass",id:"\u8bbe\u7f6e\u9ed8\u8ba4-storageclass",level:2},{value:"failed to generate spec: path &quot;/&quot; is mounted on &quot;/&quot; but it is not a shared or slave mount",id:"failed-to-generate-spec-path--is-mounted-on--but-it-is-not-a-shared-or-slave-mount",level:2},{value:"subPath \u4f1a\u8986\u76d6\u539f\u6709\u5185\u5bb9",id:"subpath-\u4f1a\u8986\u76d6\u539f\u6709\u5185\u5bb9",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"kubernetest-\u5b58\u50a8\u5e38\u89c1\u95ee\u9898",children:"Kubernetest \u5b58\u50a8\u5e38\u89c1\u95ee\u9898"}),"\n",(0,t.jsx)(n.h2,{id:"openebs-vs-longhorn",children:"OpenEBS vs Longhorn"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4f18\u5148\u9009\u62e9 Longhorn - UI \u53cb\u597d"}),"\n",(0,t.jsx)(n.li,{children:"OpenEBS \u76ee\u524d\u5f00\u53d1\u6162 - \u652f\u6301\u591a\u79cd store \u7cbe\u529b\u5206\u6563"}),"\n"]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["OpenEBS\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Jiva \u6e90\u4e8e longhorn ",(0,t.jsx)(n.a,{href:"https://github.com/openebs/longhorn",children:"fork"}),"\uff0c\u5728\u4e00\u4e9b\u5b9e\u73b0\u4e0a\u6709\u5206\u6b67\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u76ee\u524d\u533a\u522b\u5df2\u7ecf\u975e\u5e38\u5927"}),"\n",(0,t.jsx)(n.li,{children:"\u5206\u6b67\u70b9: Control Plane functionality, iSCSI Target implementation, Quorum, Backup / Restore, UI"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["OpenEBS \u9664\u4e86 Jiva \u8fd8\u6709\u5176\u4ed6\u65b9\u5f0f\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u652f\u6301 localpath - localpv \u4e5f\u652f\u6301\u5f88\u591a provision \u65b9\u5f0f"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"\u4f7f\u7528\u66f4\u52a0\u7075\u6d3b/\u590d\u6742"}),"\n",(0,t.jsx)(n.li,{children:"\u652f\u6301\u66f4\u591a\u573a\u666f"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Longhorn\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u57fa\u4e8e iSCSI \u7684\u5206\u5e03\u5f0f\u5757\u5b58\u50a8 - \u5bf9 lan \u8981\u6c42\u9ad8"}),"\n",(0,t.jsx)(n.li,{children:"\u57fa\u4e8e NFS \u652f\u6301 RWX"}),"\n",(0,t.jsx)(n.li,{children:"\u4f7f\u7528\u7b80\u5355\uff0cUI \u53cb\u597d\uff0c\u65b9\u4fbf\u5907\u4efd"}),"\n",(0,t.jsxs)(n.li,{children:["\u5982\u679c\u9700\u8981 LocalPV \u53ef\u4f7f\u7528 - ",(0,t.jsx)(n.a,{href:"https://github.com/rancher/local-path-provisioner",children:"rancher/local-path-provisioner"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"K3S \u5185\u7f6e"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"OLTP \u6570\u636e\u5e93\u4e0d\u9002\u5408 OpenEBS/Longhorn \u5206\u5e03\u5f0f\u5b58\u50a8 - \u53ef\u8bbe\u7f6e\u597d\u5907\u4efd\u5b58\u50a8"}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"pv-\u5220\u9664\u4e0d\u4e86",children:"pv \u5220\u9664\u4e0d\u4e86"}),"\n",(0,t.jsx)(n.p,{children:"\u5c1d\u8bd5\u5220\u9664 finalizer"}),"\n",(0,t.jsx)(n.h2,{id:"volume-already-bound-to-a-different-claim",children:"volume already bound to a different claim"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# \u5982\u679c pvc \u4e0d\u5b58\u5728\u4e86\u4f46\u662f pv \u8fd8\u5728\uff0c\u65b0\u521b\u5efa pvc \u4e0d\u4f1a\u88ab\u7ed1\u5b9a\n# \u5c1d\u8bd5\u6e05\u9664 claimRef - \u8bbe\u7f6e\u4e3a null\nkubectl patch pv my-pv-name -p \'{"spec":{"claimRef": null}}\'\n'})}),"\n",(0,t.jsx)(n.h2,{id:"driver-name-driverlonghornio-not-found-in-the-list-of-registered-csi-drivers",children:"driver name driver.longhorn.io not found in the list of registered CSI drivers"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"csi \u63d2\u4ef6\u76ee\u5f55 /var/lib/kubelet/plugins_registry"}),"\n",(0,t.jsx)(n.li,{children:"hostpath /var/lib/kubelet/plugins/csi-hostpath"}),"\n",(0,t.jsx)(n.li,{children:"/var/lib/kubelet/plugins"}),"\n",(0,t.jsx)(n.li,{children:"k3s \u53ef\u80fd\u76ee\u5f55 /var/lib/rancher/k3s/agent/kubelet"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-csi/csi-driver-host-path/issues/71",children:"kubernetes-csi/csi-driver-host-path#71"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bbe\u7f6e\u9ed8\u8ba4-storageclass",children:"\u8bbe\u7f6e\u9ed8\u8ba4 StorageClass"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'kubectl get storageclass\n\n# \u53d6\u6d88 sc \u7684\u9ed8\u8ba4\u503c\nkubectl patch storageclass local-path -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}\'\n# \u8bbe\u7f6e\u9ed8\u8ba4\nkubectl patch storageclass longhorn -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}\'\n'})}),"\n",(0,t.jsx)(n.h2,{id:"failed-to-generate-spec-path--is-mounted-on--but-it-is-not-a-shared-or-slave-mount",children:'failed to generate spec: path "/" is mounted on "/" but it is not a shared or slave mount'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mount --make-rshared /\n"})}),"\n",(0,t.jsx)(n.h2,{id:"subpath-\u4f1a\u8986\u76d6\u539f\u6709\u5185\u5bb9",children:"subPath \u4f1a\u8986\u76d6\u539f\u6709\u5185\u5bb9"}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b\u5982:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"volumeMounts:\n  - name: data\n    mountPath: /etc/app/\n    subPath: config.yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u52a0\u5165\u6302\u8f7d\u524d /etc/app \u8fd8\u6709\u5176\u4ed6\u5185\u5bb9\uff0c\u4f46\u6302\u8f7d\u540e\u53ea\u6709 config.yaml\uff0c \u4f46\u5982\u679c\u6302\u8f7d\u8def\u5f84\u4e3a\u6587\u4ef6\u5219\u4e0d\u4f1a\u8986\u76d6\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"volumeMounts:\n  - name: data\n    mountPath: /etc/app/config.yaml\n    subPath: config.yaml\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},38088:(e,n,s)=>{var t=s(96651),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var t,l={},d=null,c=null;for(t in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,t)&&!a.hasOwnProperty(t)&&(l[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===l[t]&&(l[t]=n[t]);return{$$typeof:r,type:e,key:d,ref:c,props:l,_owner:o.current}}n.Fragment=l,n.jsx=d,n.jsxs=d},2488:(e,n,s)=>{e.exports=s(38088)},62780:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>i});var t=s(96651);const r={},l=t.createContext(r);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);