/*! For license information please see 1b036a89.c0fa9caa.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68364],{73212:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(2488),s=t(62780);const i={title:"S.M.A.R.T."},d="S.M.A.R.T.",l={id:"os/linux/hardware/smart",title:"S.M.A.R.T.",description:"- S.M.A.R.T. - Self-Monitoring, Analysis and Reporting Technology",source:"@site/../notes/os/linux/hardware/smart.md",sourceDirName:"os/linux/hardware",slug:"/os/linux/hardware/smart",permalink:"/notes/os/linux/hardware/smart",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/hardware/smart.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1687329439,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"S.M.A.R.T."},sidebar:"docs",previous:{title:"NVME",permalink:"/notes/os/linux/hardware/nvme"},next:{title:"Trusted Platform Module",permalink:"/notes/os/linux/hardware/tpm"}},o={},c=[{value:"smartd",id:"smartd",level:2},{value:"\u786c\u76d8\u751f\u547d\u5468\u671f",id:"\u786c\u76d8\u751f\u547d\u5468\u671f",level:2},{value:"SSD \u751f\u547d\u5468\u671f\u548c\u5065\u5eb7\u72b6\u51b5",id:"ssd-\u751f\u547d\u5468\u671f\u548c\u5065\u5eb7\u72b6\u51b5",level:2},{value:"SSD output",id:"ssd-output",level:3},{value:"requires option &#39;-d cciss,N&#39;",id:"requires-option--d-ccissn",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"smart",children:"S.M.A.R.T."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"S.M.A.R.T. - Self-Monitoring, Analysis and Reporting Technology"}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://linux.die.net/man/8/smartctl",children:"https://linux.die.net/man/8/smartctl"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.smartmontools.org",children:"https://www.smartmontools.org"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://pkgs.alpinelinux.org/package/edge/main/x86_64/smartmontools",children:"https://pkgs.alpinelinux.org/package/edge/main/x86_64/smartmontools"})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"apk add smartmontools\n\n# \u68c0\u67e5\u662f\u5426\u6709 SMART \u652f\u6301\nsmartctl -i /dev/sda1\n\n# \u5168\u90e8\u4fe1\u606f\nsmartctl -a /dev/sda\n# \u5305\u542b\u989d\u5916\u4fe1\u606f\nsmartctl -x /dev/sda\n# \u5065\u5eb7\u4fe1\u606f\nsmartctl -H /dev/sdb\n\n# \u5f00\u542f\u76d1\u63a7\nsmartctl --smart=on --offlineauto=on --saveauto=on /dev/sdb\n\n# \u68c0\u67e5\nsmartctl -t short /dev/sda\n# \u68c0\u67e5\u5b8c\u6210\u67e5\u770b\u7ed3\u679c\nsmartctl -H /dev/sda\n\n# \u6279\u91cf\u64cd\u4f5c\necho /dev/sd{a,b,c,d,e} | xargs -n 1 smartctl -H\n\nsmartctl -a --json /dev/nvme0n1\n# \u5148\u950b\necho $((`sudo smartctl -a --json /dev/nvme0n1 | jq .nvme_smart_health_information_log.data_units_written` *512/1024/1024))G\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"smartctl"}),(0,r.jsx)(e.th,{children:"for"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Information"})}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-i,--info"}),(0,r.jsx)(e.td,{children:"identity"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"-identify[=[w][nvb]]"})}),(0,r.jsx)(e.td,{children:"ATA"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-g,--get NAME"}),(0,r.jsx)(e.td,{children:"all, aam, apm, dsn, lookahead, security, wcache, rcache, wcreorder, wcache-sct"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-a,--all"}),(0,r.jsx)(e.td,{children:"all SMART info"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-x,-xall"}),(0,r.jsx)(e.td,{children:"all info"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"--scan"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"--scan-open"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Runtime"})}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"-j,--json[=cgiosuvy]"})}),(0,r.jsx)(e.td,{children:"in JSON or YAML"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-q,--quietmode TYPE"}),(0,r.jsx)(e.td,{children:"errorsonly, silent, noserial"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-d,--device TYPE"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-T,--tolerance TYPE"}),(0,r.jsx)(e.td,{children:"normal, conservative, permissive, verypermissive"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-b,--badsum TYPE"}),(0,r.jsx)(e.td,{children:"warn, exit, ignore"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-r,--report TYPE"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"-n,--nocheck=MODE[,STATUS]"})}),(0,r.jsx)(e.td,{children:"never, sleep, standby, idle"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Feature"})}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-s,--smart=VALUE"}),(0,r.jsx)(e.td,{children:"N,off,on"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-o,--offlineauto=VALUE"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-S,--saveauto=VALUE"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"-s,--set=NAME[,VALUE]"})}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Read & Display"})}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-H, --health"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-c, --capabilities"}),(0,r.jsx)(e.td,{children:"SMART capabilities"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-A, --attributes"}),(0,r.jsx)(e.td,{children:"vendor-specific attributes"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-f, --format=FORMAT"}),(0,r.jsxs)(e.td,{children:["old,brief,",(0,r.jsx)(e.code,{children:"hex[,id|val]"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-l,--log TYPE"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-v,--vendorattribute=N,OPTION"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-F,--firmwarebug=TYPE"}),(0,r.jsx)(e.td,{children:"none, nologdir, samsung, samsung2, samsung3, xerrorlba, swapid"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-P,--presets=TYPE"}),(0,r.jsx)(e.td,{children:"use, ignore, show, showall"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["-B,",(0,r.jsx)(e.code,{children:"--drivedb=[+]FILE"})]}),(0,r.jsx)(e.td,{children:"/etc/smart_drivedb.h,/usr/share/smartmontools/drivedb.h"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Self-Test"})}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-t,--test TEST"}),(0,r.jsxs)(e.td,{children:["offline, short, long, conveyance, force, vendor,N,select,M-N, pending,N, ",(0,r.jsx)(e.code,{children:"afterselect,[on|off]"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-C, --captive"}),(0,r.jsx)(e.td,{children:"captive mode"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-X,--abort"}),(0,r.jsx)(e.td,{children:"Abort any non-captive test"})]})]})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7279\u6027 aam, apm, dsn, lookahead, security, wcache, rcache, wcreorder, wcache-sct"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"smartd",children:"smartd"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["/etc/smartd.conf - ",(0,r.jsx)(e.a,{href:"https://linux.die.net/man/5/smartd.conf",children:"https://linux.die.net/man/5/smartd.conf"})]}),"\n",(0,r.jsx)(e.li,{children:"/etc/smartd_warning.d/"}),"\n",(0,r.jsx)(e.li,{children:"/etc/smartd_warning.sh"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ini",children:"# \u626b\u63cf\u6240\u6709\nDEVICESCAN\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"flag"}),(0,r.jsx)(e.th,{children:"for"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-a"}),(0,r.jsx)(e.td,{children:"\u9ed8\u8ba4: -H -f -t -l error -l selftest -C 197 -U 198"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-p"}),(0,r.jsx)(e.td,{children:"Report 'Prefailure'"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-u"}),(0,r.jsx)(e.td,{children:"Report 'Usage'"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-U ID"}),(0,r.jsx)(e.td,{children:"Report if Offline Uncorrectable count non-zero"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-C ID"}),(0,r.jsx)(e.td,{children:"Report if Current Pending Sector count non-zero"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-t"}),(0,r.jsx)(e.td,{children:"-pu"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-R ID"}),(0,r.jsx)(e.td,{children:"Track for -p,-u,-t"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-r ID"}),(0,r.jsx)(e.td,{children:"Also report Raw values"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-I ID"}),(0,r.jsx)(e.td,{children:"Ignore for -p,-u,-t"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-i ID"}),(0,r.jsx)(e.td,{children:"Ignore for -f"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-d TYPE"}),(0,r.jsx)(e.td,{children:"Device type: ata, scsi, marvell, removable, 3ware,N, hpt,L/M/N"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-T TYPE"}),(0,r.jsx)(e.td,{children:"tolerance: normal, permissive"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-m ADD"}),(0,r.jsx)(e.td,{children:"Send warning email to ADD for -H, -l error, -l selftest, -f"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-H"}),(0,r.jsx)(e.td,{children:"Monitor Health Status, report if failed"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-l TYPE"}),(0,r.jsx)(e.td,{children:"Monitor log: error, selftest"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-f"}),(0,r.jsx)(e.td,{children:"Monitor failure of any 'Usage' Attributes"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-W D,I,C"}),(0,r.jsx)(e.td,{children:"Monitor Temperature D)ifference, I)nformal limit, C)ritical limit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-n MODE"}),(0,r.jsx)(e.td,{children:"never, sleep, standby, idle"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u786c\u76d8\u751f\u547d\u5468\u671f",children:"\u786c\u76d8\u751f\u547d\u5468\u671f"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u786c\u6027\u9650\u5236\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"cycle count over device lifetime - 10000"}),"\n",(0,r.jsx)(e.li,{children:"load-unload count over device lifetime - 300000"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u4f7f\u7528\u65f6\u957f\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Accumulated power on time"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u4e00\u5e74\u5927\u7ea6 8640 \u5c0f\u65f6"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Accumulated power on time, hours:minutes 11364:04\nManufactured in week 24 of year 2016\nSpecified cycle count over device lifetime:  10000\nAccumulated start-stop cycles:  151\nSpecified load-unload count over device lifetime:  300000\nAccumulated load-unload cycles:  239\nElements in grown defect list: 8\n"})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u68c0\u67e5\u9519\u8bef\u60c5\u51b5"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Error counter log:\n           Errors Corrected by           Total   Correction     Gigabytes    Total\n               ECC          rereads/    errors   algorithm      processed    uncorrected\n           fast | delayed   rewrites  corrected  invocations   [10^9 bytes]  errors\nread:   232366863        0         0  232366863          0      44654.348           0\nwrite:         0        0         0         0          0      21812.815           0\nverify: 81711711        0         0  81711711          0      61007.393           0\n\nNon-medium error count:        4\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://serverfault.com/q/419007/190601",children:"https://serverfault.com/q/419007/190601"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.dell.com/support/kbdoc/zh-cn/000147878",children:"https://www.dell.com/support/kbdoc/zh-cn/000147878"})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Non-medium error count\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["number of recoverable events other than write, read or verify errors.\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u53ef\u80fd\u662f\u7ebf\u548c\u63a7\u5236\u5668\u95ee\u9898"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"ssd-\u751f\u547d\u5468\u671f\u548c\u5065\u5eb7\u72b6\u51b5",children:"SSD \u751f\u547d\u5468\u671f\u548c\u5065\u5eb7\u72b6\u51b5"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u67e5\u770b\u5c5e\u6027\u8868"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"ID# ATTRIBUTE_NAME          FLAG     VALUE WORST THRESH TYPE      UPDATED  WHEN_FAILED RAW_VALUE\n  5 Reallocated_Sector_Ct   0x0033   100   100   010    Pre-fail  Always       -       0\n  9 Power_On_Hours          0x0032   097   097   000    Old_age   Always       -       13543\n 12 Power_Cycle_Count       0x0032   098   098   000    Old_age   Always       -       1293\n177 Wear_Leveling_Count     0x0013   090   090   000    Pre-fail  Always       -       50\n179 Used_Rsvd_Blk_Cnt_Tot   0x0013   100   100   010    Pre-fail  Always       -       0\n181 Program_Fail_Cnt_Total  0x0032   100   100   010    Old_age   Always       -       0\n182 Erase_Fail_Count_Total  0x0032   100   100   010    Old_age   Always       -       0\n183 Runtime_Bad_Block       0x0013   100   099   010    Pre-fail  Always       -       0\n187 Uncorrectable_Error_Cnt 0x0032   100   100   000    Old_age   Always       -       0\n190 Airflow_Temperature_Cel 0x0032   053   047   000    Old_age   Always       -       47\n195 ECC_Error_Rate          0x001a   200   200   000    Old_age   Always       -       0\n199 CRC_Error_Count         0x003e   097   097   000    Old_age   Always       -       2988\n235 POR_Recovery_Count      0x0012   099   099   000    Old_age   Always       -       147\n241 Total_LBAs_Written      0x0032   099   099   000    Old_age   Always       -       10909128771\n"})}),"\n",(0,r.jsx)(e.h3,{id:"ssd-output",children:"SSD output"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Total_LBAs_Written\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"LBA = Logical block addressing"}),"\n",(0,r.jsx)(e.li,{children:"TBW = LBA/Sector"}),"\n",(0,r.jsx)(e.li,{children:"TBW = 21811089703/512 ~= 11TB - \u5b9e\u9645"}),"\n",(0,r.jsx)(e.li,{children:"TBW = 120GB * 3000 ~= 300TB - \u603b\u8ba1"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"=== START OF INFORMATION SECTION ===\nModel Family:     Samsung based SSDs\nDevice Model:     Samsung SSD 750 EVO 120GB\nSerial Number:    S2TTNDAH131915J\nLU WWN Device Id: 5 000000 000000000\nFirmware Version: MAT01B6Q\nUser Capacity:    120,034,123,776 bytes [120 GB]\nSector Size:      512 bytes logical/physical\nRotation Rate:    Solid State Device\nTRIM Command:     Available\nDevice is:        In smartctl database [for details use: -P show]\nATA Version is:   ACS-2, ATA8-ACS T13/1699-D revision 4c\nSATA Version is:  SATA 3.1, 6.0 Gb/s (current: 6.0 Gb/s)\nLocal Time is:    Fri Oct  8 00:56:37 2021 CST\nSMART support is: Available - device has SMART capability.\nSMART support is: Enabled\nAAM feature is:   Unavailable\nAPM feature is:   Unavailable\nRd look-ahead is: Enabled\nWrite cache is:   Enabled\nDSN feature is:   Unavailable\nATA Security is:  Disabled, frozen [SEC2]\nWt Cache Reorder: Enabled\n\n=== START OF READ SMART DATA SECTION ===\nSMART overall-health self-assessment test result: PASSED\n\nGeneral SMART Values:\nOffline data collection status:  (0x00)\tOffline data collection activity\n\t\t\t\t\twas never started.\n\t\t\t\t\tAuto Offline Data Collection: Disabled.\nSelf-test execution status:      (   0)\tThe previous self-test routine completed\n\t\t\t\t\twithout error or no self-test has ever\n\t\t\t\t\tbeen run.\nTotal time to complete Offline\ndata collection: \t\t(    0) seconds.\nOffline data collection\ncapabilities: \t\t\t (0x53) SMART execute Offline immediate.\n\t\t\t\t\tAuto Offline data collection on/off support.\n\t\t\t\t\tSuspend Offline collection upon new\n\t\t\t\t\tcommand.\n\t\t\t\t\tNo Offline surface scan supported.\n\t\t\t\t\tSelf-test supported.\n\t\t\t\t\tNo Conveyance Self-test supported.\n\t\t\t\t\tSelective Self-test supported.\nSMART capabilities:            (0x0003)\tSaves SMART data before entering\n\t\t\t\t\tpower-saving mode.\n\t\t\t\t\tSupports SMART auto save timer.\nError logging capability:        (0x01)\tError logging supported.\n\t\t\t\t\tGeneral Purpose Logging supported.\nShort self-test routine\nrecommended polling time: \t (   2) minutes.\nExtended self-test routine\nrecommended polling time: \t (  64) minutes.\nSCT capabilities: \t       (0x003d)\tSCT Status supported.\n\t\t\t\t\tSCT Error Recovery Control supported.\n\t\t\t\t\tSCT Feature Control supported.\n\t\t\t\t\tSCT Data Table supported.\n\nSMART Attributes Data Structure revision number: 1\nVendor Specific SMART Attributes with Thresholds:\nID# ATTRIBUTE_NAME          FLAGS    VALUE WORST THRESH FAIL RAW_VALUE\n  5 Reallocated_Sector_Ct   PO--CK   100   100   010    -    0\n  9 Power_On_Hours          -O--CK   096   096   000    -    16599\n 12 Power_Cycle_Count       -O--CK   098   098   000    -    1558\n177 Wear_Leveling_Count     PO--C-   031   031   000    -    344\n179 Used_Rsvd_Blk_Cnt_Tot   PO--C-   100   100   010    -    0\n181 Program_Fail_Cnt_Total  -O--CK   100   100   010    -    0\n182 Erase_Fail_Count_Total  -O--CK   100   100   010    -    0\n183 Runtime_Bad_Block       PO--C-   100   099   010    -    0\n187 Uncorrectable_Error_Cnt -O--CK   100   100   000    -    0\n190 Airflow_Temperature_Cel -O--CK   056   039   000    -    44\n195 ECC_Error_Rate          -O-RC-   200   200   000    -    0\n199 CRC_Error_Count         -OSRCK   099   099   000    -    49\n235 POR_Recovery_Count      -O--C-   099   099   000    -    126\n241 Total_LBAs_Written      -O--CK   099   099   000    -    21811089703\n                            ||||||_ K auto-keep\n                            |||||__ C event count\n                            ||||___ R error rate\n                            |||____ S speed/performance\n                            ||_____ O updated online\n                            |______ P prefailure warning\n\nGeneral Purpose Log Directory Version 1\nSMART           Log Directory Version 1 [multi-sector log support]\nAddress    Access  R/W   Size  Description\n0x00       GPL,SL  R/O      1  Log Directory\n0x01           SL  R/O      1  Summary SMART error log\n0x02           SL  R/O      1  Comprehensive SMART error log\n0x03       GPL     R/O      1  Ext. Comprehensive SMART error log\n0x06           SL  R/O      1  SMART self-test log\n0x07       GPL     R/O      1  Extended self-test log\n0x09           SL  R/W      1  Selective self-test log\n0x10       GPL     R/O      1  NCQ Command Error log\n0x11       GPL     R/O      1  SATA Phy Event Counters log\n0x13       GPL     R/O      1  SATA NCQ Send and Receive log\n0x30       GPL,SL  R/O      9  IDENTIFY DEVICE data log\n0x80-0x9f  GPL,SL  R/W     16  Host vendor specific log\n0xa1           SL  VS      16  Device vendor specific log\n0xa5           SL  VS      16  Device vendor specific log\n0xce           SL  VS      16  Device vendor specific log\n0xe0       GPL,SL  R/W      1  SCT Command/Status\n0xe1       GPL,SL  R/W      1  SCT Data Transfer\n\nSMART Extended Comprehensive Error Log Version: 1 (1 sectors)\nNo Errors Logged\n\nSMART Extended Self-test Log Version: 1 (1 sectors)\nNo self-tests have been logged.  [To run self-tests, use: smartctl -t]\n\nSMART Selective self-test log data structure revision number 1\n SPAN  MIN_LBA  MAX_LBA  CURRENT_TEST_STATUS\n    1        0        0  Not_testing\n    2        0        0  Not_testing\n    3        0        0  Not_testing\n    4        0        0  Not_testing\n    5        0        0  Not_testing\n  255        0    65535  Read_scanning was never started\nSelective self-test flags (0x0):\n  After scanning selected spans, do NOT read-scan remainder of disk.\nIf Selective self-test is pending on power-up, resume after 0 minute delay.\n\nSCT Status Version:                  3\nSCT Version (vendor specific):       256 (0x0100)\nDevice State:                        SCT command executing in background (5)\nCurrent Temperature:                    44 Celsius\nPower Cycle Min/Max Temperature:     40/56 Celsius\nLifetime    Min/Max Temperature:      0/70 Celsius\nUnder/Over Temperature Limit Count:  3758096367/4294901760\nSMART Status:                        0xffff (Reserved)\n\nSCT Temperature History Version:     2\nTemperature Sampling Period:         1 minute\nTemperature Logging Interval:        10 minutes\nMin/Max recommended Temperature:      0/70 Celsius\nMin/Max Temperature Limit:            0/70 Celsius\nTemperature History Size (Index):    128 (8)\n\nIndex    Estimated Time   Temperature Celsius\n   9    2021-10-07 03:40    44  *************************\n ...    ..(  2 skipped).    ..  *************************\n  12    2021-10-07 04:10    44  *************************\n  13    2021-10-07 04:20    45  **************************\n  14    2021-10-07 04:30    44  *************************\n  15    2021-10-07 04:40    45  **************************\n  16    2021-10-07 04:50    44  *************************\n  17    2021-10-07 05:00    44  *************************\n  18    2021-10-07 05:10    45  **************************\n  19    2021-10-07 05:20    44  *************************\n ...    ..(  4 skipped).    ..  *************************\n  24    2021-10-07 06:10    44  *************************\n  25    2021-10-07 06:20    45  **************************\n  26    2021-10-07 06:30    44  *************************\n ...    ..(  9 skipped).    ..  *************************\n  36    2021-10-07 08:10    44  *************************\n  37    2021-10-07 08:20    45  **************************\n  38    2021-10-07 08:30    45  **************************\n  39    2021-10-07 08:40    44  *************************\n  40    2021-10-07 08:50    45  **************************\n ...    ..( 32 skipped).    ..  **************************\n  73    2021-10-07 14:20    45  **************************\n  74    2021-10-07 14:30    44  *************************\n ...    ..( 30 skipped).    ..  *************************\n 105    2021-10-07 19:40    44  *************************\n 106    2021-10-07 19:50    45  **************************\n ...    ..( 12 skipped).    ..  **************************\n 119    2021-10-07 22:00    45  **************************\n 120    2021-10-07 22:10    44  *************************\n ...    ..( 15 skipped).    ..  *************************\n   8    2021-10-08 00:50    44  *************************\n\nSCT Error Recovery Control:\n           Read: Disabled\n          Write: Disabled\n\nDevice Statistics (GP/SMART Log 0x04) not supported\n\nPending Defects log (GP Log 0x0c) not supported\n\nSATA Phy Event Counters (GP Log 0x11)\nID      Size     Value  Description\n0x0001  2            0  Command failed due to ICRC error\n0x0002  2            0  R_ERR response for data FIS\n0x0003  2            0  R_ERR response for device-to-host data FIS\n0x0004  2            0  R_ERR response for host-to-device data FIS\n0x0005  2            0  R_ERR response for non-data FIS\n0x0006  2            0  R_ERR response for device-to-host non-data FIS\n0x0007  2            0  R_ERR response for host-to-device non-data FIS\n0x0008  2            0  Device-to-host non-data FIS retries\n0x0009  2            3  Transition from drive PhyRdy to drive PhyNRdy\n0x000a  2            3  Device-to-host register FISes sent due to a COMRESET\n0x000b  2            0  CRC errors within host-to-device FIS\n0x000d  2            0  Non-CRC errors within host-to-device FIS\n0x000f  2            0  R_ERR response for host-to-device data FIS, CRC\n0x0010  2            0  R_ERR response for host-to-device data FIS, non-CRC\n0x0012  2            0  R_ERR response for host-to-device non-data FIS, CRC\n0x0013  2            0  R_ERR response for host-to-device non-data FIS, non-CRC\n"})}),"\n",(0,r.jsx)(e.h2,{id:"requires-option--d-ccissn",children:"requires option '-d cciss,N'"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"smartctl -d cciss,1 -a /dev/sda\n"})})]})}function h(n={}){const{wrapper:e}={...(0,s.M)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},38088:(n,e,t)=>{var r=t(96651),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(n,e,t){var r,i={},c=null,a=null;for(r in void 0!==t&&(c=""+t),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(a=e.ref),e)d.call(e,r)&&!o.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===i[r]&&(i[r]=e[r]);return{$$typeof:s,type:n,key:c,ref:a,props:i,_owner:l.current}}e.Fragment=i,e.jsx=c,e.jsxs=c},2488:(n,e,t)=>{n.exports=t(38088)},62780:(n,e,t)=>{t.d(e,{I:()=>l,M:()=>d});var r=t(96651);const s={},i=r.createContext(s);function d(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);