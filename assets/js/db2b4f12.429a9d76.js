/*! For license information please see db2b4f12.429a9d76.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[75848],{24644:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=t(2488),a=t(62780);const i={title:"Asterisk CDR"},o="Asterisk CDR",r={id:"voip/asterisk/asterisk-cdr",title:"Asterisk CDR",description:"- CDR - Call Detail Record - \u901a\u8bdd\u8bb0\u5f55",source:"@site/../notes/voip/asterisk/asterisk-cdr.md",sourceDirName:"voip/asterisk",slug:"/voip/asterisk/cdr",permalink:"/notes/voip/asterisk/cdr",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/voip/asterisk/asterisk-cdr.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1633860901,formattedLastUpdatedAt:"Oct 10, 2021",frontMatter:{title:"Asterisk CDR"},sidebar:"docs",previous:{title:"Build Asterisk",permalink:"/notes/voip/asterisk/build"},next:{title:"Asterisk \u901a\u9053",permalink:"/notes/voip/asterisk/channel"}},l={},d=[{value:"cdr.conf",id:"cdrconf",level:2},{value:"\u540e\u7aef",id:"\u540e\u7aef",level:3},{value:"sqlite3",id:"sqlite3",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,a.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"asterisk-cdr",children:"Asterisk CDR"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"CDR - Call Detail Record - \u901a\u8bdd\u8bb0\u5f55"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"cdrconf",children:"cdr.conf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-conf",children:"[general]\nenable=yes\n\n; \u672a\u54cd\u5e94\u7684\u547c\u53eb\u662f\u5426\u8bb0\u5f55\n; \u672a\u54cd\u5e94 - \u6ca1\u6709\u8bbe\u7f6e B \u7aef\u901a\u9053 \u4f8b\u5982\u6ca1\u6709 Dial\n; \u9ed8\u8ba4 no\nunanswered = yes\n; \u662f\u5426\u8bb0\u5f55 \u62e5\u585e/congested \u547c\u53eb\n; \u9ed8\u8ba4 no\ncongestion = yes\n\n; \u9ed8\u8ba4\u5728\u8fd0\u884c\u5b8c extension \u540e\u8bb0\u5f55 cdr\n;endbeforehexten=no\n\n; billsec=end/hangup time - answer time\n; \u9ed8\u8ba4\u8bb0\u5f55\u4e3a\u79d2\uff0c\u5185\u90e8\u8bb0\u5f55\u4e3a \u79d2+ms\uff0c\u8bbe\u7f6e\u4e3a yes \u5219 Math.ceil\n;initiatedseconds=no\n\n; \u6279\u91cf\u5199\u5165 - \u53ef\u80fd\u4f1a\u4e22\u5931 cdr\n;batch=no\n; \u6279\u91cf\u7d2f\u8ba1\u5927\u5c0f\n;size=100\n; \u6279\u91cf\u7d2f\u8ba1\u65f6\u95f4 - \u5355\u4f4d \u79d2\n;time=300\n; \u6279\u91cf\u63d0\u4ea4\u65b9\u5f0f\n; \u5c0f\u6279\u91cf(size<10) \u53ef\u8bbe\u7f6e\u4e3a yes \u76f4\u63a5\u5728 scheduler \u7ebf\u7a0b\u63d0\u4ea4\n; \u5927\u6279\u91cf\u8bbe\u7f6e\u4e3a no \u5728\u65b0\u7ebf\u7a0b\u63d0\u4ea4\n;scheduleronly=no\n; \u505c\u6b62 asterisk \u65f6\u5148\u5199\u5165 cdr - cdr status \u53ef\u67e5\u770b\u8fdb\u5ea6\n;safeshutdown=yes\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u540e\u7aef",children:"\u540e\u7aef"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u652f\u6301\u540e\u7aef csv, custom, manager, odbc, pgsql, radius, sqlite, tds, mysql"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-conf",children:'; Some of the modules required to provide these backends will not build or install\n; unless some dependency requirements are met. Examples of this are pgsql, odbc,\n; etc. If you are not getting output as you would expect, the first thing to do\n; is to run the command "make menuselect", and check what modules are available,\n; by looking in the "2. Call Detail Recording" option in the main menu. If your\n; backend is marked with XXX, you know that the "configure" command could not find\n; the required libraries for that option.\n;\n; To get CDRs to be logged to the plain-jane /var/log/asterisk/cdr-csv/Master.csv\n; file, define the [csv] category in this file. No database necessary. The example\n; config files are set up to provide this kind of output by default.\n;\n; To get custom csv CDR records, make sure the cdr_custom.conf file\n; is present, and contains the proper [mappings] section. The advantage to\n; using this backend, is that you can define which fields to output, and in\n; what order. By default, the example configs are set up to mimic the cdr-csv\n; output. If you don\'t make any changes to the mappings, you are basically generating\n; the same thing as cdr-csv, but expending more CPU cycles to do so!\n;\n; To get manager events generated, make sure the cdr_manager.conf file exists,\n; and the [general] section is defined, with the single variable \'enabled = yes\'.\n;\n; For odbc, make sure all the proper libs are installed, that "make menuselect"\n; shows that the modules are available, and the cdr_odbc.conf file exists, and\n; has a [global] section with the proper variables defined.\n;\n; For pgsql, make sure all the proper libs are installed, that "make menuselect"\n; shows that the modules are available, and the cdr_pgsql.conf file exists, and\n; has a [global] section with the proper variables defined.\n;\n; For logging to radius databases, make sure all the proper libs are installed, that\n; "make menuselect" shows that the modules are available, and the [radius]\n; category is defined in this file, and in that section, make sure the \'radiuscfg\'\n; variable is properly pointing to an existing radiusclient.conf file.\n;\n; For logging to sqlite databases, make sure the \'cdr.db\' file exists in the log directory,\n; which is usually /var/log/asterisk. Of course, the proper libraries should be available\n; during the \'configure\' operation.\n;\n; For tds logging, make sure the proper libraries are available during the \'configure\'\n; phase, and that cdr_tds.conf exists and is properly set up with a [global] category.\n;\n; Also, remember, that if you wish to log CDR info to a database, you will have to define\n; a specific table in that databse to make things work! See the doc directory for more details\n; on how to create this table in each database.\n;\n\n[csv]\nusegmtime=yes    ; log date/time in GMT.  Default is "no"\nloguniqueid=yes  ; log uniqueid.  Default is "no"\nloguserfield=yes ; log user field.  Default is "no"\naccountlogs=yes  ; create separate log file for each account code. Default is "yes"\n;newcdrcolumns=yes ; Enable logging of post-1.8 CDR columns (peeraccount, linkedid, sequence).\n                   ; Default is "no".\n\n;[radius]\n;usegmtime=yes    ; log date/time in GMT\n;loguniqueid=yes  ; log uniqueid\n;loguserfield=yes ; log user field\n; Set this to the location of the radiusclient-ng configuration file\n; The default is /etc/radiusclient-ng/radiusclient.conf\n;radiuscfg => /usr/local/etc/radiusclient-ng/radiusclient.conf\n'})}),"\n",(0,s.jsx)(n.h2,{id:"sqlite3",children:"sqlite3"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-conf",children:"; /var/log/asterisk/master.db\n[master]\ntable => cdr\ncolumns => calldate, clid, dcontext, channel, dstchannel, lastapp, lastdata, duration, billsec, disposition, amaflags, accountcode, uniqueid, userfield, test\nvalues => '${CDR(start)}','${CDR(clid)}','${CDR(dcontext)}','${CDR(channel)}','${CDR(dstchannel)}','${CDR(lastapp)}','${CDR(lastdata)}','${CDR(duration)}','${CDR(billsec)}','${CDR(disposition)}','${CDR(amaflags)}','${CDR(accountcode)}','${CDR(uniqueid)}','${CDR(userfield)}','${CDR(test)}'\nbusy_timeout => 1000\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},38088:(e,n,t)=>{var s=t(96651),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var s,i={},d=null,c=null;for(s in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,s)&&!l.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:a,type:e,key:d,ref:c,props:i,_owner:r.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>o});var s=t(96651);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);