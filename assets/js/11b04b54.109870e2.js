/*! For license information please see 11b04b54.109870e2.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[73988],{80972:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var t=s(2488),r=s(62780);const i={title:"Asterisk WebRTC"},o="Asterisk WebRTC",d={id:"voip/asterisk/asterisk-webrtc",title:"Asterisk WebRTC",description:"- client",source:"@site/../notes/voip/asterisk/asterisk-webrtc.md",sourceDirName:"voip/asterisk",slug:"/voip/asterisk/webrtc",permalink:"/notes/voip/asterisk/webrtc",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/voip/asterisk/asterisk-webrtc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1625926581,formattedLastUpdatedAt:"Jul 10, 2021",frontMatter:{title:"Asterisk WebRTC"},sidebar:"docs",previous:{title:"Asterisk \u7248\u672c",permalink:"/notes/voip/asterisk/version"},next:{title:"DAHDi Channel",permalink:"/notes/voip/asterisk/chan_dahdi"}},l={},a=[{value:"rtp.conf",id:"rtpconf",level:2},{value:"res_stun_monitor.conf",id:"res_stun_monitorconf",level:2},{value:"Shutting down transport &#39;WSS to 172.17.0.1:57434&#39; since no request was received in 32 seconds",id:"shutting-down-transport-wss-to-172170157434-since-no-request-was-received-in-32-seconds",level:2},{value:"Couldn&#39;t negotiate stream 0:audio-0:audio (nothing)",id:"couldnt-negotiate-stream-0audio-0audio-nothing",level:2},{value:"No translator path: (starting codec is not valid)",id:"no-translator-path-starting-codec-is-not-valid",level:2}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"asterisk-webrtc",children:"Asterisk WebRTC"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["client\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/versatica/JsSIP",children:"versatica/JsSIP"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/onsip/SIP.js",children:"onsip/SIP.js"})}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://github.com/DoubangoTelecom/sipml5",children:"DoubangoTelecom/sipml5"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"MIT"}),"\n",(0,t.jsx)(e.li,{children:"\u6700\u65e9, \u4e0d\u6d3b\u8dc3, \u6700\u540e\u63d0\u4ea4 2018 \u5e74"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://wiki.asterisk.org/wiki/display/AST/Configuring+res_pjsip+to+work+through+NAT",children:"Configuring res_pjsip to work through NAT"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://wiki.asterisk.org/wiki/display/AST/Configuring+Asterisk+for+WebRTC+Clients",children:"Configuring Asterisk for WebRTC Clients"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-conf",children:"; webrtc\nload => res_crypto\nload => res_http_websocket\nload => res_pjsip_transport_websocket\nload => res_srtp\nload => codec_opus_open_source\nload => res_format_attr_opus\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# \u5f00\u542f pjsip \u65e5\u5fd7\npjsip set logger on\n"})}),"\n",(0,t.jsx)(e.h2,{id:"rtpconf",children:"rtp.conf"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-conf",children:"[general]\n; RTP \u5f00\u59cb\u7ed3\u675f\u7aef\u53e3\n; \u4f8b\u5982 10000-20000\nrtpstart=5000\nrtpend=31000\n\n; RTP checksum\n;rtpchecksums=no\n\n; DTMF digit with no 'end' marker \u8fde\u7eed\u65f6\u95f4 (in 'samples', 1/8000 of a second)\n;dtmftimeout=3000\n; rtcp reports \u95f4\u9694 - \u5355\u4f4d ms\n; min 500, max 60000\nrtcpinterval = 5000\n\n; \u542f\u7528\u4e25\u683c RTP \u4fdd\u62a4\n; \u4e22\u5f03 RTP \u6d41\u4e2d\u672a\u77e5\u6765\u6e90\u7684 RTP \u5305\n; \u5728\u5efa\u7acb\u8fde\u63a5\u524d\u548c\u5904\u7406\u8fde\u63a5\u4e2d\u90fd\u4f1a\u6821\u9a8c\u6765\u6e90 (e.g., transfers and direct media)\n;\n; Initial connection and renegotiation starts a learning mode to qualify\n; stream source addresses.  Once Asterisk has recognized a stream it will\n; allow other streams to qualify and replace the current stream for 5\n; seconds after starting learning mode.  Once learning mode completes the\n; current stream is locked in and cannot change until the next\n; renegotiation.\n; Valid options are \"no\" to disable strictrtp, \"yes\" to enable strictrtp,\n; and \"seqno\", which does the same thing as strictrtp=yes, but only checks\n; to make sure the sequence number is correct rather than checking the time\n; interval as well.\n; This option is enabled by default.\nstrictrtp=yes\n\n; Number of packets containing consecutive sequence values needed\n; to change the RTP source socket address. This option only comes\n; into play while using strictrtp=yes. Consider changing this value\n; if rtp packets are dropped from one or both ends after a call is\n; connected. This option is set to 4 by default.\n; probation=8\n;\n; Enable sRTP replay protection. Buggy SIP user agents (UAs) reset the\n; sequence number (RTP-SEQ) on a re-INVITE, for example, with Session Timers\n; or on Call Hold/Resume, but keep the synchronization source (RTP-SSRC). If\n; the new RTP-SEQ is higher than the previous one, the call continues if the\n; roll-over counter (sRTP-ROC) is zero (the call lasted less than 22 minutes).\n; In all other cases, the call faces one-way audio or even no audio at all.\n; \"replay check failed (index too old)\" gets printed continuously. This is a\n; software bug. You have to report this to the creator of that UA. Until it is\n; fixed, you could disable sRTP replay protection (see RFC 3711 section 3.3.2).\n; This option is enabled by default.\n; srtpreplayprotection=yes\n;\n; \u542f\u7528 ICE \u652f\u6301\nicesupport=true\n\n; STUN \u5730\u5740\uff0c\u9ed8\u8ba4\u7aef\u53e3 3478\n; stunaddr=\n;\n; Some multihomed servers have IP interfaces that cannot reach the STUN\n; server specified by stunaddr.  Blacklist those interface subnets from\n; trying to send a STUN packet to find the external IP address.\n; Attempting to send the STUN packet needlessly delays processing incoming\n; and outgoing SIP INVITEs because we will wait for a response that can\n; never come until we give up on the response.\n; * Multiple subnets may be listed.\n; * Blacklisting applies to IPv4 only.  STUN isn't needed for IPv6.\n; * Blacklisting applies when binding RTP to specific IP addresses and not\n; the wildcard 0.0.0.0 address.  e.g., A PJSIP endpoint binding RTP to a\n; specific address using the bind_rtp_to_media_address and media_address\n; options.  Or the PJSIP endpoint specifies an explicit transport that binds\n; to a specific IP address.  Blacklisting is done via ACL infrastructure\n; so it's possible to whitelist as well.\n;\n; stun_acl = named_acl\n; stun_deny = 0.0.0.0/0\n; stun_permit = 1.2.3.4/32\n; stun_deny \u522b\u540d\n; stun_blacklist=\n\n; TURN \u670d\u52a1\uff0c\u9ed8\u8ba4\u7aef\u53e3 3478\n; turnaddr=\n; TURN relay \u7528\u6237\u540d\n; turnusername=\n; TURN relay \u5bc6\u94a5\n; turnpassword=\n\n\n; \u63a7\u5236 ICE \u53d1\u73b0\u5730\u5740\u7684 ACL - srflx and relay discovery\n; \u53ef\u5217\u591a\u4e2a\uff0c\u9ed8\u8ba4\u6240\u6709\u90fd\u63a5\u53d7\n; ice_acl = named_acl\n; ice_deny = 0.0.0.0/0\n; ice_permit = 1.2.3.4/32\n; ice_deny \u522b\u540d\n; ice_blacklist =\n\n; DTLS \u5305\u5206\u7247 MTU - \u6700\u4f4e 256\ndtls_mtu = 1200\n\n[ice_host_candidates]\n;\n; When Asterisk is behind a static one-to-one NAT and ICE is in use, ICE will\n; expose the server's internal IP address as one of the host candidates.\n; Although using STUN (see the 'stunaddr' configuration option) will provide a\n; publicly accessible IP, the internal IP will still be sent to the remote\n; peer. To help hide the topology of your internal network, you can override\n; the host candidates that Asterisk will send to the remote peer.\n;\n; IMPORTANT: Only use this functionality when your Asterisk server is behind a\n; one-to-one NAT and you know what you're doing. If you do define anything\n; here, you almost certainly will NOT want to specify 'stunaddr' or 'turnaddr'\n; above.\n;\n; The format for these overrides is:\n;\n;    <local address> => <advertised address>,[include_local_address]\n;\n; The following will replace 192.168.1.10 with 1.2.3.4 during ICE\n; negotiation:\n;\n;192.168.1.10 => 1.2.3.4\n;\n; The following will include BOTH 192.168.1.10 and 1.2.3.4 during ICE\n; negotiation instead of replacing 192.168.1.10.  This can make it easier\n; to serve both local and remote clients.\n;\n;192.168.1.10 => 1.2.3.4,include_local_address\n;\n; You can define an override for more than 1 interface if you have a multihomed\n; server. Any local interface that is not matched will be passed through\n; unaltered. Both IPv4 and IPv6 addresses are supported.\n\n"})}),"\n",(0,t.jsx)(e.h2,{id:"res_stun_monitorconf",children:"res_stun_monitor.conf"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"stun set debug on\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-conf",children:";\n; Configuration file for the res_stun_monitor module\n;\n; The res_stun_monitor module sends STUN requests to a configured STUN server\n; periodically.  If the monitor detects a change in the external IP address or port\n; provided by the STUN server an event is sent out internally within Asterisk\n; to alert all listeners to that event of the change.\n\n; The current default listeners for the network change event include chan_sip\n; and chan_iax.  Both of these channel drivers by default react to this event\n; by renewing all outbound registrations.  This allows the endpoints Asterisk\n; is registering with to become aware of the address change and know the new\n; location.\n;\n[general]\n;\n; ---- STUN Server configuration ---\n;  Setting the 'stunaddr' option to a valid address enables the STUN monitor.\n;\n;stunaddr = mystunserver.com    ; Address of the STUN server to query.\n                                ; Valid form:\n                                ;   [(hostname | IP-address) [':' port]]\n                                ; The port defaults to the standard STUN port (3478).\n                                ; Set to an empty value to disable STUN monitoring.\n                                ;   Default is disabled.\n;stunrefresh = 30               ; Number of seconds between STUN refreshes.\n                                ;   Default is 30.\n"})}),"\n",(0,t.jsx)(e.h1,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(e.h2,{id:"shutting-down-transport-wss-to-172170157434-since-no-request-was-received-in-32-seconds",children:"Shutting down transport 'WSS to 172.17.0.1:57434' since no request was received in 32 seconds"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"asterisk 16.2.2 \u4fee\u590d"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"couldnt-negotiate-stream-0audio-0audio-nothing",children:"Couldn't negotiate stream 0:audio-0:audio:sendrecv (nothing)"}),"\n",(0,t.jsx)(e.p,{children:"\u68c0\u67e5\u7f16\u7801\u548c\u52a0\u5bc6\u95ee\u9898"}),"\n",(0,t.jsx)(e.h2,{id:"no-translator-path-starting-codec-is-not-valid",children:"No translator path: (starting codec is not valid)"}),"\n",(0,t.jsx)(e.p,{children:"\u52a0\u8f7d opus, \u786e\u4fdd\u8f6c\u6362\u8def\u5f84"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-conf",children:"load => codec_opus_open_source\nload => res_format_attr_opus\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"core show translation paths opus\n"})}),"\n",(0,t.jsx)(e.p,{children:"from opus:48000 to"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"to"}),(0,t.jsx)(e.th,{children:"path"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"amr:8000"}),(0,t.jsx)(e.td,{children:"No Translation Path"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"amrwb:16000"}),(0,t.jsx)(e.td,{children:"No Translation Path"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"codec2:8000"}),(0,t.jsx)(e.td,{children:"No Translation Path"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"g723:8000"}),(0,t.jsx)(e.td,{children:"No Translation Path"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ulaw:8000"}),(0,t.jsx)(e.td,{children:"(opus@48000)->(slin@8000)->(ulaw@8000)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"alaw:8000"}),(0,t.jsx)(e.td,{children:"(opus@48000)->(slin@8000)->(alaw@8000)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"gsm:8000"}),(0,t.jsx)(e.td,{children:"(opus@48000)->(slin@8000)->(gsm@8000)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"g726:8000"}),(0,t.jsx)(e.td,{children:"(opus@48000)->(slin@8000)->(g726@8000)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"g726aal2:8000"}),(0,t.jsx)(e.td,{children:"(opus@48000)->(slin@8000)->(g726aal2@8000)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"adpcm:8000"}),(0,t.jsx)(e.td,{children:"(opus@48000)->(slin@8000)->(adpcm@8000)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"slin:8000"}),(0,t.jsx)(e.td,{children:"(opus@48000)->(slin@8000)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"slin:12000"}),(0,t.jsx)(e.td,{children:"(opus@48000)->(slin@12000)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"slin:16000"}),(0,t.jsx)(e.td,{children:"(opus@48000)->(slin@16000)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"slin:24000"}),(0,t.jsx)(e.td,{children:"(opus@48000)->(slin@24000)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"slin:32000"}),(0,t.jsx)(e.td,{children:"(opus@48000)->(slin@24000)->(slin@32000)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"slin:44100"}),(0,t.jsx)(e.td,{children:"(opus@48000)->(slin@24000)->(slin@44100)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"slin:48000"}),(0,t.jsx)(e.td,{children:"(opus@48000)->(slin@48000)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"slin:96000"}),(0,t.jsx)(e.td,{children:"(opus@48000)->(slin@48000)->(slin@96000)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"slin:192000"}),(0,t.jsx)(e.td,{children:"(opus@48000)->(slin@48000)->(slin@192000)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lpc10:8000"}),(0,t.jsx)(e.td,{children:"(opus@48000)->(slin@8000)->(lpc10@8000)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"g729:8000"}),(0,t.jsx)(e.td,{children:"No Translation Path"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"speex:8000"}),(0,t.jsx)(e.td,{children:"No Translation Path"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"speex:16000"}),(0,t.jsx)(e.td,{children:"No Translation Path"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"speex:32000"}),(0,t.jsx)(e.td,{children:"No Translation Path"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ilbc:8000"}),(0,t.jsx)(e.td,{children:"No Translation Path"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"g722:16000"}),(0,t.jsx)(e.td,{children:"(opus@48000)->(slin@16000)->(g722@16000)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"siren7:16000"}),(0,t.jsx)(e.td,{children:"No Translation Path"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"siren14:32000"}),(0,t.jsx)(e.td,{children:"No Translation Path"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"testlaw:8000"}),(0,t.jsx)(e.td,{children:"(opus@48000)->(slin@8000)->(testlaw@8000)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"g719:48000"}),(0,t.jsx)(e.td,{children:"No Translation Path"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"none:8000"}),(0,t.jsx)(e.td,{children:"No Translation Path"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"silk:8000"}),(0,t.jsx)(e.td,{children:"No Translation Path"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"silk:12000"}),(0,t.jsx)(e.td,{children:"No Translation Path"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"silk:16000"}),(0,t.jsx)(e.td,{children:"No Translation Path"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"silk:24000"}),(0,t.jsx)(e.td,{children:"No Translation Path"})]})]})]})]})}function h(n={}){const{wrapper:e}={...(0,r.M)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},38088:(n,e,s)=>{var t=s(96651),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(n,e,s){var t,i={},a=null,c=null;for(t in void 0!==s&&(a=""+s),void 0!==e.key&&(a=""+e.key),void 0!==e.ref&&(c=e.ref),e)o.call(e,t)&&!l.hasOwnProperty(t)&&(i[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps)void 0===i[t]&&(i[t]=e[t]);return{$$typeof:r,type:n,key:a,ref:c,props:i,_owner:d.current}}e.Fragment=i,e.jsx=a,e.jsxs=a},2488:(n,e,s)=>{n.exports=s(38088)},62780:(n,e,s)=>{s.d(e,{I:()=>d,M:()=>o});var t=s(96651);const r={},i=t.createContext(r);function o(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);