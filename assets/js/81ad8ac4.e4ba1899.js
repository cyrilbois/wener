/*! For license information please see 81ad8ac4.e4ba1899.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[43436],{86572:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var r=i(2488),s=i(62780);const t={title:"Tracing Awesome",tags:["Awesome"]},l="Tracing Awesome",c={id:"service/observability/tracing/tracing-awesome",title:"Tracing Awesome",description:"- openzipkin/b3-propagation",source:"@site/../notes/service/observability/tracing/tracing-awesome.md",sourceDirName:"service/observability/tracing",slug:"/service/observability/tracing/awesome",permalink:"/notes/service/observability/tracing/awesome",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/tracing/tracing-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1695042174,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{title:"Tracing Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"SkyWalking",permalink:"/notes/service/observability/tracing/skywalking/"},next:{title:"tracing-faq",permalink:"/notes/service/observability/tracing/faq"}},a={},o=[{value:"Service",id:"service",level:2},{value:"Integration",id:"integration",level:2},{value:"Spec",id:"spec",level:2},{value:"Reference",id:"reference",level:2},{value:"Jaeger vs Zipkin",id:"jaeger-vs-zipkin",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"tracing-awesome",children:"Tracing Awesome"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/openzipkin/b3-propagation",children:"openzipkin/b3-propagation"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"service",children:"Service"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e3b\u6d41 Jaeger\u3001Zipkin\u3001Apache SkyWalking\u3001CAT\u3001Pinpoint\u3001Elastic APM"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/pinpoint-apm/pinpoint",children:"pinpoint-apm/pinpoint"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://pinpoint-apm.gitbook.io/pinpoint/powered-by",children:"https://pinpoint-apm.gitbook.io/pinpoint/powered-by"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/notes/service/observability/tracing/zipkin",children:"openzipkin/zipkin"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Java"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/notes/service/observability/tracing/jaeger",children:"jaegertracing/jaeger"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Golang"}),"\n",(0,r.jsx)(n.li,{children:"Thrift"}),"\n",(0,r.jsx)(n.li,{children:"CNCF Jaeger, a Distributed Tracing System"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://jaegertracing.io/",children:"https://jaegertracing.io/"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/notes/service/observability/tracing/skywalking/",children:"apache/skywalking"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Java"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/lmangani/cLoki",children:"lmangani/cLoki"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"AGPL-3.0, JS"}),"\n",(0,r.jsx)(n.li,{children:"Loki+ClickHouse"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"integration",children:"Integration"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://spring.io/projects/spring-cloud-sleuth",children:"Spring Cloud Sleuth"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://cloud.spring.io/spring-cloud-sleuth/reference/html/",children:"\u53c2\u8003\u624b\u518c"})}),"\n",(0,r.jsxs)(n.li,{children:["spring-cloud-sleuth-zipkin \u652f\u6301\u96c6\u6210 Zipkin\uff0c\u9ed8\u8ba4\u53d1\u9001\u5230 ",(0,r.jsx)(n.code,{children:"http://localhost:9411"}),"\uff0c\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"spring.zipkin.baseUrl"})," \u914d\u7f6e"]}),"\n",(0,r.jsx)(n.li,{children:"\u4f1a\u8bb0\u5f55 trace \u4fe1\u606f\u5230 Slf4J MDC"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/openzipkin-contrib/brave-opentracing",children:"openzipkin-contrib/brave-opentracing"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"OpenTracing \u9002\u914d Zipkin"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"spec",children:"Spec"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"http://opentracing.io/",children:"opentracing"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Vendor-neutral APIs and instrumentation for distributed tracing"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["W3C ",(0,r.jsx)(n.a,{href:"https://github.com/w3c/trace-context",children:"trace-context"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"HTTP \u6dfb\u52a0 trace \u5934 traceparent,traceparent"}),"\n",(0,r.jsx)(n.li,{children:"\u5934\u4e2d\u4fe1\u606f\u5305\u542b version\u3001trace-id\u3001parent-id\u3001trace-flags"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Tracing_(software)",children:"Tracing"})}),"\n",(0,r.jsxs)(n.li,{children:["Google ",(0,r.jsx)(n.a,{href:"https://research.google.com/pubs/pub36356.html",children:"Dapper"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"a Large-Scale Distributed Systems Tracing Infrastructure"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"APM - application performance monitor"}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(n.h2,{id:"jaeger-vs-zipkin",children:"Jaeger vs Zipkin"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Jaeger\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Golang, CNCF \u9879\u76ee"}),"\n",(0,r.jsx)(n.li,{children:"\u66f4\u9002\u7528\u4e8e Kubernates \u73af\u5883"}),"\n",(0,r.jsx)(n.li,{children:"\u5206\u4e3a agent\u3001collector\u3001query \u7b49\u89d2\u8272"}),"\n",(0,r.jsx)(n.li,{children:"\u9ed8\u8ba4 0.1% \u91c7\u6837"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Zipkin\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Java"}),"\n",(0,r.jsx)(n.li,{children:"\u5728\u5bb9\u5668\u5316\u6f6e\u6d41\u524d\u4fbf\u5df2\u5b58\u5728"}),"\n",(0,r.jsx)(n.li,{children:"\u5355\u670d\u52a1\uff0c\u62a5\u8868\u3001\u91c7\u96c6"}),"\n",(0,r.jsx)(n.li,{children:"Spring Cloud Sleuth \u6709\u96c6\u6210"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"jaeger"}),"\n",(0,r.jsx)(n.a,{href:"https://www.jaegertracing.io/docs/1.12/architecture/",children:(0,r.jsx)(n.img,{src:"https://www.jaegertracing.io/img/architecture-v1.png",alt:"jaeger architecture"})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"zipkin"}),"\n",(0,r.jsx)(n.a,{href:"https://zipkin.io/pages/architecture.html",children:(0,r.jsx)(n.img,{src:"https://zipkin.io/public/img/architecture-1.png",alt:"zipkin architecture"})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.bizety.com/2019/01/14/distributed-tracing-for-microservices-jaeger-vs-zipkin/",children:"Distributed Tracing for Microservices: Jaeger vs. Zipkin"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://logz.io/blog/zipkin-vs-jaeger/",children:"Zipkin vs Jaeger: Getting Started With Tracing"})}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},38088:(e,n,i)=>{var r=i(96651),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,i){var r,t={},o=null,h=null;for(r in void 0!==i&&(o=""+i),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(h=n.ref),n)l.call(n,r)&&!a.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:s,type:e,key:o,ref:h,props:t,_owner:c.current}}n.Fragment=t,n.jsx=o,n.jsxs=o},2488:(e,n,i)=>{e.exports=i(38088)},62780:(e,n,i)=>{i.d(n,{I:()=>c,M:()=>l});var r=i(96651);const s={},t=r.createContext(s);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);