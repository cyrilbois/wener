/*! For license information please see d4de1964.6a0a1761.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[55976],{3912:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=s(2488),t=s(62780);const i={title:"Consul \u914d\u7f6e",tags:["Configuration"]},l="Consul \u914d\u7f6e",c={id:"devops/service/consul-conf",title:"Consul \u914d\u7f6e",description:"- Configuration",source:"@site/../notes/devops/service/consul-conf.md",sourceDirName:"devops/service",slug:"/devops/service/consul-conf",permalink:"/notes/devops/service/consul-conf",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/service/consul-conf.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1646989992,formattedLastUpdatedAt:"Mar 11, 2022",frontMatter:{title:"Consul \u914d\u7f6e",tags:["Configuration"]},sidebar:"docs",previous:{title:"Ambassador",permalink:"/notes/devops/service/ambassador"},next:{title:"Consule Connect Mesh",permalink:"/notes/devops/service/consul-connect"}},o={},a=[{value:"acl",id:"acl",level:2},{value:"\u914d\u7f6e\u8bb0\u5f55",id:"\u914d\u7f6e\u8bb0\u5f55",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"consul-\u914d\u7f6e",children:"Consul \u914d\u7f6e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.consul.io/docs/agent/options",children:"Configuration"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5355\u673a\u914d\u7f6e"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "data_dir": "/var/consul",\n  "server": true,\n  "bootstrap_expect": 1,\n  "disable_update_check": true,\n  "disable_remote_exec": true,\n  "enable_syslog": true\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"acl",children:"acl"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://learn.hashicorp.com/tutorials/consul/access-control-setup-production",children:"https://learn.hashicorp.com/tutorials/consul/access-control-setup-production"})}),"\n",(0,r.jsxs)(n.li,{children:["Token \u7c7b\u578b\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["master - \u4e3b\u4ee4\u724c\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7b49\u540c\u4e8e acl bootstrap \u7684\u4ee4\u724c - \u5efa\u8bae\u8bbe\u7f6e - \u8bbe\u7f6e\u540e\u4e0d\u518d\u9700\u8981 acl bootstrap"}),"\n",(0,r.jsx)(n.li,{children:"\u7528\u4e8e\u4e3b dc \u7684 server \u4e4b\u95f4"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528 UUID"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["default - \u9ed8\u8ba4 - \u5982\u679c\u6ca1\u6709\u5177\u4f53\u7684 token\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7528\u4e8e\u5411\u670d\u52a1\u7aef\u53d1\u8d77\u8bf7\u6c42"}),"\n",(0,r.jsx)(n.li,{children:"\u6ca1\u6709\u5219\u7b49\u540c\u4e8e anonymous"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["agent\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7528\u4e8e\u5ba2\u6237\u7aef\u6216\u670d\u52a1\u6267\u884c\u5185\u90e8\u64cd\u4f5c"}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u6ca1\u6709\u5219\u4f7f\u7528 default"}),"\n",(0,r.jsx)(n.li,{children:"\u81f3\u5c11\u9700\u8981\u6743\u9650\u80fd\u8bbe\u7f6e\u8282\u70b9\u4fe1\u606f"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["agent_master\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8bbf\u95ee agent \u7ec8\u7aef\uff0c\u8bfb\u5199 agent \u6743\u9650"}),"\n",(0,r.jsx)(n.li,{children:"\u670d\u52a1\u4e2d\u65ad\u65f6\u53ef\u7528\u4e8e operator"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["replication\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7528\u4e8e\u6388\u6743\u4e8c\u7ea7 dc \u8bbf\u95ee\u4e3b dc \u8fdb\u884c\u590d\u5236\u64cd\u4f5c"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6e\u8bb0\u5f55",children:"\u914d\u7f6e\u8bb0\u5f55"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u5b58\u5728\u5bf9\u4e8e\u7684\u670d\u52a1\u5219\u4f1a\u8fdb\u884c\u5408\u5e76\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.li,{children:["\u7c7b\u578b\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ingress-gateway"}),"\n",(0,r.jsx)(n.li,{children:"proxy-defaults - \u9ed8\u8ba4\u4ee3\u7406\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.li,{children:["service-defaults\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Protocol"}),"\n",(0,r.jsxs)(n.li,{children:["MeshGateway\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Mode: none, local, remote"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"ExternalSNI"}),"\n",(0,r.jsxs)(n.li,{children:["Expose\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Checks = true"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"service-resolver - matches service instances with a specific Connect upstream discovery requests"}),"\n",(0,r.jsx)(n.li,{children:"service-router - defines where to send layer 7 traffic based on the HTTP route"}),"\n",(0,r.jsx)(n.li,{children:"service-splitter - defines how to divide requests for a single HTTP route based on percentages"}),"\n",(0,r.jsx)(n.li,{children:"terminating-gateway - \u4e0e terminating gateway \u5173\u8054\u7684\u670d\u52a1"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'cat <<HCL | consul config write -\nKind      = "service-defaults"\nName      = "web-test"\nProtocol  = "http"\nHCL\n\nconsul config list -kind service-defaults\nconsul config read -kind service-defaults -name web-test\n\ncat <<HCL | consul config write -\nKind      = "service-defaults"\nName      = "static-server"\nProtocol  = "http"\nHCL\ncat <<HCL | consul config write -\nKind = "service-router"\nName = "web-test"\nRoutes = [\n  {\n    Match {\n      HTTP {\n        PathPrefix = "/to/static-server"\n      }\n    }\n\n    Destination {\n      Service = "static-server"\n    }\n  },\n]\nHCL\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},38088:(e,n,s)=>{var r=s(96651),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var r,i={},a=null,d=null;for(r in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,r)&&!o.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:a,ref:d,props:i,_owner:c.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},2488:(e,n,s)=>{e.exports=s(38088)},62780:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>l});var r=s(96651);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);