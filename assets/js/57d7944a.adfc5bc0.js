/*! For license information please see 57d7944a.adfc5bc0.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[95004],{31796:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var r=i(2488),s=i(62780);const t={title:"dtb"},l="Device Tree",c={id:"os/linux/sys/dtb",title:"dtb",description:"- dtb - Device Tree Blob - device tree binary",source:"@site/../notes/os/linux/sys/dtb.md",sourceDirName:"os/linux/sys",slug:"/os/linux/sys/dtb",permalink:"/notes/os/linux/sys/dtb",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/sys/dtb.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1674970578,formattedLastUpdatedAt:"Jan 29, 2023",frontMatter:{title:"dtb"},sidebar:"docs",previous:{title:"Linux Kernel \u65e5\u5fd7\u5e38\u89c1\u95ee\u9898",permalink:"/notes/os/linux/sys/dmesg-faq"},next:{title:"IOPS",permalink:"/notes/os/linux/sys/iops"}},d={},o=[{value:"Device Tree",id:"device-tree-1",level:2},{value:"References",id:"references",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"device-tree",children:"Device Tree"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["dtb - Device Tree Blob - device tree binary\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"hardware layout description"}),"\n",(0,r.jsx)(n.li,{children:"platform identification"}),"\n",(0,r.jsx)(n.li,{children:"runtime configuration"}),"\n",(0,r.jsx)(n.li,{children:"device population"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"arch/<arch>/boot/dts/<board>"})}),"\n",(0,r.jsxs)(n.li,{children:["CONFIG_ARM_APPENDED_DTB - dtb \u5728 kernel \u4e4b\u540e\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"cat zImage board.dtb > my-zImage; mkimage ... -d my-zImage my-uImage"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["CONFIG_ARM_ATAG_DTB_COMPAT\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"read ATAGS, update DT"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Embedded Power Architecture Platform Requirements (ePAPR)"}),"\n",(0,r.jsxs)(n.li,{children:["Device Tree Source - DTS\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[".dts - board-level definitions\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6700\u7ec8\u7684 - include \u591a\u4e2a dtsi"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:".dtsi - included files, generally containing SoC-level definitions"}),"\n",(0,r.jsxs)(n.li,{children:["e.g ",(0,r.jsx)(n.a,{href:"https://github.com/torvalds/linux/tree/master/arch/arm64/boot/dts",children:"arch/arm64/boot/dts"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Device Tree Compiler\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/torvalds/linux/tree/master/scripts/dtc",children:"scripts/dtc"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Documentation/devicetree/bindings"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"device-tree-1",children:"Device Tree"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"cpus"}),"\n",(0,r.jsx)(n.li,{children:"memory"}),"\n",(0,r.jsxs)(n.li,{children:["chosen\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"defines parameters chosen or defined by the system firmware at boot time"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"aliases"}),"\n",(0,r.jsx)(n.li,{children:"buses"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dts",children:'/ {\nmodel = "Freescale i.MX28 Evaluation Kit";\ncompatible = "fsl,imx28-evk", "fsl,imx28";\nmemory {\n  reg = <0x40000000 0x08000000>;\n};\napb@80000000 {\n  apbh@80000000 {  };\n  apbx@80040000 {  };\n};\nahb@80080000 {  };\nsound {  };\nleds {  };\nbacklight {  };\n};\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"of_machine_is_compatible"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Device_tree",children:"Device tree"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://lonzoc.gitbooks.io/device-tree-guide/content/devicetree_basic.html",children:"https://lonzoc.gitbooks.io/device-tree-guide/content/devicetree_basic.html"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://elinux.org/Device_Tree_Reference",children:"https://elinux.org/Device_Tree_Reference"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://elinux.org/Device_Tree_Usage",children:"https://elinux.org/Device_Tree_Usage"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.kernel.org/devicetree/usage-model.html",children:"https://docs.kernel.org/devicetree/usage-model.html"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.devicetree.org/",children:"https://www.devicetree.org/"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://events.static.linuxfound.org/sites/events/files/slides/petazzoni-device-tree-dummies.pdf",children:"https://events.static.linuxfound.org/sites/events/files/slides/petazzoni-device-tree-dummies.pdf"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["bootloader\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"before device tree - r1=machine_type, r2=ptr to ATAGS"}),"\n",(0,r.jsx)(n.li,{children:"boot with device tree - r2=ptr to DTB"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},38088:(e,n,i)=>{var r=i(96651),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,i){var r,t={},o=null,a=null;for(r in void 0!==i&&(o=""+i),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,r)&&!d.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:s,type:e,key:o,ref:a,props:t,_owner:c.current}}n.Fragment=t,n.jsx=o,n.jsxs=o},2488:(e,n,i)=>{e.exports=i(38088)},62780:(e,n,i)=>{i.d(n,{I:()=>c,M:()=>l});var r=i(96651);const s={},t=r.createContext(s);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);