/*! For license information please see 4c41ff73.c10bb608.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[96556],{41244:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>j});var i=s(2488),a=s(62780);const r={title:"Java 11"},l="Java 11",t={id:"java/version/java-11",title:"Java 11",description:"- Java 8 \u4e4b\u540e\u7684\u7b2c\u4e00\u4e2a LTS \u7248\u672c\uff0c\u7b2c\u4e00\u4e2a\u5e26 module \u7684 LTS \u7248\u672c",source:"@site/../notes/java/version/java-11.md",sourceDirName:"java/version",slug:"/java/version/java-11",permalink:"/notes/java/version/java-11",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/java/version/java-11.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1686920980,formattedLastUpdatedAt:"Jun 16, 2023",frontMatter:{title:"Java 11"},sidebar:"docs",previous:{title:"Java 10",permalink:"/notes/java/version/java-10"},next:{title:"Java 21",permalink:"/notes/java/version/java-21"}},c={},j=[{value:"\u53d8\u5316",id:"\u53d8\u5316",level:2},{value:"JEPs",id:"jeps",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"java-11",children:"Java 11"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Java 8 \u4e4b\u540e\u7684\u7b2c\u4e00\u4e2a LTS \u7248\u672c\uff0c\u7b2c\u4e00\u4e2a\u5e26 module \u7684 LTS \u7248\u672c"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"http://openjdk.java.net/projects/jdk/11/",children:"JDK 11"})}),"\n",(0,i.jsx)(n.li,{children:"2018-09-25"}),"\n",(0,i.jsx)(n.li,{children:"\u52a8\u6001 class \u6587\u4ef6\u5e38\u91cf"}),"\n",(0,i.jsx)(n.li,{children:"Dynamic Class-File Constants"}),"\n",(0,i.jsx)(n.li,{children:"Epsilon: A No-Op Garbage Collector"}),"\n",(0,i.jsx)(n.li,{children:"Remove the Java EE and CORBA Modules"}),"\n",(0,i.jsx)(n.li,{children:"HTTP Client"}),"\n",(0,i.jsx)(n.li,{children:"Local-Variable Syntax for Lambda Parameters"}),"\n",(0,i.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://winterbe.com/posts/2018/08/29/migrate-maven-projects-to-java-11-jigsaw/",children:"\u8fc1\u79fb Maven \u9879\u76ee\u5230 Java 11"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["It\u2019s time! Migrating to Java 11\n",(0,i.jsx)(n.a,{href:"https://medium.com/criciumadev/5eb3868354f9",children:"https://medium.com/criciumadev/5eb3868354f9"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://medium.com/criciumadev/create-a-cloud-native-image-using-java-modules-a670be616b29",children:"https://medium.com/criciumadev/create-a-cloud-native-image-using-java-modules-a670be616b29"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"http://mvnrepository.com/artifact/org.openjfx",children:"http://mvnrepository.com/artifact/org.openjfx"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.reddit.com/r/java/comments/7ukei4/best_tool_for_packaging_jar_file_as_desktop/",children:"https://www.reddit.com/r/java/comments/7ukei4/best_tool_for_packaging_jar_file_as_desktop/"}),"\n",(0,i.jsx)(n.a,{href:"https://docs.oracle.com/javase/10/tools/javapackager.htm",children:"https://docs.oracle.com/javase/10/tools/javapackager.htm"})]}),"\n",(0,i.jsxs)(n.p,{children:["Remove javapackager sources from OpenJFX repo\n",(0,i.jsx)(n.a,{href:"https://bugs.openjdk.java.net/browse/JDK-8203379",children:"https://bugs.openjdk.java.net/browse/JDK-8203379"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/javafx-maven-plugin/javafx-maven-plugin",children:"https://github.com/javafx-maven-plugin/javafx-maven-plugin"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/javafx-maven-plugin/javafx-maven-plugin/issues/287",children:"https://github.com/javafx-maven-plugin/javafx-maven-plugin/issues/287"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://docs.oracle.com/javase/9/tools/jmod.htm",children:"https://docs.oracle.com/javase/9/tools/jmod.htm"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://simply-how.com/getting-started-with-java-11",children:"https://simply-how.com/getting-started-with-java-11"})}),"\n",(0,i.jsx)(n.h2,{id:"\u53d8\u5316",children:"\u53d8\u5316"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u65b0\u589e ",(0,i.jsx)(n.code,{children:"Collection#toArray(IntFunction)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-XX:+UseDynamicNumberOfCompilerThreads"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u52a8\u6001\u63a7\u5236\u7f16\u8bd1\u5668\u7ebf\u7a0b\u6570"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"jeps",children:"JEPs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://openjdk.java.net/jeps/181",children:"181"}),": Nest-Based Access Control\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u57fa\u4e8e\u5d4c\u5957\u7684\u6210\u5458\u8bbf\u95ee\u63a7\u5236"}),"\n",(0,i.jsx)(n.li,{children:"\u8be5\u8bbf\u95ee\u4e0a\u4e0b\u6587\u5141\u8bb8\u5d4c\u5957\u7684\u5185\u5bb9\u88ab\u7f16\u8bd1\u5230\u4e0d\u540c\u7684\u7c7b\u6587\u4ef6\uff0c\u5e76\u5141\u8bb8\u8bbf\u95ee\u5f7c\u6b64\u7684\u79c1\u6709\u6210\u5458"}),"\n",(0,i.jsx)(n.li,{children:"\u56e0\u4e3a\u5f88\u591a\u8bed\u8a00\u90fd\u8fd0\u884c\u4e00\u4e2a\u6e90\u6587\u4ef6\u5305\u542b\u591a\u4e2a\u7c7b\uff0c\u5bfc\u81f4\u5f7c\u6b64\u6210\u5458\u8bbf\u95ee\u65f6\u9700\u8981\u751f\u6210\u5305\u7ea7\u522b\u7684\u8bbf\u95ee\u65b9\u6cd5"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://openjdk.java.net/jeps/309",children:"309"}),": Dynamic Class-File Constants\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u52a8\u6001\u7c7b\u6587\u4ef6\u5e38\u91cf"}),"\n",(0,i.jsx)(n.li,{children:"\u7c7b\u6587\u4ef6\u6dfb\u52a0\u65b0\u7684\u5e38\u91cf\u6c60 CONSTANT_Dynamic"}),"\n",(0,i.jsx)(n.li,{children:"\u52a0\u8f7d CONSTANT_Dynamic \u4f1a\u4ee3\u7406\u5230\u4e00\u4e2a\u542f\u52a8\u65b9\u6cd5\u4e0a\uff0c\u7c7b\u4f3c\u4e8e invokedynamic \u8c03\u7528"}),"\n",(0,i.jsx)(n.li,{children:"\u7b80\u5316\u521b\u5efa\u53ef\u56fa\u5316\u7684\u7c7b\u6587\u4ef6\u5e38\u91cf\uff0c\u4e3a\u8bed\u8a00\u8bbe\u8ba1\u8005\u548c\u7f16\u8bd1\u5668\u5b9e\u73b0\u63d0\u4f9b\u66f4\u9ad8\u6548\u7b80\u4fbf\u7684\u64cd\u4f5c\u65b9\u5f0f"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://openjdk.java.net/jeps/315",children:"315"}),": Improve Aarch64 Intrinsics\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f18\u5316\u5b57\u7b26\u4e32\u548c\u6570\u7ec4\u5185\u5efa\u65b9\u6cd5"}),"\n",(0,i.jsx)(n.li,{children:"\u4f18\u5316 java.lang.Math sin, cos \u548c log \u65b9\u6cd5"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://openjdk.java.net/jeps/318",children:"318"}),": Epsilon: A No-Op Garbage Collector\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ZeroGC - ZGC"}),"\n",(0,i.jsx)(n.li,{children:"\u4f1a\u7ba1\u7406\u5185\u5b58\u8bf7\u6c42\u4f46\u4e0d\u4f1a\u56de\u6536\u5185\u5b58\uff0c\u5f53\u5185\u5b58\u7528\u5b8c\u65f6\u5219\u4f1a\u505c\u6b62 JVM"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://openjdk.java.net/jeps/320",children:"320"}),": Remove the Java EE and CORBA Modules\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4ece JavaSE \u79fb\u9664 JavaEE \u548c CORBA \u6a21\u5757"}),"\n",(0,i.jsx)(n.li,{children:"\u81ea Java9 \u5e9f\u5f03"}),"\n",(0,i.jsxs)(n.li,{children:["\u79fb\u9664\u6a21\u5757\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"java.xml.ws - JAX-WS, SAAJ, Web Services Metadata"}),"\n",(0,i.jsx)(n.li,{children:"java.xml.bind - JAXB"}),"\n",(0,i.jsx)(n.li,{children:"java.activation - JAF"}),"\n",(0,i.jsx)(n.li,{children:"java.xml.ws.annotation - Common Annotations"}),"\n",(0,i.jsx)(n.li,{children:"java.corba - CORBA"}),"\n",(0,i.jsx)(n.li,{children:"java.transaction - JTA"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u76f8\u5173\u6a21\u5757\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"java.se.ee - Aggregator module for the six modules above"}),"\n",(0,i.jsx)(n.li,{children:"jdk.xml.ws - Tools for JAX-WS"}),"\n",(0,i.jsx)(n.li,{children:"jdk.xml.bind - Tools for JAXB"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u4f1a\u79fb\u9664\u7684\u5de5\u5177\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"wsgen, wsimport - jdk.xml.ws"}),"\n",(0,i.jsx)(n.li,{children:"schemagen, xjc - jdk.xml.bind"}),"\n",(0,i.jsx)(n.li,{children:"idlj, orbd, servertool, tnamesrv - java.corba"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://openjdk.java.net/jeps/321",children:"321"}),": HTTP Client (Standard)\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6807\u51c6\u5316 Java9 \u5f15\u5165\u7684 HTTP \u5ba2\u6237\u7aef"}),"\n",(0,i.jsxs)(n.li,{children:["\u79fb\u9664\u5b75\u5316\u63a5\u53e3\uff0c\u6dfb\u52a0\u6807\u51c6\u63a5\u53e3\u5230 ",(0,i.jsx)(n.code,{children:"java.net.http"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://openjdk.java.net/jeps/323",children:"323"}),": Local-Variable Syntax for Lambda Parameters\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5141\u8bb8\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"var"})," \u6765\u5b9a\u4e49 lambda \u53c2\u6570\u7684\u63a8\u5bfc\u7c7b\u578b"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://openjdk.java.net/jeps/324",children:"324"}),": Key Agreement with Curve25519 and Curve448\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"RFC7748: Curve25519,Curve448"}),"\n",(0,i.jsx)(n.li,{children:"Java \u5b9e\u73b0, \u5e73\u53f0\u72ec\u7acb"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://openjdk.java.net/jeps/327",children:"327"}),": Unicode 10"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://openjdk.java.net/jeps/328",children:"328"}),": Flight Recorder\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5f00\u6e90 Flight Recorder"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://openjdk.java.net/jeps/329",children:"329"}),": ChaCha20 and Poly1305 Cryptographic Algorithms\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ChaCha20 \u548c Poly1305 \u52a0\u5bc6\u7b97\u6cd5"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://openjdk.java.net/jeps/330",children:"330"}),": Launch Single-File Source-Code Programs\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u542f\u52a8\u5355\u6e90\u6587\u4ef6\u7a0b\u5e8f"}),"\n",(0,i.jsxs)(n.li,{children:["\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"#!"})," \u6765\u542f\u52a8 java \u7a0b\u5e8f\uff0c\u7c7b\u4f3c\u4e8e shell"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"#!/path/to/java --source version"})}),"\n",(0,i.jsxs)(n.li,{children:["\u4e5f\u5141\u8bb8\u76f4\u63a5\u8c03\u7528 ",(0,i.jsx)(n.code,{children:"java -Dtrace=true --source 10 factorial 3"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://openjdk.java.net/jeps/331",children:"331"}),": Low-Overhead Heap Profiling\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u901a\u8fc7 JVMTI \u64cd\u4f5c"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://openjdk.java.net/jeps/332",children:"332"}),": Transport Layer Security (TLS) 1.3"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://openjdk.java.net/jeps/333",children:"333"}),": ZGC: A Scalable Low-Latency Garbage Collector\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ZGC \u53ef\u6269\u5c55\u7684\u4f4e\u5ef6\u65f6 gc"}),"\n",(0,i.jsx)(n.li,{children:"\u8bd5\u9a8c\u9636\u6bb5"}),"\n",(0,i.jsx)(n.li,{children:"gc < 10ms"}),"\n",(0,i.jsx)(n.li,{children:"mb \u5230 tb"}),"\n",(0,i.jsx)(n.li,{children:"\u5bf9\u6bd4 g1\uff0c\u5e94\u7528\u541e\u5410\u91cf\u4e0d\u5e94\u8be5\u635f\u8017\u4e0d\u5e94\u8be5\u8d85\u8fc7 15%"}),"\n",(0,i.jsx)(n.li,{children:"\u4f5c\u4e3a\u672a\u6765\u4f18\u5316\u57fa\u7840"}),"\n",(0,i.jsx)(n.li,{children:"\u5148\u652f\u6301 Linux/x64"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://openjdk.java.net/jeps/335",children:"335"}),": Deprecate the Nashorn JavaScript Engine\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5e9f\u5f03 JS \u5f15\u64ce\u6a21\u5757"}),"\n",(0,i.jsxs)(n.li,{children:["\u6d89\u53ca\u7684\u5305\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"jdk.scripting.nashorn - \u5305\u62ec jdk.nashorn.api.scripting \u548c jdk.nashorn.api.tree"}),"\n",(0,i.jsx)(n.li,{children:"jdk.scripting.nashorn.shell - \u5305\u62ec jjs \u5de5\u5177"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://openjdk.java.net/jeps/336",children:"336"}),": Deprecate the Pack200 Tools and API\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5e9f\u5f03 java.util.jar \u4e2d\u7684 pack200, unpack200 \u5de5\u5177\u548c Pack200 \u63a5\u53e3"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},38088:(e,n,s)=>{var i=s(96651),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,t=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function j(e,n,s){var i,r={},j=null,d=null;for(i in void 0!==s&&(j=""+s),void 0!==n.key&&(j=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,i)&&!c.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:a,type:e,key:j,ref:d,props:r,_owner:t.current}}n.Fragment=r,n.jsx=j,n.jsxs=j},2488:(e,n,s)=>{e.exports=s(38088)},62780:(e,n,s)=>{s.d(n,{I:()=>t,M:()=>l});var i=s(96651);const a={},r=i.createContext(a);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);