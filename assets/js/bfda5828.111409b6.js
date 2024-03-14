/*! For license information please see bfda5828.111409b6.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[77400],{90300:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=s(2488),t=s(62780);const l={title:"K8S \u4f7f\u7528\u7ecf\u9a8c"},i="K8S Story",o={id:"devops/kubernetes/k8s-story",title:"K8S \u4f7f\u7528\u7ecf\u9a8c",description:"Kubernetes is a platform for building platforms. It's a better place to start: not the endgame.",source:"@site/../notes/devops/kubernetes/k8s-story.md",sourceDirName:"devops/kubernetes",slug:"/devops/kubernetes/story",permalink:"/notes/devops/kubernetes/story",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/k8s-story.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1647510739,formattedLastUpdatedAt:"Mar 17, 2022",frontMatter:{title:"K8S \u4f7f\u7528\u7ecf\u9a8c"},sidebar:"docs",previous:{title:"\u6211\u7684 K8S \u5b9e\u8df5",permalink:"/notes/devops/kubernetes/my-practice"},next:{title:"Kubernetes \u7248\u672c",permalink:"/notes/devops/kubernetes/version"}},d={},c=[{value:"\u4e24\u5e74 K8S \u5fc3\u5f97",id:"\u4e24\u5e74-k8s-\u5fc3\u5f97",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"k8s-story",children:"K8S Story"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Kubernetes is a platform for building platforms. It's a better place to start: not the endgame."}),"\n",(0,r.jsx)(n.p,{children:"-- Kelsey Hightower"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.eficode.com/blog/the-future-of-kubernetes-and-why-developers-should-look-beyond-kubernetes-in-2022",children:"The future of Kubernetes \u2013 and why developers should look beyond Kubernetes in 2022"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4e24\u5e74-k8s-\u5fc3\u5f97",children:"\u4e24\u5e74 K8S \u5fc3\u5f97"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u9009\u7528\u4e86 Traefik + Cert-Manager + Ext-DNS"}),"\n",(0,r.jsx)(n.li,{children:"\u7528\u4e86 Prometheus-Operator \u4f46\u89c9\u5f97 Thanos \u4e5f\u5f88\u597d"}),"\n",(0,r.jsxs)(n.li,{children:["\u63a8\u5d07 ",(0,r.jsx)(n.a,{href:"https://www.gitops.tech/",children:"GitOps"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u9009\u7528\u4e86 ",(0,r.jsx)(n.a,{href:"https://argoproj.github.io/argo-cd/",children:"ArgoCD"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/fluxcd/flux",children:"FluxCD"})}),"\n",(0,r.jsxs)(n.li,{children:["\u65e0\u6cd5\u5b58\u50a8\u5230 Git \u7684\u8003\u8651\u4f7f\u7528 ",(0,r.jsx)(n.a,{href:"https://velero.io/",children:"velero"})," \u5907\u4efd\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4f8b\u5982 cert-manager \u8bc1\u4e66"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u89c9\u5f97\u5355\u4e2a Git \u4ed3\u5e93\u597d\uff0c\u4f46\u662f\u5e0c\u671b\u80fd\u5207\u5206\u4e3a\u591a\u4e2a ArgoCD \u5e94\u7528"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u63a8\u8350\u591a\u4f7f\u7528 Operator \u6a21\u5f0f\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5916\u90e8\u8d44\u6e90\u4ea4\u4e92"}),"\n",(0,r.jsx)(n.li,{children:"\u5e94\u7528\u72b6\u6001 - \u4f8b\u5982\u5e94\u7528 SQL \u8fc1\u79fb"}),"\n",(0,r.jsxs)(n.li,{children:["\u53ef\u4ee5\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"https://book.kubebuilder.io/",children:"kubebuilder"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Secret \u7ba1\u7406\u4f9d\u7136\u56f0\u96be\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u53ef\u4ee5\u5c1d\u8bd5 ",(0,r.jsx)(n.a,{href:"https://github.com/mozilla/sops",children:"mozilla/sops"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["K8S \u539f\u751f CI \u548c\u65e5\u5fd7\u5206\u6790\u4f9d\u7136\u4e0d\u592a\u660e\u786e\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u539f\u751f CI\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"JenkinsX \u63a5\u8fd1\u4f46\u8fc7\u4e8e\u590d\u6742"}),"\n",(0,r.jsx)(n.li,{children:"Tekton Pipelines \u548c Argo Workflows \u90fd\u63a5\u8fd1\u539f\u751f\uff0c\u4f46\u65e0\u6cd5\u66b4\u9732\u7ed9\u56e2\u961f"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u65e5\u5fd7\u5206\u6790\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://fluentbit.io/",children:"fluentbit"})," \u4f5c\u4e3a DaemonSet \u91c7\u96c6\u5230 ",(0,r.jsx)(n.a,{href:"https://www.fluentd.org/",children:"fluentd"})," Pod"]}),"\n",(0,r.jsx)(n.li,{children:"\u5b58\u50a8\u9009\u7528 ES \u6216 Loki"}),"\n",(0,r.jsxs)(n.li,{children:["Kibana\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5f00\u6e90\u7248\u7528\u6237\u8ba4\u8bc1\u548c\u6bcf\u4e2a\u7528\u6237\u7684\u6743\u9650\u90fd\u4e0d\u5bb9\u6613\u7ba1\u7406"}),"\n",(0,r.jsx)(n.li,{children:"\u5206\u6790\u529f\u80fd\u5f3a"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Grafana\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u65e5\u5fd7\u5206\u6790\u529f\u80fd\u975e\u5e38\u5f31"}),"\n",(0,r.jsx)(n.li,{children:"substring searching and per-line tag searching"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://coderanger.net/lessons-learned/",children:"Lessons Learned From Two Years Of Kubernetes"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},38088:(e,n,s)=>{var r=s(96651),t=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var r,l={},c=null,h=null;for(r in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(h=n.ref),n)i.call(n,r)&&!d.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===l[r]&&(l[r]=n[r]);return{$$typeof:t,type:e,key:c,ref:h,props:l,_owner:o.current}}n.Fragment=l,n.jsx=c,n.jsxs=c},2488:(e,n,s)=>{e.exports=s(38088)},62780:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>i});var r=s(96651);const t={},l=r.createContext(t);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);