/*! For license information please see ab911b61.71dcbfd5.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[67596],{54676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>m});var r=t(2488),s=t(62780);const i={title:"QEMU ARM64"},o="QEMU ARM64",a={id:"os/virt/qemu/qemu-arm64",title:"QEMU ARM64",description:"\x3c!--",source:"@site/../notes/os/virt/qemu/qemu-arm64.md",sourceDirName:"os/virt/qemu",slug:"/os/virt/qemu/arm64",permalink:"/notes/os/virt/qemu/arm64",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/virt/qemu/qemu-arm64.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1685599201,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{title:"QEMU ARM64"},sidebar:"docs",previous:{title:"QEMU",permalink:"/notes/os/virt/qemu/"},next:{title:"QEMU Awesome",permalink:"/notes/os/virt/qemu/awesome"}},c={},m=[{value:"NVME",id:"nvme",level:2},{value:"x86_64 NVME",id:"x86_64-nvme",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"qemu-arm64",children:"QEMU ARM64"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# \u7cfb\u7edf\u955c\u50cf\ncurl -Lo alpine-virt-aarch64.iso https://mirrors.tuna.tsinghua.edu.cn/alpine/v3.17/releases/aarch64/alpine-virt-3.17.2-aarch64.iso\n# aavmf\ncurl -Lo aavmf.apk https://mirrors.tuna.tsinghua.edu.cn/alpine/edge/community/aarch64/aavmf-0.0.202211-r0.apk\ntar zxvf aavmf.apk --strip-components 2\nls AAVMF\n\n# \u51c6\u5907\u7cfb\u7edf\u76d8\nqemu-img create -f qcow2 alpine-aarch64.qcow2 20G\n# ISO \u542f\u52a8\u5b89\u88c5\nqemu-system-aarch64 \\\n  -M virt,gic-version=3 \\\n  -cpu cortex-a57 -m 512M \\\n  -net nic -nic user,hostfwd=tcp::2222-:22 \\\n  -drive if=pflash,format=raw,readonly=on,file="AAVMF/AAVMF_CODE.fd" \\\n  -device ramfb -device usb-ehci -device usb-kbd -device usb-mouse \\\n  -drive file=alpine-aarch64.qcow2 \\\n  -cdrom alpine-virt-aarch64.iso\n\nssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null root@127.0.0.1 -p 2222\n\n# \u5b89\u88c5\u597d\u540e\u786e\u4fdd\u80fd\u6b63\u5e38\u542f\u52a8\nqemu-system-aarch64 \\\n  -M virt,gic-version=3 \\\n  -cpu cortex-a57 -m 512M \\\n  -net nic -nic user,hostfwd=tcp::2222-:22 \\\n  -drive if=pflash,format=raw,readonly=on,file="AAVMF/AAVMF_CODE.fd" \\\n  -device ramfb -device usb-ehci -device usb-kbd -device usb-mouse \\\n  -drive file=alpine-aarch64.qcow2\n\n# 150mb -> 60mb\n# qemu-img convert -O qcow2 alpine-aarch64.qcow2 alpine-3.17-aarch64.qcow2 -c\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.qemu.org/docs/master/system/arm/virt.html",children:"https://www.qemu.org/docs/master/system/arm/virt.html"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://unix.stackexchange.com/a/623044/47774",children:"https://unix.stackexchange.com/a/623044/47774"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"nvme",children:"NVME"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# CONFIG_BLK_DEV_NVME=m \u9700\u8981\u624b\u52a8\u914d\u7f6e\ncat /boot/config-virt | grep -i nvme | grep -v "^#"\n\n# \u6dfb\u52a0 nvme \u5230 features\ncat /etc/mkinitfs/mkinitfs.conf\n\n# \u6dfb\u52a0\u53c2\u6570 GRUB_CMDLINE_LINUX_DEFAULT\n# nvme_core.io_timeout=4294967295 nvme_core.admin_timeout=4294967295\nnano /etc/default/grub\n\nmkinitfs\ngrub-mkconfig -o /boot/grub/grub.cfg\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://help.aliyun.com/document_detail/400536.htm",children:"https://help.aliyun.com/document_detail/400536.htm"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"x86_64-nvme",children:"x86_64 NVME"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"qemu-system-x86_64 -m 2G -net nic -nic user,hostfwd=tcp::2222-:22 \\\n  -bios OVMF/OVMF.fd \\\n  -hda dist/alpine-virt-3.18.0-x86_64-efi-20G.qcow2\n\nssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null root@127.0.0.1 -p 2222\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},38088:(e,n,t)=>{var r=t(96651),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function m(e,n,t){var r,i={},m=null,l=null;for(r in void 0!==t&&(m=""+t),void 0!==n.key&&(m=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:m,ref:l,props:i,_owner:a.current}}n.Fragment=i,n.jsx=m,n.jsxs=m},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>o});var r=t(96651);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);