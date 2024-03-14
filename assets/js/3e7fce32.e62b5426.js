/*! For license information please see 3e7fce32.e62b5426.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[58760],{82688:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=a(2488),i=a(62780);const r={title:"Flyway"},s="Flyway",o={id:"java/lib/flyway",title:"Flyway",description:"- \u4f7f\u7528 SQL",source:"@site/../notes/java/lib/flyway.md",sourceDirName:"java/lib",slug:"/java/lib/flyway",permalink:"/notes/java/lib/flyway",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/java/lib/flyway.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1678678348,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{title:"Flyway"},sidebar:"docs",previous:{title:"feign",permalink:"/notes/java/lib/feign"},next:{title:"Guava",permalink:"/notes/java/lib/guava"}},l={},d=[{value:"flyway --help",id:"flyway---help",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"flyway",children:"Flyway"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4f7f\u7528 SQL"}),"\n",(0,t.jsx)(n.li,{children:"\u7b26\u5408\u4e00\u5b9a\u7684\u76ee\u5f55\u7ed3\u6784\u6807\u51c6\u5373\u53ef"}),"\n",(0,t.jsx)(n.li,{children:"\u57fa\u4e8e Java, \u6613\u4e8e\u6dfb\u52a0\u81ea\u5b9a\u4e49\u914d\u7f6e"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/howto-database-initialization.html",children:"SpringBoot - Database Initialization"})}),"\n",(0,t.jsx)(n.li,{children:"undo \u53ea\u6709\u4e13\u4e1a\u7248\u624d\u6709"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# macOS \u5b89\u88c5\nbrew install flyway\n\n# \u8fc1\u79fb\nflyway -configFiles=path/to/myAlternativeConfig.conf migrate\n# \u53ef\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\nexport FLYWAY_CONFIG_FILES=path/to/myAlternativeConfig.conf,other.conf\n# \u663e\u793a\u8fc1\u79fb\u4fe1\u606f\nflyway info\n# baselineVersion=1\t\u57fa\u7840\u7248\u672c\u53f7\n# baselineDescription=<< Flyway Baseline >>\t\u63cf\u8ff0\u4fe1\u606f\n# \u57fa\u4e8e\u73b0\u5728\u6570\u636e\u5e93\u505a Baseline\nflyway baseline\n\n# target \u76ee\u6807\u7248\u672c, \u9ed8\u8ba4\u4e3a\u6700\u65b0\nflyway migrate\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"# \u793a\u4f8b\u914d\u7f6e\nflyway.driver=org.postgresql.Driver\nflyway.url=jdbc:postgresql://localhost:5432/flywaydemo\nflyway.user=flywaydemo\nflyway.password=flywaydemo\nflyway.locations=filesystem:src/main/resources/flyway/migrations\nflyway.sqlMigrationPrefix=V\nflyway.sqlMigrationSeparator=__\nflyway.sqlMigrationSuffix=.sql\nflyway.validateOnMigrate=true\n"})}),"\n",(0,t.jsx)(n.h2,{id:"flyway---help",children:"flyway --help"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Flyway Community Edition 5.0.2 by Boxfuse\n\nUsage\n=====\n\nflyway [options] command\n\nBy default, the configuration will be read from conf/flyway.conf.\nOptions passed from the command-line override the configuration.\n\nCommands\n--------\nmigrate  : Migrates the database\nclean    : Drops all objects in the configured schemas\ninfo     : Prints the information about applied, current and pending migrations\nvalidate : Validates the applied migrations against the ones on the classpath\nundo     : Undoes the most recently applied versioned migration\nbaseline : Baselines an existing database at the baselineVersion\nrepair   : Repairs the schema history table\n\nOptions (Format: -key=value)\n-------\ndriver                       : Fully qualified classname of the JDBC driver\nurl                          : Jdbc url to use to connect to the database\nuser                         : User to use to connect to the database\npassword                     : Password to use to connect to the database\nschemas                      : Comma-separated list of the schemas managed by Flyway\ntable                        : Name of Flyway\'s schema history table\nlocations                    : Classpath locations to scan recursively for migrations\nresolvers                    : Comma-separated list of custom MigrationResolvers\nskipDefaultResolvers         : Skips default resolvers (jdbc, sql and Spring-jdbc)\nsqlMigrationPrefix           : File name prefix for versioned SQL migrations\nundoSqlMigrationPrefix       : File name prefix for undo SQL migrations\nrepeatableSqlMigrationPrefix : File name prefix for repeatable SQL migrations\nsqlMigrationSeparator        : File name separator for sql migrations\nsqlMigrationSuffixes         : Comma-separated list of file name suffixes for sql migrations\nmixed                        : Allow mixing transactional and non-transactional statements\nencoding                     : Encoding of sql migrations\nplaceholderReplacement       : Whether placeholders should be replaced\nplaceholders                 : Placeholders to replace in sql migrations\nplaceholderPrefix            : Prefix of every placeholder\nplaceholderSuffix            : Suffix of every placeholder\ninstalledBy                  : Username that will be recorded in the schema history table\ntarget                       : Target version up to which Flyway should use migrations\noutOfOrder                   : Allows migrations to be run "out of order"\ncallbacks                    : Comma-separated list of FlywayCallback classes\nskipDefaultCallbacks         : Skips default callbacks (sql)\nvalidateOnMigrate            : Validate when running migrate\nignoreMissingMigrations      : Allow missing migrations when validating\nignoreFutureMigrations       : Allow future migrations when validating\ncleanOnValidationError       : Automatically clean on a validation error\ncleanDisabled                : Whether to disable clean\nbaselineVersion              : Version to tag schema with when executing baseline\nbaselineDescription          : Description to tag schema with when executing baseline\nbaselineOnMigrate            : Baseline on migrate against uninitialized non-empty schema\nconfigFiles                  : Comma-separated list of config files to use\nconfigFileEncoding           : Encoding to use when loading the config files\njarDirs                      : Comma-separated list of dirs for Jdbc drivers & Java migrations\ndryRunOutput                 : File where to output the SQL statements of a migration dry run\nerrorHandlers                : Comma-separated list of handlers for errors and warnings\n\nFlags\n-----\n-X : Print debug output\n-q : Suppress all output, except for errors and warnings\n-n : Suppress prompting for a user and password\n-v : Print the Flyway version and exit\n-? : Print this usage info and exit\n\nExample\n-------\nflyway -user=myuser -password=s3cr3t -url=jdbc:h2:mem -placeholders.abc=def migrate\n\nMore info at https://flywaydb.org/documentation/commandline\n'})})]})}function f(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},38088:(e,n,a)=>{var t=a(96651),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,a){var t,r={},d=null,c=null;for(t in void 0!==a&&(d=""+a),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,t)&&!l.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:i,type:e,key:d,ref:c,props:r,_owner:o.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},2488:(e,n,a)=>{e.exports=a(38088)},62780:(e,n,a)=>{a.d(n,{I:()=>o,M:()=>s});var t=a(96651);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);