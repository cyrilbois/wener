/*! For license information please see 92408e35.bbd31c4e.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[85568],{47832:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var r=s(2488),i=s(62780);const t={title:"OpenRC"},d="OpenRC",l={id:"os/linux/init/openrc",title:"OpenRC",description:"- OpenRC \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/os/linux/init/openrc.md",sourceDirName:"os/linux/init",slug:"/os/linux/init/openrc",permalink:"/notes/os/linux/init/openrc",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/init/openrc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1702882608,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{title:"OpenRC"},sidebar:"docs",previous:{title:"Init Awesome",permalink:"/notes/os/linux/init/awesome"},next:{title:"s6",permalink:"/notes/os/linux/init/s6"}},c={},o=[{value:"/etc/inittab",id:"etcinittab",level:2},{value:"service",id:"service",level:2},{value:"supervise-daemon",id:"supervise-daemon",level:2},{value:"failed to add service <code>sysfs</code> to <code>runlevel</code> boot&#39;: No such file or directory",id:"failed-to-add-service-sysfs-to-runlevel-boot-no-such-file-or-directory",level:2},{value:"is the name of a real and virtual service",id:"is-the-name-of-a-real-and-virtual-service",level:2},{value:"restart",id:"restart",level:2},{value:"supervise-daemon: unable to open the logfile for stdout `/var/log/app.log&#39;: Permission denied",id:"supervise-daemon-unable-to-open-the-logfile-for-stdout-varlogapplog-permission-denied",level:2}];function h(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"openrc",children:"OpenRC"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://github.com/OpenRC/openrc",children:"OpenRC"})," \u662f\u4ec0\u4e48\uff1f\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"BSD-2, C, Shell"}),"\n",(0,r.jsxs)(e.li,{children:["\u8de8\u5e73\u53f0\u8f7b\u91cf\u7ea7 init \u7cfb\u7edf\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u652f\u6301 Linux, FreeBSD, NetBSD"}),"\n",(0,r.jsx)(e.li,{children:"\u6838\u5fc3 900k"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"\u811a\u672c\u7ed3\u6784\u4e0a\u7c7b\u4f3c\u4e8e sysvinit - \u4f46\u66f4\u7b80\u5355"}),"\n",(0,r.jsx)(e.li,{children:"\u652f\u6301 supervise-daemon 0.21+"}),"\n",(0,r.jsx)(e.li,{children:"\u652f\u6301 /sbin/init - 0.25+"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["RC_SYS - \u4e3a VSERVER \u548c LXC \u4e0d\u4f1a clean run\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"VSERVER"}),"\n",(0,r.jsx)(e.li,{children:"LXC"}),"\n",(0,r.jsx)(e.li,{children:"OPENVZ"}),"\n",(0,r.jsx)(e.li,{children:"SYSTEMD-NSPAWN"}),"\n",(0,r.jsx)(e.li,{children:"PREFIX"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/OpenRC/openrc/blob/master/init.d/bootmisc.in",children:"https://github.com/OpenRC/openrc/blob/master/init.d/bootmisc.in"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/OpenRC/openrc/blob/master/etc/rc.conf",children:"https://github.com/OpenRC/openrc/blob/master/etc/rc.conf"})}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"rc_sys"}),(0,r.jsx)(e.th,{children:"for"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"docker"}),(0,r.jsx)(e.td,{children:"Docker container manager (Linux)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"jail"}),(0,r.jsx)(e.td,{children:"Jail (DragonflyBSD or FreeBSD)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"lxc"}),(0,r.jsx)(e.td,{children:"Linux Containers"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"openvz"}),(0,r.jsx)(e.td,{children:"Linux OpenVZ"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"prefix"}),(0,r.jsx)(e.td,{children:"Prefix"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"rkt"}),(0,r.jsx)(e.td,{children:"CoreOS container management system (Linux)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"subhurd"}),(0,r.jsx)(e.td,{children:"Hurd subhurds (to be checked)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"systemd-nspawn"}),(0,r.jsx)(e.td,{children:"Container created by systemd-nspawn (Linux)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"uml"}),(0,r.jsx)(e.td,{children:"Usermode Linux"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"vserver"}),(0,r.jsx)(e.td,{children:"Linux vserver"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"xen0"}),(0,r.jsx)(e.td,{children:"Xen0 Domain (Linux and NetBSD)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"xenU"}),(0,r.jsx)(e.td,{children:"XenU Domain (Linux and NetBSD)"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"etcinittab",children:"/etc/inittab"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ini",children:"::sysinit:/sbin/openrc sysinit\n::sysinit:/sbin/openrc boot\n::wait:/sbin/openrc default\n\n# Set up a couple of getty's\ntty1::respawn:/sbin/getty 38400 tty1\ntty2::respawn:/sbin/getty 38400 tty2\ntty3::respawn:/sbin/getty 38400 tty3\ntty4::respawn:/sbin/getty 38400 tty4\ntty5::respawn:/sbin/getty 38400 tty5\ntty6::respawn:/sbin/getty 38400 tty6\n\n# Put a getty on the serial port\n#ttyS0::respawn:/sbin/getty -L ttyS0 115200 vt100\n\n# Stuff to do for the 3-finger salute\n::ctrlaltdel:/sbin/reboot\n\n# Stuff to do before rebooting\n::shutdown:/sbin/openrc shutdown\n"})}),"\n",(0,r.jsx)(e.h2,{id:"service",children:"service"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:'#!/sbin/openrc-run\n\ncommand="/usr/sbin/ntpd"\npidfile="/run/${RC_SVCNAME}.pid"\ncommand_args="-p ${pidfile}"\n\ncommand_args_background="--daemon"\n# start-stop-daemon --make-pidfile\ncommand_background=true\n\ncommand_user="user:group"\n# ^cap_chown,!cap_setpcap\ncapabilities="cap-list"\nprocname="cancd"\n\n# \u5b9a\u4e49\u4f9d\u8d56\ndepend() {\n  need net\n  use dns logger netmount\n  want coolservice\n  # provide\n}\n\nextra_started_commands="reload"\n\nextra_commands="checkconfig"\ncheckconfig() {\n  #\n}\n\nreload() {\n  checkconfig || return $?\n  ebegin "Reloading ${RC_SVCNAME}"\n  start-stop-daemon --signal HUP --pidfile "${pidfile}"\n  eend $?\n}\n\n# \u542f\u52a8\u505c\u6b62\u68c0\u67e5\u914d\u7f6e\nstart_pre() {\n  if [ "${RC_CMD}" != "restart" ]; then\n    checkconfig || return $?\n  fi\n}\n\nstop_pre() {\n  if [ "${RC_CMD}" = "restart" ]; then\n    checkconfig || return $?\n  fi\n}\n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"RC_SVCNAME"}),"\n",(0,r.jsxs)(e.li,{children:["\u4e3b\u8981\u51fd\u6570\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"start"}),"\n",(0,r.jsx)(e.li,{children:"stop"}),"\n",(0,r.jsx)(e.li,{children:"status"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["depend\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"need - \u5f3a\u5236\u4f9d\u8d56"}),"\n",(0,r.jsx)(e.li,{children:"use - soft dependency - \u5982\u679c\u5728\u76f8\u540c runlevel \u5219 start\uff0c\u5df2\u7ecf start \u4e0d\u5173\u5fc3"}),"\n",(0,r.jsx)(e.li,{children:"want - \u5c1d\u8bd5 start\uff0c\u4e0d\u5173\u5fc3 runlevel\uff0c\u5df2\u7ecf start \u4e0d\u5173\u5fc3"}),"\n",(0,r.jsx)(e.li,{children:"before - \u5728\u7ed9\u5b9a\u670d\u52a1\u4e4b\u524d\u542f\u52a8"}),"\n",(0,r.jsx)(e.li,{children:"after - \u5728\u7ed9\u5b9a\u670d\u52a1\u4e4b\u540e\u542f\u52a8"}),"\n",(0,r.jsx)(e.li,{children:"provide - \u63d0\u4f9b\u670d\u52a1 - \u7c7b\u4f3c\u522b\u540d\u6216\u76f8\u540c\u670d\u52a1"}),"\n",(0,r.jsx)(e.li,{children:"keyword"}),"\n",(0,r.jsxs)(e.li,{children:["\u4f9d\u8d56\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5f71\u54cd\u670d\u52a1\u8d77\u505c"}),"\n",(0,r.jsxs)(e.li,{children:["\u4f8b\u5982: \u91cd\u542f \u670d\u52a1 -> \u4f1a\u5148\u505c\u6b62 ",(0,r.jsx)(e.strong,{children:"\u4f9d\u8d56"}),"\uff0c\u91cd\u542f\u670d\u52a1\uff0c\u7136\u540e\u518d\u542f\u52a8 ",(0,r.jsx)(e.strong,{children:"\u4f9d\u8d56"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"\u4f9d\u8d56\u670d\u52a1 - \u4f1a start \u4f9d\u8d56\u670d\u52a1"}),"\n",(0,r.jsx)(e.li,{children:"\u88ab\u670d\u52a1\u4f9d\u8d56 - \u4f1a stop & start \u4f9d\u8d56\u670d\u52a1"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/OpenRC/openrc/blob/master/service-script-guide.md",children:"https://github.com/OpenRC/openrc/blob/master/service-script-guide.md"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"supervise-daemon",children:"supervise-daemon"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"flag"}),(0,r.jsx)(e.th,{children:"for"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["-u, --user ",(0,r.jsx)(e.code,{children:"user[:group]"})]}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["-D, --respawn-delay ",(0,r.jsx)(e.em,{children:"seconds"})]}),(0,r.jsx)(e.td,{children:"0"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["-m, --respawn-max ",(0,r.jsx)(e.em,{children:"count"})]}),(0,r.jsx)(e.td,{children:"10"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["-P, --respawn-period ",(0,r.jsx)(e.em,{children:"seconds"})]}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["-R, --retry ",(0,r.jsx)(e.code,{children:"[signal/]timeout"})]}),(0,r.jsx)(e.td,{children:"SIGTERM/5"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["-d, --chdir ",(0,r.jsx)(e.em,{children:"path"})]}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["-r, --chroot ",(0,r.jsx)(e.em,{children:"path"})]}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["-, --signal ",(0,r.jsx)(e.em,{children:"signal"})]}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["-g, --group ",(0,r.jsx)(e.em,{children:"group"})]}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["-k, --umask ",(0,r.jsx)(e.em,{children:"mode"})]}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["-p, --pidfile ",(0,r.jsx)(e.em,{children:"supervisorpidfile"})]}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["-1, --stdout ",(0,r.jsx)(e.em,{children:"logfile"})]}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["-2, --stderr ",(0,r.jsx)(e.em,{children:"logfile"})]}),(0,r.jsx)(e.td,{})]})]})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"-K, --stop"}),"\n",(0,r.jsx)(e.li,{children:"-s, --signal"}),"\n",(0,r.jsx)(e.li,{children:"RC_SVCNAME"}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://wiki.gentoo.org/wiki/OpenRC/supervise-daemon",children:"https://wiki.gentoo.org/wiki/OpenRC/supervise-daemon"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/OpenRC/openrc/blob/master/supervise-daemon-guide.md",children:"https://github.com/OpenRC/openrc/blob/master/supervise-daemon-guide.md"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://manpages.debian.org/testing/openrc/supervise-daemon.8.en.html",children:"https://manpages.debian.org/testing/openrc/supervise-daemon.8.en.html"})}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"faq",children:"FAQ"}),"\n",(0,r.jsxs)(e.h2,{id:"failed-to-add-service-sysfs-to-runlevel-boot-no-such-file-or-directory",children:["failed to add service ",(0,r.jsx)(e.code,{children:"sysfs"})," to ",(0,r.jsx)(e.code,{children:"runlevel"})," boot': No such file or directory"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"for svc in $BOOT_SERVICES; do ln -fs /etc/init.d/$svc /etc/runlevels/boot; done\n"})}),"\n",(0,r.jsx)(e.h2,{id:"is-the-name-of-a-real-and-virtual-service",children:"is the name of a real and virtual service"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["virtual service\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u662f openrc \u4e2d provide \u540e\u9762\u7684\u5185\u5bb9"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["real service\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u662f /etc/init.d \u4e0b\u540d\u5b57"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"provide \u7684\u540d\u5b57\u548c\u5b9e\u9645\u670d\u52a1\u540d\u5b57\u51b2\u7a81"}),"\n",(0,r.jsx)(e.h2,{id:"restart",children:"restart"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"# \u9ed8\u8ba4 0\nrespawn_delay=5\n# \u9ed8\u8ba4 10\nrespawn_max=0\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u6216"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'# \u9ed8\u8ba4 SIGTERM/5\nretry="${TINC_RETRY:-TERM/60/KILL/10}"\n'})}),"\n",(0,r.jsx)(e.h2,{id:"supervise-daemon-unable-to-open-the-logfile-for-stdout-varlogapplog-permission-denied",children:"supervise-daemon: unable to open the logfile for stdout `/var/log/app.log': Permission denied"})]})}function a(n={}){const{wrapper:e}={...(0,i.M)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},38088:(n,e,s)=>{var r=s(96651),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(n,e,s){var r,t={},o=null,h=null;for(r in void 0!==s&&(o=""+s),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(h=e.ref),e)d.call(e,r)&&!c.hasOwnProperty(r)&&(t[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===t[r]&&(t[r]=e[r]);return{$$typeof:i,type:n,key:o,ref:h,props:t,_owner:l.current}}e.Fragment=t,e.jsx=o,e.jsxs=o},2488:(n,e,s)=>{n.exports=s(38088)},62780:(n,e,s)=>{s.d(e,{I:()=>l,M:()=>d});var r=s(96651);const i={},t=r.createContext(i);function d(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);