/*! For license information please see a8fff696.2fc07ae5.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[16126],{6528:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>l,metadata:()=>t,toc:()=>x});var d=s(2488),r=s(62780);const l={title:"FreeSWITCH Conf"},i="FreeSWITCH Conf",t={id:"voip/freeswitch/freeswitch-conf",title:"FreeSWITCH Conf",description:"- \u53d8\u91cf\u4f5c\u7528\u57df",source:"@site/../notes/voip/freeswitch/freeswitch-conf.md",sourceDirName:"voip/freeswitch",slug:"/voip/freeswitch/conf",permalink:"/notes/voip/freeswitch/conf",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/voip/freeswitch/freeswitch-conf.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1634309581,formattedLastUpdatedAt:"Oct 15, 2021",frontMatter:{title:"FreeSWITCH Conf"},sidebar:"docs",previous:{title:"FreeSWITCH-1.8",permalink:"/notes/voip/freeswitch/18-book"},next:{title:"FreeSWITCH Dev",permalink:"/notes/voip/freeswitch/dev"}},c={},x=[{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:2},{value:"\u9884\u5904\u7406",id:"\u9884\u5904\u7406",level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2},{value:"vars",id:"vars",level:2},{value:"\u76ee\u5f55",id:"\u76ee\u5f55",level:3},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",level:3},{value:"\u5a92\u4f53",id:"\u5a92\u4f53",level:3},{value:"dingaling",id:"dingaling",level:3},{value:"switch.conf",id:"switchconf",level:2},{value:"modules.conf",id:"modulesconf",level:2},{value:"\u901a\u9053",id:"\u901a\u9053",level:2}];function h(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.h1,{id:"freeswitch-conf",children:"FreeSWITCH Conf"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\u53d8\u91cf\u4f5c\u7528\u57df\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u5168\u5c40"}),"\n",(0,d.jsx)(e.li,{children:"\u901a\u9053"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.li,{children:(0,d.jsx)(e.a,{href:"https://freeswitch.org/confluence/display/FREESWITCH/Understanding+the+Configuration+Files",children:"Understanding the Configuration Files"})}),"\n",(0,d.jsx)(e.li,{children:(0,d.jsx)(e.a,{href:"https://freeswitch.org/confluence/display/FREESWITCH/Configuration",children:"https://freeswitch.org/confluence/display/FREESWITCH/Configuration"})}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"\u914d\u7f6e\u8bf4\u660e",children:"\u914d\u7f6e\u8bf4\u660e"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u52a8\u6001\u914d\u7f6e\uff0c\u6ca1\u6709 DTD\uff0c\u6709 schema \u6982\u5ff5"}),"\n",(0,d.jsx)(e.li,{children:"\u5165\u53e3\u914d\u7f6e switch.conf"}),"\n",(0,d.jsx)(e.li,{children:"\u6a21\u5757\u914d\u7f6e modules.conf"}),"\n",(0,d.jsxs)(e.li,{children:["\u6a21\u5f0f\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["default.xml - ",(0,d.jsx)(e.code,{children:'<user id="1000" type="pointer"/>'})," \u6307\u5411 \u76ee\u5f55\u91cc\u7684\u5177\u4f53\u914d\u7f6e\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["default/\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"spec.xml"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:'<param name="password" value="$${default_password}"/>'})," \u53d8\u91cf\u5f15\u7528"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["XML \u63a5\u53e3\u6a21\u5757\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"mod_xml_cdr"}),"\n",(0,d.jsx)(e.li,{children:"mod_xml_curl"}),"\n",(0,d.jsx)(e.li,{children:"mod_xml_diaplan"}),"\n",(0,d.jsx)(e.li,{children:"mod_xml_radius"}),"\n",(0,d.jsx)(e.li,{children:"mod_xml_rpc"}),"\n",(0,d.jsx)(e.li,{children:"mod_xml_scgi"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"\u9884\u5904\u7406",children:"\u9884\u5904\u7406"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"include"}),"\n",(0,d.jsxs)(e.li,{children:["set - \u5168\u5c40\u53d8\u91cf\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.span,{className:"katex-error",title:"ParseError: KaTeX parse error: Can't use function '$' in math mode at position 35: \u2026\u7406\u540e\u4f1a\u88ab\u66ff\u6362\n- \u8fd0\u884c\u65f6\u540c `$\u0332{variable}`",style:{color:"#cc0000"},children:"{variable}\n- \u914d\u7f6e\u65f6\u5728\u9884\u5904\u7406\u540e\u4f1a\u88ab\u66ff\u6362\n- \u8fd0\u884c\u65f6\u540c `${variable}`"}),"\n"]}),"\n",(0,d.jsx)(e.li,{children:"${variable} - \u4e0d\u53d7\u9884\u5904\u7406\u5f71\u54cd"}),"\n",(0,d.jsx)(e.li,{children:"\u9759\u6001\uff0c\u4e00\u6b21\u6027"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.li,{children:"exec - \u6267\u884c\u811a\u672c"}),"\n",(0,d.jsx)(e.li,{children:"exec-set - \u7ed3\u679c\u8bbe\u7f6e\u4e3a\u53d8\u91cf"}),"\n",(0,d.jsx)(e.li,{children:"comment"}),"\n"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-xml",metastring:'title="\u53d8\u91cf"',children:'\x3c!-- \u8bbe\u7f6e\u53d8\u91cf --\x3e\n<X-PRE-PROCESS cmd="set" data="my_variable=\'value\'"/>\n\x3c!--#set my_variable=\'value\'--\x3e\n\n\x3c!-- \u4e0d\u751f\u6548 - \u4e34\u65f6\u7981\u7528 --\x3e\n<X-PRE-PROCESS cmd="comment" data="my_variable=\'value\'"/>\n<X-NO-PRE-PROCESS cmd="set" data="my_variable=\'value\'"/>\n<Y-PRE-PROCESS cmd="set" data="my_variable=\'value\'"/>\n\n<X-PRE-PROCESS cmd="exec" data="/path/to/my_script_that_dumps_all_configs_to_stdout.pl"/>\n<X-PRE-PROCESS cmd="exec-set" data="local_ip_v4=ip addr show eth1 | awk \'/inet /{print $2}\' | head -n 1 | cut -d \'/\' -f 1"/>\n'})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u4e0d\u80fd\u6ce8\u91ca"}),"\n",(0,d.jsx)(e.li,{children:"\u53ef\u4ee5\u79fb\u9664\u6216\u8005\u6539\u540d\u5b57 - \u4f8b\u5982 \u6539\u4e3a X-NO-PRE-PROCESS"}),"\n"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-xml",metastring:'title="include"',children:'<X-PRE-PROCESS cmd="include" data="vars.xml"/>\n\n<section name="configuration" description="Various Configuration">\n    <X-PRE-PROCESS cmd="include" data="autoload_configs/*.xml"/>\n</section>\n'})}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-xml",metastring:'title="vars.xml"',children:"<include>\n    \x3c!-- \u88ab include \u5185\u5bb9 --\x3e\n</include>\n"})}),"\n",(0,d.jsx)(e.h2,{id:"\u914d\u7f6e\u6587\u4ef6",children:"\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"extensions.conf"}),"\n",(0,d.jsx)(e.li,{children:"freeswitch.xml"}),"\n",(0,d.jsx)(e.li,{children:"fur_elise.xml"}),"\n",(0,d.jsx)(e.li,{children:"mime.types"}),"\n",(0,d.jsx)(e.li,{children:"notify-voicemail.tpl"}),"\n",(0,d.jsx)(e.li,{children:"tetris.ttml"}),"\n",(0,d.jsx)(e.li,{children:"vars.xml"}),"\n",(0,d.jsx)(e.li,{children:"voicemail.tpl"}),"\n",(0,d.jsx)(e.li,{children:"web-vm.tpl"}),"\n",(0,d.jsxs)(e.li,{children:["autoload_configs/ - \u81ea\u52a8\u52a0\u8f7d\u7684\u914d\u7f6e\u76ee\u5f55\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"switch.conf.xml - \u6838\u5fc3\u914d\u7f6e"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.li,{children:"chatplan/"}),"\n",(0,d.jsxs)(e.li,{children:["dialplan/\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"features.xml"}),"\n",(0,d.jsx)(e.li,{children:"default.xml"}),"\n",(0,d.jsx)(e.li,{children:"default/"}),"\n",(0,d.jsx)(e.li,{children:"public.xml"}),"\n",(0,d.jsx)(e.li,{children:"public/"}),"\n",(0,d.jsx)(e.li,{children:"skinny-patterns.xml"}),"\n",(0,d.jsx)(e.li,{children:"skinny-patterns/"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["directory/\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"default.xml"}),"\n",(0,d.jsx)(e.li,{children:"default/"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.li,{children:"ivr_menus"}),"\n",(0,d.jsx)(e.li,{children:"jingle_profiles"}),"\n",(0,d.jsx)(e.li,{children:"lang"}),"\n",(0,d.jsx)(e.li,{children:"mrcp_profiles"}),"\n",(0,d.jsx)(e.li,{children:"sip_profiles"}),"\n",(0,d.jsx)(e.li,{children:"skinny_profiles"}),"\n",(0,d.jsxs)(e.li,{children:["tls\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"dtls-srtp.pem"}),"\n",(0,d.jsx)(e.li,{children:"wss.pem"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"vars",children:"vars"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:"global_getvar variable_name\nuuid_getvar <uuid> variable_name\n"})}),"\n",(0,d.jsx)(e.h3,{id:"\u76ee\u5f55",children:"\u76ee\u5f55"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"name"}),(0,d.jsx)(e.th,{children:"value"}),(0,d.jsx)(e.th,{children:"desc"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"base_dir"}),(0,d.jsx)(e.td,{children:"/etc/freeswitch"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"cache_dir"}),(0,d.jsx)(e.td,{children:"/var/cache/freeswitch"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"certs_dir"}),(0,d.jsx)(e.td,{children:"/etc/freeswitch/tls"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"conf_dir"}),(0,d.jsx)(e.td,{children:"/etc/freeswitch"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"data_dir"}),(0,d.jsx)(e.td,{children:"/share/freeswitch"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"db_dir"}),(0,d.jsx)(e.td,{children:"/var/lib/freeswitch/db"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"fonts_dir"}),(0,d.jsx)(e.td,{children:"/share/freeswitch/fonts"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"grammar_dir"}),(0,d.jsx)(e.td,{children:"/share/freeswitch/grammar"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"htdocs_dir"}),(0,d.jsx)(e.td,{children:"/share/freeswitch/htdocs"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"images_dir"}),(0,d.jsx)(e.td,{children:"/var/lib/freeswitch/images"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"localstate_dir"}),(0,d.jsx)(e.td,{children:"/var/lib/freeswitch"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"log_dir"}),(0,d.jsx)(e.td,{children:"/var/log/freeswitch"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"mod_dir"}),(0,d.jsx)(e.td,{children:"/lib/freeswitch/mod"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"recordings_dir"}),(0,d.jsx)(e.td,{children:"/var/lib/freeswitch/recordings"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"run_dir"}),(0,d.jsx)(e.td,{children:"/var/run/freeswitch"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"script_dir"}),(0,d.jsx)(e.td,{children:"/share/freeswitch/scripts"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"sounds_dir"}),(0,d.jsx)(e.td,{children:"/share/freeswitch/sounds"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"storage_dir"}),(0,d.jsx)(e.td,{children:"/var/lib/freeswitch/storage"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"temp_dir"}),(0,d.jsx)(e.td,{children:"/tmp"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"sound_prefix"}),(0,d.jsx)(e.td,{children:"/share/freeswitch/sounds/en/us/callie"}),(0,d.jsx)(e.td,{})]})]})]}),"\n",(0,d.jsx)(e.h3,{id:"\u7f51\u7edc",children:"\u7f51\u7edc"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"name"}),(0,d.jsx)(e.th,{children:"value"}),(0,d.jsx)(e.th,{children:"desc"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"domain"}),(0,d.jsx)(e.td,{children:"$${local_ip_v4}"}),(0,d.jsx)(e.td,{children:"default/fallback domain"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"domain_name"}),(0,d.jsx)(e.td,{children:"$${domain}"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"external_auth_calls"}),(0,d.jsx)(e.td,{children:"false"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"external_rtp_ip"}),(0,d.jsx)(e.td,{children:"stun:stun.freeswitch.org"}),(0,d.jsx)(e.td,{children:"stun-set"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"external_sip_ip"}),(0,d.jsx)(e.td,{children:"stun:stun.freeswitch.org"}),(0,d.jsx)(e.td,{children:"stun-set"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"unroll_loops"}),(0,d.jsx)(e.td,{children:"true"}),(0,d.jsx)(e.td,{children:"sip loopback unrolling"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"external_sip_port"}),(0,d.jsx)(e.td,{children:"5080"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"external_ssl_enable"}),(0,d.jsx)(e.td,{children:"false"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"external_tls_port"}),(0,d.jsx)(e.td,{children:"5081"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"internal_auth_calls"}),(0,d.jsx)(e.td,{children:"true"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"internal_sip_port"}),(0,d.jsx)(e.td,{children:"5060"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"internal_ssl_enable"}),(0,d.jsx)(e.td,{children:"false"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"internal_tls_port"}),(0,d.jsx)(e.td,{children:"5061"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"local_ip_v4"}),(0,d.jsx)(e.td,{children:"192.168.1.1"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"local_ip_v6"}),(0,d.jsx)(e.td,{children:"::1"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"local_mask_v4"}),(0,d.jsx)(e.td,{children:"255.255.252.0"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"zrtp_secure_media"}),(0,d.jsx)(e.td,{children:"true"}),(0,d.jsx)(e.td,{children:"ZRTP"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"nat_public_addr"}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"nat_private_addr"}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"nat_type"}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"rtp_secure_media"}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"SRTP"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"rtp_secure_media_inbound"}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"rtp_secure_media_outbound"}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{})]})]})]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["ZRTP ",(0,d.jsx)(e.a,{href:"http://wiki.freeswitch.org/wiki/ZRTP",children:"http://wiki.freeswitch.org/wiki/ZRTP"})]}),"\n",(0,d.jsxs)(e.li,{children:["SRTP\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"do not offer or accept variable bit rate codecs"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.h3,{id:"\u5a92\u4f53",children:"\u5a92\u4f53"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"name"}),(0,d.jsx)(e.th,{children:"value"}),(0,d.jsx)(e.th,{children:"desc"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"call_debug"}),(0,d.jsx)(e.td,{children:"false"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"console_loglevel"}),(0,d.jsx)(e.td,{children:"info"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"default_areacode"}),(0,d.jsx)(e.td,{children:"918"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"default_country"}),(0,d.jsx)(e.td,{children:"US"}),(0,d.jsx)(e.td,{})]})]})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"name"}),(0,d.jsx)(e.th,{children:"value"}),(0,d.jsx)(e.th,{children:"desc"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"core_uuid"}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"default_password"}),(0,d.jsx)(e.td,{children:"1234"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"default_provider"}),(0,d.jsx)(e.td,{children:"example.com"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"default_provider_contact"}),(0,d.jsx)(e.td,{children:"5000"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"default_provider_from_domain"}),(0,d.jsx)(e.td,{children:"example.com"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"default_provider_password"}),(0,d.jsx)(e.td,{children:"password"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"default_provider_register"}),(0,d.jsx)(e.td,{children:"false"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"default_provider_username"}),(0,d.jsx)(e.td,{children:"joeuser"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"global_codec_prefs"}),(0,d.jsx)(e.td,{children:"OPUS,G722,PCMU,PCMA,H264,VP8"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"outbound_codec_prefs"}),(0,d.jsx)(e.td,{children:"OPUS,G722,PCMU,PCMA,H264,VP8"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"hold_music"}),(0,d.jsx)(e.td,{children:"local_stream://moh"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"outbound_caller_id"}),(0,d.jsx)(e.td,{children:"0000000000"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"outbound_caller_name"}),(0,d.jsx)(e.td,{children:"FreeSWITCH"}),(0,d.jsx)(e.td,{children:"conference.conf.xml, user directory default"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"presence_privacy"}),(0,d.jsx)(e.td,{children:"false"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"rtp_liberal_dtmf"}),(0,d.jsx)(e.td,{children:"true"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"rtp_video_max_bandwidth_in"}),(0,d.jsx)(e.td,{children:"3mb"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"rtp_video_max_bandwidth_out"}),(0,d.jsx)(e.td,{children:"3mb"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"suppress_cng"}),(0,d.jsx)(e.td,{children:"true"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"use_profile"}),(0,d.jsx)(e.td,{children:"external"}),(0,d.jsx)(e.td,{})]})]})]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:(0,d.jsx)(e.code,{children:"codecname[@8000h|16000h|32000h[@XXi]]"})}),"\n"]}),"\n",(0,d.jsx)(e.h3,{id:"dingaling",children:"dingaling"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"name"}),(0,d.jsx)(e.th,{children:"value"}),(0,d.jsx)(e.th,{children:"desc"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"bind_server_ip"}),(0,d.jsx)(e.td,{children:"auto"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"xmpp_client_profile"}),(0,d.jsx)(e.td,{children:"xmppc"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"xmpp_server_profile"}),(0,d.jsx)(e.td,{children:"xmpps"}),(0,d.jsx)(e.td,{})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"switchconf",children:"switch.conf"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-xml",children:'<configuration name="switch.conf" description="Core Configuration">\n  <cli-keybindings>\n    \x3c!-- bind function key --\x3e\n    <key name="[1-12]" value="[api command]"/>\n  </cli-keybindings>\n  \x3c!-- \u6240\u6709 codec \u9ed8\u8ba4 20ms --\x3e\n  <default-ptimes>\n    \x3c!-- <codec name="G729" ptime="40"/> --\x3e\n  </default-ptimes>\n  <settings>\n  </settings>\n</configuration>\n'})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"setting"}),(0,d.jsx)(e.th,{children:"value"}),(0,d.jsx)(e.th,{children:"desc"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"max-db-handles"}),(0,d.jsx)(e.td,{children:"50"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"db-handle-timeout"}),(0,d.jsx)(e.td,{children:"10"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"min-idle-cpu"}),(0,d.jsx)(e.td,{children:"25"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"event-heartbeat-interval"}),(0,d.jsx)(e.td,{children:"10"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"max-sessions"}),(0,d.jsx)(e.td,{children:"1000"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"sessions-per-second"}),(0,d.jsx)(e.td,{children:"30"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"loglevel"}),(0,d.jsx)(e.td,{children:"debug"}),(0,d.jsx)(e.td,{children:"\u5168\u5c40\u9ed8\u8ba4 log \u7ea7\u522b"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"debug-level"}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"0-10"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"sql-buffer-len"}),(0,d.jsx)(e.td,{children:"1m"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"max-sql-buffer-len"}),(0,d.jsx)(e.td,{children:"2m"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"min-dtmf-duration"}),(0,d.jsx)(e.td,{children:"400"}),(0,d.jsx)(e.td,{children:"\u6700\u4f4e 400"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"max-dtmf-duration"}),(0,d.jsx)(e.td,{children:"192000"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"default_dtmf_duration"}),(0,d.jsx)(e.td,{children:"2000"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"verbose-channel-events"}),(0,d.jsx)(e.td,{children:"no"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"enable-clock-nanosleep"}),(0,d.jsx)(e.td,{children:"true"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"enable-monotonic-timing"}),(0,d.jsx)(e.td,{children:"true"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"rtp-start-port"}),(0,d.jsx)(e.td,{children:"16384"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"rtp-end-port"}),(0,d.jsx)(e.td,{children:"32768"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"rtp-port-usage-robustness"}),(0,d.jsx)(e.td,{children:"true"}),(0,d.jsx)(e.td,{children:"\u4f7f\u7528\u7aef\u53e3\u524d\u5148\u6d4b\u8bd5\u672a\u88ab\u4f7f\u7528"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"rtp-enable-zrtp"}),(0,d.jsx)(e.td,{children:"false"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"rtp-retain-crypto-keys"}),(0,d.jsx)(e.td,{children:"false"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"core-db-dsn"}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"\u6570\u636e\u5e93\u914d\u7f6e"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"core-db-name"}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"auto-create-schemas"}),(0,d.jsx)(e.td,{children:"true"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"auto-clear-sql"}),(0,d.jsx)(e.td,{children:"true"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"enable-early-hangup"}),(0,d.jsx)(e.td,{children:"true"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"core-dbtype"}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"multiple-registrations"}),(0,d.jsx)(e.td,{children:"true"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"max-audio-channels"}),(0,d.jsx)(e.td,{children:"2"}),(0,d.jsx)(e.td,{})]})]})]}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u9ed8\u8ba4\u6309\u952e\u7ed1\u5b9a"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"key"}),(0,d.jsx)(e.th,{children:"command"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"F1"}),(0,d.jsx)(e.td,{children:"help"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"F2"}),(0,d.jsx)(e.td,{children:"status"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"F3"}),(0,d.jsx)(e.td,{children:"show channels"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"F4"}),(0,d.jsx)(e.td,{children:"show calls"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"F5"}),(0,d.jsx)(e.td,{children:"sofia status"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"F6"}),(0,d.jsx)(e.td,{children:"reloadxml"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"F7"}),(0,d.jsx)(e.td,{children:"console loglevel 0"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"F8"}),(0,d.jsx)(e.td,{children:"console loglevel 7"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"F9"}),(0,d.jsx)(e.td,{children:"sofia status profile internal"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"F10"}),(0,d.jsx)(e.td,{children:"sofia profile internal siptrace on"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"F11"}),(0,d.jsx)(e.td,{children:"sofia profile internal siptrace off"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"F12"}),(0,d.jsx)(e.td,{children:"version"})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"modulesconf",children:"modules.conf"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\u987a\u5e8f\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"logger"}),"\n",(0,d.jsx)(e.li,{children:"Multi-Faceted"}),"\n",(0,d.jsx)(e.li,{children:"xml interface"}),"\n",(0,d.jsx)(e.li,{children:"event handler"}),"\n",(0,d.jsx)(e.li,{children:"directory interface"}),"\n",(0,d.jsx)(e.li,{children:"Endpoints"}),"\n",(0,d.jsx)(e.li,{children:"Applications"}),"\n",(0,d.jsx)(e.li,{children:"SNOM"}),"\n",(0,d.jsx)(e.li,{children:"Dialplan Interfaces"}),"\n",(0,d.jsx)(e.li,{children:"Codec Interfaces"}),"\n",(0,d.jsx)(e.li,{children:"File Format Interfaces"}),"\n",(0,d.jsx)(e.li,{children:"Timer"}),"\n",(0,d.jsx)(e.li,{children:"Languages"}),"\n",(0,d.jsx)(e.li,{children:"ASR/TTS"}),"\n",(0,d.jsx)(e.li,{children:"Say"}),"\n",(0,d.jsx)(e.li,{children:"\u7b2c\u4e09\u65b9"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-xml",children:'<configuration name="modules.conf" description="Modules">\n  <modules>\n    \x3c!-- \u81ea\u5b9a\u4e49\u52a0\u8f7d\u6a21\u5757 - \u5185\u7f6e\u6a21\u5757\u4e0d\u9700\u8981 path --\x3e\n    <load module="mod_com_g729" path="/opt/fs/mod_com" critical="true"/>\n  </modules>\n</configuration>\n'})}),"\n",(0,d.jsx)(e.h2,{id:"\u901a\u9053",children:"\u901a\u9053"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:(0,d.jsx)(e.a,{href:"https://freeswitch.org/confluence/display/FREESWITCH/Channel+Variables+Catalog",children:"Channel Variables Catalog"})}),"\n"]})]})}function j(n={}){const{wrapper:e}={...(0,r.M)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(h,{...n})}):h(n)}},38088:(n,e,s)=>{var d=s(96651),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,t=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function x(n,e,s){var d,l={},x=null,h=null;for(d in void 0!==s&&(x=""+s),void 0!==e.key&&(x=""+e.key),void 0!==e.ref&&(h=e.ref),e)i.call(e,d)&&!c.hasOwnProperty(d)&&(l[d]=e[d]);if(n&&n.defaultProps)for(d in e=n.defaultProps)void 0===l[d]&&(l[d]=e[d]);return{$$typeof:r,type:n,key:x,ref:h,props:l,_owner:t.current}}e.Fragment=l,e.jsx=x,e.jsxs=x},2488:(n,e,s)=>{n.exports=s(38088)},62780:(n,e,s)=>{s.d(e,{I:()=>t,M:()=>i});var d=s(96651);const r={},l=d.createContext(r);function i(n){const e=d.useContext(l);return d.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),d.createElement(l.Provider,{value:e},n.children)}}}]);