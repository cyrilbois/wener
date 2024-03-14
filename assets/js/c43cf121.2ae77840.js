/*! For license information please see c43cf121.2ae77840.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[89368],{16364:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(2488),t=n(62780);const l={title:"vrl"},i="vrl",o={id:"service/observability/vrl",title:"vrl",description:"- Vector Remap Language",source:"@site/../notes/service/observability/vrl.md",sourceDirName:"service/observability",slug:"/service/observability/vrl",permalink:"/notes/service/observability/vrl",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/vrl.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1690946986,formattedLastUpdatedAt:"Aug 2, 2023",frontMatter:{title:"vrl"},sidebar:"docs",previous:{title:"vector",permalink:"/notes/service/observability/vector"},next:{title:"\u529e\u516c\u5957\u4ef6",permalink:"/notes/service/office/"}},a={},c=[{value:"syslog",id:"syslog",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"vrl",children:"vrl"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Vector Remap Language"}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://vector.dev/docs/reference/vrl/",children:"https://vector.dev/docs/reference/vrl/"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://playground.vrl.dev/",children:"https://playground.vrl.dev/"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://vector.dev/docs/reference/vrl/examples/",children:"https://vector.dev/docs/reference/vrl/examples/"})}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"vector vrl --input input.json --program run.vrl --print-object\n"})}),"\n",(0,r.jsx)(s.h2,{id:"syslog",children:"syslog"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["parse_syslog\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"appname"}),"\n",(0,r.jsx)(s.li,{children:"hostname"}),"\n",(0,r.jsx)(s.li,{children:"message"}),"\n",(0,r.jsx)(s.li,{children:"timestamp"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-vrl",children:"structured =\n  parse_syslog(.message) ??\n  parse_common_log(.message) ??\n  parse_regex!(.message, r'^(?P<timestamp>\\d+/\\d+/\\d+ \\d+:\\d+:\\d+) \\[(?P<severity>\\w+)\\] (?P<pid>\\d+)#(?P<tid>\\d+):(?: \\*(?P<connid>\\d+))? (?P<message>.*)$')\n. = merge(., structured)\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-vrl",children:"structured = parse_syslog(.message) ?? {}\n. = merge(., structured)\n"})}),"\n",(0,r.jsx)(s.h1,{id:"cookbook",children:"Cookbook"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-vrl",children:'# use node name instead of pod name\n.host = get_env_var("VECTOR_SELF_NODE_NAME") ?? null\n# avoid override, used for routing\n._file = .file\n\n# parsing\nmsg = string!(.message)\nif starts_with(msg,"{") && ends_with(msg,"}") {\n  del(.message)\n  . |= object(parse_json(msg) ?? {}) ?? {}\n} else if starts_with(msg,"time=") {\n  del(.message)\n  . |= parse_key_value(msg) ?? {}\n  if .timestamp == null && .time != null {.timestamp = .time}\n} else if match(msg,r\'^[IWEF]\\d{4}\'){\n  # will override .file\n  . |= parse_klog(msg) ?? {}\n} else {\n  r = parse_syslog(.message) ?? {}\n  if r.appname != null { . |= r }\n}\n\nif .message == null {\n  if .msg != null {\n    .message = .msg\n    del(.msg)\n  }else {\n    .message = ""\n  }\n}\n\n# time for collector\nif ._timestamp == null && .timestamp != null {._timestamp = .timestamp}\n'})})]})}function m(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},38088:(e,s,n)=>{var r=n(96651),t=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,n){var r,l={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(d=s.ref),s)i.call(s,r)&&!a.hasOwnProperty(r)&&(l[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===l[r]&&(l[r]=s[r]);return{$$typeof:t,type:e,key:c,ref:d,props:l,_owner:o.current}}s.Fragment=l,s.jsx=c,s.jsxs=c},2488:(e,s,n)=>{e.exports=n(38088)},62780:(e,s,n)=>{n.d(s,{I:()=>o,M:()=>i});var r=n(96651);const t={},l=r.createContext(t);function i(e){const s=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);