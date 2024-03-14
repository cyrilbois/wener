/*! For license information please see 5d88455f.a0f80f06.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[52732],{42960:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(2488),r=t(62780);const a={title:"nats"},i="nats",o={id:"queue/nats/nats-cli",title:"nats",description:"- nats-io/natscli",source:"@site/../notes/queue/nats/nats-cli.md",sourceDirName:"queue/nats",slug:"/queue/nats/cli",permalink:"/notes/queue/nats/cli",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/queue/nats/nats-cli.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1709694572,formattedLastUpdatedAt:"Mar 6, 2024",frontMatter:{title:"nats"},sidebar:"docs",previous:{title:"Nats Awesome",permalink:"/notes/queue/nats/awesome"},next:{title:"Client",permalink:"/notes/queue/nats/client"}},l={},c=[{value:"help",id:"help",level:2}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"nats",children:"nats"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/nats-io/natscli",children:"nats-io/natscli"})}),"\n",(0,s.jsxs)(n.li,{children:["~/.config/nats/\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"context.txt - \u5f53\u524d\u4e0a\u4e0b\u6587"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# \u4ece\u6e90\u7801\u5b89\u88c5\ngo install github.com/nats-io/natscli/nats@latest\n\n# macOS\nbrew tap nats-io/nats-tools\nbrew install nats-io/nats-tools/nats\n\n# cheatsheet\nnats cheat --sections\nnats cheat\n\n# \u4e0a\u4e0b\u6587\u7ba1\u7406\nnats context add local --description "Localhost"\nnats context add nats --server demo.nats.io:4222 --description "NATS Demo" --select\n\nnats context ls           # \u6240\u6709\u4e0a\u4e0b\u6587\nnats context select local # \u5207\u6362\u4e0a\u4e0b\u6587 - \u4e5f\u53ef\u4ee5 --context=CONTEXT\n\nnats account info         # \u5f53\u524d\u8d26\u53f7\u4fe1\u606f\nnats rtt                  # \u4e0e\u670d\u52a1\u5668 rt - \u76f8\u5f53\u4e8e PING \u4f5c\u7528\n\nnats event --context system\nnats event --short\n\n# SYS \u8d26\u53f7\u64cd\u4f5c\nnats server ping\nnats server list\nnats server info nats-0\n# nats event - JSON Schema\n# https://app.quicktype.io/ \u751f\u6210\u5176\u4ed6\u8bed\u8a00\nnats schema ls\n\n\nnats -s wss://demo.nats.io:8443 sub \'>\'\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="context/local.json"',children:'{\n  "description": "Localhost",\n  "url": "nats://127.0.0.1:4222",\n  "user": "",\n  "password": "",\n  "creds": "",\n  "nkey": "",\n  "cert": "",\n  "key": "",\n  "ca": "",\n  "nsc": "",\n  "jetstream_api_prefix": "",\n  "jetstream_event_prefix": ""\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"publish"}),"\n",(0,s.jsx)(n.li,{children:"request"}),"\n",(0,s.jsx)(n.li,{children:"subscribe"}),"\n",(0,s.jsxs)(n.li,{children:["stream - str\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"add|edit|info|ls|rm|purge|copy"}),"\n",(0,s.jsx)(n.li,{children:"report"}),"\n",(0,s.jsx)(n.li,{children:"find"}),"\n",(0,s.jsx)(n.li,{children:"seal"}),"\n",(0,s.jsx)(n.li,{children:"get|rmm|view|"}),"\n",(0,s.jsx)(n.li,{children:"backup|restore"}),"\n",(0,s.jsx)(n.li,{children:"cluster step-down|peer-remove"}),"\n",(0,s.jsx)(n.li,{children:"template create|info|ls|rm"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["consumer\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"add|copy|edit|ls|rm"}),"\n",(0,s.jsx)(n.li,{children:"info"}),"\n",(0,s.jsx)(n.li,{children:"next|sub"}),"\n",(0,s.jsx)(n.li,{children:"report"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["context\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"save|edit|ls|rm|select|info|validate"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["errors\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ls|lookup|edit|validate"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"events"}),"\n",(0,s.jsxs)(n.li,{children:["governor\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"add|view|reset|evict|rm"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["kv\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"add|put|get|create|update|del|purge|ls"}),"\n",(0,s.jsx)(n.li,{children:"history|status"}),"\n",(0,s.jsx)(n.li,{children:"watch"}),"\n",(0,s.jsx)(n.li,{children:"compact"}),"\n",(0,s.jsxs)(n.li,{children:["upgrade\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"upgrade early tech-preview bucket to current format"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["object\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"add|put|del|get|ls|seal|watch"}),"\n",(0,s.jsx)(n.li,{children:"info"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["schema\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"info|validate"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["server\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"info|ls|ping"}),"\n",(0,s.jsxs)(n.li,{children:["report\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"connections|accounts|jetstream"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["request\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"subscriptions|variables|connections|routes|gateways|leafnodes|accounts|jetstream"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["raft\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"step-down|peer-remove"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"passwd"}),"\n",(0,s.jsxs)(n.li,{children:["check\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"connection|stream|meta|jetstream|server"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["account\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"info"}),"\n",(0,s.jsx)(n.li,{children:"report connections"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"backup|restore - \u5907\u4efd/\u6062\u590d JetStream"}),"\n",(0,s.jsx)(n.li,{children:"bench"}),"\n",(0,s.jsx)(n.li,{children:"latency"}),"\n",(0,s.jsx)(n.li,{children:"cheat"}),"\n",(0,s.jsx)(n.li,{children:"rtt"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"help",children:"help"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'usage: nats [<flags>] <command> [<args> ...]\n\nNATS Utility\n\nNATS Server and JetStream administration.\n\nSee \'nats cheat\' for a quick cheatsheet of commands\n\n\n\nFlags:\n  -h, --help                    Show context-sensitive help (also try\n                                --help-long and --help-man).\n      --version                 Show application version.\n  -s, --server=NATS_URL         NATS server urls\n      --user=NATS_USER          Username or Token\n      --password=NATS_PASSWORD  Password\n      --creds=NATS_CREDS        User credentials\n      --nkey=NATS_NKEY          User NKEY\n      --tlscert=NATS_CERT       TLS public certificate\n      --tlskey=NATS_KEY         TLS private key\n      --tlsca=NATS_CA           TLS certificate authority chain\n      --timeout=NATS_TIMEOUT    Time to wait on responses from NATS\n      --js-api-prefix=PREFIX    Subject prefix for access to JetStream API\n      --js-event-prefix=PREFIX  Subject prefix for access to JetStream\n                                Advisories\n      --js-domain=DOMAIN        JetStream domain to access\n      --inbox-prefix=PREFIX     Custom inbox prefix to use for inboxes\n      --context=CONTEXT         Configuration context\n      --trace                   Trace API interactions\n\nCommands:\n  help [<command>...]\n    Show help.\n\n  account info\n    Account information\n\n  account report connections [<flags>]\n    Report on connections\n\n  backup [<flags>] <output>\n    JetStream configuration backup utility\n\n  bench [<flags>] <subject>\n    Benchmark utility\n\n  cheat [<flags>] [<section>]\n    Cheatsheets for the nats CLI\n\n    These cheatsheets are in a format compatible with the popular\n    https://github.com/cheat/cheat command.\n\n  consumer add [<flags>] [<stream>] [<consumer>]\n    Creates a new Consumer\n\n  consumer copy [<flags>] <stream> <source> <destination>\n    Creates a new Consumer based on the configuration of another\n\n  consumer edit [<flags>] [<stream>] [<consumer>]\n    Edits the configuration of a consumer\n\n  consumer info [<flags>] [<stream>] [<consumer>]\n    Consumer information\n\n  consumer ls [<flags>] [<stream>]\n    List known Consumers\n\n  consumer next [<flags>] <stream> <consumer>\n    Retrieves messages from Pull Consumers without interactive prompts\n\n  consumer rm [<flags>] [<stream>] [<consumer>]\n    Removes a Consumer\n\n  consumer sub [<flags>] [<stream>] [<consumer>]\n    Retrieves messages from Consumers\n\n  consumer cluster step-down [<stream>] [<consumer>]\n    Force a new leader election by standing down the current leader\n\n  consumer report [<flags>] [<stream>]\n    Reports on Consmer statistics\n\n  context save [<flags>] <name>\n    Update or create a context\n\n  context edit <name>\n    Edit a context in your EDITOR\n\n  context ls\n    List known contexts\n\n  context rm [<flags>] <name>\n    Remove a context\n\n  context select [<name>]\n    Select the default context\n\n  context info [<flags>] [<name>]\n    Display information on the current or named context\n\n  context validate [<flags>] [<name>]\n    Validate one or all contexts\n\n  errors ls [<flags>] [<match>] [<sort>]\n    List all known error codes\n\n  errors lookup <code>\n    Looks up an error by it\'s code\n\n  errors edit <file> [<code>]\n    Edit or add a error code using your EDITOR\n\n  errors validate [<file>]\n    Validates the validity of the errors definition\n\n  events [<flags>]\n    Show Advisories and Events\n\n  governor add [<flags>] <name> <limit> <age>\n    Adds a new Governor to JetStream\n\n  governor view <name>\n    Views the status of the Governor\n\n  governor reset [<flags>] <name>\n    Resets the Governor by removing all entries\n\n  governor evict [<flags>] <name> [<id>]\n    Removes a entry from the Governor\n\n  governor rm [<flags>] <name>\n    Removes a Governor\n\n  governor run [<flags>] <name> <identity> <command>\n    Runs a command limited by the Governor\n\n  kv add [<flags>] <bucket>\n    Adds a new KV Store Bucket\n\n  kv put <bucket> <key> [<value>]\n    Puts a value into a key\n\n  kv get [<flags>] <bucket> <key>\n    Gets a value for a key\n\n  kv create <bucket> <key> [<value>]\n    Puts a value into a key only if the key is new or it\'s last operation was a\n    delete\n\n  kv update <bucket> <key> [<value>] [<revision>]\n    Updates a key with a new value if the previous value matches the given\n    revision\n\n  kv del [<flags>] <bucket> [<key>]\n    Deletes a key or the entire bucket\n\n  kv purge [<flags>] <bucket> <key>\n    Deletes a key from the bucket, clearing history before creating a delete\n    marker\n\n  kv history <bucket> <key>\n    Shows the full history for a key\n\n  kv status <bucket>\n    View the status of a KV store\n\n  kv watch <bucket> [<key>]\n    Watch the bucket or a specific key for updated\n\n  kv ls [<flags>]\n    List available Buckets\n\n  kv compact [<flags>] <bucket>\n    Removes all historic values from the store where the last value is a delete\n\n  kv upgrade <bucket>\n    Upgrades a early tech-preview bucket to current format\n\n  latency --server-b=SERVER-B [<flags>]\n    Perform latency tests between two NATS servers\n\n  object add [<flags>] <bucket>\n    Adds a new Object Store Bucket\n\n  object put [<flags>] <bucket> [<file>]\n    Puts a file into the store\n\n  object del [<flags>] <bucket> [<file>]\n    Deletes a file or bucket from the store\n\n  object get [<flags>] <bucket> <file>\n    Retrieves a file from the store\n\n  object info <bucket> [<file>]\n    Get information about a bucket or object\n\n  object ls [<flags>] [<bucket>]\n    List buckets or contents of a specific bucket\n\n  object seal [<flags>] <bucket>\n    Seals a bucket preventing further updates\n\n  object watch <bucket>\n    Watch a bucket for changes\n\n  publish [<flags>] <subject> [<body>]\n    Generic data publish utility\n\n    Body and Header values of the messages may use Go templates to create unique\n    messages.\n\n      nats pub test --count 10 "Message {{Count}} @ {{Time}}"\n\n    Multiple messages with random strings between 10 and 100 long:\n\n      nats pub test --count 10 "Message {{Count}}: {{ Random 10 100 }}"\n\n    Available template functions are:\n\n      Count            the message number\n      TimeStamp        RFC3339 format current time\n      Unix             seconds since 1970 in UTC\n      UnixNano         nano seconds since 1970 in UTC\n      Time             the current time\n      ID               an unique ID\n      Random(min, max) random string at least min long, at most max\n\n  request [<flags>] <subject> [<body>]\n    Generic request-reply request utility\n\n    Body and Header values of the messages may use Go templates to create unique\n    messages.\n\n      nats request test --count 10 "Message {{Count}} @ {{Time}}"\n\n    Multiple messages with random strings between 10 and 100 long:\n\n      nats request test --count 10 "Message {{Count}}: {{ Random 10 100 }}"\n\n    Available template functions are:\n\n      Count            the message number\n      TimeStamp        RFC3339 format current time\n      Unix             seconds since 1970 in UTC\n      UnixNano         nano seconds since 1970 in UTC\n      Time             the current time\n      ID               an unique ID\n      Random(min, max) random string at least min long, at most max\n\n  reply [<flags>] <subject> [<body>]\n    Generic service reply utility\n\n    The "command" supports extracting some information from the subject the\n    request came in on.\n\n    When the subject being listened on is "weather.>" a request on\n    "weather.london" can extract the "london" part and use it in the command\n    string:\n\n      nats reply \'weather.>\' --command "curl -s wttr.in/{{1}}?format=3"\n\n    This will request the weather for london when invoked as:\n\n      nats request weather.london \'\'\n\n    The body and Header values of the messages may use Go templates to create\n    unique messages.\n\n      nats reply test "Message {{Count}} @ {{Time}}"\n\n    Multiple messages with random strings between 10 and 100 long:\n\n      nats pub test --count 10 "Message {{Count}}: {{ Random 10 100 }}"\n\n    Available template functions are:\n\n      Count            the message number\n      TimeStamp        RFC3339 format current time\n      Unix             seconds since 1970 in UTC\n      UnixNano         nano seconds since 1970 in UTC\n      Time             the current time\n      ID               an unique ID\n      Random(min, max) random string at least min long, at most max\n\n  restore [<flags>] [<directory>]\n    Restores a backup of JetStream configuration\n\n  rtt [<flags>] [<iterations>]\n    Compute round-trip time to NATS server\n\n  schema search [<flags>] [<pattern>]\n    Search schemas using a pattern\n\n  schema info [<flags>] <schema>\n    Display schema contents\n\n  schema validate [<flags>] <schema> <file>\n    Validates a JSON file against a schema\n\n  server info [<server>]\n    Show information about a single server\n\n  server ls [<flags>] [<expect>]\n    List known servers\n\n  server ping [<flags>] [<expect>]\n    Ping all servers\n\n  server report connections [<flags>] [<limit>]\n    Report on connections\n\n  server report accounts [<flags>] [<account>] [<limit>]\n    Report on account activity\n\n  server report jetstream [<flags>] [<limit>]\n    Report on JetStream activity\n\n  server request subscriptions [<flags>] [<wait>]\n    Show subscription information\n\n  server request variables [<wait>]\n    Show runtime variables\n\n  server request connections [<flags>] [<wait>]\n    Show connection details\n\n  server request routes [<flags>] [<wait>]\n    Show route details\n\n  server request gateways [<flags>] [<wait>] [<filter-name>]\n    Show gateway details\n\n  server request leafnodes [<flags>] [<wait>]\n    Show leafnode details\n\n  server request accounts [<flags>] [<wait>]\n    Show account details\n\n  server request jetstream [<flags>] [<wait>]\n    Show JetStream details\n\n  server raft step-down [<flags>]\n    Force a new leader election by standing down the current meta leader\n\n  server raft peer-remove [<flags>] [<name>]\n    Removes a server from a JetStream cluster\n\n  server passwd [<flags>]\n    Creates encrypted passwords for use in NATS Server\n\n  server check connection* [<flags>]\n    Checks basic server connection\n\n  server check stream --stream=STREAM --peer-expect=SERVERS [<flags>]\n    Checks the health of mirrored streams, streams with sources or clustered\n    streams\n\n  server check meta --expect=SERVERS --lag-critical=OPS --seen-critical=DURATION\n    Check JetStream cluster state\n\n  server check jetstream [<flags>]\n    Check JetStream account state\n\n  server check server --name=NAME [<flags>]\n    Checks a NATS Server health\n\n  stream add [<flags>] [<stream>]\n    Create a new Stream\n\n  stream edit [<flags>] [<stream>]\n    Edits an existing stream\n\n  stream info [<flags>] [<stream>]\n    Stream information\n\n  stream ls [<flags>]\n    List all known Streams\n\n  stream find [<flags>]\n    Finds streams matching certain criteria\n\n  stream rm [<flags>] [<stream>]\n    Removes a Stream\n\n  stream purge [<flags>] [<stream>]\n    Purge a Stream without deleting it\n\n  stream copy [<flags>] <source> <destination>\n    Creates a new Stream based on the configuration of another\n\n  stream get [<flags>] [<stream>] [<id>]\n    Retrieves a specific message from a Stream\n\n  stream rmm [<flags>] [<stream>] [<id>]\n    Securely removes an individual message from a Stream\n\n  stream view [<flags>] [<stream>] [<size>]\n    View messages in a stream\n\n  stream report [<flags>]\n    Reports on Stream statistics\n\n  stream backup [<flags>] <stream> <target>\n    Creates a backup of a Stream over the NATS network\n\n  stream restore [<flags>] <file>\n    Restore a Stream over the NATS network\n\n  stream seal [<flags>] <stream>\n    Seals a stream preventing further updates\n\n  stream cluster step-down [<stream>]\n    Force a new leader election by standing down the current leader\n\n  stream cluster peer-remove [<stream>] [<peer>]\n    Removes a peer from the Stream cluster\n\n  stream template create [<flags>] [<stream>]\n    Creates a new Stream Template\n\n  stream template info [<flags>] [<template>]\n    Stream Template information\n\n  stream template ls [<flags>]\n    List all known Stream Templates\n\n  stream template rm [<flags>] [<template>]\n    Removes a Stream Template\n\n  subscribe [<flags>] [<subject>]\n    Generic subscription client\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},38088:(e,n,t)=>{var s=t(96651),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,a={},c=null,m=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(m=n.ref),n)i.call(n,s)&&!l.hasOwnProperty(s)&&(a[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===a[s]&&(a[s]=n[s]);return{$$typeof:r,type:e,key:c,ref:m,props:a,_owner:o.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>i});var s=t(96651);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);