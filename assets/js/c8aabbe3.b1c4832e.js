/*! For license information please see c8aabbe3.b1c4832e.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[60916],{93308:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=r(2488),l=r(62780);const i={title:"URQL"},t="urql",c={id:"service/api/graphql/urql",title:"URQL",description:"- FormidableLabs/urql",source:"@site/../notes/service/api/graphql/urql.md",sourceDirName:"service/api/graphql",slug:"/service/api/graphql/urql",permalink:"/notes/service/api/graphql/urql",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/graphql/urql.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1678453938,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{title:"URQL"},sidebar:"docs",previous:{title:"TypeGraphQL",permalink:"/notes/service/api/graphql/type-graphql"},next:{title:"gRPC",permalink:"/notes/service/api/grpc/"}},d={},a=[{value:"Note",id:"note",level:2},{value:"@urql/exchange-graphcache",id:"urqlexchange-graphcache",level:2},{value:"relayPagination",id:"relaypagination",level:3},{value:"URQL vs Apollo",id:"urql-vs-apollo",level:2},{value:"production \u6784\u5efa\u540e urql \u8fd4\u56de null",id:"production-\u6784\u5efa\u540e-urql-\u8fd4\u56de-null",level:2},{value:"Cannot update a component while rendering a different component",id:"cannot-update-a-component-while-rendering-a-different-component",level:2}];function h(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.M)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"urql",children:"urql"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://github.com/FormidableLabs/urql",children:"FormidableLabs/urql"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u6d41\u5904\u7406\u5b9e\u73b0\u57fa\u4e8e ",(0,s.jsx)(e.a,{href:"https://github.com/kitten/wonka",children:"kitten/wonka"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4f18\u52bf\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u652f\u6301\u6cdb\u5316\u7f13\u5b58"}),"\n",(0,s.jsxs)(e.li,{children:["Schema \u611f\u77e5\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5f00\u542f\u540e\u652f\u6301\u90e8\u5206\u7ed3\u679c\u8fd4\u56de - \u8bf7\u6c42\u7684\u5b57\u6bb5\u672a\u88ab\u7f13\u5b58\u4f46\u662f\u662f nullable \u5219\u5148\u8fd4\u56de - \u56e0\u4e3a\u4e0d\u5f71\u54cd\u8bed\u4e49"}),"\n",(0,s.jsx)(e.li,{children:"\u9875\u9762\u5207\u6362\u6570\u636e\u663e\u793a\u66f4\u987a\u7545"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"stale \u67e5\u8be2 - @urql/exchange-request-policy"}),"\n",(0,s.jsx)(e.li,{children:"\u652f\u6301\u591a\u6846\u67b6 - @urlql/core, urql -> react-urql, preact, next, vue, svelte"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{type:"caution",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["useQuery \u7684 context \u786e\u4fdd\u4e0d\u8981\u53d8 - useMemo\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5426\u5219\u4f1a\u5bfc\u81f4\u91cd\u65b0\u8bf7\u6c42 - \u53ef\u80fd\u65e0\u9650\u5faa\u73af\u6e32\u67d3"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u9ed8\u8ba4\u5168\u5c40 opt-in Suspense\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"createClient \u5f00\u542f suspense \u5219\u9ed8\u8ba4\u8ba4\u4e3a\u5728\u670d\u52a1\u7aef - \u6240\u6709\u67e5\u8be2\u5f00\u542f suspense"}),"\n",(0,s.jsx)(e.li,{children:"useURQL \u7684 context \u53ef\u63a7\u5236\u5173\u95ed suspense"}),"\n",(0,s.jsx)(e.li,{children:"\u5bf9\u4e8e\u53ea\u5e0c\u671b\u5355\u6b21\u67e5\u8be2 suspense \u53ea\u80fd\u5c01\u88c5\u73b0\u6709\u63a5\u53e3"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"npm add urql @urql/{core,devtools,exchange-graphcache,exchange-retry,exchange-multipart-fetch}\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",metastring:'title="\u6839\u636e\u540e\u7aef\u5b9e\u73b0\u9009\u62e9"',children:"import { SubscriptionClient } from 'subscriptions-transport-ws';\nimport { createClient as createSubscriptionClient } from 'graphql-ws';\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"type ExchangeIO = (Source<Operation>) => Source<OperationResult>;\ntype Exchange = ExchangeInput => ExchangeIO;\n"})}),"\n",(0,s.jsx)(e.h2,{id:"note",children:"Note"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u9ed8\u8ba4\u6709 Document Caching - \u9002\u7528\u4e8e\u9ad8\u5ea6\u4f9d\u8d56\u9759\u6001\u6570\u636e\u7684\u7ad9\u70b9\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u7f13\u5b58 key \u4e3a ",(0,s.jsx)(e.code,{children:"hash(query,variables)"})]}),"\n",(0,s.jsx)(e.li,{children:"\u6839\u636e mutation \u8fd4\u56de\u7c7b\u578b\u8fdb\u884c\u5931\u6548"}),"\n",(0,s.jsxs)(e.li,{children:["\u5982\u679c\u8fd4\u56de\u7a7a list, \u5219\u4e0d\u4f1a\u5305\u542b ",(0,s.jsx)(e.code,{children:"__typename"}),", \u6b64\u65f6\u65e0\u6cd5\u5931\u6548 - \u53ef\u5728\u4e0a\u4e0b\u6587\u6dfb\u52a0 additionalTypenames"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["exchange - \u6269\u5c55\u70b9 - \u9ed8\u8ba4 dedupExchange, cacheExchange, fetchExchange\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7c7b\u4f3c apollo \u7684 link - \u4f46\u66f4\u901a\u7528"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u8bf7\u6c42\u7b56\u7565"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"RequestPolicy"}),(0,s.jsx)(e.th,{children:"Desc"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"cache-first"}),(0,s.jsx)(e.td,{children:"\u9ed8\u8ba4 \u9ed8\u8ba4\u8fd4\u56de cache \u7ed3\u679c\uff0c\u4e0d\u5b58\u5728\u5219\u8bf7\u6c42"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"cache-and-network"}),(0,s.jsx)(e.td,{children:"\u5148\u8fd4\u56de cache \u7ed3\u679c\uff0c\u4e5f\u8bf7\u6c42\u66f4\u65b0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"network-only"}),(0,s.jsx)(e.td,{children:"\u5ffd\u7565\u7f13\u5b58\uff0c\u76f4\u63a5\u53d1\u8d77\u8bf7\u6c42"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"cache-only"}),(0,s.jsx)(e.td,{children:"\u8fd4\u56de\u7f13\u5b58\u6216\u8005 null"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"exchanges"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"exchange"}),(0,s.jsx)(e.th,{children:"desc"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@urql/exchange-graphcache"}),(0,s.jsx)(e.td,{children:"\u63d0\u4f9b\u6cdb\u5316\u56fe\u7f13\u5b58"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@urql/exchange-retry"}),(0,s.jsx)(e.td,{children:"\u91cd\u8bd5\u5931\u8d25\u8bf7\u6c42"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@urql/exchange-execute"}),(0,s.jsx)(e.td,{children:"\u672c\u5730\u6a21\u62df\u6267\u884c\uff0c\u7528\u4e8e\u6d4b\u8bd5\u6216\u670d\u52a1\u7aef"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@urql/exchange-multipart-fetch"}),(0,s.jsx)(e.td,{children:"\u6587\u4ef6\u4e0a\u4f20"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@urql/exchange-persisted-fetch"}),(0,s.jsx)(e.td,{children:"\u57fa\u4e8e hash \u67e5\u8be2\uff0c\u907f\u514d\u53d1\u9001 query"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@urql/exchange-request-policy"}),(0,s.jsx)(e.td,{children:"\u7f13\u5b58\u5931\u6548\u548c\u66f4\u65b0\uff0c\u5c06 cache-first \u548c cache-only \u4e0a\u5347\u4e3a cache-and-network"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@urql/exchange-auth"}),(0,s.jsx)(e.td,{children:"\u8bf7\u6c42\u6dfb\u52a0\u6388\u6743\u4fe1\u606f\uff0c\u4f8b\u5982 JWT"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@urql/exchange-refocus"}),(0,s.jsx)(e.td,{children:"\u7a97\u53e3\u83b7\u53d6\u7126\u70b9\u65f6\u91cd\u65b0\u53d1\u8d77\u8bf7\u6c42"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"urqlexchange-graphcache",children:"@urql/exchange-graphcache"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Normalized Caching - \u6cdb\u5316\u7f13\u5b58\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u7f13\u5b58 key \u4e3a ",(0,s.jsx)(e.code,{children:"__typename:id"})]}),"\n",(0,s.jsx)(e.li,{children:"\u4f1a\u7f13\u5b58\u5b57\u6bb5\u548c\u5173\u7cfb"}),"\n",(0,s.jsx)(e.li,{children:"\u53ef\u6839\u636e\u7c7b\u578b\u81ea\u5b9a\u4e49\u7f13\u5b58 key"}),"\n",(0,s.jsx)(e.li,{children:"\u65e0 key \u7684\u7ed3\u6784\u4f5c\u4e3a\u5d4c\u5165\u6570\u636e\u4f9d\u9644\u5728\u4e0a\u7ea7\u6587\u6863"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Local Resolver - \u672c\u5730\u89e3\u6790\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u63d0\u4f9b resolvers \u76f4\u63a5\u5728\u5ba2\u6237\u7aef\u5904\u7406\u8bf7\u6c42"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"cache.readQuery({ query: Todos, variables: { from: 0, limit: 10 } });\n\n// readFragment \u53ea\u652f\u6301 DocumentNodes\ncache.readFragment(\n  gql`\n    fragment _ on Todo {\n      id\n      text\n    }\n  `,\n  { id: 1 },\n);\n\n// \u68c0\u6d4b\u6240\u6709\u5b57\u6bb5\ncache.inspectFields({\n  __typename: 'Todo',\n  id: args.id,\n});\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"// \u57fa\u4e8e offset \u548c limit \u5206\u9875\nimport { simplePagination } from '@urql/exchange-graphcache/extras';\n//\nimport { relayPagination } from '@urql/exchange-graphcache/extras';\n\ncacheExchange({\n  keys: {\n    // \u81ea\u5b9a\u4e49 key\n    Item: (data) => data.uuid,\n    // \u663e\u6027\u79fb\u9664 key\n    Image: () => null,\n  },\n  // \u672c\u5730 resolve\n  // \u9002\u7528\u4e8e\u8f6c\u6362\u5b57\u6bb5\u7c7b\u578b\uff0c\u6a21\u4eff\u670d\u52a1\u7aef\u8bf7\u6c42\uff0c\u51cf\u5c11\u5b9e\u9645\u8bf7\u6c42\n  resolvers: {\n    // \u7c7b\u578b\n    Query: {\n      // \u96c6\u6210\u5206\u9875\u80fd\u529b\n      // mergeMode=inwards\n      todos: relayPagination(),\n\n      // { todo(id: 1) { id } } \u8bfb\u53d6 { todos { id } } \u7684\u7f13\u5b58\n      todo(parent, args, cache, info) {\n        // \u7b49\u540c\u4e8e\u8fd4\u56de\u7f13\u5b58 key\n        // cache.keyOfEntity({ __typename: 'Todo', id: args.id }),\n        return { __typename: 'Todo', id: args.id };\n      },\n    },\n    Todo: {\n      // \u8f6c\u6362\u5b57\u6bb5\u7c7b\u578b\n      updatedAt: (parent, args, cache, info) => {\n        // \u4e5f\u53ef\u4ee5\u8bbf\u95ee\u5f53\u524d\u5bf9\u8c61\u4e0a\u6570\u636e - cache.resolve(info.parentKey)\n        // parent.updatedAt || cache.resolve(parent, \"createdAt\")\n        // new Date(cache.resolve(parent, \"updatedAt\")),\n        return new Date(parent[info.fieldName]);\n      },\n    },\n  },\n    // \u624b\u52a8\u66f4\u65b0\n  updates: {\n    Mutation: {\n      // add \u8fc7\u540e\u5c06\u8fd4\u56de\u7ed3\u679c\u6dfb\u52a0\u5230 \u67e5\u8be2\u5217\u8868\n      addTodo(result, args, cache, info) {\n        const query = gql`\n          {\n            todos {\n              id\n            }\n          }\n        `;\n        cache.updateQuery({ query }, (data) => {\n          data.todos.push(result.addTodo);\n          return data;\n        });\n      },\n\n      // \u79fb\u9664 todo \u540e\u66f4\u65b0\u53d7\u5f71\u54cd\u7684 list \u67e5\u8be2\n      removeTodo(_result, args, cache, _info) {\n        const TodoList = gql`\n          query (skip: $skip) {\n            todos(skip: $skip) { id }\n          }\n        `;\n\n        const fields = cache.inspectFields('Query')\n          .filter(field => field.fieldName === 'todos')\n          .forEach(field => {\n            cache.updateQuery(\n              {\n                query: TodoList,\n                variables: { skip: field.arguments.skip },\n              },\n              data => {\n                data.todos = data.todos.filter(todo => todo.id !== args.id);\n                return data;\n              }\n            });\n          });\n      },\n    },\n  },\n  // \u4e50\u89c2\u66f4\u65b0 - \u6a21\u4eff\u670d\u52a1\u7aef\u66f4\u65b0\u884c\u4e3a\n  // \u5f53\u670d\u52a1\u7aef\u8fd4\u56de\u540e\u66f4\u65b0\u4f1a\u4e22\u5f03\n  optimistic: {\n    favoriteTodo: (variables, cache, info) => ({\n      __typename: 'Todo',\n      id: variables.id,\n      favorite: true,\n    }),\n  },\n});\n"})}),"\n",(0,s.jsx)(e.h3,{id:"relaypagination",children:"relayPagination"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Resolver"}),"\n",(0,s.jsxs)(e.li,{children:["\u57fa\u4e8e relay \u7684 connection \u8fdb\u884c\u5206\u9875\u6570\u636e\u5408\u5e76\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u652f\u6301 first+last"}),"\n",(0,s.jsx)(e.li,{children:"\u652f\u6301 before, after"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["mergeMode - \u5408\u5e76\u6a21\u5f0f\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"inwards - \u9ed8\u8ba4 - \u5f80\u540e\u5408\u5e76"}),"\n",(0,s.jsx)(e.li,{children:"outwards - \u5f80\u524d\u5408\u5e76"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\u53c2\u6570\u53d8\u5316\u4f1a\u91cd\u7f6e - \u5ffd\u7565 first, last, after, before"}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"faq",children:"FAQ"}),"\n",(0,s.jsx)(e.h2,{id:"urql-vs-apollo",children:"URQL vs Apollo"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["URLQ\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u66f4\u5c0f\u66f4\u7075\u6d3b"}),"\n",(0,s.jsx)(e.li,{children:"\u652f\u6301\u63d0\u4f9b schema \u5b9e\u73b0\u66f4\u591a\u529f\u80fd"}),"\n",(0,s.jsx)(e.li,{children:"\u652f\u6301 offline"}),"\n",(0,s.jsx)(e.li,{children:"\u652f\u6301 window focus \u89e6\u53d1\u8bf7\u6c42"}),"\n",(0,s.jsx)(e.li,{children:"\u7f13\u5b58\u4e3a\u53ef\u9009\u7ec4\u4ef6"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://formidable.com/open-source/urql/docs/comparison/",children:"vs Apollo"})}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"production-\u6784\u5efa\u540e-urql-\u8fd4\u56de-null",children:"production \u6784\u5efa\u540e urql \u8fd4\u56de null"}),"\n",(0,s.jsx)(e.p,{children:"\u8d77\u56e0\u662f gqlgen \u4e0d\u652f\u6301 fragment \u91cc\u5305\u542b alias\uff0c\u4e0d\u4f1a\u8fd4\u56de\u5b57\u6bb5\uff0curql \u68c0\u6d4b\u5c11\u5b57\u6bb5\u8ba4\u4e3a cache miss \u8fd4\u56de null\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/99designs/gqlgen/issues/1271",children:"99designs/gqlgen#1271"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/FormidableLabs/urql/issues/1557",children:"FormidableLabs/urql#1557"})}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"cannot-update-a-component-while-rendering-a-different-component",children:"Cannot update a component while rendering a different component"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/FormidableLabs/urql/issues/1382#issuecomment-778112684",children:"https://github.com/FormidableLabs/urql/issues/1382#issuecomment-778112684"})}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,l.M)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},38088:(n,e,r)=>{var s=r(96651),l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(n,e,r){var s,i={},a=null,h=null;for(s in void 0!==r&&(a=""+r),void 0!==e.key&&(a=""+e.key),void 0!==e.ref&&(h=e.ref),e)t.call(e,s)&&!d.hasOwnProperty(s)&&(i[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps)void 0===i[s]&&(i[s]=e[s]);return{$$typeof:l,type:n,key:a,ref:h,props:i,_owner:c.current}}e.Fragment=i,e.jsx=a,e.jsxs=a},2488:(n,e,r)=>{n.exports=r(38088)},62780:(n,e,r)=>{r.d(e,{I:()=>c,M:()=>t});var s=r(96651);const l={},i=s.createContext(l);function t(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);