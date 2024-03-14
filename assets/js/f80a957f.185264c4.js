/*! For license information please see f80a957f.185264c4.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[61598],{15392:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var o=t(2488),c=t(62780);const r={title:"Nextcloud \u914d\u7f6e",tags:["Configuration"]},s="Nextcloud \u914d\u7f6e",i={id:"service/file/nextcloud/nextcloud-conf",title:"Nextcloud \u914d\u7f6e",description:"- \u73af\u5883\u53d8\u91cf\u4f1a\u8986\u76d6\u914d\u7f6e config.php",source:"@site/../notes/service/file/nextcloud/nextcloud-conf.md",sourceDirName:"service/file/nextcloud",slug:"/service/file/nextcloud/conf",permalink:"/notes/service/file/nextcloud/conf",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/file/nextcloud/nextcloud-conf.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1682624699,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{title:"Nextcloud \u914d\u7f6e",tags:["Configuration"]},sidebar:"docs",previous:{title:"NextCloud",permalink:"/notes/service/file/nextcloud/"},next:{title:"Nextcloud \u5f00\u53d1",permalink:"/notes/service/file/nextcloud/dev"}},l={},a=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,c.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"nextcloud-\u914d\u7f6e",children:"Nextcloud \u914d\u7f6e"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u73af\u5883\u53d8\u91cf\u4f1a\u8986\u76d6\u914d\u7f6e config.php"}),"\n",(0,o.jsx)(n.li,{children:"\u73af\u5883\u53d8\u91cf\u4f1a\u5728 redis.config.php autoconfig.php \u7b49\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bfb\u53d6"}),"\n"]})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/nextcloud/server/blob/master/config/config.sample.php",children:"config.sample.php"})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker exec -it -u www-data nextcloud bash\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cat config/config.php\n\n# \u670d\u52a1\u5668\u72b6\u6001\n./occ status\n\n# \u914d\u7f6e\n./occ config:system:get trusted_domains\n./occ config:system:set trusted_domains 1 --value=192.168.1.1\n\n# \u79bb\u7ebf\n./occ config:system:set has_internet_connection --value=true --type=boolean\n\n# \u8bbe\u7f6e\u9ed8\u8ba4\u8bed\u8a00\n./occ config:system:set default_language --value=zh_CN\n./occ config:system:set default_ladefault_localenguage --value=zh\n\n# \u5bfc\u51fa\u914d\u7f6e\n# private \u5305\u542b\u5bc6\u7801\u4e4b\u7c7b\u7684\u5185\u5bb9\n./occ config:list --private\n./occ config:list system --output=plain\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"<?php\n\n$CONFIG = array(\n// \u5b9e\u4f8b\u552f\u4e00\u6807\u8bc6\u7b26\n'instanceid' => '',\n// \u9ed8\u8ba4\u8bed\u8a00 - \u9ed8\u8ba4 en\n'default_language' => 'zh_CN',\n'default_locale' => 'zh',\n// \u9ed8\u8ba4\u6253\u5f00\u5e94\u7528\n'defaultapp' => 'files',\n// \u4fe1\u4efb\u57df\u540d\n'trusted_domains' =>\n  [\n    'localhost',\n  ],\n\n// \u9ed8\u8ba4\u5f00\u542f\u5e2e\u52a9\u6587\u6863\n'knowledgebaseenabled' => false,\n\n// \u6a21\u677f\u6587\u4ef6\u76ee\u5f55 - \u65b0\u521b\u5efa\u7528\u6237\n'skeletondirectory' => 'core/skeleton',\n// 'skeletondirectory' => 'config/skeleton',\n\n// HTTP_PROXY\n'proxy' => '',\n'proxyuserpwd' => '',\n// NO_PROXY\n'proxyexclude' => [],\n\n// \u662f\u5426\u81ea\u52a8\u68c0\u67e5\u66f4\u65b0\n'updatechecker' => false,\n\n// \u662f\u5426\u6709\u7f51\u7edc\u94fe\u63a5 - false \u5219\u662f\u79bb\u7ebf\u72b6\u6001\n'has_internet_connection' => true,\n// \u68c0\u6d4b\u8054\u901a\u6027\n'connectivity_check_domains' => [\n\t'www.nextcloud.com',\n\t'www.startpage.com',\n\t'www.eff.org',\n\t'www.edri.org'\n],\n\n\n// \u4e2a\u4e2a\u5e73\u53f0\u7684\u5ba2\u6237\u7aef\u4e0b\u8f7d\u94fe\u63a5\u914d\u7f6e\n'customclient_desktop' =>\n\t'https://nextcloud.com/install/#install-clients',\n'customclient_android' =>\n\t'https://play.google.com/store/apps/details?id=com.nextcloud.client',\n'customclient_ios' =>\n\t'https://itunes.apple.com/us/app/nextcloud/id1125420102?mt=8',\n'customclient_ios_appid' =>\n    '1125420102',\n\n\n// \u662f\u5426\u542f\u7528\u5e94\u7528\u5546\u5e97\n'appstoreenabled' => true,\n\n// \u4fe1\u4efb\u7684\u53cd\u5411\u4ee3\u7406\n'trusted_proxies' => ['192.168.0.0/16'],\n'forwarded_for_headers' => ['HTTP_X_FORWARDED_FOR'],\n\n// \u4ee3\u7406\u914d\u7f6e\n// ==============================\n\n// \u8986\u76d6\u4e3b\u673a - \u7528\u4e8e\u68c0\u6d4b\u4e0d\u5230\u53cd\u5411\u4ee3\u7406\u7684 Host \u65f6\n'overwritehost' => '',\n\n// \u5982\u679c\u5728\u53cd\u5411\u4ee3\u7406\u4e4b\u540e\u68c0\u6d4b\u4e0d\u5230 schema \u65f6\u53ef\u4ee5\u8bbe\u7f6e - \u4f8b\u5982 https\n'overwriteprotocol' => '',\n\n// \u8986\u76d6 root \u8def\u5f84 - \u4f8b\u5982 www.example.com/nextcloud \u4f1a\u68c0\u6d4b\u4e3a /nextcloud\n// \u53cd\u5411\u4ee3\u7406\u7684\u65f6\u5019\u53ef\u80fd\u68c0\u6d4b\u4e0d\u5230\n'overwritewebroot' => '',\n\n// \u590d\u5199\u7684\u6761\u4ef6\u5730\u5740 - \u4f8b\u5982 10\\.0\\.0\\. \u5219\u53ea\u8986\u76d6 10.0.0.0/24 \u8fc7\u6765\u7684\u8bf7\u6c42\n// \u6b63\u5219\u8868\u8fbe\u5f0f\n'overwritecondaddr' => '',\n\n// \u8986\u76d6\u547d\u4ee4\u884c\u5de5\u5177\u5730\u5740 - \u4f8b\u5982 occ cron \u7b49\n'overwrite.cli.url' => '',\n\n)\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},38088:(e,n,t)=>{var o=t(96651),c=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var o,r={},a=null,d=null;for(o in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,o)&&!l.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:c,type:e,key:a,ref:d,props:r,_owner:i.current}}n.Fragment=r,n.jsx=a,n.jsxs=a},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>s});var o=t(96651);const c={},r=o.createContext(c);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);