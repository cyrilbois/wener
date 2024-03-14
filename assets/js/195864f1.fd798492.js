/*! For license information please see 195864f1.fd798492.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[22196],{97412:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=r(2488),t=r(62780);const s={title:"Remix"},l="Remix",o={id:"web/framework/remix/README",title:"Remix",description:"- remix-run/remix",source:"@site/../notes/web/framework/remix/README.md",sourceDirName:"web/framework/remix",slug:"/web/framework/remix/",permalink:"/notes/web/framework/remix/",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/framework/remix/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1710413103,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"Remix"},sidebar:"docs",previous:{title:"remax",permalink:"/notes/web/framework/remax"},next:{title:"Remix FAQ",permalink:"/notes/web/framework/remix/faq"}},c={},d=[{value:"routes",id:"routes",level:2},{value:"remix.config.js",id:"remixconfigjs",level:2},{value:"vite",id:"vite",level:2}];function x(e){const n={a:"a",admonition:"admonition",code:"code",del:"del",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"remix",children:"Remix"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/remix-run/remix",children:"remix-run/remix"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u57fa\u4e8e React \u7684\u5f00\u53d1\u6846\u67b6"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u7f6e form \u5904\u7406"}),"\n",(0,i.jsx)(n.li,{children:"\u7c7b\u4f3c NextJS"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"loader -> Compoent -> action"}),"\n",(0,i.jsxs)(n.li,{children:["serverBuildTarget\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u9ed8\u8ba4 node-cjs"}),"\n",(0,i.jsx)(n.li,{children:"arc, cloudflare-pages, cloudflare-workers, deno, netlify, node-cjs, vercel,"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://remix.run/blog/remix-vs-next",children:"https://remix.run/blog/remix-vs-next"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["HMR \u6709\u95ee\u9898\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/remix-run/remix/issues/7466",children:"#7466"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.del,{children:(0,i.jsx)(n.a,{href:"https://github.com/remix-run/remix/issues/1601",children:"#1601"})})}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6846\u67b6\u8026\u5408\u7a0b\u5ea6: ",(0,i.jsx)(n.del,{children:"remix > nextjs > vite"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"nextjs 13 - \u589e\u52a0\u4e86 app\u3001server action \u540e\u590d\u6742\u5ea6\u5927\u5927\u63d0\u5347"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm add @remix-run/node @remix-run/react @remix-run/serve\nnpm add -D @remix-run/dev\n\nnpx create-remix@latest\n"})}),"\n",(0,i.jsx)(n.h2,{id:"routes",children:"routes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"app/root.tsx - \u9876\u5c42 layout"}),"\n",(0,i.jsx)(n.li,{children:"\u8def\u7531\u89c4\u5219 app/routes"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SEGMENT.tsx"})," \u6216 \u76ee\u5f55 ",(0,i.jsx)(n.code,{children:"SEGMENT/_index.tsx"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"A.B.tsx"})," \u6216\u8005 ",(0,i.jsx)(n.code,{children:"A/B.tsx"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$var"})," - \u8def\u5f84\u4e0a\u53d8\u91cf"]}),"\n",(0,i.jsxs)(n.li,{children:["exports - Route Module\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"loader - \u5728 GET \u8bf7\u6c42\u65f6\u6267\u884c"}),"\n",(0,i.jsx)(n.li,{children:"action - \u5728 DELETE, PATCH, POST, PUT \u8bf7\u6c42\u65f6\u6267\u884c"}),"\n",(0,i.jsx)(n.li,{children:"clientLoader"}),"\n",(0,i.jsx)(n.li,{children:"clientAction"}),"\n",(0,i.jsx)(n.li,{children:"default - \u7ec4\u4ef6"}),"\n",(0,i.jsx)(n.li,{children:"headers"}),"\n",(0,i.jsx)(n.li,{children:"meta"}),"\n",(0,i.jsx)(n.li,{children:"links"}),"\n",(0,i.jsx)(n.li,{children:"ErrorBoundary"}),"\n",(0,i.jsx)(n.li,{children:"handle - \u8def\u7531\u5143\u6570\u636e\u4fe1\u606f"}),"\n",(0,i.jsx)(n.li,{children:"HydrateFallback - \u5728 clientLoader \u65f6\u663e\u793a"}),"\n",(0,i.jsx)(n.li,{children:"shouldRevalidate"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"*.client.tsx"}),",",(0,i.jsx)(n.code,{children:"*.server.tsx"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"export async function loader({ request }) {\n  return getProjects();\n}\n\nexport async function action({ request }) {\n  const form = await request.formData();\n  return createProject({ title: form.get('title') });\n}\n\nexport default function Projects() {\n  const projects = useLoaderData();\n  const { state } = useTransition();\n  const busy = state === 'submitting';\n\n  return (\n    <div>\n      {projects.map((project) => (\n        <Link to={project.slug}>{project.title}</Link>\n      ))}\n\n      <Form method='post'>\n        <input name='title' />\n        <button type='submit' disabled={busy}>\n          {busy ? 'Creating...' : 'Create New Project'}\n        </button>\n      </Form>\n    </div>\n  );\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u53c2\u8003"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://remix.run/docs/en/main/discussion/routes",children:"https://remix.run/docs/en/main/discussion/routes"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://remix.run/docs/en/main/file-conventions/routes",children:"https://remix.run/docs/en/main/file-conventions/routes"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://interactive-remix-routing-v2.netlify.app/",children:"https://interactive-remix-routing-v2.netlify.app/"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"remixconfigjs",children:"remix.config.js"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://remix.run/docs/en/main/file-conventions/remix-config",children:"https://remix.run/docs/en/main/file-conventions/remix-config"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"vite",children:"vite"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/remix-run/remix/tree/main/templates/unstable-vite",children:"https://github.com/remix-run/remix/tree/main/templates/unstable-vite"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},38088:(e,n,r)=>{var i=r(96651),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var i,s={},d=null,x=null;for(i in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(x=n.ref),n)l.call(n,i)&&!c.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:t,type:e,key:d,ref:x,props:s,_owner:o.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},2488:(e,n,r)=>{e.exports=r(38088)},62780:(e,n,r)=>{r.d(n,{I:()=>o,M:()=>l});var i=r(96651);const t={},s=i.createContext(t);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);