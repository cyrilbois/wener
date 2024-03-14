/*! For license information please see 6bd90fa9.e99ef3e7.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[30960],{37427:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var t=i(2488),s=i(62780);const r={title:"OpenAI"},l="OpenAI",d={id:"ai/service/openai/README",title:"OpenAI",description:"\u4ef7\u683c",source:"@site/../notes/ai/service/openai/README.md",sourceDirName:"ai/service/openai",slug:"/ai/service/openai/",permalink:"/notes/ai/service/openai/",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ai/service/openai/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1701146597,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{title:"OpenAI"},sidebar:"docs",previous:{title:"dify",permalink:"/notes/ai/service/dify"},next:{title:"ChatGPT Awesome",permalink:"/notes/ai/service/openai/chatgpt-awesome"}},c={},h=[{value:"Models",id:"models",level:3},{value:"API",id:"api",level:2},{value:"\u9650\u5236",id:"limits",level:2},{value:"fin tune",id:"fin-tune",level:2},{value:"Rate limit reached for default-gpt-3.5-turbo in organization org-xxx on requests per min. Limit: 60 / min.",id:"rate-limit-reached-for-default-gpt-35-turbo-in-organization-org-xxx-on-requests-per-min-limit-60--min",level:2},{value:"\u60a8\u7684\u94f6\u884c\u5361\u88ab\u62d2\u7edd\u4e86\u3002",id:"\u60a8\u7684\u94f6\u884c\u5361\u88ab\u62d2\u7edd\u4e86",level:2},{value:"Access denied",id:"access-denied",level:2},{value:"\u6e05\u7406 Auth \u4fe1\u606f",id:"\u6e05\u7406-auth-\u4fe1\u606f",level:2}];function a(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"openai",children:"OpenAI"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u4ef7\u683c"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Service"}),(0,t.jsx)(e.th,{children:"Input/1K tokens"}),(0,t.jsx)(e.th,{children:"Output/1K tokens"}),(0,t.jsx)(e.th,{style:{textAlign:"right"},children:"Chinese"}),(0,t.jsx)(e.th,{children:"note"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"GPT-4 8K"}),(0,t.jsx)(e.td,{children:"$0.03"}),(0,t.jsx)(e.td,{children:"$0.06"}),(0,t.jsx)(e.td,{style:{textAlign:"right"},children:"~1.6 \u4e07\u5b57/$"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"GPT-4 32K"}),(0,t.jsx)(e.td,{children:"$0.06"}),(0,t.jsx)(e.td,{children:"$0.12"}),(0,t.jsx)(e.td,{style:{textAlign:"right"},children:"~0.8 \u4e07\u5b57/$"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Chat 3.5 4K"}),(0,t.jsx)(e.td,{children:"$0.0015"}),(0,t.jsx)(e.td,{children:"$0.002"}),(0,t.jsx)(e.td,{style:{textAlign:"right"},children:"~30 \u4e07\u5b57/$"}),(0,t.jsx)(e.td,{children:"gpt-3.5-turbo"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Chat 3.5 16K"}),(0,t.jsx)(e.td,{children:"$0.003"}),(0,t.jsx)(e.td,{children:"$0.004"}),(0,t.jsx)(e.td,{style:{textAlign:"right"},children:"~15 \u4e07\u5b57/$"}),(0,t.jsx)(e.td,{children:"gpt-3.5-turbo-0613"})]})]})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["InstructGPT - \u5355\u4e2a\u6307\u4ee4\u751f\u6210\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Ada - $0.0004 / 1K tokens\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u6700\u5feb"}),"\n",(0,t.jsx)(e.li,{children:"\u53ef\u4ee5 Embedding"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:"Babbage - $0.0005 / 1K tokens"}),"\n",(0,t.jsx)(e.li,{children:"Curie - $0.002 / 1K tokens"}),"\n",(0,t.jsxs)(e.li,{children:["Davinci - $0.02 / 1K tokens\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u6700\u5f3a"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["Fine-tuning InstructGPT\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u8bad\u7ec3\u4ef7\u683c ~= \u57fa\u7840\u6a21\u578b"}),"\n",(0,t.jsx)(e.li,{children:"\u4f7f\u7528\u4ef7\u683c = \u8bad\u7ec3\u4ef7\u683c x 4"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["DALL\xb7E\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"1024\xd71024 $0.02/image"}),"\n",(0,t.jsx)(e.li,{children:"512\xd7512 $0.018/image"}),"\n",(0,t.jsx)(e.li,{children:"256\xd7256 $0.016/image"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["Audio\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Whisper $0.006 / minute"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://openai.com/pricing",children:"https://openai.com/pricing"})}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"models",children:"Models"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["gpt-3.5-turbo-0613\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"16K \u4e0a\u4e0b\u6587"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"api",children:"API"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://platform.openai.com/docs/api-reference",children:"https://platform.openai.com/docs/api-reference"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://platform.openai.com/docs/models/model-endpoint-compatibility",children:"https://platform.openai.com/docs/models/model-endpoint-compatibility"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://npmjs.com/package/chatgpt",children:"https://npmjs.com/package/chatgpt"})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'curl https://api.openai.com/v1/models \\\n  -H "Authorization: Bearer $OPENAI_API_KEY" \\\n  -H "OpenAI-Organization: YOUR_ORG_ID"\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "error": {\n    "message": "This key is associated with a deactivated account. If you feel this is an error, contact us through our help center at help.openai.com.",\n    "type": "invalid_request_error",\n    "param": null,\n    "code": "account_deactivated"\n  }\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"limits",children:"\u9650\u5236"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"-"}),(0,t.jsx)(e.th,{children:"Text&Embedding"}),(0,t.jsx)(e.th,{children:"Chat"}),(0,t.jsx)(e.th,{children:"Codex"}),(0,t.jsx)(e.th,{children:"Edit"}),(0,t.jsx)(e.th,{children:"Image"}),(0,t.jsx)(e.th,{children:"Audio"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Pay-as-you-go 48h"}),(0,t.jsx)(e.td,{children:"60 RPM, 250,000 TPM"}),(0,t.jsx)(e.td,{children:"60 RPM, 60,000 TPM"}),(0,t.jsx)(e.td,{children:"20 RPM , 40,000 TPM"}),(0,t.jsx)(e.td,{children:"20 RPM , 150,000 TPM"}),(0,t.jsx)(e.td,{children:"50 images / min"}),(0,t.jsx)(e.td,{children:"50 RPM"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Pay-as-you-go"}),(0,t.jsx)(e.td,{children:"3,500 RPM,350,000 TPM"}),(0,t.jsx)(e.td,{children:"3,500 RPM, 90,000 TPM"}),(0,t.jsx)(e.td,{children:"20 RPM, 40,000 TPM"}),(0,t.jsx)(e.td,{children:"20 RPM ,150,000 TPM"}),(0,t.jsx)(e.td,{children:"50 images / min"}),(0,t.jsx)(e.td,{children:"50 RPM"})]})]})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"TPM - tokens per minute - Token/\u5206\u949f"}),"\n",(0,t.jsx)(e.li,{children:"RPM - requests per minute - \u8bf7\u6c42/\u5206\u949f"}),"\n",(0,t.jsx)(e.li,{children:"\u9650\u5236\u662f\u7ec4\u7ec7\u7ef4\u5ea6"}),"\n",(0,t.jsxs)(e.li,{children:["\u66ff\u4ee3\u65b9\u6848\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Azure OpenAI"}),"\n",(0,t.jsx)(e.li,{children:"\u591a\u7ec4\u7ec7"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:"1 token ~= 0.5-1 \u6c49\u5b57, 1 token ~= 4 \u5b57\u6bcd"}),"\n",(0,t.jsx)(e.li,{children:"avg 15 token/s, min 0.7 token/s, max 50 token/s - \u57fa\u4e8e\u5386\u53f2\u6d88\u606f\u7edf\u8ba1"}),"\n",(0,t.jsxs)(e.li,{children:["3,500 RPM, 90,000 TPM - 1 \u4e2a\u8d26\u53f7\uff0c\u4e24\u79cd\u7ef4\u5ea6\u9650\u5236\uff0c\u8bf7\u6c42 \u548c Token\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"3500/60 = 58.3 RPS ~ 60/s \u5e76\u53d1\u8bf7\u6c42"}),"\n",(0,t.jsxs)(e.li,{children:["90000/60 = 1500 TPS\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"1500/50 = 30/s \u5e76\u53d1\u8bf7\u6c42 - \u56de\u590d\u5185\u5bb9\u591a"}),"\n",(0,t.jsx)(e.li,{children:"1500/15 = 100/s \u5e76\u53d1\u8bf7\u6c42"}),"\n",(0,t.jsx)(e.li,{children:"1500/0.7 = 2142/s \u5e76\u53d1\u8bf7\u6c42 - \u56de\u590d\u5185\u5bb9\u5c11"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\u9650\u6d41\u90fd\u662f\u5206\u949f\u7ea7\u522b\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u4e5f\u5c31\u662f\u8bf4\u6301\u7eed 1 \u5206\u949f RPS \u8fbe\u5230 60 \u5c31\u4f1a\u6709\u95ee\u9898 - \u4f8b\u5982: 1 \u5206\u949f\u6709 3600 \u4eba\u64cd\u4f5c\uff0c\u6bcf\u79d2\u64cd\u4f5c 1\u3002\u6b21"}),"\n",(0,t.jsx)(e.li,{children:"\u57fa\u4e8e Token \u7684\u9650\u5236\u5219\u5f71\u54cd\u6709\u591a\u5c11\u4e2a\u6301\u7eed\u7684\u56de\u7b54"}),"\n"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"TYPE"}),(0,t.jsx)(e.th,{children:"1 TPM EQUALS"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"davinci"}),(0,t.jsx)(e.td,{children:"1 token per minute"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"curie"}),(0,t.jsx)(e.td,{children:"25 tokens per minute"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"babbage"}),(0,t.jsx)(e.td,{children:"100 tokens per minute"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ada"}),(0,t.jsx)(e.td,{children:"200 tokens per minute"})]})]})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://platform.openai.com/docs/guides/rate-limits",children:"https://platform.openai.com/docs/guides/rate-limits"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"fin-tune",children:"fin tune"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'pip install --upgrade openai\nexport OPENAI_API_KEY="<OPENAI_API_KEY>"\n# openai tools fine_tunes.prepare_data -f <LOCAL_FILE>\n\n# ada, babbage, curie, davinci\nopenai api fine_tunes.create -t <TRAIN_FILE_ID_OR_PATH> -m <BASE_MODEL>\nopenai api fine_tunes.follow -i <YOUR_FINE_TUNE_JOB_ID>\n'})}),"\n",(0,t.jsx)(e.h2,{id:"rate-limit-reached-for-default-gpt-35-turbo-in-organization-org-xxx-on-requests-per-min-limit-60--min",children:"Rate limit reached for default-gpt-3.5-turbo in organization org-xxx on requests per min. Limit: 60 / min."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Rate limit reached for default-gpt-3.5-turbo in organization org-xxx on requests per min. Limit: 60 / min. Please try again in 1s. Contact us through our help center at help.openai.com if you continue to have issues.\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u60a8\u7684\u94f6\u884c\u5361\u88ab\u62d2\u7edd\u4e86",children:"\u60a8\u7684\u94f6\u884c\u5361\u88ab\u62d2\u7edd\u4e86\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"access-denied",children:"Access denied"}),"\n",(0,t.jsx)(e.p,{children:"\u5c1d\u8bd5\u4e0d\u7528 VPN \u6216\u8005\u6362 VPN"}),"\n",(0,t.jsx)(e.h2,{id:"\u6e05\u7406-auth-\u4fe1\u606f",children:"\u6e05\u7406 Auth \u4fe1\u606f"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"javascript:window.localStorage.removeItem(Object.keys(window.localStorage).find(i=>i.startsWith('@@auth0spajs'))\n"})})]})}function o(n={}){const{wrapper:e}={...(0,s.M)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},38088:(n,e,i)=>{var t=i(96651),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(n,e,i){var t,r={},h=null,a=null;for(t in void 0!==i&&(h=""+i),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(a=e.ref),e)l.call(e,t)&&!c.hasOwnProperty(t)&&(r[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps)void 0===r[t]&&(r[t]=e[t]);return{$$typeof:s,type:n,key:h,ref:a,props:r,_owner:d.current}}e.Fragment=r,e.jsx=h,e.jsxs=h},2488:(n,e,i)=>{n.exports=i(38088)},62780:(n,e,i)=>{i.d(e,{I:()=>d,M:()=>l});var t=i(96651);const s={},r=t.createContext(s);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);