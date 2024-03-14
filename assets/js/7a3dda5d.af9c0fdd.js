/*! For license information please see 7a3dda5d.af9c0fdd.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[77540],{58168:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=r(2488),t=r(62780);const i={title:"Quarkus"},a="Quarkus",l={id:"java/lib/quarkus",title:"Quarkus",description:"- Quarkus - Kubernetes Native Java stack tailored for GraalVM & OpenJDK HotSpot",source:"@site/../notes/java/lib/quarkus.md",sourceDirName:"java/lib",slug:"/java/lib/quarkus",permalink:"/notes/java/lib/quarkus",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/java/lib/quarkus.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1679060062,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{title:"Quarkus"},sidebar:"docs",previous:{title:"Netty",permalink:"/notes/java/lib/netty"},next:{title:"Spring Doc",permalink:"/notes/java/lib/springdoc"}},d={},c=[{value:"quarkus-maven-plugin",id:"quarkus-maven-plugin",level:2}];function u(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.M)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"quarkus",children:"Quarkus"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://quarkus.io/",children:"Quarkus"})," - Kubernetes Native Java stack tailored for GraalVM & OpenJDK HotSpot"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://code.quarkus.io/",children:"code.quarkus.io"})," \u9879\u76ee\u751f\u6210\uff0c\u7c7b\u4f3c\u4e8e spring \u7684 start"]}),"\n",(0,s.jsx)(e.li,{children:"RedHat \u56e2\u961f - \u4f9d\u8d56\u7684\u4e3b\u8981\u662f RH \u76f8\u5173\u7684\u4e2d\u95f4\u4ef6"}),"\n",(0,s.jsxs)(e.li,{children:["\u4e3b\u8981\u4f18\u52bf\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5feb\u901f\u542f\u52a8"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u5360\u7528\u5c11"}),"\n",(0,s.jsx)(e.li,{children:"quarkus-maven-plugin \u5bf9\u5f00\u53d1\u53cb\u597d"}),"\n",(0,s.jsx)(e.li,{children:"cdi+resteasy = 20mb \u4e8c\u8fdb\u5236"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4e3b\u8981\u4f9d\u8d56\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["quarkus arc - CDI\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u975e\u53cd\u5c04 - \u56e0\u4e3a Graalvm \u4e0d\u652f\u6301\u5927\u90e8\u5206\u53cd\u5c04"}),"\n",(0,s.jsxs)(e.li,{children:["\u5728\u90e8\u7f72\u65f6\u751f\u6210\u5143\u6570\u636e\u7c7b\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"META-INF/jandex.idx"}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"*.zig"})," - Jvm IR"]}),"\n",(0,s.jsx)(e.li,{children:"quarkus.index-dependency \u914d\u7f6e\u9879"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"Substrate VM"}),"\n",(0,s.jsx)(e.li,{children:"undertow - \u9ed8\u8ba4 servlet \u5bb9\u5668"}),"\n",(0,s.jsx)(e.li,{children:"resteasy - jaxrs \u5b9e\u73b0"}),"\n",(0,s.jsx)(e.li,{children:"quarkus-hibernate-orm-panache - \u7c7b\u4f3c\u4e8e ActiveRecord \u7684\u6269\u5c55"}),"\n",(0,s.jsx)(e.li,{children:"MicroProfile - \u5fae\u670d\u52a1\u76f8\u5173\u80fd\u529b"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"quarkus-maven-plugin",children:"quarkus-maven-plugin"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u547d\u4ee4"}),(0,s.jsx)(e.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mvn quarkus:add-extension"}),(0,s.jsx)(e.td,{children:"\u6dfb\u52a0\u6269\u5c55"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mvn quarkus:add-extensions"}),(0,s.jsx)(e.td,{children:"\u6dfb\u52a0\u6269\u5c55"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mvn quarkus:analyze-call-tree"}),(0,s.jsx)(e.td,{children:"\u5206\u6790\u8c03\u7528\u6811"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mvn quarkus:build"}),(0,s.jsx)(e.td,{children:"\u6784\u5efa"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mvn quarkus:create"}),(0,s.jsx)(e.td,{children:"\u521b\u5efa\u9879\u76ee\uff0c\u751f\u6210\u6587\u4ef6"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mvn quarkus:create-extension"}),(0,s.jsx)(e.td,{children:"\u521b\u5efa\u6269\u5c55"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mvn quarkus:dev"}),(0,s.jsx)(e.td,{children:"\u542f\u52a8\u5f00\u53d1\u670d\u52a1"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mvn quarkus:generate-config"}),(0,s.jsx)(e.td,{children:"\u751f\u6210\u793a\u4f8b\u914d\u7f6e"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mvn quarkus:help"}),(0,s.jsx)(e.td,{children:"\u5e2e\u52a9"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mvn quarkus:list-extensions"}),(0,s.jsx)(e.td,{children:"\u67e5\u770b\u6269\u5c55"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mvn quarkus:native-image"}),(0,s.jsx)(e.td,{children:"\u6784\u5efa\u672c\u5730\u955c\u50cf"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mvn quarkus:remote-dev"}),(0,s.jsx)(e.td,{children:"\u8fdc\u7a0b\u5f00\u53d1"})]})]})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'# \u542f\u52a8\u5f00\u53d1\u670d\u52a1\nmvn compile quarkus:dev\n\n# \u6784\u5efa native \u955c\u50cf\nmvn package -Pnative\n# \u5982\u679c\u6ca1\u6709\u8bbe\u7f6e GRAALVM_HOME \u53ef\u4ee5\u624b\u52a8\u8bbe\u7f6e\nGRAALVM_HOME=~/jdk/graalvm/Contents/Home/ mvn package -Pnative\n# \u5982\u679c\u5931\u8d25\uff0c\u5c1d\u8bd5\u5b89\u88c5 native-image\n\n\n# \u521b\u5efa\u9879\u76ee\nmvn io.quarkus:quarkus-maven-plugin:0.22.0:create \\\n    -DprojectGroupId=org.acme \\\n    -DprojectArtifactId=application-lifecycle-events \\\n    -DclassName="org.acme.events.GreetingResource" \\\n    -Dpath="/hello"\n\nmvn io.quarkus.platform:quarkus-maven-plugin:2.16.4.Final:create \\\n    -DprojectGroupId=org.acme \\\n    -DprojectArtifactId=openapi-swaggerui-quickstart \\\n    -Dextensions=\'resteasy-reactive-jackson\' \\\n    -DnoCode\ncd openapi-swaggerui-quickstart\n'})})]})}function o(n={}){const{wrapper:e}={...(0,t.M)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},38088:(n,e,r)=>{var s=r(96651),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(n,e,r){var s,i={},c=null,u=null;for(s in void 0!==r&&(c=""+r),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(u=e.ref),e)a.call(e,s)&&!d.hasOwnProperty(s)&&(i[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps)void 0===i[s]&&(i[s]=e[s]);return{$$typeof:t,type:n,key:c,ref:u,props:i,_owner:l.current}}e.Fragment=i,e.jsx=c,e.jsxs=c},2488:(n,e,r)=>{n.exports=r(38088)},62780:(n,e,r)=>{r.d(e,{I:()=>l,M:()=>a});var s=r(96651);const t={},i=s.createContext(t);function a(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);