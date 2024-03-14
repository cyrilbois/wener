/*! For license information please see c013772a.5fa748ea.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[66804],{26936:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>o});var i=l(2488),r=l(62780);const s={title:"Squid Conf",tags:["Configuration"]},c="Squid Conf",t={id:"service/network/squid-conf",title:"Squid Conf",description:"- \u53c2\u8003",source:"@site/../notes/service/network/squid-conf.md",sourceDirName:"service/network",slug:"/service/network/squid-conf",permalink:"/notes/service/network/squid-conf",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/squid-conf.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1646989992,formattedLastUpdatedAt:"Mar 11, 2022",frontMatter:{title:"Squid Conf",tags:["Configuration"]},sidebar:"docs",previous:{title:"mDNS \u670d\u52a1\u5b9a\u4e49",permalink:"/notes/service/network/spec/mdns/sd"},next:{title:"Squid",permalink:"/notes/service/network/squid"}},d={},o=[{value:"\u57fa\u7840\u914d\u7f6e",id:"\u57fa\u7840\u914d\u7f6e",level:2},{value:"\u4e0a\u7ea7\u8f6c\u53d1\u914d\u7f6e",id:"\u4e0a\u7ea7\u8f6c\u53d1\u914d\u7f6e",level:2},{value:"\u63a8\u8350\u914d\u7f6e",id:"\u63a8\u8350\u914d\u7f6e",level:2},{value:"\u7f51\u7edc\u914d\u7f6e",id:"\u7f51\u7edc\u914d\u7f6e",level:2},{value:"SSL",id:"ssl",level:2},{value:"\u7f13\u5b58\u8282\u70b9\u9009\u62e9",id:"\u7f13\u5b58\u8282\u70b9\u9009\u62e9",level:2},{value:"\u78c1\u76d8\u7f13\u5b58\u914d\u7f6e",id:"\u78c1\u76d8\u7f13\u5b58\u914d\u7f6e",level:2},{value:"cache_dir",id:"cache_dir",level:3},{value:"store_dir_select_algorithm",id:"store_dir_select_algorithm",level:3},{value:"cache_replacement_policy",id:"cache_replacement_policy",level:3},{value:"\u5185\u5b58\u7f13\u5b58",id:"\u5185\u5b58\u7f13\u5b58",level:2},{value:"\u7f13\u5b58\u8c03\u4f18",id:"\u7f13\u5b58\u8c03\u4f18",level:2},{value:"refresh_pattern",id:"refresh_pattern",level:3},{value:"\u65e5\u5fd7\u914d\u7f6e",id:"\u65e5\u5fd7\u914d\u7f6e",level:2},{value:"\u5176\u4ed6\u914d\u7f6e",id:"\u5176\u4ed6\u914d\u7f6e",level:2},{value:"FAQ",id:"faq",level:2},{value:"\u8f6c\u53d1\u6240\u6709\u8bf7\u6c42\u5230 HTTP Proxy",id:"\u8f6c\u53d1\u6240\u6709\u8bf7\u6c42\u5230-http-proxy",level:3},{value:"\u6839\u636e\u5730\u5740\u8def\u7531 cache_peer",id:"\u6839\u636e\u5730\u5740\u8def\u7531-cache_peer",level:3},{value:"TBD",id:"tbd",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"squid-conf",children:"Squid Conf"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"http://www.squid-cache.org/Doc/config/",children:"http://www.squid-cache.org/Doc/config/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://gist.github.com/kipyegonmark/ef54ea4fb7a11f4d0470",children:"https://gist.github.com/kipyegonmark/ef54ea4fb7a11f4d0470"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.netgate.com/pfsense/en/latest/cache-proxy/squid-package-tuning.html",children:"https://docs.netgate.com/pfsense/en/latest/cache-proxy/squid-package-tuning.html"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://filterlists.com/",children:"https://filterlists.com/"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["ssl_bump \u4e0d\u80fd\u6307\u5b9a cache_peer\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53ef\u4ee5\u914d\u7f6e\u5168\u90e8\u8f6c\u53d1"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"\u57fa\u7840\u914d\u7f6e",children:"\u57fa\u7840\u914d\u7f6e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"# \u76d1\u542c\u7aef\u53e3\nhttp_port 7777\n\n# \u5b9a\u4e49\u672c\u5730\u7f51\u7edc\nacl localnet src 127.0.0.0/24\nacl localnet src 192.168.0.0/16\nacl localnet src 10.0.0.0/8\nhttp_access allow localnet\n\n# \u7f13\u5b58\u76ee\u5f55 - 500MB - \u7b2c\u4e00\u7ea7 16 - \u7b2c\u4e8c\u7ea7 256\ncache_dir ufs .caache 500 16 256\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4e0a\u7ea7\u8f6c\u53d1\u914d\u7f6e",children:"\u4e0a\u7ea7\u8f6c\u53d1\u914d\u7f6e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"# \u4e0a\u7ea7\u7f13\u5b58\ncache_peer 127.0.0.1 parent 7777 7 no-query\n\n# FTP \u4e0d\u8f6c\u53d1 - \u76f4\u63a5\u8bbf\u95ee\nacl ftp proto FTP\nalways_direct allow ftp\n\n# \u5168\u90e8\u8d70 cache_peer\nnever_direct allow all\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u63a8\u8350\u914d\u7f6e",children:"\u63a8\u8350\u914d\u7f6e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"# \u6700\u5c0f\u7f13\u5b58\u5bf9\u8c61\nmaximum_object_size 1 MB\n# \u4e0d\u53d1\u9001\u7248\u672c\u4fe1\u606f\nhttpd_suppress_version_string on\n\n# \u5b9a\u4e49\u672c\u5730\u7f51\u7edc\nacl localnet src 10.0.0.0/8\nacl localnet src 172.16.0.0/12\nacl localnet src 192.168.0.0/16\nacl localnet src fc00::/7\nacl localnet src fe80::/10\n\n# acl localnet src all\n\n# \u5b9a\u4e49\u5b89\u5168\u7aef\u53e3\nacl SSL_ports port 443\nacl Safe_ports port 80\t\t# http\nacl Safe_ports port 21\t\t# ftp\nacl Safe_ports port 443\t\t# https\nacl Safe_ports port 70\t\t# gopher\nacl Safe_ports port 210\t\t# waiss\nacl Safe_ports port 1025-65535\t# unregistered ports\nacl Safe_ports port 280\t\t# http-mgmt\nacl Safe_ports port 488\t\t# gss-http\nacl Safe_ports port 591\t\t# filemaker\nacl Safe_ports port 777\t\t# multiling http\n\n# \u8bc6\u522b CONNECT \u65b9\u6cd5\nacl CONNECT method CONNECT\n# \u8bc6\u522b\u67e5\u8be2\u53c2\u6570\nacl QUERY urlpath_regex cgi-bin \\? asp aspx jsp\n# \u5e26\u53c2\u6570\u4e0d\u7f13\u5b58\ncache deny QUERY\n\n# \u53ea\u5141\u8bb8\u5b89\u5168\u7aef\u53e3\nhttp_access deny !Safe_ports\n\n# \u53ea\u5141\u8bb8 CONNECT SSL \u7aef\u53e3\nhttp_access deny CONNECT !SSL_ports\n\n# \u53ea\u5141\u8bb8\u672c\u5730\u8bbf\u95ee cachemgr\nhttp_access allow localhost manager\nhttp_access deny manager\n\n# \u4e0d\u5141\u8bb8\u8bbf\u95ee\u672c\u5730\nhttp_access deny to_localhost\n\n# \u5141\u8bb8\u672c\u5730\u8bbf\u95ee\nhttp_access allow localnet\nhttp_access allow localhost\nhttp_access deny all\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u7f51\u7edc\u914d\u7f6e",children:"\u7f51\u7edc\u914d\u7f6e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"http_port port [mode] [options]\nhttp_port hostname:port [mode] [options]\nhttp_port 1.2.3.4:port [mode] [options]\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["mode - \u9ed8\u8ba4\u4e3a\u8f6c\u53d1\u6a21\u5f0f\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"intercept - IP-Layer NAT interception"}),"\n",(0,i.jsx)(n.li,{children:"tproxy - Linux TPROXY"}),"\n",(0,i.jsx)(n.li,{children:"accel - Accelerator / reverse proxy"}),"\n",(0,i.jsxs)(n.li,{children:["ssl-bump\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"generate-host-certificates - on/off"}),"\n",(0,i.jsx)(n.li,{children:"dynamic_cert_mem_cache_size=SIZE - \u9ed8\u8ba4 4MB"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["options\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["TLS/SSL\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"cipher="}),"\n",(0,i.jsx)(n.li,{children:"options="}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ssl",children:"SSL"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ssl_bump <action> [!]acl ...\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["action\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"splice - \u9ed8\u8ba4 - \u8f6c\u4e3a TCP \u901a\u9053\uff0c\u4e0d\u89e3\u5bc6\u4ee3\u7406\u6d41\u91cf"}),"\n",(0,i.jsxs)(n.li,{children:["bump\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"SslBump1 \u548c\u5ba2\u6237\u7aef\u5efa\u7acb\u5b89\u5168\u94fe\u63a5\uff0c\u7136\u540e\u8fde\u63a5\u5230\u670d\u52a1\u7aef"}),"\n",(0,i.jsx)(n.li,{children:"SslBump2 - \u670d\u52a1\u7aef\u5efa\u7acb\u8fde\u63a5"}),"\n",(0,i.jsx)(n.li,{children:"SslBump3 - \u6a21\u4eff \u670d\u52a1\u7aef \u8bc1\u4e66"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["peek\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"SslBump1 \u63a5\u6536\u5230\u5ba2\u6237\u7aef\u8bc1\u4e66"}),"\n",(0,i.jsx)(n.li,{children:"SslBump2 \u63a5\u6536\u5230\u670d\u52a1\u7aef\u8bc1\u4e66"}),"\n",(0,i.jsx)(n.li,{children:"\u6839\u636e\u83b7\u53d6\u7684\u8bc1\u4e66\u4fe1\u606f\u5224\u65ad\u662f\u5426 bump \u8fdb\u5165 step 3"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["stare\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7c7b\u4f3c peed\uff0c\u63a7\u5236 splice"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["terminate\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7ec8\u6b62\u8fde\u63a5"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# \u4e0d\u505a\u7279\u6b8a\u5904\u7406 - \u53ef\u7528\u4e8e\u8bb0\u5f55 SNI \u4fe1\u606f\nssl_bump peek all\nssl_bump splice all\n\n# \u5904\u7406\u6240\u6709\nacl step1 at_step SslBump1\nssl_bump peek step1\nssl_bump bump all\nssl_bump splice all\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u7f13\u5b58\u8282\u70b9\u9009\u62e9",children:"\u7f13\u5b58\u8282\u70b9\u9009\u62e9"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://wiki.squid-cache.org/Features/CacheHierarchy",children:"Features/CacheHierarchy"})}),"\n",(0,i.jsxs)(n.li,{children:["dead_peer_timeout 10 seconds\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"peer 10 \u79d2\u8d85\u65f6\u8ba4\u4e3a\u5931\u8d25"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["forward_max_tries 25\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\b \u8f6c\u53d1\u91cd\u8bd5\u6b21\u6570"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u7f13\u5b58\u8282\u70b9"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cache_peer hostname type proxy-port icp-port options\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"type parent,sibling,multicast"}),"\n",(0,i.jsx)(n.li,{children:"proxy-port - \u4ee3\u7406\u7aef\u53e3"}),"\n",(0,i.jsxs)(n.li,{children:["icp-port - ICP, HTCP \u7aef\u53e3 - \u7528\u4e8e\u67e5\u8be2\u76f8\u90bb\u670d\u52a1\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"squid \u7aef\u53e3 3130"}),"\n",(0,i.jsx)(n.li,{children:"0 \u8868\u793a\u4e0d\u652f\u6301"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["options\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u8282\u70b9\u9009\u62e9\u65b9\u5f0f\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"default - \u9ed8\u8ba4\u6700\u540e\u9009\u62e9 last-resort"}),"\n",(0,i.jsx)(n.li,{children:"round-robin - \u8f6e\u8bad parent"}),"\n",(0,i.jsx)(n.li,{children:"weighted-round-robin - \u652f\u6301 weight \u7684\u8f6e\u8bad"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u901a\u7528\u9009\u9879\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"name=xxx - \u5f53\u5355\u4e3b\u673a\u591a port \u65f6\u9700\u8981\uff0c\u9ed8\u8ba4\u4e3a\u4e3b\u673a\u540d\u5b57\uff0c\u4f1a\u88ab\u5176\u4ed6\u914d\u7f6e\u5f15\u7528"}),"\n",(0,i.jsx)(n.li,{children:"standby=N - \u70ed\u5907\u8fde\u63a5\u6570"}),"\n",(0,i.jsx)(n.li,{children:"max-conn=N - \u6700\u5927\u8fde\u63a5\u6570"}),"\n",(0,i.jsx)(n.li,{children:"connect-timeout=N - \u8d85\u65f6"}),"\n",(0,i.jsx)(n.li,{children:"connect-fail-limit=N - \u6807\u8bb0\u8282\u70b9 Down \u7684\u5931\u8d25\u6b21\u6570"}),"\n",(0,i.jsx)(n.li,{children:"allow-miss"}),"\n",(0,i.jsx)(n.li,{children:"no-tproxy - \u4e0d\u4f7f\u7528 TPROXY"}),"\n",(0,i.jsx)(n.li,{children:"proxy-only - \u4e0d\u5b58\u50a8"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["ICP\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"no-query - disable icp"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["HTCP\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"htcp - enable HTCP"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u8282\u70b9 ACL"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cache_peer_access peer-name allow|deny [!]aclname\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["peer-name\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"cache_peer \u7684 hostname"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u57df\u540d\u5339\u914d\u7f13\u5b58\u8282\u70b9\u7c7b\u578b"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"neighbor_type_domain neighbor parent|sibling domain domain ...\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"neighbor - cache_peer \u540d\u5b57"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"cache_peer 127.0.0.1 sibling 7777 icp-port options\n\nacl extdomain dstdomain .google.com\ncache_peer_access 127.0.0.1 allow extdomain\n# \u5339\u914d\u7684\u57df\u540d\u4f7f\u7528 sibling cache_peer\nneighbor_type_domain 127.0.0.1 sibling .google.com\n\nnever_direct allow all\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u78c1\u76d8\u7f13\u5b58\u914d\u7f6e",children:"\u78c1\u76d8\u7f13\u5b58\u914d\u7f6e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# \u6700\u5c0f\u7f13\u5b58\u5bf9\u8c61\nminimum_object_size 0\n# \u6700\u5927\u7f13\u5b58\u5bf9\u8c61\nmaximum_object_size 4 MB\n"})}),"\n",(0,i.jsx)(n.h3,{id:"cache_dir",children:"cache_dir"}),"\n",(0,i.jsx)(n.p,{children:"\u7f13\u5b58\u5b58\u50a8\u76ee\u5f55"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cache_dir type directory-name fs-specific-data [options]\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["type\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["ufs - mbytes L1 L2 - \u9ed8\u8ba4\u5185\u7f6e\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"mbytes \u6700\u5927\u4f7f\u7528\u7a7a\u95f4\uff0c\u53ef\u4ee5\u4f7f\u7528\u767e\u5206\u6bd4\uff0c\u9ed8\u8ba4 100 MB"}),"\n",(0,i.jsx)(n.li,{children:"L1 - \u7b2c\u4e00\u5c42\u76ee\u5f55\u6570\u91cf - \u9ed8\u8ba4 6"}),"\n",(0,i.jsx)(n.li,{children:"L2 - \u7b2c\u4e8c\u5c42\u76ee\u5f55\u6570\u91cf - \u9ed8\u8ba4 256"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["aufs - mbytes L1 L2\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u540c ufs\uff0c\u4f46\u4f7f\u7528 POSIX \u7ebf\u7a0b\u907f\u514d\u963b\u585e\u4e3b squid \u8fdb\u7a0b"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["diskd - ",(0,i.jsx)(n.code,{children:"mbytes l1 l2 [options] [q1=n] [q2=n]"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7ed3\u6784\u540c ufs\uff0c\u4f7f\u7528\u72ec\u7acb\u8fdb\u7a0b"}),"\n",(0,i.jsx)(n.li,{children:"Q1=64 - \u5f53\u8fbe\u5230 Q1 \u4e2a\u672a ACK \u8bf7\u6c42\u65f6\uff0csquid \u505c\u6b62\u6253\u5f00\u65b0\u6587\u4ef6"}),"\n",(0,i.jsx)(n.li,{children:"Q2=72 - \u5f53\u8fbe\u5230 Q2 \u4e2a\u672a ACK \u8bf7\u6c42\u65f6\uff0csquid \u5f00\u59cb\u963b\u585e"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["rock - mbytes\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5b58\u50a8\u4e3a\u7c7b\u4f3c\u6570\u636e\u5e93\u6587\u4ef6"}),"\n",(0,i.jsx)(n.li,{children:"\u4f1a\u542f\u72ec\u7acb\u8fdb\u7a0b disker - \u907f\u514d\u963b\u585e"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["options\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"no-store - \u4e0d\u5b58\u50a8\u65b0\u5bf9\u8c61"}),"\n",(0,i.jsx)(n.li,{children:"min-size=n"}),"\n",(0,i.jsx)(n.li,{children:"max-size=n"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u591a\u4e2a cache_dir \u5e94\u8be5\u6309\u7167 max-size \u8fdb\u884c\u6392\u5e8f"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"store_dir_select_algorithm",children:"store_dir_select_algorithm"}),"\n",(0,i.jsx)(n.p,{children:"\u5b58\u50a8\u76ee\u5f55\u9009\u62e9\u7b97\u6cd5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"store_dir_select_algorithm algorithm\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["algorithm\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"least-load - \u9ed8\u8ba4"}),"\n",(0,i.jsx)(n.li,{children:"round-robin - \u8f6e\u8bad"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"cache_replacement_policy",children:"cache_replacement_policy"}),"\n",(0,i.jsx)(n.p,{children:"\u7f13\u5b58\u66ff\u6362\u7b56\u7565"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cache_replacement_policy policy\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["policy\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"lru \u9ed8\u8ba4"}),"\n",(0,i.jsx)(n.li,{children:"heap GDSF : Greedy-Dual Size Frequency"}),"\n",(0,i.jsx)(n.li,{children:"heap LFUDA: Least Frequently Used with Dynamic Aging"}),"\n",(0,i.jsx)(n.li,{children:"heap LRU : LRU policy implemented using a heap"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5185\u5b58\u7f13\u5b58",children:"\u5185\u5b58\u7f13\u5b58"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"cache_mem 256 MB"}),"\n",(0,i.jsx)(n.li,{children:"maximum_object_size_in_memory 512 KB"}),"\n",(0,i.jsx)(n.li,{children:"memory_cache_shared on"}),"\n",(0,i.jsxs)(n.li,{children:["memory_cache_mode always\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"always - \u6700\u8fd1\u8bf7\u6c42\u7684\u5bf9\u8c61\u90fd\u4f1a\u5230\u5185\u5b58\u7f13\u5b58"}),"\n",(0,i.jsx)(n.li,{children:"disk - \u53ea\u6709 disk cache \u624d\u4f1a\u5230\u5185\u5b58\u7f13\u5b58"}),"\n",(0,i.jsx)(n.li,{children:"network - \u7f51\u7edc\u8bf7\u6c42\u7684\u5bf9\u8c61\u4f1a\u5230\u5185\u5b58\u7f13\u5b58"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"memory_replacement_policy lru"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7f13\u5b58\u8c03\u4f18",children:"\u7f13\u5b58\u8c03\u4f18"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"max_stale 1 week\nminimum_expiry_time 60 seconds\n"})}),"\n",(0,i.jsx)(n.h3,{id:"refresh_pattern",children:"refresh_pattern"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u63a7\u5236\u7f13\u5b58\u6d1b\u57fa"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"refresh_pattern [-i] regex min percent max [options]"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"-i - \u6b63\u5219\u5927\u5c0f\u5199\u4e0d\u654f\u611f"}),"\n",(0,i.jsx)(n.li,{children:"regex - \u5339\u914d URL \u7684\u6b63\u5219"}),"\n",(0,i.jsx)(n.li,{children:"min - \u9ed8\u8ba4\u6700\u5c0f\u5931\u6548\u65f6\u95f4 - \u5206\u949f"}),"\n",(0,i.jsx)(n.li,{children:"percent - \u5931\u6548\u65f6\u95f4\u6bd4\u4f8b - \u4f8b\u5982\u867d\u7136\u6307\u5b9a 1h \u4f46\u8fbe\u5230 50% \u7684\u65f6\u5019\u5c31\u5931\u6548"}),"\n",(0,i.jsx)(n.li,{children:"max - \u6700\u5927\u5931\u6548\u65f6\u95f4 - \u5206\u949f"}),"\n",(0,i.jsxs)(n.li,{children:["options\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"override-expire - \u91cd\u5199 Expires \u5934\uff0c\u786e\u4fdd\u6700\u5c0f\u7f13\u5b58\u65f6\u95f4"}),"\n",(0,i.jsx)(n.li,{children:"override-lastmod - \u8986\u76d6\u4e0a\u6b21\u4fee\u6539\u65f6\u95f4\uff0c\u786e\u4fdd\u6700\u5c0f\u7f13\u5b58\u65f6\u95f4"}),"\n",(0,i.jsx)(n.li,{children:"reload-into-ims - reload \u8bf7\u6c42\u5224\u65ad If-Modified-Since /If-None-Match"}),"\n",(0,i.jsx)(n.li,{children:"ignore-reload - \u5ffd\u7565 no-cache/reload \u8bf7\u6c42 \u5934"}),"\n",(0,i.jsx)(n.li,{children:"ignore-no-store -  \u5ffd\u7565 Cache-control: no-store"}),"\n",(0,i.jsx)(n.li,{children:"ignore-private - \u5ffd\u7565 Cache-control: private"}),"\n",(0,i.jsx)(n.li,{children:"max-stale=NN - \u6700\u5927\u8fc7\u671f\u65f6\u95f4 - \u9ed8\u8ba4\u4e3a\u5168\u5c40 max_stale"}),"\n",(0,i.jsx)(n.li,{children:"refresh-ims - \u5ba2\u6237\u7aef\u8bf7\u6c42 If-Modified-Since \u65f6\uff0c\u8bf7\u6c42\u5230\u6e90\u670d\u52a1\u5668"}),"\n",(0,i.jsx)(n.li,{children:"store-stale - \u4fdd\u5b58\u8fc7\u671f\u6570\u636e"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"http://www.squid-cache.org/Doc/config/refresh_pattern/",children:"refresh_pattern"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u903b\u8f91"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"FRESH if expire > now, else STALE\nSTALE if age > max\nFRESH if lm-factor < percent, else STALE\nFRESH if age < min\nelse STALE\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# \u5f3a\u5236\u7f13\u5b58\nrefresh_pattern . 2 20% 360 override-expire override-lastmod\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# windows \u66f4\u65b0\nrefresh_pattern -i windowsupdate.com/.*\\.(cab|exe|ms[i|u|f|p]|[ap]sf|wm[v|a]|dat|zip|psf) 43200 80% 129600 reload-into-ims\nrefresh_pattern -i microsoft.com/.*\\.(cab|exe|ms[i|u|f|p]|[ap]sf|wm[v|a]|dat|zip|psf) 43200 80% 129600 reload-into-ims\nrefresh_pattern -i windows.com/.*\\.(cab|exe|ms[i|u|f|p]|[ap]sf|wm[v|a]|dat|zip|psf) 43200 80% 129600 reload-into-ims\nrefresh_pattern -i microsoft.com.akadns.net/.*\\.(cab|exe|ms[i|u|f|p]|[ap]sf|wm[v|a]|dat|zip|psf) 43200 80% 129600 reload-into-ims\nrefresh_pattern -i deploy.akamaitechnologies.com/.*\\.(cab|exe|ms[i|u|f|p]|[ap]sf|wm[v|a]|dat|zip|psf) 43200 80% 129600 reload-into-ims\nrange_offset_limit none\n\n# mac \u66f4\u65b0\nrefresh_pattern ([^.]+.|)(download|adcdownload).(apple.|)com/.*\\.(pkg|dmg) 4320 100% 43200 reload-into-ims\n\n# avg \u66f4\u65b0\nrefresh_pattern ([^.]+.|)avg.com/.*\\.(bin) 4320 100% 43200 reload-into-ims\nrefresh_pattern ([^.]+.|)spywareblaster.net/.*\\.(dtb) 4320 100% 64800 reload-into-ims\nrefresh_pattern ([^.]+.|)symantecliveupdate.com/.*\\.(zip|exe) 43200 100% 43200 reload-into-ims\nrefresh_pattern ([^.]+.|)avast.com/.*\\.(vpu|vpaa) 4320 100% 43200 reload-into-ims\n\n## common\nrefresh_pattern ^ftp:\t\t1440\t20%\t10080\nrefresh_pattern ^gopher:\t1440\t0%\t1440\nrefresh_pattern -i \\.(gif|png|jpg|jpeg|ico)$ 10080 90% 43200 override-expire ignore-no-cache ignore-no-store ignore-private\nrefresh_pattern -i \\.(iso|avi|wav|mp3|mp4|mpeg|swf|flv|x-flv)$ 43200 90% 432000 override-expire ignore-no-cache ignore-no-store ignore-private\nrefresh_pattern -i \\.(deb|rpm|exe|zip|tar|tgz|ram|rar|bin|ppt|doc|tiff)$ 10080 90% 43200 override-expire ignore-no-cache ignore-no-store ignore-private\n\nrefresh_pattern -i (/cgi-bin/|\\?) 0\t0%\t0\nrefresh_pattern .\t\t0\t40%\t40320\n\nrefresh_pattern -i youtube.com/.* 10080 90% 43200\nrefresh_pattern (/cgi-bin/|\\?) 0 0% 0\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u65e5\u5fd7\u914d\u7f6e",children:"\u65e5\u5fd7\u914d\u7f6e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"xxx_log <module>:<place> [option ...] [acl acl ...]\nxxx_log none [acl acl ...]\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["option\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"logformat=squid"}),"\n",(0,i.jsx)(n.li,{children:"buffer-size=64KB"}),"\n",(0,i.jsx)(n.li,{children:"on-error=die|drop"}),"\n",(0,i.jsxs)(n.li,{children:["rotate=N\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"squid -k rotate"}),"\n",(0,i.jsx)(n.li,{children:"\u9ed8\u8ba4\u9075\u5faa logfile_rotate"}),"\n",(0,i.jsx)(n.li,{children:"0 \u7981\u7528"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["module\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"none"}),"\n",(0,i.jsx)(n.li,{children:"stdio"}),"\n",(0,i.jsx)(n.li,{children:"daemon"}),"\n",(0,i.jsx)(n.li,{children:"syslog"}),"\n",(0,i.jsx)(n.li,{children:"udp"}),"\n",(0,i.jsx)(n.li,{children:"tcp"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# \u8bbf\u95ee\u65e5\u5fd7\naccess_log      daemon:/usr/local/squid/var/logs/access.log squid\n# \u5b58\u50a8\u65e5\u5fd7\ncache_store_log none\n\n# \u7ba1\u7406\u65e5\u5fd7\n# \u901a\u8fc7 debug_options \u63a7\u5236\ncache_log       /usr/local/squid/var/logs/cache.log\n# module,level\n# level 1-9\n# module \u652f\u6301 ALL \u8868\u793a\u6240\u6709\u6a21\u5757\n# debug_options\n\n# CoreDump \u76ee\u5f55\ncoredump_dir /var/cache/squid\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5176\u4ed6\u914d\u7f6e",children:"\u5176\u4ed6\u914d\u7f6e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# \u6dfb\u52a0 X-Forwarded-For \u5934\n# off -> unknown\n# transparent \u4e0d\u52a8\n# delete \u5220\u9664\u5934\n# truncate \u79fb\u9664\u73b0\u6709\uff0c\u6dfb\u52a0 \u5ba2\u6237\u7aef IP\nforwarded_for on\n# \u624b\u673a\u5ba2\u6237\u7aef\u7edf\u8ba1\u4fe1\u606f\nclient_db on\n\n# \u79bb\u7ebf\u6a21\u5f0f - \u4e0d\u9a8c\u8bc1\u5df2\u7f13\u5b58\u7684\u6570\u636e\noffline_mode off\n"})}),"\n",(0,i.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,i.jsx)(n.h3,{id:"\u8f6c\u53d1\u6240\u6709\u8bf7\u6c42\u5230-http-proxy",children:"\u8f6c\u53d1\u6240\u6709\u8bf7\u6c42\u5230 HTTP Proxy"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cache_peer <Parent_proxy_IP> parent <port> 0 no-query default\nacl all src 0.0.0.0/0.0.0.0\nhttp_access allow all\nnever_direct allow all\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u6839\u636e\u5730\u5740\u8def\u7531-cache_peer",children:"\u6839\u636e\u5730\u5740\u8def\u7531 cache_peer"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'\nacl up_urls dstdom_regex "/etc/squid/urls"\n\n# SSL bump rules\nsslproxy_cert_error allow all\nacl DiscoverSNIHost at_step SslBump1\nssl_bump peek DiscoverSNIHost\nacl NoSSLIntercept ssl::server_name_regex -i "/etc/squid/urls.nobump"\nacl NoSSLIntercept ssl::server_name_regex -i "/etc/squid/urls"\nssl_bump splice NoSSLIntercept\nssl_bump bump all\n\nnever_direct allow up_urls\ncache_peer 127.0.0.1 parent 8118 0 no-query no-digest default\n\ncache_peer_access 127.0.0.1 allow up_urls\ncache_peer_access 127.0.0.1 deny all\n'})}),"\n",(0,i.jsx)(n.h2,{id:"tbd",children:"TBD"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cache_replacement_policy heap LFUDA\nrange_offset_limit -1\nquick_abort_min -1 KB\nrefresh_pattern . 525600 100% 525600 ignore-reload ignore-no-store ignore-private ignore-auth ignore-must-revalidate store-stale\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},38088:(e,n,l)=>{var i=l(96651),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,t=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,l){var i,s={},o=null,a=null;for(i in void 0!==l&&(o=""+l),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)c.call(n,i)&&!d.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:r,type:e,key:o,ref:a,props:s,_owner:t.current}}n.Fragment=s,n.jsx=o,n.jsxs=o},2488:(e,n,l)=>{e.exports=l(38088)},62780:(e,n,l)=>{l.d(n,{I:()=>t,M:()=>c});var i=l(96651);const r={},s=i.createContext(r);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);