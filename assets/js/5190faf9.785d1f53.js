/*! For license information please see 5190faf9.785d1f53.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[40116],{85532:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=r(2488),i=r(62780);const a={title:"QrCode"},s="QrCode",c={id:"dev/tech/qrcode",title:"QrCode",description:"Scanner/Reader",source:"@site/../notes/dev/tech/qrcode.md",sourceDirName:"dev/tech",slug:"/dev/tech/qrcode",permalink:"/notes/dev/tech/qrcode",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/tech/qrcode.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1709694572,formattedLastUpdatedAt:"Mar 6, 2024",frontMatter:{title:"QrCode"},sidebar:"docs",previous:{title:"Unicode FAQ",permalink:"/notes/dev/std/unicode/faq"},next:{title:"\u6a21\u677f",permalink:"/notes/dev/tech/template"}},d={},l=[{value:"Scanner/Reader",id:"scannerreader",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"qrcode",children:"QrCode"}),"\n",(0,t.jsx)(n.h2,{id:"scannerreader",children:"Scanner/Reader"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/zxing/zxing",children:"zxing"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Apache 2.0, Java"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Command\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/ZBar/ZBar",children:"ZBar/ZBar"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"2012"}),"\n",(0,t.jsx)(n.li,{children:"zbarimg"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/dmtx/libdmtx",children:"libdmtx"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"dmtxread"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["JS\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/mebjas/html5-qrcode",children:"mebjas/html5-qrcode"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"cross platform HTML5 QR code reader"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/zxing-js/library",children:"@zxing/library"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u529f\u80fd\u6700\u591a"}),"\n",(0,t.jsx)(n.li,{children:"NodeJS \u9700\u8981 jimp \u63d0\u53d6\u4eae\u5ea6\u901a\u9053"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/nimiq/qr-scanner",children:"nimiq/qr-scanner"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Sec-ant/zxing-wasm",children:"Sec-ant/zxing-wasm"})}),"\n",(0,t.jsxs)(n.li,{children:["qrcode-reader\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5f88\u5c0f"}),"\n",(0,t.jsx)(n.li,{children:"NodeJS \u53ef\u76f4\u63a5\u7528 jimp \u6570\u636e"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["jsqr\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4e0d\u652f\u6301\u591a\u4e2a\u4e8c\u7ef4\u7801"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const img = await jimp.read('./qrcode.jpg');\nconst formats = [BarcodeFormat.QR_CODE];\nconst hints = new Map();\nhints.set(DecodeHintType.POSSIBLE_FORMATS, formats);\nhints.set(DecodeHintType.TRY_HARDER, true);\nconst reader = new MultiFormatReader();\nreader.setHints(hints);\n\nconst imageData = img.bitmap;\nconst len = imageData.width * imageData.height;\nconst luminancesUint8Array = new Uint8ClampedArray(len);\n\nfor (let i = 0; i < len; i++) {\n  // (0.2126R + 0.7152G + 0.0722*B))\n  // luminancesUint8Array[i] = ((imageData.data[i*4]*2+imageData.data[i*4+1]*7+imageData.data[i*4+2]) / 10) & 0xFF;\n  luminancesUint8Array[i] =\n    ((imageData.data[i * 4] + imageData.data[i * 4 + 1] * 2 + imageData.data[i * 4 + 2]) / 4) & 0xff;\n}\n\nconst luminanceSource = new RGBLuminanceSource(luminancesUint8Array, imageData.width, imageData.height);\nconst binaryBitmap = new BinaryBitmap(new HybridBinarizer(luminanceSource));\nconst decoded = reader.decode(binaryBitmap);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},38088:(e,n,r)=>{var t=r(96651),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,a={},l=null,o=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(o=n.ref),n)s.call(n,t)&&!d.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===a[t]&&(a[t]=n[t]);return{$$typeof:i,type:e,key:l,ref:o,props:a,_owner:c.current}}n.Fragment=a,n.jsx=l,n.jsxs=l},2488:(e,n,r)=>{e.exports=r(38088)},62780:(e,n,r)=>{r.d(n,{I:()=>c,M:()=>s});var t=r(96651);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);