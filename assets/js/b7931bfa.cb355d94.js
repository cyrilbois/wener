/*! For license information please see b7931bfa.cb355d94.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[14320],{17596:(n,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>t,metadata:()=>d,toc:()=>h});var e=s(2488),i=s(62780);const t={title:"\u5bc6\u7801\u52a0\u5bc6\u65b9\u5f0f"},l="\u5bc6\u7801\u52a0\u5bc6\u65b9\u5f0f",d={id:"security/crypto/password",title:"\u5bc6\u7801\u52a0\u5bc6\u65b9\u5f0f",description:"- \u9ed8\u8ba4\u9009\u62e9 bcrypt",source:"@site/../notes/security/crypto/password.md",sourceDirName:"security/crypto",slug:"/security/crypto/password",permalink:"/notes/security/crypto/password",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/security/crypto/password.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1709694572,formattedLastUpdatedAt:"Mar 6, 2024",frontMatter:{title:"\u5bc6\u7801\u52a0\u5bc6\u65b9\u5f0f"},sidebar:"docs",previous:{title:"hashcat",permalink:"/notes/security/crypto/hashcat"},next:{title:"PGP",permalink:"/notes/security/crypto/pgp"}},c={},h=[{value:"\u5e93",id:"library",level:2},{value:"\u5e38\u89c1\u670d\u52a1\u52a0\u5bc6\u7b97\u6cd5",id:"\u5e38\u89c1\u670d\u52a1\u52a0\u5bc6\u7b97\u6cd5",level:2},{value:"Gitea",id:"gitea",level:3},{value:"OpenLDAP",id:"openldap",level:3},{value:"ApacheDirectory Server",id:"apachedirectory-server",level:3},{value:"Gitlab",id:"gitlab",level:3},{value:"Key stretching",id:"key-stretching",level:2},{value:"argon2 vs bcrypt vs scrypt vs pkdf2",id:"argon2-vs-bcrypt-vs-scrypt-vs-pkdf2",level:2}];function a(n){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.h1,{id:"\u5bc6\u7801\u52a0\u5bc6\u65b9\u5f0f",children:"\u5bc6\u7801\u52a0\u5bc6\u65b9\u5f0f"}),"\n",(0,e.jsx)(r.admonition,{type:"tip",children:(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"\u9ed8\u8ba4\u9009\u62e9 bcrypt"}),"\n"]})}),"\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsxs)(r.li,{children:["KDF - Key Derivation Function - \u5bc6\u94a5\u6d3e\u751f\u51fd\u6570\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"PBKDF2 - Password-Based Key Derivation Function 2 - \u57fa\u4e8e\u5bc6\u7801\u7684\u5bc6\u94a5\u6d3e\u751f\u51fd\u6570 2"}),"\n",(0,e.jsx)(r.li,{children:"bcrypt - Blowfish-based Adaptive Cryptographic Hash Function - \u57fa\u4e8e Blowfish \u7684\u81ea\u9002\u5e94\u5bc6\u7801\u54c8\u5e0c\u51fd\u6570"}),"\n",(0,e.jsx)(r.li,{children:"argon2 - Argon2 - Argon2 \u5bc6\u7801\u54c8\u5e0c\u51fd\u6570"}),"\n",(0,e.jsx)(r.li,{children:"scrypt - \u7528\u4e8e\u5bc6\u7801\u54c8\u5e0c\u7684\u5185\u5b58\u5bc6\u96c6\u578b\u5bc6\u94a5\u6d3e\u751f\u51fd\u6570"}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(r.li,{children:["PHF - Password Hashing Function - \u5bc6\u7801\u54c8\u5e0c\u51fd\u6570\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"scrypt - \u7528\u4e8e\u5bc6\u7801\u54c8\u5e0c\u7684\u5185\u5b58\u5bc6\u96c6\u578b\u5bc6\u94a5\u6d3e\u751f\u51fd\u6570"}),"\n",(0,e.jsx)(r.li,{children:"sha256_crypt - SHA-256 Crypt - SHA-256 \u5bc6\u7801"}),"\n",(0,e.jsx)(r.li,{children:"sha512_crypt - SHA-512 Crypt - SHA-512 \u5bc6\u7801"}),"\n",(0,e.jsx)(r.li,{children:"md5_crypt - MD5 Crypt - MD5 \u5bc6\u7801"}),"\n",(0,e.jsx)(r.li,{children:"sha1_crypt - SHA-1 Crypt - SHA-1 \u5bc6\u7801"}),"\n",(0,e.jsx)(r.li,{children:"bcrypt - Blowfish-based Adaptive Cryptographic Hash Function - \u57fa\u4e8e Blowfish \u7684\u81ea\u9002\u5e94\u5bc6\u7801\u54c8\u5e0c\u51fd\u6570"}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(r.li,{children:["MCF - Modular Crypt Format - \u6a21\u5757\u5316\u5bc6\u7801\u683c\u5f0f\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"Deprecated (as of 2016) in favor of the PHC String Format"}),"\n",(0,e.jsx)(r.li,{children:(0,e.jsx)(r.a,{href:"https://github.com/ademarre/binary-mcf",children:"https://github.com/ademarre/binary-mcf"})}),"\n",(0,e.jsx)(r.li,{children:(0,e.jsx)(r.a,{href:"https://passlib.readthedocs.io/en/stable/modular_crypt_format.html",children:"https://passlib.readthedocs.io/en/stable/modular_crypt_format.html"})}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(r.li,{children:["PHC String Format\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:(0,e.jsx)(r.a,{href:"https://github.com/P-H-C/phc-string-format/blob/master/phc-sf-spec.md",children:"https://github.com/P-H-C/phc-string-format/blob/master/phc-sf-spec.md"})}),"\n",(0,e.jsx)(r.li,{children:(0,e.jsx)(r.a,{href:"https://man7.org/linux/man-pages/man3/crypt.3.html",children:"https://man7.org/linux/man-pages/man3/crypt.3.html"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{children:"$<id>[$v=<version>][$<param>=<value>(,<param>=<value>)*][$<salt>[$<hash>]]\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,e.jsxs)(r.table,{children:[(0,e.jsx)(r.thead,{children:(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.th,{children:"Scheme ID"}),(0,e.jsx)(r.th,{children:"Schema"})]})}),(0,e.jsxs)(r.tbody,{children:[(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"1"}),(0,e.jsx)(r.td,{children:"MD5"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"2a"}),(0,e.jsx)(r.td,{children:"Blowfish / bcrypt"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"2b"}),(0,e.jsx)(r.td,{})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"2x"}),(0,e.jsx)(r.td,{children:"\u517c\u5bb9 2a"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"2y"}),(0,e.jsx)(r.td,{children:"\u517c\u5bb9 2a"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"3"}),(0,e.jsx)(r.td,{children:"NTHASH"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"5"}),(0,e.jsx)(r.td,{children:"SHA-256"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"6"}),(0,e.jsx)(r.td,{children:"SHA-512"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"md5"}),(0,e.jsx)(r.td,{children:"Solaris MD5"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"sha1"}),(0,e.jsx)(r.td,{children:"PBKDF1 with SHA-1"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"argon2d"}),(0,e.jsx)(r.td,{})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"argon2i"}),(0,e.jsx)(r.td,{})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"argon2id"}),(0,e.jsx)(r.td,{})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"pbkdf2"}),(0,e.jsx)(r.td,{children:"PBKDF2 with SHA-1"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"scrypt"}),(0,e.jsx)(r.td,{children:"\u4f7f\u7528\u5185\u5b58\u5bc6\u96c6\u578b\u5bc6\u94a5\u5bfc\u51fa\u51fd\u6570\u7684\u5bc6\u7801\u54c8\u5e0c\u7b97\u6cd5"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"bcrypt"}),(0,e.jsx)(r.td,{children:"\u4f7f\u7528 Blowfish \u52a0\u5bc6\u7b97\u6cd5\u7684\u5bc6\u7801\u54c8\u5e0c\u7b97\u6cd5"})]})]})]}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-bash",children:"# \u4e0d\u662f\u6240\u6709 mkpasswd \u90fd\u652f\u6301 rounds \u548c -m\nmkpasswd --rounds 1000 -m sha-512 --salt $(head -c 40 /dev/random | base64 | sed -e 's/+/./g' | cut -b 10-25) 'password'\n"})}),"\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsxs)(r.li,{children:["sha\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"rounds"}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(r.li,{children:["argon2\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsxs)(r.li,{children:["m - \u5185\u5b58 - 1 - ",(0,e.jsx)(r.code,{children:"(2^32)-1"}),"\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"WebApp - 64Mib"}),"\n",(0,e.jsx)(r.li,{children:"\u654f\u611f\u6570\u636e\u79bb\u7ebf - 1Gib"}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(r.li,{children:"t - \u8fed\u4ee3"}),"\n",(0,e.jsx)(r.li,{children:"p - \u5e76\u884c - 1 - 255"}),"\n",(0,e.jsx)(r.li,{children:"keyid - 0-8 bytes, b64 0-11 char"}),"\n",(0,e.jsx)(r.li,{children:"data - 0-32 bytes, b64 0-43 char"}),"\n",(0,e.jsx)(r.li,{children:"salt - 8-48 bytes, b64 11-64 char"}),"\n",(0,e.jsx)(r.li,{children:"hash - 16-64 bytes, b64 22-86 char - \u9ed8\u8ba4 32 bytes 43 char"}),"\n",(0,e.jsx)(r.li,{children:"\u63a8\u8350 argon2id"}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(r.li,{children:"Argon2d\uff08\u6570\u636e\u4f9d\u8d56\uff09\uff1a\u8fd9\u4e2a\u53d8\u4f53\u4f7f\u7528\u6570\u636e\u4f9d\u8d56\u7684\u5185\u5b58\u8bbf\u95ee\u6a21\u5f0f\uff0c\u4f7f\u5f97\u5b83\u5177\u6709\u8f83\u5f3a\u7684\u62b5\u6297\u4fa7\u4fe1\u9053\u653b\u51fb\u80fd\u529b\u3002\u4f46\u662f\uff0c\u7531\u4e8e\u5176\u6570\u636e\u4f9d\u8d56\u6027\uff0c\u5b83\u53ef\u80fd\u5bf9\u65f6\u95f4\u7a7a\u95f4\u6743\u8861\u653b\u51fb\uff08TMTO\uff09\u8f83\u4e3a\u654f\u611f\u3002Argon2d \u9002\u7528\u4e8e\u9700\u8981\u8f83\u9ad8\u6297\u4fa7\u4fe1\u9053\u653b\u51fb\u80fd\u529b\u7684\u573a\u666f\uff0c\u4f46\u4e0d\u9700\u8981\u8003\u8651 TMTO \u653b\u51fb\u7684\u60c5\u51b5\u3002"}),"\n",(0,e.jsx)(r.li,{children:"Argon2i\uff08\u6570\u636e\u72ec\u7acb\uff09\uff1a\u8fd9\u4e2a\u53d8\u4f53\u4f7f\u7528\u6570\u636e\u72ec\u7acb\u7684\u5185\u5b58\u8bbf\u95ee\u6a21\u5f0f\uff0c\u4f7f\u5176\u5bf9\u65f6\u95f4\u7a7a\u95f4\u6743\u8861\u653b\u51fb\u5177\u6709\u8f83\u597d\u7684\u62b5\u6297\u80fd\u529b\u3002\u4f46\u662f\uff0c\u76f8\u5bf9\u4e8e Argon2d\uff0c\u5b83\u7684\u6297\u4fa7\u4fe1\u9053\u653b\u51fb\u80fd\u529b\u8f83\u5f31\u3002Argon2i \u9002\u7528\u4e8e\u9700\u8981\u8003\u8651 TMTO \u653b\u51fb\u62b5\u6297\u80fd\u529b\uff0c\u4f46\u6297\u4fa7\u4fe1\u9053\u653b\u51fb\u80fd\u529b\u8981\u6c42\u8f83\u4f4e\u7684\u573a\u666f\u3002"}),"\n",(0,e.jsx)(r.li,{children:"Argon2id\uff08\u6df7\u5408\uff09\uff1a\u8fd9\u4e2a\u53d8\u4f53\u662f Argon2d \u548c Argon2i \u7684\u6df7\u5408\uff0c\u7ed3\u5408\u4e86\u5b83\u4eec\u7684\u4f18\u70b9\u3002\u5b83\u9996\u5148\u4f7f\u7528\u6570\u636e\u72ec\u7acb\u7684\u5185\u5b58\u8bbf\u95ee\u6a21\u5f0f\uff08\u7c7b\u4f3c\u4e8e Argon2i\uff09\uff0c\u7136\u540e\u5728\u540e\u7eed\u7684\u8fc7\u7a0b\u4e2d\u5207\u6362\u4e3a\u6570\u636e\u4f9d\u8d56\u7684\u5185\u5b58\u8bbf\u95ee\u6a21\u5f0f\uff08\u7c7b\u4f3c\u4e8e Argon2d\uff09\u3002\u8fd9\u79cd\u65b9\u6cd5\u65e2\u63d0\u4f9b\u4e86\u8f83\u5f3a\u7684\u6297\u4fa7\u4fe1\u9053\u653b\u51fb\u80fd\u529b\uff0c\u53c8\u5177\u6709\u8f83\u597d\u7684\u62b5\u6297\u65f6\u95f4\u7a7a\u95f4\u6743\u8861\u653b\u51fb\u80fd\u529b\u3002Argon2id \u662f\u4e00\u79cd\u901a\u7528\u7684\u5bc6\u7801\u54c8\u5e0c\u65b9\u6848\uff0c\u9002\u7528\u4e8e\u5927\u591a\u6570\u573a\u666f\u3002"}),"\n",(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.a,{href:"https://github.com/P-H-C/phc-string-format/blob/master/phc-sf-spec.md",children:"https://github.com/P-H-C/phc-string-format/blob/master/phc-sf-spec.md"}),"\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"PHC - Password Hashing Competition"}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(r.li,{children:(0,e.jsx)(r.a,{href:"https://argon2.online/",children:"https://argon2.online/"})}),"\n"]}),"\n",(0,e.jsx)(r.h2,{id:"library",children:"\u5e93"}),"\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsxs)(r.li,{children:["argon2\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsxs)(r.li,{children:[(0,e.jsx)(r.a,{href:"https://github.com/ranisalt/node-argon2",children:"ranisalt/node-argon2"}),"\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"npm argon2"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(r.li,{children:["bcrypt\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"npm - bcryptjs"}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(r.li,{children:"crypto-js"}),"\n",(0,e.jsx)(r.li,{children:"crypto-browserify"}),"\n",(0,e.jsx)(r.li,{children:"crypt -> scrypt"}),"\n",(0,e.jsxs)(r.li,{children:["SpringSecurity\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:(0,e.jsx)(r.a,{href:"https://docs.spring.io/spring-security/reference/features/authentication/password-storage.html",children:"https://docs.spring.io/spring-security/reference/features/authentication/password-storage.html"})}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(r.li,{children:(0,e.jsx)(r.a,{href:"https://w3c.github.io/webappsec-change-password-url/",children:"https://w3c.github.io/webappsec-change-password-url/"})}),"\n"]}),"\n",(0,e.jsx)(r.h2,{id:"\u5e38\u89c1\u670d\u52a1\u52a0\u5bc6\u7b97\u6cd5",children:"\u5e38\u89c1\u670d\u52a1\u52a0\u5bc6\u7b97\u6cd5"}),"\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:(0,e.jsx)(r.code,{children:"$algorithm$[cost]$[salt][hash]"})}),"\n"]}),"\n",(0,e.jsx)(r.h3,{id:"gitea",children:"Gitea"}),"\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:(0,e.jsx)(r.code,{children:"PASSWORD_HASH_ALGO=pbkdf2"})}),"\n",(0,e.jsx)(r.li,{children:"\u53ef\u9009 argon2, pbkdf2, pbkdf2_v1, pbkdf2_hi, scrypt, bcrypt"}),"\n"]}),"\n",(0,e.jsx)(r.p,{children:(0,e.jsx)(r.strong,{children:"\u53ef\u4ee5\u7ed9\u53c2\u6570"})}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{children:"argon2$<time>$<memory>$<threads>$<key-length>\nbcrypt$<cost>\npbkdf2$<iterations>$<key-length>\nscrypt$<n>$<r>$<p>$<key-length>\n"})}),"\n",(0,e.jsx)(r.p,{children:(0,e.jsx)(r.strong,{children:"\u9ed8\u8ba4\u4e3a"})}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{children:"argon2: argon2$2$65536$8$50\nbcrypt: bcrypt$10\npbkdf2: pbkdf2$50000$50\npbkdf2_v1: pbkdf2$10000$50\npbkdf2_v2: pbkdf2$50000$50\npbkdf2_hi: pbkdf2$320000$50\nscrypt: scrypt$65536$16$2$50\n"})}),"\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:(0,e.jsx)(r.a,{href:"https://docs.gitea.io/en-us/administration/config-cheat-sheet/",children:"https://docs.gitea.io/en-us/administration/config-cheat-sheet/"})}),"\n"]}),"\n",(0,e.jsx)(r.h3,{id:"openldap",children:"OpenLDAP"}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{children:"userPassword: {SSHA}DkMTwBl+a/3DQTxCYEApdUtNXGgdUac3\nuserPassword: {CRYPT}aUihad99hmev6\nuserPassword: {CRYPT}$1$czBJdDqS$TmkzUAb836oMxg/BmIwN.1\nuserPassword: {MD5}Xr4ilOzQ4PCOq3aQ0qbuaQ==\nuserPassword: {SMD5}4QWGWZpj9GCmfuqEvm8HtZhZS6E=\nuserPassword: {SMD5}g2/J/7D5EO6+oPdklp5p8YtNFk4=\nuserPassword: {SHA}5en6G6MezRroT3XKqkdPOmY/BfQ=\n\nuserPassword: {SASL}username@realm\n"})}),"\n",(0,e.jsx)(r.p,{children:(0,e.jsx)(r.strong,{children:"OpenLDAP \u5185\u7f6e"})}),"\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"MD5"}),"\n",(0,e.jsx)(r.li,{children:"SMD5 - MD5 + Salt"}),"\n",(0,e.jsx)(r.li,{children:"SHA - SHA-1"}),"\n",(0,e.jsx)(r.li,{children:"SSHA - SHA1 + Salt"}),"\n"]}),"\n",(0,e.jsx)(r.p,{children:(0,e.jsx)(r.strong,{children:"Pass-Through authentication"})}),"\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"CRYPT"}),"\n",(0,e.jsx)(r.li,{children:"SASL - Cyrus SASL"}),"\n"]}),"\n",(0,e.jsx)(r.hr,{}),"\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:(0,e.jsx)(r.a,{href:"https://www.openldap.org/doc/admin25/security.html",children:"https://www.openldap.org/doc/admin25/security.html"})}),"\n"]}),"\n",(0,e.jsx)(r.h3,{id:"apachedirectory-server",children:"ApacheDirectory Server"}),"\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"SHA, SSHA, SHA-{256,384,512}, SSHA-{256,384,512}, MD5, SMD5, crypt, PLAIN"}),"\n",(0,e.jsx)(r.li,{children:(0,e.jsx)(r.a,{href:"https://directory.apache.org/apacheds/advanced-ug/4.1.1.2-name-password-authn.html",children:"https://directory.apache.org/apacheds/advanced-ug/4.1.1.2-name-password-authn.html"})}),"\n"]}),"\n",(0,e.jsx)(r.h3,{id:"gitlab",children:"Gitlab"}),"\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"bcrypt - \u9ed8\u8ba4 - Stretching 10"}),"\n",(0,e.jsx)(r.li,{children:"PBKDF2 + SHA512 - 20,000"}),"\n"]}),"\n",(0,e.jsx)(r.hr,{}),"\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:(0,e.jsx)(r.a,{href:"https://docs.gitlab.com/ee/security/password_storage.html",children:"https://docs.gitlab.com/ee/security/password_storage.html"})}),"\n"]}),"\n",(0,e.jsx)(r.h2,{id:"key-stretching",children:"Key stretching"}),"\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:(0,e.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Key_stretching",children:"https://en.wikipedia.org/wiki/Key_stretching"})}),"\n"]}),"\n",(0,e.jsx)(r.h1,{id:"faq",children:"FAQ"}),"\n",(0,e.jsx)(r.h2,{id:"argon2-vs-bcrypt-vs-scrypt-vs-pkdf2",children:"argon2 vs bcrypt vs scrypt vs pkdf2"}),"\n",(0,e.jsx)(r.admonition,{type:"caution",children:(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"argon2 \u548c scrypt \u4f1a\u7528\u975e\u5e38\u591a\u7684\u5185\u5b58"}),"\n"]})}),"\n",(0,e.jsx)(r.p,{children:"\u5728\u9879\u76ee\u4e2d\u9009\u62e9\u5bc6\u7801\u54c8\u5e0c\u7b97\u6cd5\u65f6\uff0c\u4e3b\u8981\u8003\u8651\u4ee5\u4e0b\u56e0\u7d20\uff1a\u5b89\u5168\u6027\u3001\u6027\u80fd\u3001\u53ef\u7528\u6027\u548c\u793e\u533a\u652f\u6301\u3002\u4ee5\u4e0b\u662f\u5173\u4e8e Argon2\u3001bcrypt\u3001scrypt \u548c PBKDF2 \u7684\u7b80\u8981\u6bd4\u8f83\uff1a"}),"\n",(0,e.jsxs)(r.ol,{children:["\n",(0,e.jsxs)(r.li,{children:["\u5b89\u5168\u6027\uff1a\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"Argon2\uff1a\u76ee\u524d\u88ab\u8ba4\u4e3a\u662f\u6700\u5b89\u5168\u7684\u5bc6\u7801\u54c8\u5e0c\u7b97\u6cd5\u3002\u5b83\u8d62\u5f97\u4e86\u5bc6\u7801\u54c8\u5e0c\u7ade\u8d5b\uff08PHC\uff09\uff0c\u5e76\u4e14\u5177\u6709\u5f88\u597d\u7684\u5185\u5b58\u5bc6\u96c6\u5ea6\uff0c\u62b5\u6297\u4fa7\u4fe1\u9053\u653b\u51fb\u548c\u65f6\u95f4-\u7a7a\u95f4\u6743\u8861\u653b\u51fb\u3002"}),"\n",(0,e.jsx)(r.li,{children:"bcrypt\uff1a\u4e5f\u662f\u4e00\u79cd\u5b89\u5168\u7684\u5bc6\u7801\u54c8\u5e0c\u7b97\u6cd5\uff0c\u4f46\u76f8\u8f83\u4e8e Argon2\uff0c\u5b83\u7684\u5185\u5b58\u5bc6\u96c6\u5ea6\u8f83\u4f4e\uff0c\u62b5\u6297\u4fa7\u4fe1\u9053\u653b\u51fb\u548c\u65f6\u95f4-\u7a7a\u95f4\u6743\u8861\u653b\u51fb\u7684\u80fd\u529b\u8f83\u5f31\u3002"}),"\n",(0,e.jsx)(r.li,{children:"scrypt\uff1a\u8bbe\u8ba1\u4e3a\u5185\u5b58\u5bc6\u96c6\u578b\u7b97\u6cd5\uff0c\u4ee5\u62b5\u6297\u5927\u89c4\u6a21\u5b9a\u5236\u786c\u4ef6\u653b\u51fb\u3002\u5b83\u7684\u5b89\u5168\u6027\u4f18\u4e8e bcrypt\uff0c\u4f46\u4ecd\u7136\u4f4e\u4e8e Argon2\u3002"}),"\n",(0,e.jsx)(r.li,{children:"PBKDF2\uff1a\u76f8\u5bf9\u4e8e\u5176\u4ed6\u4e09\u79cd\u7b97\u6cd5\uff0cPBKDF2 \u7684\u5b89\u5168\u6027\u6700\u4f4e\uff0c\u56e0\u4e3a\u5b83\u6ca1\u6709\u9488\u5bf9 GPU \u6216 ASIC \u653b\u51fb\u7684\u5185\u5b58\u5bc6\u96c6\u7279\u6027\u3002"}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(r.li,{children:["\u6027\u80fd\uff1a\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"Argon2\u3001bcrypt \u548c scrypt \u7684\u6027\u80fd\u53ef\u4ee5\u901a\u8fc7\u8c03\u6574\u53c2\u6570\uff08\u5982\u5185\u5b58\u3001\u8fed\u4ee3\u6b21\u6570\u7b49\uff09\u6765\u63a7\u5236\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u9879\u76ee\u7684\u9700\u6c42\u548c\u786c\u4ef6\u8d44\u6e90\u8c03\u6574\u8fd9\u4e9b\u53c2\u6570\u3002"}),"\n",(0,e.jsx)(r.li,{children:"PBKDF2 \u6027\u80fd\u4e3b\u8981\u53d6\u51b3\u4e8e\u8fed\u4ee3\u6b21\u6570\uff0c\u4f46\u4e0e\u5176\u4ed6\u7b97\u6cd5\u76f8\u6bd4\uff0c\u5b83\u5728\u73b0\u4ee3\u786c\u4ef6\u4e0a\u7684\u6027\u80fd\u76f8\u5bf9\u8f83\u5dee\u3002"}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(r.li,{children:["\u53ef\u7528\u6027\uff1a\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"\u5927\u591a\u6570\u7f16\u7a0b\u8bed\u8a00\u548c\u6846\u67b6\u90fd\u652f\u6301\u8fd9\u56db\u79cd\u54c8\u5e0c\u7b97\u6cd5\uff0c\u4f46\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0cArgon2 \u7684\u652f\u6301\u53ef\u80fd\u4e0d\u5982\u5176\u4ed6\u7b97\u6cd5\u5e7f\u6cdb\u3002\u5728\u9009\u62e9\u7b97\u6cd5\u65f6\uff0c\u9700\u8981\u786e\u4fdd\u6240\u9009\u7b97\u6cd5\u5728\u9879\u76ee\u4f7f\u7528\u7684\u6280\u672f\u6808\u4e2d\u53ef\u7528\u3002"}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(r.li,{children:["\u793e\u533a\u652f\u6301\uff1a\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"Argon2\u3001bcrypt \u548c scrypt \u90fd\u62e5\u6709\u76f8\u5bf9\u5e7f\u6cdb\u7684\u793e\u533a\u652f\u6301\uff0c\u800c\u4e14\u8fd9\u4e9b\u7b97\u6cd5\u5df2\u7ecf\u5f97\u5230\u4e86\u5b89\u5168\u7814\u7a76\u4eba\u5458\u7684\u5ba1\u67e5\u548c\u63a8\u8350\u3002PBKDF2 \u4e5f\u5f97\u5230\u4e86\u4e00\u5b9a\u7684\u652f\u6301\uff0c\u4f46\u76f8\u5bf9\u8f83\u5f31\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(r.p,{children:"\u7efc\u5408\u8003\u8651\u4e0a\u8ff0\u56e0\u7d20\uff0cArgon2\uff08\u5c24\u5176\u662f Argon2id \u53d8\u4f53\uff09\u901a\u5e38\u662f\u9996\u9009\u7b97\u6cd5\uff0c\u56e0\u4e3a\u5b83\u5728\u5b89\u5168\u6027\u548c\u6027\u80fd\u65b9\u9762\u8868\u73b0\u6700\u4f73\u3002\u5982\u679c\u9879\u76ee\u4e2d Argon2 \u7684\u652f\u6301\u6709\u9650\uff0c\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 bcrypt \u6216 scrypt\u3002PBKDF2 \u5e94\u8be5\u4f5c\u4e3a\u6700\u540e\u7684\u9009\u62e9\uff0c\u4ec5\u5728\u5176\u4ed6\u9009\u9879\u4e0d\u53ef\u7528\u65f6\u4f7f\u7528\u3002"})]})}function o(n={}){const{wrapper:r}={...(0,i.M)(),...n.components};return r?(0,e.jsx)(r,{...n,children:(0,e.jsx)(a,{...n})}):a(n)}},38088:(n,r,s)=>{var e=s(96651),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(n,r,s){var e,t={},h=null,a=null;for(e in void 0!==s&&(h=""+s),void 0!==r.key&&(h=""+r.key),void 0!==r.ref&&(a=r.ref),r)l.call(r,e)&&!c.hasOwnProperty(e)&&(t[e]=r[e]);if(n&&n.defaultProps)for(e in r=n.defaultProps)void 0===t[e]&&(t[e]=r[e]);return{$$typeof:i,type:n,key:h,ref:a,props:t,_owner:d.current}}r.Fragment=t,r.jsx=h,r.jsxs=h},2488:(n,r,s)=>{n.exports=s(38088)},62780:(n,r,s)=>{s.d(r,{I:()=>d,M:()=>l});var e=s(96651);const i={},t=e.createContext(i);function l(n){const r=e.useContext(t);return e.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function d(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),e.createElement(t.Provider,{value:r},n.children)}}}]);