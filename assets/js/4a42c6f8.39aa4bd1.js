/*! For license information please see 4a42c6f8.39aa4bd1.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[71080],{10532:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(2488),i=t(62780);const r={title:"OpenVox Asterisk"},l="OpenVox Asterisk",o={id:"voip/openvox-asterisk",title:"OpenVox Asterisk",description:"- \u53c2\u8003",source:"@site/../notes/voip/openvox-asterisk.md",sourceDirName:"voip",slug:"/voip/openvox-asterisk",permalink:"/notes/voip/openvox-asterisk",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/voip/openvox-asterisk.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1624798319,formattedLastUpdatedAt:"Jun 27, 2021",frontMatter:{title:"OpenVox Asterisk"},sidebar:"docs",previous:{title:"\u786c\u4ef6\u8bbe\u5907",permalink:"/notes/voip/hardware/"},next:{title:"OpenVox",permalink:"/notes/voip/openvox"}},d={},c=[{value:"macro",id:"macro",level:2}];function a(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"openvox-asterisk",children:"OpenVox Asterisk"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://openvoxwiki.atlassian.net/wiki/spaces/VG/pages/2473082832/GSM+Gateways+APP+Note",children:"GSM Gateways APP Note"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \u53d1\u8d77\u547c\u53eb\nchannel originate SIP/6003 extension 10086@sip-6003\nchannel originate IAX2/dev/6003 extension 10086@iax-dev\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"conf"}),(0,s.jsx)(e.th,{children:"val"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"astetcdir"}),(0,s.jsx)(e.td,{children:"/etc/asterisk"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"astmoddir"}),(0,s.jsx)(e.td,{children:"/usr/lib/asterisk/modules"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"astvarlibdir"}),(0,s.jsx)(e.td,{children:"/usr/lib/asterisk"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"astagidir"}),(0,s.jsx)(e.td,{children:"/usr/lib/asterisk/agi-bin"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"astspooldir"}),(0,s.jsx)(e.td,{children:"/tmp/media/spool/asterisk"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"astrundir"}),(0,s.jsx)(e.td,{children:"/var/run"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"astlogdir"}),(0,s.jsx)(e.td,{children:"/tmp/log/asterisk"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"astdatadir"}),(0,s.jsx)(e.td,{children:"/etc/asterisk"})]})]})]}),"\n",(0,s.jsx)(e.admonition,{title:"\ud83d\udca1",type:"tip",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"spool \u4e3a /tmp/media/spool/asterisk"}),"\n",(0,s.jsx)(e.li,{children:"\u5f55\u97f3\u5b58\u50a8\u5728 /tmp/media/spool/asterisk/monitor"}),"\n",(0,s.jsx)(e.li,{children:"tmpfs \u6839\u636e\u5185\u5b58\u4e0d\u4e00\u6837\u5927\u5c0f\u4e0d\u4e00\u6837 - \u5c0f\u7684\u53ef\u80fd\u53ea\u6709 30MB \u5de6\u53f3 free \u5185\u5b58"}),"\n"]})}),"\n",(0,s.jsx)(e.admonition,{title:"\u26a0\ufe0f",type:"caution",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["wg \u7cfb\u5217\u6ca1\u6709 app_stack\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u57fa\u4e8e Debian 8, Linux 4.19.81, asterisk 1.8.20"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"rtg - \u8def\u7531\u5206\u7ec4"}),"\n",(0,s.jsxs)(e.li,{children:["\u4e00\u4e2a\u8def\u7531\u89c4\u5219\u4f1a\u57fa\u4e8e\u76ee\u6807\u751f\u6210 N \u4e2a context - ",(0,s.jsx)(e.code,{children:"rtg-test-1"})]}),"\n",(0,s.jsx)(e.li,{children:"\u6bcf\u4e2a\u76ee\u6807 include \u4e00\u4e2a"}),"\n",(0,s.jsxs)(e.li,{children:["sounds - \u53ea\u6709\u90e8\u5206 sounds \u53ef\u7528\u4e8e\u6d4b\u8bd5\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"agent-pass.gsm"}),"\n",(0,s.jsx)(e.li,{children:"auth-incorrect.gsm"}),"\n",(0,s.jsx)(e.li,{children:"auth-thankyou.gsm"}),"\n",(0,s.jsx)(e.li,{children:"vm-goodbye.gsm"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ini",children:'; \u81ea\u5b9a\u4e49\u8def\u7531 \u76ee\u6807 channel \u8bbe\u7f6e\u4e3a custom \u652f\u6301\u81ea\u5b9a\u4e49\u4e0a\u4e0b\u6587\n; Macro(my-inside) -> macro-my-inside\n[rtg-test-1]\nexten => _[*#+0-9].,1,NoOp(_[*#+0-9]. matches Rule rtg-test-1)\nexten => _[*#+0-9].,n,Set(CDR_CALLEEID=${EXTEN})\nexten => _[*#+0-9].,n,Macro(my-inside)\nexten => _[*#+0-9].,n(nochannel),ChannelHangup("${CDR_TOCHAN}")\nexten => _[*#+0-9].,n,Goto(nocdr,s,1)\nexten => _[*#+0-9].,n,Hangup()\n\n[nothingtodo]\nexten => _[*#+0-9].,1,NoOp(Nothing to do, Not setting out channel)\nexten => _[*#+0-9].,n,Hangup(42)\n\n# SIP \u5185\u7ebf\n[internalsip]\nexten => _9X.,1,NoOp(SIP Internal Call)\nexten => _9X.,n,Set(CDR_CALLEEID=${EXTEN:1})\nexten => _9X.,n,Set(CDR_TOCHAN=${EXTEN:1})\nexten => _9X.,n,Set(CDR_TOCHAN=${SHELL(/my_tools/get_sipendpointname "${CDR_TOCHAN}")})\nexten => _9X.,n,Dial(SIP/${EXTEN:1})\nexten => _9X.,n,Hangup(42)\n\n# SIP \u51fa\u5c40\u903b\u8f91\n[sipinbound]\nexten => _[*#+0-9].,1,NoOp(SIP Inbound)\nexten => _[*#+0-9].,n,GotoIf(${DIALPLAN_EXISTS(${SIPROUTE},${EXTEN},1)}?:nocdr)\nexten => _[*#+0-9].,n,Goto(${SIPROUTE},${EXTEN},1)\nexten => _[*#+0-9].,n(nocdr),Goto(nocdr,s,1)\n\n[iaxinbound]\nexten => _[*#+0-9].,1,NoOp(IAX Inbound)\nexten => _[*#+0-9].,n,GotoIf(${DIALPLAN_EXISTS(${IAXROUTE},${EXTEN},1)}?:nocdr)\nexten => _[*#+0-9].,n,Goto(${IAXROUTE},${EXTEN},1)\nexten => _[*#+0-9].,n(nocdr),Goto(nocdr,s,1)\n\n[nocdr]\nexten => s,1,ChannelHangup("${CDR_TOCHAN}")\nexten => s,n,Hangup(42)\n\n[globals]\n# \u9ed8\u8ba4 SIP \u8def\u7531\nSIPROUTE=sipdefault\n'})}),"\n",(0,s.jsx)(e.h2,{id:"macro",children:"macro"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["dial-failover\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["gsm\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"Macro(dial-failover,,${EXTEN},${POLICY_GROUP-RND-OUT},RET)"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u4f8b\u5982 ",(0,s.jsx)(e.code,{children:'Macro("SIP/6003-0000000c", "dial-failover,,10086,extra/7,0,gsm-4,RET")'})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"ARG1 forward callee id"}),"\n",(0,s.jsx)(e.li,{children:"ARG2 dial extension"}),"\n",(0,s.jsx)(e.li,{children:"ARG3 \u8bbe\u5907"}),"\n",(0,s.jsx)(e.li,{children:"ARG4 extension flag"}),"\n",(0,s.jsx)(e.li,{children:"ARG5 CDR_TOCHAN"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["wg - ",(0,s.jsx)(e.code,{children:"Macro(dial-failover,,${CDR_CALLEEID},RET,extra/r1,0,0)"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"ARG1 \u547c\u8f6c\u53f7\u7801"}),"\n",(0,s.jsx)(e.li,{children:"ARG2 \u8865\u53eb\u53f7"}),"\n",(0,s.jsx)(e.li,{children:"ARG3 \u8fd4\u56de - nocarrier, hangup, congestion"}),"\n",(0,s.jsx)(e.li,{children:"ARG4 \u8bbe\u5907"}),"\n",(0,s.jsx)(e.li,{children:"ARG5 \u989d\u5916\u6807\u8bc6"}),"\n",(0,s.jsx)(e.li,{children:"ARG6 CDR \u4e2d\u7684 TO"}),"\n",(0,s.jsx)(e.li,{children:"4\uff0c5\uff0c6 \u53d8\u91cf\u5728\u6bcf\u4e00\u6b21 failover \u4f1a\u9012\u589e"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function x(n={}){const{wrapper:e}={...(0,i.M)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},38088:(n,e,t)=>{var s=t(96651),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(n,e,t){var s,r={},c=null,a=null;for(s in void 0!==t&&(c=""+t),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(a=e.ref),e)l.call(e,s)&&!d.hasOwnProperty(s)&&(r[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps)void 0===r[s]&&(r[s]=e[s]);return{$$typeof:i,type:n,key:c,ref:a,props:r,_owner:o.current}}e.Fragment=r,e.jsx=c,e.jsxs=c},2488:(n,e,t)=>{n.exports=t(38088)},62780:(n,e,t)=>{t.d(e,{I:()=>o,M:()=>l});var s=t(96651);const i={},r=s.createContext(i);function l(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);