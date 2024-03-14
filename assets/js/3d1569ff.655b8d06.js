/*! For license information please see 3d1569ff.655b8d06.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[20168],{25880:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>t,metadata:()=>d,toc:()=>h});var r=s(2488),i=s(62780);const t={title:"Kubernetes Networking Awesome",tags:["Awesome"]},l="Kubernetes Networking Awesome",d={id:"devops/kubernetes/network/k8s-network-awesome",title:"Kubernetes Networking Awesome",description:"- kube-router",source:"@site/../notes/devops/kubernetes/network/k8s-network-awesome.md",sourceDirName:"devops/kubernetes/network",slug:"/devops/kubernetes/network/k8s-network-awesome",permalink:"/notes/devops/kubernetes/network/k8s-network-awesome",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/network/k8s-network-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1668383335,formattedLastUpdatedAt:"Nov 13, 2022",frontMatter:{title:"Kubernetes Networking Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"Kubernetes Ingress",permalink:"/notes/devops/kubernetes/network/k8s-ingress"},next:{title:"K8S Network FAQ",permalink:"/notes/devops/kubernetes/network/k8s-network-faq"}},c={},h=[{value:"Ingress &amp; Gateway",id:"ingress--gateway",level:2},{value:"CNI",id:"cni",level:2},{value:"Overlay",id:"overlay",level:2}];function x(n){const e={a:"a",admonition:"admonition",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"kubernetes-networking-awesome",children:"Kubernetes Networking Awesome"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"kube-router"}),"\n",(0,r.jsx)(e.li,{children:"metallb"}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://github.com/k8snetworkplumbingwg",children:"k8snetworkplumbingwg"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/k8snetworkplumbingwg/multus-cni",children:"multus-cni"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://github.com/squat/kilo",children:"squat/kilo"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"multi-cloud network overlay built on WireGuard and designed for Kubernetes (k8s + wg = kg)"}),"\n",(0,r.jsx)(e.li,{children:"kilo + vcluster - \u591a\u96c6\u7fa4"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://rancher.com/blog/2019/2019-03-21-comparing-kubernetes-cni-providers-flannel-calico-canal-and-weave/",children:"Comparing Kubernetes CNI Providers: Flannel, Calico, Canal, and Weave"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"ingress--gateway",children:"Ingress & Gateway"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Ingress V2 -> Gateway"}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/#additional-controllers",children:"Ingress Controller"})," \u5b9e\u73b0"]}),"\n"]}),"\n",(0,r.jsx)(e.admonition,{title:"Ingress \u5b9e\u73b0\u60c5\u51b5",type:"tip",children:(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\u9488\u5bf9\u5b9e\u73b0 Ingress API\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u901a\u5e38\u4e0d\u66b4\u9732\u989d\u5916\u7684 CDR"}),"\n",(0,r.jsx)(e.li,{children:"\u4f8b\u5982 ingress-nginx"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u57fa\u4e8e\u73b0\u6709 Web \u670d\u52a1\u652f\u6301 Ingress\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u901a\u5e38\u652f\u6301\u81ea\u5b9a\u4e49 CDR"}),"\n",(0,r.jsx)(e.li,{children:"\u4f8b\u5982 traefik"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u57fa\u4e8e\u73b0\u6709 \u5e73\u53f0 \u652f\u6301 Ingress\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u901a\u5e38\u652f\u6301 \u63a5\u53e3 \u64cd\u4f5c\u89c4\u5219"}),"\n",(0,r.jsx)(e.li,{children:"\u670d\u52a1\u6709\u72b6\u6001"}),"\n",(0,r.jsx)(e.li,{children:"\u4f8b\u5982 kong, apisix"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(e.admonition,{title:"Ingress \u9009\u62e9",type:"tip",children:(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u6700\u597d\u9009\u62e9\u7b80\u5355\u5b9e\u7528\u719f\u6089\u7684\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4f8b\u5982 \u5df2\u77e5\u600e\u4e48\u5b9a\u4e49\u4e00\u4e9b\u7279\u6b8a\u89c4\u5219"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u9009\u62e9\u8f7b\u91cf\uff0c\u529f\u80fd\u5355\u4e00\u7684\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4f8b\u5982 \u8bc1\u4e66\u5c3d\u91cf\u914d\u5408 cert-manager \u4f7f\u7528"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u9700\u8981\u652f\u6301\u590d\u6742 API \u7f51\u5173\u573a\u666f\u6700\u597d\u5229\u7528\u591a IngressClass \u6216 \u901a\u8fc7\u670d\u52a1 \u8fdb\u884c\u7ee7\u627f\u4f7f\u7528\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4f8b\u5982 \u4f7f\u7528 kong \u6216 apisix \u7edf\u4e00\u7ba1\u7406 API - ingress \u6267\u884c \u7f51\u5173\u670d\u52a1"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"\u5c06 Ingress \u770b\u4f5c\u662f\u53cd\u5411\u4ee3\u7406\u7684\u66ff\u4ee3"}),"\n",(0,r.jsx)(e.li,{children:"\u63a8\u8350 - ingress-nginx"}),"\n",(0,r.jsxs)(e.li,{children:["IngressClass \u53ef\u914d\u5408\u4f7f\u7528\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"HAProxy \u64c5\u957f TLS\u3001SNI\u3001LB"}),"\n",(0,r.jsx)(e.li,{children:"Nginx \u64c5\u957f \u53cd\u5411\u4ee3\u7406"}),"\n",(0,r.jsx)(e.li,{children:"Envoy \u64c5\u957f \u534f\u8bae\u611f\u77e5\u3001\u5b9a\u5236\u6027\u9ad8"}),"\n",(0,r.jsx)(e.li,{children:"\u81ea\u5b9a\u4e49\u7f51\u5173 \u64c5\u957f API \u7ba1\u7406\u3001\u96c6\u6210\u3001Web \u53ef\u89c6\u5316\u7ba1\u7406"}),"\n"]}),"\n"]}),"\n"]})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"ingress"}),(0,r.jsx)(e.th,{children:"stars"}),(0,r.jsx)(e.th,{children:"based on"}),(0,r.jsx)(e.th,{children:"ingress"}),(0,r.jsx)(e.th,{children:"gateway"}),(0,r.jsx)(e.th,{children:"governance"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/notes/devops/kubernetes/network/nginx-ingress",children:"ingress-nginx"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.img,{src:"https://img.shields.io/github/stars/kubernetes/ingress-nginx",alt:"ingress-nginx-stars"})}),(0,r.jsx)(e.td,{children:"nginx"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe2"}),(0,r.jsx)(e.td,{children:"\ud83d\udd34"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/notes/devops/kubernetes/network/haproxy-ingress",children:"haproxy-ingress"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.img,{src:"https://img.shields.io/github/stars/jcmoraisjr/haproxy-ingress",alt:"haproxy-ingress-stars"})}),(0,r.jsx)(e.td,{children:"haproxy"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe2"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe2"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/haproxytech/kubernetes-ingress",children:"haproxytech-ingress"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.img,{src:"https://img.shields.io/github/stars/haproxytech/kubernetes-ingress",alt:"haproxytech-ingress-stars"})}),(0,r.jsx)(e.td,{children:"haproxy"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe2"}),(0,r.jsx)(e.td,{children:"\ud83d\udd34"}),(0,r.jsx)(e.td,{children:"haproxytech"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"istio"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"envoy"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe2"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe2"}),(0,r.jsx)(e.td,{children:"CNCF/google"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/projectcontour/contour",children:"contour"})}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"envoy"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe2"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe2"}),(0,r.jsx)(e.td,{children:"CNCF"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/notes/devops/kubernetes/network/traefik-ingress",children:"traefik"})}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"traefik"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe2"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe2"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/solo-io/gloo",children:"gloo"})}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"envoy"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe2"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe1"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/emissary-ingress/emissary",children:"Emissary-Ingress"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.img,{src:"https://img.shields.io/github/stars/emissary-ingress/emissary",alt:"emissary-ingress-stars"})}),(0,r.jsx)(e.td,{children:"envoy"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe2"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe2"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/Kong/kubernetes-ingress-controller",children:"kong"})}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"nginx/kong"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe2"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe1"}),(0,r.jsx)(e.td,{children:"Kong"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/apache/apisix-ingress-controller",children:"apisix"})}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"nginx/apisix"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe2"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe1"}),(0,r.jsx)(e.td,{children:"Apache"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/citrix/citrix-k8s-ingress-controller",children:"citrix"})}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Citrix ADC"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe2"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/saarasio/enroute",children:"enroute"})}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"envoy"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe2"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"CNCF/saarasio"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/megaease/easegress",children:"easegress"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.img,{src:"https://img.shields.io/github/stars/megaease/easegress",alt:"easegress-stars"})}),(0,r.jsx)(e.td,{children:"easegress"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe2"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"megaease"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/voyagermesh/voyager",children:"voyager"})}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"haproxy"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe2"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"AppsCode"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/TykTechnologies/tyk-operator",children:"tyk"})}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"typ"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe2"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/zalando/skipper",children:"skipper"})}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"skipper"}),(0,r.jsx)(e.td,{children:"\ud83d\udfe2"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]})]})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["ingress-nginx\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["ssl passthrough \u6027\u80fd\u95ee\u9898 ",(0,r.jsx)(e.a,{href:"https://github.com/kubernetes/ingress-nginx/issues/7827",children:"ingress-nginx#7827"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["haproxy-ingress\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u652f\u6301\u5916\u90e8 HAProxy"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"cni",children:"CNI"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"vs."}),(0,r.jsx)(e.th,{children:"starts"}),(0,r.jsx)(e.th,{children:"IPv6"}),(0,r.jsx)(e.th,{children:"Windows"}),(0,r.jsx)(e.th,{children:"Policy"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/notes/devops/kubernetes/network/calico",children:"calico"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.img,{src:"https://img.shields.io/github/stars/projectcalico/calico",alt:"calico-stars"})}),(0,r.jsx)(e.td,{children:"\u2705"}),(0,r.jsx)(e.td,{children:"\u2705"}),(0,r.jsx)(e.td,{children:"\u2705"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/notes/devops/kubernetes/network/kube-router",children:"kube-router"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.img,{src:"https://img.shields.io/github/stars/cloudnativelabs/kube-router",alt:"kube-router-stars"})}),(0,r.jsx)(e.td,{children:"\u274c"}),(0,r.jsx)(e.td,{children:"\u274c"}),(0,r.jsx)(e.td,{children:"\u274c"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/notes/devops/kubernetes/network/flannel",children:"flannel"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.img,{src:"https://img.shields.io/github/stars/flannel-io/flannel",alt:"flannel-stars"})}),(0,r.jsx)(e.td,{children:"\u274c"}),(0,r.jsx)(e.td,{children:"\u2705"}),(0,r.jsx)(e.td,{children:"\u274c"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/notes/devops/kubernetes/network/cilium",children:"cilium"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.img,{src:"https://img.shields.io/github/stars/cilium/cilium",alt:"cilium-stars"})}),(0,r.jsx)(e.td,{children:"\u274c"}),(0,r.jsx)(e.td,{children:"\u274c"}),(0,r.jsx)(e.td,{children:"\u2705"})]})]})]}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4e0d\u652f\u6301 IPv6 \u4e5f\u4e0d\u652f\u6301 DualStack"}),"\n",(0,r.jsx)(e.li,{children:"NetworkPolicy \u652f\u6301\u63a7\u5236 Ingress \u548c Egress \u7f51\u7edc"}),"\n"]})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["kube-router\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"layer 3, lvs/ipvs"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["flannel\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"overlay"}),"\n",(0,r.jsx)(e.li,{children:"\u8f7b\u91cf, \u4e13\u6ce8\u7f51\u7edc\u5c42"}),"\n",(0,r.jsx)(e.li,{children:"\u540e\u7aef: vxlan, host-gw, udp, ipip, ipsec, wireguard"}),"\n",(0,r.jsx)(e.li,{children:"\u914d\u7f6e: etcd, k8s api"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["calico\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"layer 3, overlay, BGP,"}),"\n",(0,r.jsx)(e.li,{children:"\u540e\u7aef: vxlan, pip, eBPF, WindowsHNS"}),"\n",(0,r.jsxs)(e.li,{children:["IPv6 \u4e0d\u652f\u6301 IPIP/VXLAN ",(0,r.jsx)(e.a,{href:"https://github.com/projectcalico/calico/issues/5206",children:"calico#5206"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["cilium\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"layer 3/4/7, eBPF"}),"\n",(0,r.jsxs)(e.li,{children:["IPv6 ",(0,r.jsx)(e.a,{href:"https://github.com/cilium/cilium/issues/13891",children:"cilium#13891"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["weave\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"IPsec ESP"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"canal - \u505c\u6b62 - calico+flannel - \u76ee\u524d calico \u5185\u7f6e vxlan"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u7f51\u7edc\u7ec4\u4ef6\u529f\u80fd\u9009\u9879"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Policy"}),"\n",(0,r.jsx)(e.li,{children:"IPAM"}),"\n",(0,r.jsx)(e.li,{children:"CNI"}),"\n",(0,r.jsx)(e.li,{children:"Overlay - VXLAN, IPIP, WG, IPIP, IPSec"}),"\n",(0,r.jsx)(e.li,{children:"Routing - BGP, VPC"}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://kubernetes.io/docs/concepts/cluster-administration/networking/",children:"https://kubernetes.io/docs/concepts/cluster-administration/networking/"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"overlay",children:"Overlay"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"tinc"}),"\n",(0,r.jsx)(e.li,{children:"n2n"}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,i.M)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(x,{...n})}):x(n)}},38088:(n,e,s)=>{var r=s(96651),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(n,e,s){var r,t={},h=null,x=null;for(r in void 0!==s&&(h=""+s),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(x=e.ref),e)l.call(e,r)&&!c.hasOwnProperty(r)&&(t[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===t[r]&&(t[r]=e[r]);return{$$typeof:i,type:n,key:h,ref:x,props:t,_owner:d.current}}e.Fragment=t,e.jsx=h,e.jsxs=h},2488:(n,e,s)=>{n.exports=s(38088)},62780:(n,e,s)=>{s.d(e,{I:()=>d,M:()=>l});var r=s(96651);const i={},t=r.createContext(i);function l(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);