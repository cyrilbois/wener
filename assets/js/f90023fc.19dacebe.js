/*! For license information please see f90023fc.19dacebe.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[81316],{88300:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var i=s(2488),r=s(62780);const l={title:"WebStorage"},t="WebStorage",d={id:"web/spec/web-storage",title:"WebStorage",description:"- https://web.dev/storage-for-the-web/",source:"@site/../notes/web/spec/web-storage.md",sourceDirName:"web/spec",slug:"/web/spec/web-storage",permalink:"/notes/web/spec/web-storage",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/spec/web-storage.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1707902059,formattedLastUpdatedAt:"Feb 14, 2024",frontMatter:{title:"WebStorage"},sidebar:"docs",previous:{title:"Web Spec",permalink:"/notes/web/spec/web-spec"},next:{title:"Web Worker",permalink:"/notes/web/spec/web-worker"}},c={},h=[{value:"Library",id:"library",level:2}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"webstorage",children:"WebStorage"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://web.dev/storage-for-the-web/",children:"https://web.dev/storage-for-the-web/"})}),"\n",(0,i.jsxs)(n.li,{children:["chromium ",(0,i.jsx)(n.a,{href:"https://chromium.googlesource.com/chromium/src/+/refs/heads/main/storage/browser/quota/quota_settings.cc",children:"storage/browser/quota/quota_settings.cc"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://arty.name/localstorage.html",children:"Test of localStorage limits/quota"})}),"\n",(0,i.jsxs)(n.li,{children:["mdn\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage_API",children:"Storage API"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/StorageManager",children:"StorageManager"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f30\u7b97\u4f7f\u7528\u91cf"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://reactnative.dev/docs/asyncstorage",children:"AsyncStorage"})," - React Native"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u5b58\u50a8\u9650\u5236"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"name"}),(0,i.jsx)(n.th,{children:"limit"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sessionStorage"}),(0,i.jsx)(n.td,{children:"5 MB"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"localStorage"}),(0,i.jsx)(n.td,{children:"5 MB"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cookie"}),(0,i.jsx)(n.td,{children:"4 KB"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cookie kv"}),(0,i.jsx)(n.td,{children:"1 KB"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"IndexedDB"}),(0,i.jsx)(n.td,{children:"10 MB - 2GB"})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e0d\u540c\u6d4f\u89c8\u5668\u9650\u5236\u4e0d\u540c\uff0c\u8fd9\u91cc\u5217\u4e3e \u5b89\u5168/\u5e38\u89c1\u503c"}),"\n"]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["IndexedDB\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6301\u4e45\u6570\u636e"}),"\n",(0,i.jsx)(n.li,{children:"\u6570\u636e\u91cf\u5927"}),"\n",(0,i.jsx)(n.li,{children:"\u8de8 Tab"}),"\n",(0,i.jsx)(n.li,{children:"Worker \u652f\u6301"}),"\n",(0,i.jsx)(n.li,{children:"\u63d2\u5165\u6027\u80fd\u5f31 - \u5b98\u65b9\u4ee5\u4f18\u5316\u8bfb\u53d6\u6027\u80fd\u4e3a\u4e3b"}),"\n",(0,i.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://rxdb.info/slow-indexeddb.html",children:"Why IndexedDB is slow"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u8003\u8651 relaxed \u6301\u4e45\u5316 - ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/durability",children:"durability"})]}),"\n",(0,i.jsx)(n.li,{children:"\u53ef\u4ee5 in-memory \u8bfb\uff0cwrite back \u5230 indexeddb"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://hacks.mozilla.org/2012/02/storing-images-and-files-in-indexeddb/",children:"Storing images and files in IndexedDB"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5b58\u50a8\u4e3a Blob"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["sessionStorage\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6301\u4e45"}),"\n",(0,i.jsx)(n.li,{children:"\u5c0f\u6570\u636e"}),"\n",(0,i.jsx)(n.li,{children:"KV"}),"\n",(0,i.jsx)(n.li,{children:"\u53ef Observe"}),"\n",(0,i.jsx)(n.li,{children:"\u8de8 Tab"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["localStorage\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e34\u65f6\u5b58\u50a8"}),"\n",(0,i.jsx)(n.li,{children:"\u654f\u611f\u4fe1\u606f"}),"\n",(0,i.jsx)(n.li,{children:"\u53ef\u8de8 Tab \u611f\u77e5\u53d8\u5316"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Cookie\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f51\u7edc\u901a\u8baf credentials"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Cache",children:"CacheStorage"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Response stored in a Cache won't contain headers"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://web.dev/cache-api-quick-guide/",children:"The Cache API: A quick guide"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.mnot.net/blog/2007/12/12/stale",children:"stale-while-revalidate"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Performance"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://nolanlawson.github.io/database-comparison/",children:"Browser database comparison"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["fork ",(0,i.jsx)(n.a,{href:"https://pubkey.github.io/client-side-databases/database-comparison/index.html",children:"db tx write"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://rxdb.info/slow-indexeddb.html",children:"Why IndexedDB is slow and what to use instead"})}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"store"}),(0,i.jsx)(n.th,{style:{textAlign:"right"},children:"10000"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"localStorage"}),(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"110ms"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"IndexedDB"}),(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"1500-2200ms"})]})]})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"IndexedDB \u5f88\u6162"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"library",children:"Library"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/notes/web/script/lib/dexie",children:"dexie"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"IndexedDB \u5b58\u50a8"}),"\n",(0,i.jsx)(n.li,{children:"\u652f\u6301\u540c\u6b65 - \u4f46\u4e0d\u662f\u5f00\u7bb1\u5373\u7528"}),"\n",(0,i.jsx)(n.li,{children:"~82kB/26kB - \u65e0\u4f9d\u8d56"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/pubkey/rxdb",children:"rxdb"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Apache-2.0, Typescript"}),"\n",(0,i.jsx)(n.li,{children:"offline first"}),"\n",(0,i.jsx)(n.li,{children:"\u6709 schema"}),"\n",(0,i.jsx)(n.li,{children:"\u652f\u6301 punchdb, lokijs, dexie \u5b58\u50a8"}),"\n",(0,i.jsx)(n.li,{children:"\u9ed8\u8ba4\u652f\u6301 REST \u548c GraphQL \u540c\u6b65"}),"\n",(0,i.jsx)(n.li,{children:"\u4f7f\u7528 punchdb \u4e5f\u53ef\u4ee5\u7528 CouchDB \u7684\u540c\u6b65"}),"\n",(0,i.jsx)(n.li,{children:"Premium: IndexedDB, SQLite, Sharding, Query Optimizer"}),"\n",(0,i.jsxs)(n.li,{children:["~114kB/31kB\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"binary-decision-diagram"}),"\n",(0,i.jsx)(n.li,{children:"broadcast-channel"}),"\n",(0,i.jsx)(n.li,{children:"event-reduce-js"}),"\n",(0,i.jsx)(n.li,{children:"spark-md5"}),"\n",(0,i.jsx)(n.li,{children:"object-path"}),"\n",(0,i.jsx)(n.li,{children:"clone"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://rxdb.info/nodejs-database.html",children:"https://rxdb.info/nodejs-database.html"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/clientdb/clientdb",children:"clientdb/clientdb"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Apache-2.0, Typescript"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"in-memory"})," database, realtime"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["PouchDB\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"CouchDB replication"}),"\n",(0,i.jsx)(n.li,{children:"\u652f\u6301 attachments"}),"\n",(0,i.jsxs)(n.li,{children:["~117kB/37kB\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"uuid"}),"\n",(0,i.jsx)(n.li,{children:"spark-md5"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/techfort/LokiJS",children:"techfort/LokiJS"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"in-memory"})," database"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/YousefED/SyncedStore",children:"YousefED/SyncedStore"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u57fa\u4e8e yjs \u540c\u6b65"}),"\n",(0,i.jsx)(n.li,{children:"\u6784\u5efa\u534f\u4f5c\u5e94\u7528"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["localForge\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7c7b\u4f3c localStorage"}),"\n",(0,i.jsx)(n.li,{children:"\u5f02\u6b65"}),"\n",(0,i.jsx)(n.li,{children:"\u652f\u6301\u591a\u540e\u7aef"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/Nozbe/WatermelonDB",children:"Nozbe/WatermelonDB"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5b9a\u4f4d\u662f DB - \u4f7f\u7528 class+decorator \u5b9a\u4e49 \u6a21\u578b"}),"\n",(0,i.jsx)(n.li,{children:"React - LokiJS"}),"\n",(0,i.jsx)(n.li,{children:"React Native - SQLite"}),"\n",(0,i.jsx)(n.li,{children:"~155kB - \u57fa\u4e8e rxjs"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Absurd-SQL\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"indexeddb"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["SQLite\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"empscripten Filesystem API"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"DuckDB WASM"}),"\n",(0,i.jsx)(n.li,{children:"Supabase"}),"\n",(0,i.jsxs)(n.li,{children:["RethinkDB\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Horizon"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["NeDB\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Node.js, nw.js, Electron, Browser"}),"\n",(0,i.jsx)(n.li,{children:"MongoDB \u67e5\u8be2\u8bed\u6cd5"}),"\n",(0,i.jsx)(n.li,{children:"\u9879\u76ee\u505c\u6b62"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/amark/gun",children:"amark/gun"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"syncing decentralized graph data"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/isaacs/node-lru-cache",children:"isaacs/node-lru-cache"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/typicode/lowdb",children:"typicode/lowdb"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"MIT, JS"}),"\n",(0,i.jsx)(n.li,{children:"Simple and fast JSON database"}),"\n",(0,i.jsx)(n.li,{children:"\u652f\u6301 nodejs\u3001browser\u3001memory"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/FrigadeHQ/remote-storage",children:"FrigadeHQ/remote-storage"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u975e\u5e38\u7b80\u5355\u7684 remoteStorage \u5b9e\u73b0"}),"\n",(0,i.jsxs)(n.li,{children:["GET/PUT/DELETE ",(0,i.jsx)(n.code,{children:"https://api.remote.storage/entities/{key}"})]}),"\n",(0,i.jsxs)(n.li,{children:["Header\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"x-remote-storage-instance-id"}),"\n",(0,i.jsx)(n.li,{children:"x-remote-storage-user-id"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},38088:(e,n,s)=>{var i=s(96651),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,s){var i,l={},h=null,o=null;for(i in void 0!==s&&(h=""+s),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(o=n.ref),n)t.call(n,i)&&!c.hasOwnProperty(i)&&(l[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===l[i]&&(l[i]=n[i]);return{$$typeof:r,type:e,key:h,ref:o,props:l,_owner:d.current}}n.Fragment=l,n.jsx=h,n.jsxs=h},2488:(e,n,s)=>{e.exports=s(38088)},62780:(e,n,s)=>{s.d(n,{I:()=>d,M:()=>t});var i=s(96651);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);