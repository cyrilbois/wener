/*! For license information please see 8a61b690.09347143.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[74848],{51407:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var s=i(2488),l=i(62780);const t={id:"istio",title:"Istio \u670d\u52a1\u7f51\u683c"},r="Istio",d={id:"devops/kubernetes/platform/istio",title:"Istio \u670d\u52a1\u7f51\u683c",description:"- istio/istio",source:"@site/../notes/devops/kubernetes/platform/istio.md",sourceDirName:"devops/kubernetes/platform",slug:"/devops/kubernetes/platform/istio",permalink:"/notes/devops/kubernetes/platform/istio",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/platform/istio.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1637477347,formattedLastUpdatedAt:"Nov 21, 2021",frontMatter:{id:"istio",title:"Istio \u670d\u52a1\u7f51\u683c"},sidebar:"docs",previous:{title:"Istio Version",permalink:"/notes/devops/kubernetes/platform/istio-version"},next:{title:"KEDA",permalink:"/notes/devops/kubernetes/platform/keda"}},o={},c=[{value:"\u5e38\u7528\u914d\u7f6e\u9879",id:"\u5e38\u7528\u914d\u7f6e\u9879",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u81ea\u5b9a\u4e49\u5b89\u88c5",id:"\u81ea\u5b9a\u4e49\u5b89\u88c5",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"istio",children:"Istio"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/istio/istio",children:"istio/istio"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"connect, manage, and secure microservices by Google, IBM, and Lyft"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6ce8\u610f\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["ingressgateway \u9ed8\u8ba4\u9700\u8981 LoadBalaner - \u56e0\u6b64\u9700\u8981\u96c6\u7fa4\u80fd\u83b7\u53d6\u5230 IP - \u5728\u4e0d\u66f4\u6539\u914d\u7f6e\u7684\u524d\u63d0\u4e0b\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"../network/metallb",children:"metallb"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u67b6\u6784\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6570\u636e\u5c42\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u63a7\u5236\u670d\u52a1\u4e4b\u95f4\u7684\u7f51\u7edc\u901a\u4fe1"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u63a7\u5236\u5c42\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7ba1\u7406\u914d\u7f6e\u8def\u7531"}),"\n",(0,s.jsx)(n.li,{children:"\u914d\u7f6e\u7b56\u7565\u548c\u91c7\u96c6"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u7ec4\u4ef6\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Envoy \u4ee3\u7406/Sidecar\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u52a8\u6001\u670d\u52a1\u53d1\u73b0"}),"\n",(0,s.jsx)(n.li,{children:"\u8d1f\u8f7d\u5747\u8861"}),"\n",(0,s.jsx)(n.li,{children:"TLS \u7ec8\u6b62"}),"\n",(0,s.jsx)(n.li,{children:"HTTP/2 gRPC \u4ee3\u7406"}),"\n",(0,s.jsx)(n.li,{children:"\u7194\u65ad"}),"\n",(0,s.jsx)(n.li,{children:"\u5065\u5eb7\u68c0\u67e5"}),"\n",(0,s.jsx)(n.li,{children:"\u9636\u6bb5\u53d1\u5e03 - \u767e\u5206\u6bd4\u6d41\u91cf\u5207\u5206"}),"\n",(0,s.jsx)(n.li,{children:"\u9519\u8bef\u6ce8\u5165"}),"\n",(0,s.jsx)(n.li,{children:"\u6307\u6807\u76d1\u63a7"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Mixer - \u7b56\u7565\u548c\u8fdc\u7a0b\u63a7\u5236"}),"\n",(0,s.jsxs)(n.li,{children:["Pilot - \u914d\u5408 Envoy \u5de5\u4f5c\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u670d\u52a1\u53d1\u73b0"}),"\n",(0,s.jsx)(n.li,{children:"\u6d41\u91cf\u7ba1\u7406 - A/B \u6d4b\u8bd5\u3001\u7070\u5ea6\u53d1\u5e03"}),"\n",(0,s.jsx)(n.li,{children:"\u5f39\u6027 - \u8d85\u65f6\u63a7\u5236\u3001\u91cd\u8bd5\u3001\u7194\u65ad"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Citadel\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u670d\u52a1\u5230\u670d\u52a1\u3001\u670d\u52a1\u5230\u7528\u6237 \u9274\u6743"}),"\n",(0,s.jsx)(n.li,{children:"\u53ef\u5c06\u7f51\u683c\u670d\u52a1\u5185\u7684\u672a\u52a0\u5bc6\u901a\u4fe1\u5347\u7ea7\u4e3a\u52a0\u5bc6\u901a\u4fe1"}),"\n",(0,s.jsx)(n.li,{children:"\u63a7\u5236\u8c01\u80fd\u8bbf\u95ee\u4ec0\u4e48 - \u800c\u4e0d\u662f\u7b80\u5355\u7684\u4f9d\u8d56\u5e95\u5c42\u7684 IP \u9650\u5236"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Galley\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u914d\u7f6e\u6821\u9a8c\u3001\u8bfb\u53d6\u3001\u5904\u7406\u5206\u53d1"}),"\n",(0,s.jsx)(n.li,{children:"\u5c06\u5e95\u5c42\u7cfb\u7edf\u7684\u914d\u7f6e(\u4f8b\u5982 k8s)\u5e94\u7528\u5230 istio \u4f53\u7cfb\u4e2d"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u8bbe\u8ba1\u76ee\u6807\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6700\u5927\u7684\u900f\u660e\u6027"}),"\n",(0,s.jsx)(n.li,{children:"\u6269\u5c55\u6027"}),"\n",(0,s.jsx)(n.li,{children:"\u4fbf\u643a\u6027 - \u964d\u4f4e\u5bf9\u5e95\u5c42\u7684\u611f\u77e5\u3001\u8fd0\u884c\u5728\u4efb\u4f55\u4e91\u4e0a"}),"\n",(0,s.jsx)(n.li,{children:"\u7edf\u4e00\u7684\u7b56\u7565\u63a7\u5236"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u7ec4\u4ef6\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"base"}),"\n",(0,s.jsx)(n.li,{children:"pilot"}),"\n",(0,s.jsx)(n.li,{children:"proxy"}),"\n",(0,s.jsx)(n.li,{children:"telemetry"}),"\n",(0,s.jsx)(n.li,{children:"policy"}),"\n",(0,s.jsx)(n.li,{children:"ingressGateways"}),"\n",(0,s.jsx)(n.li,{children:"egressGateways"}),"\n",(0,s.jsx)(n.li,{children:"cni"}),"\n",(0,s.jsxs)(n.li,{children:["istiod\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u670d\u52a1\u53d1\u73b0"}),"\n",(0,s.jsx)(n.li,{children:"\u914d\u7f6e\u7ba1\u7406"}),"\n",(0,s.jsx)(n.li,{children:"\u8bc1\u4e66\u7ba1\u7406"}),"\n",(0,s.jsx)(n.li,{children:"pilot citadel galley"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://istio.io/latest/docs/ops/deployment/architecture/",children:"\u67b6\u6784"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://istio.io/latest/docs/ops/deployment/performance-and-scalability/",children:"Performance and Scalability"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["envoy\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"0.35 vCPU, 40 MB / 1000 rps"}),"\n",(0,s.jsx)(n.li,{children:"+2.65 ms 90% latency"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"istio-telemetry - 0.6 vCPU / 1000 mesh-wide requests / second for deployments that use Mixer."}),"\n",(0,s.jsx)(n.li,{children:"pilot - 1 vCPU, 1.5 GB"}),"\n",(0,s.jsx)(n.li,{children:"istiod - 1 vCPU, 1.5 GB - 1000 services, 2000 sidecars"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u8d44\u6e90\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u81f3\u5c11\u51c6\u5907 4 CPU 8G"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://engineering.hellofresh.com/ff4c26844bfb",children:"Everything We Learned Running Istio In Production \u2014 Part 2"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.giantswarm.io/guides/deploying-istio/",children:"How to deploy Istio in your Cluster"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5e38\u7528\u914d\u7f6e\u9879",children:"\u5e38\u7528\u914d\u7f6e\u9879"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u914d\u7f6e"}),(0,s.jsx)(n.th,{children:"\u503c"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"values.global.mtls.enabled"}),(0,s.jsx)(n.td,{children:"mTLS - \u4e0d\u5efa\u8bae\u5f00\u542f"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6e\u5217\u8868\n# demo empty minimal preview remote default\n# https://istio.io/latest/docs/setup/additional-setup/config-profiles/\nistioctl profile list\n\n# \u67e5\u770b\u914d\u7f6e\u7684\u5185\u5bb9\n# \u6240\u6709\u7684\u9009\u9879\u53ef\u4ee5\u5728 apply \u7684\u65f6\u5019\u4f7f\u7528 set \u4fee\u6539\nistioctl profile dump demo\n# \u67e5\u770b\u67d0\u9879\u914d\u7f6e\nistioctl profile dump --config-path trafficManagement.components.pilot demo\n\n# \u5b89\u88c5 demo \u914d\u7f6e\n# \u53ef\u9009 default\tdemo\tminimal\tsds\tremote\n# https://istio.io/docs/setup/additional-setup/config-profiles/\nistioctl manifest apply --set profile=demo\n\n# \u67e5\u770b\u5b89\u88c5\u7684\u670d\u52a1\nkubectl get svc -n istio-system\n\n# \u4e3a\u7a7a\u95f4\u5f00\u542f\u6ce8\u5165\nkubectl label namespace default istio-injection=enabled\n# \u6216\u8005\u5728\u521b\u5efa\u5e94\u7528\u7684\u65f6\u5019\u914d\u7f6e\u6ce8\u5165\nkubectl create -n <namespace> -f <app-spec>.yaml\n\n# \u624b\u52a8\u6ce8\u5165\nistioctl kube-inject -f <app-spec>.yaml | kubectl apply -f -\n\n# \u5378\u8f7d\nistioctl manifest generate --set profile=demo | kubectl delete -f -\n# \u5220\u9664\u7a7a\u95f4\nkubectl delete namespace istio-system\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u5b89\u88c5",children:"\u81ea\u5b9a\u4e49\u5b89\u88c5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u53ef\u4ee5\u751f\u6210 Manifest \u7136\u540e kubectk \u5b89\u88c5 - \u4e5f\u53ef\u4ee5\u770b\u5230\u505a\u4e86\u4ec0\u4e48\nistioctl manifest generate\n\nistioctl manifest generate > istio-manifest.yaml\n# \u53ef\u4ee5\u9a8c\u8bc1\u914d\u7f6e\nistioctl verify-install -f istio-manifest.yaml\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},38088:(e,n,i)=>{var s=i(96651),l=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,i){var s,t={},c=null,a=null;for(s in void 0!==i&&(c=""+i),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)r.call(n,s)&&!o.hasOwnProperty(s)&&(t[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===t[s]&&(t[s]=n[s]);return{$$typeof:l,type:e,key:c,ref:a,props:t,_owner:d.current}}n.Fragment=t,n.jsx=c,n.jsxs=c},2488:(e,n,i)=>{e.exports=i(38088)},62780:(e,n,i)=>{i.d(n,{I:()=>d,M:()=>r});var s=i(96651);const l={},t=s.createContext(l);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);