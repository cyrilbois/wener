/*! For license information please see fcb246ef.ea6002a8.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[93800],{43448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(2488),r=n(62780);const i={title:"NFTables Cookbook"},s="NFTables Cookbook",a={id:"os/linux/network/nftables-cookbook",title:"NFTables Cookbook",description:"- \u53c2\u8003",source:"@site/../notes/os/linux/network/nftables-cookbook.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/nftables-cookbook",permalink:"/notes/os/linux/network/nftables-cookbook",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/network/nftables-cookbook.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1625589155,formattedLastUpdatedAt:"Jul 6, 2021",frontMatter:{title:"NFTables Cookbook"},sidebar:"docs",previous:{title:"NetworkManager",permalink:"/notes/os/linux/network/networkmanager"},next:{title:"nftables \u89c4\u5219",permalink:"/notes/os/linux/network/nftables-rule"}},l={},c=[{value:"\u9632\u706b\u5899\u529f\u80fd",id:"\u9632\u706b\u5899\u529f\u80fd",level:2},{value:"\u57fa\u7840 NAT \u529f\u80fd",id:"\u57fa\u7840-nat-\u529f\u80fd",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"nftables-cookbook",children:"NFTables Cookbook"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\u53c2\u8003\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://wiki.nftables.org/wiki-nftables/index.php/Quick_reference-nftables_in_10_minutes",children:"Quick reference-nftables in 10 minutes"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://wiki.gentoo.org/wiki/Nftables/Examples",children:"Nftables/Examples"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://wiki.nftables.org/wiki-nftables/index.php/Performing_Network_Address_Translation_(NAT)",children:"Performing Network Address Translation (NAT)"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"\u9632\u706b\u5899\u529f\u80fd",children:"\u9632\u706b\u5899\u529f\u80fd"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-nft",children:'table ip filter {\n  # \u5141\u8bb8\u672c\u5730\u8bf7\u6c42\n\tchain output {\n\t\ttype filter hook output priority 100; policy accept;\n\t}\n\n  # \u5141\u8bb8\u5c40\u57df\u7f51\u5230 fw\uff0c\u4e0d\u5141\u8bb8 WAN \u5230 fw\n\tchain input {\n\t\ttype filter hook input priority 0; policy accept;\n\t\tiifname "lan0" accept\n\t\tiifname "wan0" drop\n\t}\n\n  # \u5141\u8bb8 LAN \u8bf7\u6c42 WAN - \u5141\u8bb8 WAN \u56de\u5e94 LAN \u8bf7\u6c42\n\tchain forward {\n\t\ttype filter hook forward priority 0; policy drop;\n\t\tiifname "lan0" oifname "wan0" accept\n\t\tiifname "wan0" oifname "lan0" ct state related,established accept\n\t}\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"\u57fa\u7840-nat-\u529f\u80fd",children:"\u57fa\u7840 NAT \u529f\u80fd"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'table ip nat {\n\tchain prerouting {\n\t\ttype nat hook prerouting priority 0; policy accept;\n\t}\n\n  # \u4ece WAN \u51fa\u7684\u5305\uff0c\u5728\u7ed3\u675f\u8def\u7531\u540e\u66ff\u6362 \u6765\u6e90\u5730\u5740 \u4e3a wan0 \u7684\u4e3b\u8981\u5730\u5740\n\tchain postrouting {\n\t\ttype nat hook postrouting priority 100; policy accept;\n\t\toifname "wan0" masquerade\n\t}\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},38088:(e,t,n)=>{var o=n(96651),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var o,i={},c=null,p=null;for(o in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)s.call(t,o)&&!l.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===i[o]&&(i[o]=t[o]);return{$$typeof:r,type:e,key:c,ref:p,props:i,_owner:a.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},2488:(e,t,n)=>{e.exports=n(38088)},62780:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>s});var o=n(96651);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);