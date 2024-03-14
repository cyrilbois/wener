/*! For license information please see 60b8e236.c61484f2.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[45708],{49560:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=r(2488),o=r(62780);const s={title:"gRPC Go"},i="gRPC Go",c={id:"service/api/grpc/grpc-go",title:"gRPC Go",description:"- A new Go API for Protocol Buffers",source:"@site/../notes/service/api/grpc/grpc-go.md",sourceDirName:"service/api/grpc",slug:"/service/api/grpc/go",permalink:"/notes/service/api/grpc/go",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/grpc/grpc-go.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1677222278,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{title:"gRPC Go"},sidebar:"docs",previous:{title:"grpc-gateway",permalink:"/notes/service/api/grpc/gateway"},next:{title:"grpc-node",permalink:"/notes/service/api/grpc/node"}},l={},a=[{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:2},{value:"encoding",id:"encoding",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"grpc-go",children:"gRPC Go"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://go.dev/blog/protobuf-apiv2",children:"A new Go API for Protocol Buffers"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"2020-03-02"}),"\n",(0,t.jsx)(n.li,{children:"\u57fa\u4e8e reflect"}),"\n",(0,t.jsx)(n.li,{children:"APIv2 google.golang.org/protobuf"}),"\n",(0,t.jsxs)(n.li,{children:["APIv1 github.com/golang/protobuf\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"1.4 \u57fa\u4e8e APIv2 \u5b9e\u73b0"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/planetscale/vtprotobuf",children:"planetscale/vtprotobuf"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u57fa\u4e8e gogo"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://vitess.io/blog/2021-06-03-a-new-protobuf-generator-for-go/",children:"A new Protocol Buffers generator for Go"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/srikrsna/protoc-gen-gotag",children:"srikrsna/protoc-gen-gotag"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/golang/protobuf/issues/52",children:"golang/protobuf#52"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4e0d\u652f\u6301 struct tag"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/favadi/protoc-go-inject-tag",children:"favadi/protoc-go-inject-tag"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/protocolbuffers/protobuf-go",children:"protocolbuffers/protobuf-go"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# debug\nexport GRPC_GO_LOG_VERBOSITY_LEVEL=99\nexport GRPC_GO_LOG_SEVERITY_LEVEL=info\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5b9e\u73b0",children:"\u5b9e\u73b0"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["method - ",(0,t.jsx)(n.code,{children:'"/<service>/<method>"'})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type ClientConn interface {\n  // \u8bf7\u6c42\n\tInvoke(ctx context.Context, method string, args interface{}, reply interface{}, opts ...CallOption) error\n\tNewStream(ctx context.Context, desc *StreamDesc, method string, opts ...CallOption) (ClientStream, error)\n}\n\n// \u751f\u6210\u7684 Stream \u63a5\u53e3 - BiStream - Send+Recv\n// <Service>_<Method>Client for Stream\ntype Service_MethodClient interface {\n  // \u6839\u636e Stream \u751f\u6210\u7684 \u8f93\u5165\u8f93\u51fa\n  // ClientStream.SendMsg(m)\n\tSend(*ServerReflectionRequest) error\n  // ClientStream.RecvMsg(m)\n\tRecv() (*ServerReflectionResponse, error)\n\tgrpc.ClientStream\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"// grpc.Server \u66b4\u9732\u7684\u670d\u52a1\u4fe1\u606f\ntype ServiceInfo struct {\n\tMethods []MethodInfo\n\t// ServiceDesc\n\tMetadata interface{}\n}\ntype MethodInfo struct {\n\tName string\n\tIsClientStream bool\n\tIsServerStream bool\n}\n\n// \u751f\u6210\u7684 Desc \u4fe1\u606f\n\ntype MethodDesc struct {\n\tMethodName string\n\tHandler    methodHandler\n}\ntype ServiceDesc struct {\n\tServiceName string\n  // \u6307\u5411 service \u63a5\u53e3\u5b9e\u73b0 - \u68c0\u6d4b\u63a5\u53e3\u662f\u5426\u5339\u914d\n\tHandlerType interface{}\n\tMethods     []MethodDesc\n\tStreams     []StreamDesc\n\tMetadata    interface{}\n}\n\ntype StreamHandler func(srv interface{}, stream ServerStream) error\ntype StreamDesc struct {\n\t// \u6ce8\u518c\u65f6\u4f7f\u7528  \u540c Method \u540d\u5b57\n\tStreamName string\n\tHandler    StreamHandler\n\n\t// \u7528\u4e8e NewClientStream,ClientConn.NewStream\n\tServerStreams bool\n\tClientStreams bool\n}\n\n// \u62e6\u622a\u5904\u7406\ntype UnaryClientInterceptor func(ctx context.Context, method string, req, reply interface{}, cc *ClientConn, invoker UnaryInvoker, opts ...CallOption) error\n\n// \u5355\u6b21\u8bf7\u6c42\u4f7f\u7528 clientStream \u903b\u8f91\u5b9e\u73b0\nvar unaryStreamDesc = &StreamDesc{ServerStreams: false, ClientStreams: false}\nfunc invoke(ctx context.Context, method string, req, reply interface{}, cc *ClientConn, opts ...CallOption) error {\n\tcs, err := newClientStream(ctx, unaryStreamDesc, cc, method, opts...)\n\tif err != nil {\n\t\treturn err\n\t}\n\tif err := cs.SendMsg(req); err != nil {\n\t\treturn err\n\t}\n\treturn cs.RecvMsg(reply)\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"encoding",children:"encoding"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["google.golang.org/grpc/encoding\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["RegisterCompressor\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"gzip"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["RegisterCodec\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["proto\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"github.com/golang/protobuf/proto"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type Codec interface {\n\tName() string\n\tMarshal(v interface{}) ([]byte, error)\n\tUnmarshal(data []byte, v interface{}) error\n}\n\ntype Compressor interface {\n\tName() string\n\tCompress(w io.Writer) (io.WriteCloser, error)\n\tDecompress(r io.Reader) (io.Reader, error)\n  DecompressedSize(compressedBytes []byte) int // \u53ef\u9009\u5b9e\u73b0\n}\n\n// proto\n\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},38088:(e,n,r)=>{var t=r(96651),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var t,s={},a=null,d=null;for(t in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,t)&&!l.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:o,type:e,key:a,ref:d,props:s,_owner:c.current}}n.Fragment=s,n.jsx=a,n.jsxs=a},2488:(e,n,r)=>{e.exports=r(38088)},62780:(e,n,r)=>{r.d(n,{I:()=>c,M:()=>i});var t=r(96651);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);