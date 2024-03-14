/*! For license information please see 0969711c.d2bf52d2.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[98624],{94260:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>a});var i=r(2488),s=r(62780);const l={slug:"alpine-in-firecracker",title:"Firecracker \u8fd0\u884c AlpineLinux",tags:["AlpineLinux","Firecracker"]},c="Firecracker \u8fd0\u884c AlpineLinux",t={permalink:"/story/alpine-in-firecracker",editUrl:"https://github.com/wenerme/wener/edit/master/story/../story/2020/2020-10-23-alpine-in-firecracker.md",source:"@site/../story/2020/2020-10-23-alpine-in-firecracker.md",title:"Firecracker \u8fd0\u884c AlpineLinux",description:"Firecracker \u662f\u4e9a\u9a6c\u900a AWS \u4e3a\u4e86\u89e3\u51b3\u865a\u62df\u5316\u8fd0\u884c serveless \u670d\u52a1\u5b9e\u73b0\u7684 VMM/Virtual Machine Monitor\uff0c\u4f5c\u4e3a QEMU \u7684\u66ff\u4ee3\u54c1\uff0c\u4e13\u6ce8\u4e8e\u4e3a\u4e91\u4e0a\u73af\u5883\u63d0\u4f9b\u865a\u62df\u5316\u3002",date:"2020-10-23T00:00:00.000Z",formattedDate:"October 23, 2020",tags:[{label:"AlpineLinux",permalink:"/story/tags/alpine-linux"},{label:"Firecracker",permalink:"/story/tags/firecracker"}],readingTime:7.75,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"alpine-in-firecracker",title:"Firecracker \u8fd0\u884c AlpineLinux",tags:["AlpineLinux","Firecracker"]},unlisted:!1,prevItem:{title:"Rancher vs. Kubesphere",permalink:"/story/rancher-vs-kubesphere"},nextItem:{title:"Kubernetes vs OpenStack",permalink:"/story/kubernetes-vs-openstack"}},o={authorsImageUrls:[]},a=[{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"rootfs",id:"rootfs",level:2},{value:"vmlinux+initrd",id:"vmlinuxinitrd",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"\u505c\u6b62",id:"\u505c\u6b62",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Firecracker \u662f\u4e9a\u9a6c\u900a AWS \u4e3a\u4e86\u89e3\u51b3\u865a\u62df\u5316\u8fd0\u884c serveless \u670d\u52a1\u5b9e\u73b0\u7684 VMM/Virtual Machine Monitor\uff0c\u4f5c\u4e3a QEMU \u7684\u66ff\u4ee3\u54c1\uff0c\u4e13\u6ce8\u4e8e\u4e3a\u4e91\u4e0a\u73af\u5883\u63d0\u4f9b\u865a\u62df\u5316\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u4f18\u70b9"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u542f\u52a8\u5feb < 125ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u5360\u7528\u5c11 < 5mb"}),"\n",(0,i.jsx)(e.li,{children:"Rust \u5b9e\u73b0"}),"\n",(0,i.jsx)(e.li,{children:"musl \u9759\u6001\u94fe\u63a5"}),"\n",(0,i.jsxs)(e.li,{children:["firecracker \u81ea\u8eab\u7ea6 ",(0,i.jsx)(e.strong,{children:"1.6 MB"})," - ",(0,i.jsx)(e.strong,{children:"\u65e0\u4f9d\u8d56"})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u8bbe\u8ba1\u76ee\u6807/\u7f3a\u9677"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u57fa\u4e8e KVM \u5b9e\u73b0\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u53ea\u6709 Linux \u5e73\u53f0"}),"\n",(0,i.jsx)(e.li,{children:"\u53ea\u80fd\u8fd0\u884c\u76f8\u540c\u67b6\u6784"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u4e13\u6ce8\u4e8e\u865a\u62df\u5316\u573a\u666f\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u652f\u6301\u7684\u865a\u62df\u8bbe\u5907\u5c11\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"virtio-net - \u865a\u62df\u5316\u7f51\u7edc"}),"\n",(0,i.jsx)(e.li,{children:"virtio-block - \u865a\u62df\u5316\u5757\u8bbe\u5907"}),"\n",(0,i.jsx)(e.li,{children:"virtio-vsock - unix sock"}),"\n",(0,i.jsx)(e.li,{children:"\u4e32\u53e3 - ttyS0 \u7ec8\u7aef\u767b\u9646"}),"\n",(0,i.jsx)(e.li,{children:"\u6700\u7b80\u952e\u76d8\u63a7\u5236\u5668"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"\u6ca1\u6709 bios"}),"\n",(0,i.jsx)(e.li,{children:"\u901a\u8fc7 vmlinux+initramfs+rootfs \u542f\u52a8"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"\u8981\u6c42 Kernel 4.14+"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u4e3a\u4ec0\u4e48\u9009\u62e9 Alpine\uff1f"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u6700\u5bb9\u6613\u6784\u5efa"}),"\n",(0,i.jsx)(e.li,{children:"\u6700\u5bb9\u6613\u4f7f\u7528"}),"\n",(0,i.jsx)(e.li,{children:"\u6784\u5efa Firecracker \u80fd\u4f7f\u7528\u7684 CentOS, Debian, Ubuntu, Fedora \u771f\u592a\u96be\u4e86 - \u5982\u679c\u6ca1\u638c\u63e1\u5185\u90e8\u542f\u52a8\u673a\u5236\u4e0d\u5efa\u8bae\u5c1d\u8bd5"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6ce8\u610f",children:"\u6ce8\u610f"}),"\n",(0,i.jsx)(e.p,{children:"\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9879\u5199\u5728\u524d\u9762\uff1a"}),"\n",(0,i.jsx)(e.admonition,{title:"Firecracker \u6ce8\u610f\u70b9",type:"info",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u6ca1\u6709\u7535\u6e90\u7ba1\u7406\uff0c\u56e0\u6b64\u4e0d\u652f\u6301\u91cd\u542f\uff0c\u4f1a\u76f4\u63a5\u9000\u51fa"}),"\n",(0,i.jsx)(e.li,{children:"\u7cfb\u7edf\u5185 poweroff \u6216 halt \u4e0d\u4f1a\u9000\u51fa - reboot \u4f1a"}),"\n",(0,i.jsx)(e.li,{children:"\u53ef\u4ee5\u53d1\u9001 SendCtrlAltDel \u9000\u51fa"}),"\n",(0,i.jsx)(e.li,{children:"\u4e0d\u652f\u6301 QCOW2 \u683c\u5f0f\uff0c\u53ef\u4ee5\u8003\u8651\u914d\u5408 NDB \u4f7f\u7528"}),"\n",(0,i.jsx)(e.li,{children:"alpine \u5185\u6838\u9700\u8981 boot-source.initrd_path => initramfs-virt"}),"\n",(0,i.jsx)(e.li,{children:"alpine netboot \u7684 initramfs-virt \u6ca1\u6709 ext4"}),"\n"]})}),"\n",(0,i.jsx)(e.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,i.jsxs)(e.p,{children:["Firecracker \u7684",(0,i.jsx)(e.a,{href:"https://github.com/firecracker-microvm/firecracker/releases",children:"\u53d1\u5e03\u9875"}),"\u53ef\u76f4\u63a5\u4e0b\u8f7d\u6bcf\u4e2a\u7248\u672c\u3002\u8fd9\u91cc\u4f7f\u7528 curl \u4e0b\u8f7d\u6700\u65b0\u7248\u5e76\u5b89\u88c5\u5230 ",(0,i.jsx)(e.code,{children:"/usr/loca/bin"}),"\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u4e0b\u8f7d\u5b89\u88c5 firecracker \u5230 /usr/local/bin/firecracker\nlatest=$(basename $(curl -fsSLI -o /dev/null -w  %{url_effective} https://github.com/firecracker-microvm/firecracker/releases/latest))\nsudo curl -L -o /usr/local/bin/firecracker https://github.com/firecracker-microvm/firecracker/releases/download/${latest}/firecracker-${latest}-$(uname -m)\nsudo chmod +x /usr/local/bin/firecracker\n"})}),"\n",(0,i.jsx)(e.h2,{id:"rootfs",children:"rootfs"}),"\n",(0,i.jsx)(e.p,{children:"\u542f\u52a8 firecracker \u9700\u8981 kernel \u548c rootfs\uff0c\u5b9e\u9645\u4f7f\u7528\u7684\u65f6\u5019\u53ef\u80fd\u5927\u90e8\u5206\u65f6\u95f4\u90fd\u662f\u5728\u51c6\u5907 rootfs\u3002\u8fd9\u91cc\u4f7f\u7528 alpinelinux\uff0c\u529f\u80fd\u5b8c\u5584\u6784\u5efa\u7b80\u5355\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u56e0\u4e3a alpine \u90fd\u4f1a\u63d0\u4f9b\u57fa\u7840\u7684 rootfs\uff0c\u8fd9\u91cc\u76f4\u63a5\u4e0b\u8f7d\u89e3\u538b\u5230 ext4 \u7684 loopdev \u4e2d\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u521b\u5efa root \u76d8\nqemu-img create -f raw alpine.rootfs.ext4 1G\n# \u683c\u5f0f\u5316\u4e3a ext4\nmkfs.ext4 ./alpine.rootfs.ext4\n# \u6302\u8f7d\u5230 /tmp/rootfs\nmkdir /tmp/rootfs\nsudo mount alpine.rootfs.ext4 /tmp/rootfs\n\n# \u4e0b\u8f7d rootfs\ncurl -OJ https://mirrors.aliyun.com/alpine/v3.12/releases/x86_64/alpine-minirootfs-3.12.0-x86_64.tar.gz\n# \u5b89\u88c5\u5230 /tmp/rootfs\nsudo tar zxvf alpine-minirootfs-3.12.0-x86_64.tar.gz -C /tmp/rootfs/\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u57fa\u7840 rootfs \u8fd8\u4e0d\u8db3\u4ee5\u542f\u52a8\u7cfb\u7edf\uff0c\u56e0\u4e3a\u65e0\u6cd5\u8fdb\u884c\u7cfb\u7edf init\uff0c\u56e0\u6b64\u8fd8\u9700\u8981\u5728 rootfs \u4e2d\u5b89\u88c5\u5fc5\u8981\u7684\u5305\u542f\u52a8\u5fc5\u8981\u7684\u670d\u52a1\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u8fdb\u5165 rootfs \u4e4b\u524d\u9700\u8981 resolv.conf\uff0c\u5305\u542b\u4e86 DNS \u4fe1\u606f\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u62f7\u8d1d dns \u914d\u7f6e - \u6ca1\u6709\u4f1a\u65e0\u6cd5\u8fdb\u884c dns \u89e3\u6790\nsudo cp /etc/resolv.conf /tmp/rootfs/etc\n# \u5982\u679c\u4e3b\u673a\u662f alpinelinux \u53ef\u4ee5\u4ece\u4e3b\u673a\u62f7\u8d1d\u914d\u955c\u50cf\u7f6e\u6587\u4ef6\n# \u5982\u679c\u4e0d\u662f\u5efa\u8bae\u8bbe\u7f6e\u955c\u50cf\n# sudo cp /etc/apk/repositories /tmp/rootfs/etc/apk/repositories\n\n# chroot \u8fdb\u5165 rootfs \u5b89\u88c5\u73af\u5883\nsudo chroot /tmp/rootfs/ /bin/sh\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6b64\u65f6\u8fdb\u5165\u4e86 rootfs\uff0c\u56e0\u4e3a\u6ca1\u6709\u6302\u8f7d procfs\u3001sysfs \u7b49\u76ee\u5f55\uff0c\u5e76\u4e0d\u662f\u4e00\u4e2a\u80fd\u5b8c\u6574\u4f7f\u7528\u7684 rootfs\uff0c\u4f46\u5bf9\u4e8e\u5b89\u88c5\u5305\u6765\u8bf4\u5df2\u7ecf\u8db3\u591f\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://pkgs.alpinelinux.org/package/v3.12/main/x86_64/alpine-base",children:"alpine-base"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u57fa\u7840\u7cfb\u7edf"}),"\n",(0,i.jsx)(e.li,{children:"\u4f9d\u8d56\u4e86 openrc\uff0clayout\uff0cbusybox\uff0capk\uff0cconf \u7b49\u57fa\u7840\u5305"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["linux-virt\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"virt \u5185\u6838 - \u4e0d\u5305\u542b\u56fa\u4ef6\uff08200MB \u5de6\u53f3\uff09\uff0c\u9ed8\u8ba4 init \u5305\u542b virtio \u7b49\u5185\u6838\u6a21\u5757"}),"\n",(0,i.jsx)(e.li,{children:"\u5b89\u88c5\u540e\u80fd\u83b7\u53d6\u5230\u5185\u6838\u548c initramfs"}),"\n",(0,i.jsx)(e.li,{children:"/boot \u4e0b vmlinuz+initramfs+System.map \u7ea6 15MB - \u542f\u52a8\u662f\u4e0d\u9700\u8981\u7684\uff0c\u62ff\u5230\u540e\u53ef\u4ee5\u5220\u9664"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["haveged\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u968f\u673a\u71b5\u670d\u52a1"}),"\n",(0,i.jsx)(e.li,{children:"\u865a\u62df\u5316\u73af\u5883\u80fd\u66f4\u5feb\u542f\u52a8\uff0c\u5426\u5219\u71b5\u521d\u59cb\u5316\u53ef\u80fd\u9700\u8981\u51e0\u5206\u949f"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"apk add alpine-base linux-virt haveged\n# \u5f00\u673a\u542f\u52a8\nrc-update add haveged\n# root \u8d26\u53f7\u5bc6\u7801\necho root:root | chpasswd\n# \u57fa\u7840\u670d\u52a1\nfor svc in devfs procfs sysfs; do ln -fs /etc/init.d/$svc /etc/runlevels/boot; done\nexit\n\n# firecracker \u4f7f\u7528 ttyS0\nln -s agetty /etc/init.d/agetty.ttyS0\necho ttyS0 > /etc/securetty\nrc-update add agetty.ttyS0 default\n\n# \u4ece rootfs \u83b7\u53d6\u5230 vmlinuz \u548c initramfs\nsudo cp /tmp/rootfs/boot/initramfs-virt initramfs-virt\nsudo cp /tmp/rootfs/boot/vmlinuz-virt vmlinuz-virt\n\n# \u53d6\u6d88\u6302\u8f7d\nsudo umount /tmp/rootfs\n"})}),"\n",(0,i.jsx)(e.p,{children:"rootfs \u51c6\u5907\u5b8c\u6210\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"vmlinuxinitrd",children:"vmlinux+initrd"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u91cc\u89e3\u91ca\u4e00\u4e0b rootfs \u62ff\u5230\u7684 Linux \u5185\u6838 vmlinuz-virt \u548c\u521d\u59cb\u5185\u5b58\u955c\u50cf initramfs-virt"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["vmlinuz-virt\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u538b\u7f29\u540e\u7684 Linux \u5185\u6838 - \u9700\u8981\u89e3\u538b\u540e firecracker \u624d\u80fd\u8bc6\u522b"}),"\n",(0,i.jsx)(e.li,{children:"\u89e3\u538b\u540e\u4e3a ELF \u683c\u5f0f\u53ef\u6267\u884c\u6587\u4ef6 - \u4e0e\u4e00\u822c Linux \u4e0b\u53ef\u6267\u884c\u6587\u4ef6\u76f8\u540c"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["initramfs-virt\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u538b\u7f29\u540e\u7684 cpio \u683c\u5f0f"}),"\n",(0,i.jsx)(e.li,{children:"\u5305\u542b\u4e86 Linux \u5185\u6838\u9700\u8981\u7684 virtio \u548c ext4 \u7b49\u6a21\u5757"}),"\n",(0,i.jsxs)(e.li,{children:["\u5305\u542b\u4e86 Alpine \u7684 init \u7cfb\u7edf\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u52a0\u8f7d\u5185\u6838\u6a21\u5757"}),"\n",(0,i.jsx)(e.li,{children:"\u627e\u5230\u5e76\u6302\u8f7d rootfs"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u56e0\u4e3a\u5185\u6838\u662f\u538b\u7f29\u540e\u7684\uff0c\u56e0\u6b64\u8fd8\u9700\u8981\u8fdb\u884c\u89e3\u538b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u4e0b\u8f7d\u5b89\u88c5 extract-vmlinux\nsudo curl -L -o /usr/local/bin/extract-vmlinux https://raw.githubusercontent.com/torvalds/linux/master/scripts/extract-vmlinux\nsudo chmod +x /usr/local/bin/extract-vmlinux\n# \u89e3\u538b vmlinuz-virt\nextract-vmlinux vmlinuz-virt > vmlinux-virt\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u542f\u52a8",children:"\u542f\u52a8"}),"\n",(0,i.jsx)(e.p,{children:"\u6240\u6709\u51c6\u5907\u5de5\u4f5c\u5df2\u5b8c\u6210\uff0c\u5f97\u5230"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"alpine.rootfs.ext4 - \u7cfb\u7edf\u76d8"}),"\n",(0,i.jsx)(e.li,{children:"vmlinux-virt - \u5185\u6838"}),"\n",(0,i.jsx)(e.li,{children:"initramfs-virt - \u521d\u59cb\u5185\u5b58\u955c\u50cf"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"firecracker \u6709\u4e24\u79cd\u542f\u52a8\u65b9\u5f0f"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u76d1\u542c\u7aef\u53e3/socket"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u901a\u8fc7\u8c03\u7528\u63a5\u53e3\u914d\u7f6e rootfs\u3001\u5185\u6838\u7b49"}),"\n",(0,i.jsx)(e.li,{children:"\u914d\u7f6e\u5b8c\u6210\u540e\u8bf7\u6c42 InstanceStart \u8fdb\u884c\u542f\u52a8"}),"\n"]}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsx)(e.li,{children:"\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u914d\u7f6e\u6587\u4ef6\u7b49\u540c\u4e8e\u63a5\u53e3\u8bf7\u6c42"}),"\n",(0,i.jsx)(e.li,{children:"\u53c2\u6570\u5185\u5bb9\u548c\u8def\u5f84\u4e0e\u63a5\u53e3\u4e00\u81f4"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u91cc\u4f7f\u7528\u65b9\u6cd5 #2\uff0c\u56e0\u4e3a\u65b9\u4fbf\u4e66\u5199\u7f16\u8f91\u7b80\u5355\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'# \u751f\u6210 alpine.json \u914d\u7f6e\ncat <<CONF > alpine.json\n{\n  "boot-source": {\n    "initrd_path": "initramfs-virt",\n    "kernel_image_path": "vmlinux-virt",\n    "boot_args": "console=ttyS0 reboot=k panic=1 pci=off modules=virtio_mmio,ext4 rootfstype=ext4"\n  },\n  "drives": [\n    {\n      "drive_id": "rootfs",\n      "path_on_host": "alpine.rootfs.ext4",\n      "is_root_device": true,\n      "is_read_only": false\n    }\n  ],\n  "machine-config": {\n    "vcpu_count": 1,\n    "mem_size_mib": 1024,\n    "ht_enabled": false\n  }\n}\nCONF\n\n# \u914d\u7f6e\u5b8c\u6210 - \u542f\u52a8\n# \u8fdb\u5165\u540e\u4f7f\u7528 root:root \u767b\u9646\nfirecracker --api-sock /tmp/firecracker.socket --config-file alpine.json\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u505c\u6b62",children:"\u505c\u6b62"}),"\n",(0,i.jsx)(e.admonition,{title:"Firecracker \u4e0d\u80fd\u6b63\u5e38\u5173\u673a",type:"caution",children:(0,i.jsx)(e.p,{children:"firecracker \u4e0d\u80fd\u4f7f\u7528 poweroff \u5173\u673a\uff0c\u5982\u679c\u4f7f\u7528\u4e86 poweroff \u5219\u53ea\u80fd kill \u8fdb\u7a0b\u6765\u9000\u51fa\u3002"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u7cfb\u7edf\u4e4b\u5916\u53ef\u4ee5\u8bf7\u6c42 ",(0,i.jsx)(e.code,{children:"Ctrl+Alt+Del"})," \u8fdb\u884c\u5173\u673a\uff0c\u5b9e\u8d28\u4e0a\u662f\u91cd\u542f\u7684\u6548\u679c\uff0c\u4f46\u56e0\u4e3a firecracker \u4e0d\u80fd\u91cd\u542f\uff0c\u56e0\u6b64 init \u9000\u51fa\u540e\u5c31\u5173\u673a\u4e86\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'curl --unix-socket /tmp/firecracker.socket -i \\\n    -X PUT "http://localhost/actions" \\\n    -H  "accept: application/json" \\\n    -H  "Content-Type: application/json" \\\n    -d \'{"action_type": "SendCtrlAltDel"}\'\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u7cfb\u7edf\u5185\u53ef\u4ee5\u76f4\u63a5 ",(0,i.jsx)(e.code,{children:"reboot"})," \u8fdb\u884c\u5173\u673a\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,i.jsx)(e.p,{children:"Firecracker \u4f7f\u7528\u8d77\u6765\u86ee\u60ca\u8273\uff0c\u80fd\u6210\u529f\u7684\u5feb\u901f\u7684\u542f\u52a8\u7cfb\u7edf\uff0c\u542f\u52a8\u901f\u5ea6\u4f1a\u6bd4 QEMU \u5feb\u4e0d\u5c11\uff0c\u56e0\u4e3a\u5c11\u4e86 bios\u3001bootloader\u3001\u5185\u6838\u89e3\u538b \u7b49\u8fc7\u7a0b\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u56e0\u4e3a Firecracker \u4f18\u7f3a\u70b9\u975e\u5e38\u660e\u663e\uff0c\u8fd9\u91cc\u603b\u7ed3\u4e00\u4e0b\u9002\u7528\u573a\u666f\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"serveless \u573a\u666f - \u9700\u8981\u5feb\u901f\u8d77\u505c\uff0c\u5b89\u5168\u9694\u79bb\uff0c\u73af\u5883\u72ec\u7acb"}),"\n",(0,i.jsx)(e.li,{children:"\u5904\u4e8e\u5b89\u5168\u8003\u8651\u8fdb\u884c\u5bb9\u5668\u6267\u884c\u73af\u5883\u9694\u79bb - \u4f5c\u4e3a\u5bb9\u5668\u8fd0\u884c\u65f6"}),"\n",(0,i.jsx)(e.li,{children:"\u5c06\u5e94\u7528\u6253\u5305\u4e3a\u7cfb\u7edf\u8fdb\u884c\u5206\u53d1\uff0c\u4f7f\u7528 firecracker \u5c4f\u853d\u7cfb\u7edf\u5dee\u5f02"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u4e0d\u9002\u7528\u573a\u666f\u4e5f\u5f88\u660e\u663e\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5982\u679c\u9700\u8981\u4f7f\u7528 CentOS\u3001Debian\u3001Ubuntu \u4e4b\u7c7b\u7cfb\u7edf\uff0c\u975e\u5e38\u4e0d\u5efa\u8bae\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u6784\u9020\u4e00\u4e2a\u53ef\u4f7f\u7528\u7684 rootfs \u548c initramfs \u975e\u5e38\u9ebb\u70e6"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"\u9700\u8981\u7528\u5230\u7684\u8bbe\u5907 firecracker \u53ef\u80fd\u4e0d\u652f\u6301"}),"\n",(0,i.jsx)(e.li,{children:"\u9700\u8981\u900f\u4f20\u8bbe\u5907\u5230 VM"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Firecracker \u76f8\u5bf9\u8f83\u65b0\uff0c\u96c6\u6210\u4f7f\u7528\u65b9\u9762\u8fd8\u6709\u6240\u6b20\u7f3a\uff0c\u4f46\u5728 Firecracker \u64c5\u957f\u7684\u9886\u57df\u4f7f\u7528\u8d77\u6765\u662f\u975e\u5e38\u8212\u670d\u7684\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://gist.github.com/wenerme/97a2f088496bb3e6492ef7e8fe23da8a",children:"boot-alpine-in-firecracker.sh"})," - \u4ee5\u4e0a\u6240\u6709\u4ee3\u7801"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://github.com/firecracker-microvm/firecracker",children:"firecracker-microvm/firecracker"})," - \u6838\u5fc3\u4ed3\u5e93"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://github.com/firecracker-microvm/firectl",children:"firecracker-microvm/firectl"})," - Golang \u5b9e\u73b0\u7528\u4e8e\u7ba1\u7406 firecracker \u865a\u62df\u673a\u7684\u8f85\u52a9\u5de5\u5177"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://github.com/firecracker-microvm/firecracker-go-sdk",children:"firecracker-microvm/firecracker-go-sdk"})," - Golang \u76f4\u63a5\u64cd\u4f5c Firecracker"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,s.M)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},38088:(n,e,r)=>{var i=r(96651),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,t=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(n,e,r){var i,l={},a=null,d=null;for(i in void 0!==r&&(a=""+r),void 0!==e.key&&(a=""+e.key),void 0!==e.ref&&(d=e.ref),e)c.call(e,i)&&!o.hasOwnProperty(i)&&(l[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps)void 0===l[i]&&(l[i]=e[i]);return{$$typeof:s,type:n,key:a,ref:d,props:l,_owner:t.current}}e.Fragment=l,e.jsx=a,e.jsxs=a},2488:(n,e,r)=>{n.exports=r(38088)},62780:(n,e,r)=>{r.d(e,{I:()=>t,M:()=>c});var i=r(96651);const s={},l=i.createContext(s);function c(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);