/*! For license information please see cfa3b18d.65ed9f5d.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[51976],{29432:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>t});var r=i(2488),c=i(62780);const s={title:"Verdaccio"},o="verdaccio",l={id:"service/forge/verdaccio",title:"Verdaccio",description:"- verdaccio/verdaccio",source:"@site/../notes/service/forge/verdaccio.md",sourceDirName:"service/forge",slug:"/service/forge/verdaccio",permalink:"/notes/service/forge/verdaccio",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/verdaccio.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1694402622,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{title:"Verdaccio"},sidebar:"docs",previous:{title:"Rundeck",permalink:"/notes/service/forge/rundeck"},next:{title:"woodpecker",permalink:"/notes/service/forge/woodpecker/"}},a={},t=[{value:"config.yaml",id:"configyaml",level:2},{value:"docker",id:"docker",level:2},{value:"minio",id:"minio",level:2},{value:"ERR_SOCKET_TIMEOUT",id:"err_socket_timeout",level:2},{value:"Cannot publish over existing version",id:"cannot-publish-over-existing-version",level:2}];function d(e){const n={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,c.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"verdaccio",children:"verdaccio"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/verdaccio/verdaccio",children:"verdaccio/verdaccio"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"MIT, TS, JS"}),"\n",(0,r.jsx)(n.li,{children:"NPM \u79c1\u6709\u4ed3\u5e93"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u63d2\u4ef6\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/verdaccio/monorepo/tree/9.x/plugins",children:"https://github.com/verdaccio/monorepo/tree/9.x/plugins"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/Alexandre-io/verdaccio-ldap",children:"Alexandre-io/verdaccio-ldap"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/verdaccio-aws-s3-storage",children:"verdaccio-aws-s3-storage"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u652f\u6301 minio"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/verdaccio/verdaccio/blob/master/docker-examples/v4/amazon-s3-docker-example/s3Plugin/Dockerfile",children:"https://github.com/verdaccio/verdaccio/blob/master/docker-examples/v4/amazon-s3-docker-example/s3Plugin/Dockerfile"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/verdaccio-minio",children:"verdaccio-minio"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u57fa\u4e8e Minio SDK"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/barolab/verdaccio-minio/blob/master/Dockerfile",children:"https://github.com/barolab/verdaccio-minio/blob/master/Dockerfile"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u9ed8\u8ba4\u7aef\u53e3 4873"}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://juejin.cn/post/6844904193501691917",children:"Verdaccio \u79c1\u4ed3\u642d\u5efa"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Endpoint\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Tarball ",(0,r.jsx)(n.code,{children:":pkg/-/:name-:ver.tgz"})]}),"\n",(0,r.jsxs)(n.li,{children:["Web\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/-/web/detail/:pkg"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/-/web/detail/:pkg/v/:version"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# VERDACCIO_PUBLIC_URL=https://npm.wener.me\ndocker run --rm -it \\\n  -e VERDACCIO_PORT=8080 \\\n  -v $PWD/storage:/verdaccio/storage \\\n  -v $PWD/conf:/verdaccio/conf \\\n  -v $PWD/plugins:/verdaccio/plugins \\\n  --name verdaccio verdaccio/verdaccio\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://verdaccio.org/docs/env#docker",children:"https://verdaccio.org/docs/env#docker"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configyaml",children:"config.yaml"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5185\u7f6e\u5206\u7ec4 ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsxs)(n.mrow,{children:[(0,r.jsx)(n.mi,{children:"a"}),(0,r.jsx)(n.mi,{children:"l"}),(0,r.jsx)(n.mi,{children:"l"}),(0,r.jsx)(n.mo,{separator:"true",children:","})]}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"all, "})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"a"}),(0,r.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"ll"}),(0,r.jsx)(n.span,{className:"mpunct",children:","})]})})]}),"anonymous"]}),"\n",(0,r.jsx)(n.li,{children:"$authenticated"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"docker",children:"docker"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"/verdaccio/storage/htpasswd"}),"\n",(0,r.jsx)(n.li,{children:"/verdaccio/conf/config.yaml"}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u51fa\u73b0\u5730\u5740\u5f02\u5e38\uff0c\u53ef\u5c1d\u8bd5\u8bbe\u7f6e env VERDACCIO_PORT"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"htpasswd -bc htpasswd admin admin\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"auth:\n  htpasswd:\n    file: ./htpasswd\n\nuplinks:\n  npmjs:\n    url: https://registry.npmjs.org/\n"})}),"\n",(0,r.jsx)(n.h2,{id:"minio",children:"minio"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"barolab/verdaccio"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Dockerfile",children:"FROM verdaccio/verdaccio:5\nUSER root\nENV NODE_ENV=production\nRUN yarn global add verdaccio-minio && \\\n  ln -s /usr/local/share/.config/yarn/global/node_modules/verdaccio-minio /verdaccio/plugins/verdaccio-minio  && \\\n  chown -R 10001 /usr/local/share/.config/yarn/global/node_modules/verdaccio-minio && \\\n  chown -R 10001 /verdaccio/plugins\n\nUSER verdaccio\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"/verdaccio/conf/config.yaml"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# This points to the plugin folder above\nplugins: /verdaccio/plugins\n# This is mandatory, otherwise verdaccio won't boot\nstorage: /verdaccio/storage/data\n\nstore:\n  minio:\n    port: 9000\n    endPoint: minio.minio.svc.cluster.local\n    accessKey: this-is-not-so-secret\n    secretKey: this-is-not-so-secret\n    useSSL: false\n    region: eu-west-1\n    bucket: 'npm'\n    retries: 3\n    delay: 50\n"})}),"\n",(0,r.jsx)(n.h2,{id:"err_socket_timeout",children:"ERR_SOCKET_TIMEOUT"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8d70\u4ee3\u7406\u62c9\u53d6\uff0c\u53ef\u80fd\u6162"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u4fee\u6539 timeout\necho timeout=60000 >> .npmrc\n\nnpm config ls -l | grep fetch\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",children:"fetch-retries = 2\nfetch-retry-factor = 10\nfetch-retry-maxtimeout = 60000\nfetch-retry-mintimeout = 10000\nfetch-timeout = 300000\n"})}),"\n",(0,r.jsx)(n.h2,{id:"cannot-publish-over-existing-version",children:"Cannot publish over existing version"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/verdaccio/verdaccio/issues/1402",children:"https://github.com/verdaccio/verdaccio/issues/1402"})}),"\n",(0,r.jsx)(n.li,{children:"\u76ee\u524d\u53ea\u80fd unpublish"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm publish --force --access restricted\n"})})]})}function h(e={}){const{wrapper:n}={...(0,c.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},38088:(e,n,i)=>{var r=i(96651),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function t(e,n,i){var r,s={},t=null,d=null;for(r in void 0!==i&&(t=""+i),void 0!==n.key&&(t=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,r)&&!a.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:c,type:e,key:t,ref:d,props:s,_owner:l.current}}n.Fragment=s,n.jsx=t,n.jsxs=t},2488:(e,n,i)=>{e.exports=i(38088)},62780:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>o});var r=i(96651);const c={},s=r.createContext(c);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);