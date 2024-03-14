/*! For license information please see b887d2eb.7869c3de.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[67874],{85068:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=s(2488),r=s(62780);const i={title:"Kubesphere"},l="Kubesphere",o={id:"devops/kubernetes/platform/kubesphere",title:"Kubesphere",description:"- \u662f\u4ec0\u4e48",source:"@site/../notes/devops/kubernetes/platform/kubesphere.md",sourceDirName:"devops/kubernetes/platform",slug:"/devops/kubernetes/platform/kubesphere",permalink:"/notes/devops/kubernetes/platform/kubesphere",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/platform/kubesphere.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1627556317,formattedLastUpdatedAt:"Jul 29, 2021",frontMatter:{title:"Kubesphere"},sidebar:"docs",previous:{title:"kubeless",permalink:"/notes/devops/kubernetes/platform/kubeless"},next:{title:"kyma",permalink:"/notes/devops/kubernetes/platform/kyma"}},a={},d=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u5378\u8f7d",id:"\u5378\u8f7d",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"kubesphere",children:"Kubesphere"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u662f\u4ec0\u4e48\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u56fd\u4ea7\u9752\u4e91 \u5f00\u6e90\u7684 kubesphere \u7ba1\u7406\u5e73\u53f0"}),"\n",(0,t.jsxs)(n.li,{children:["vs Rancher\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"UI \u597d\u770b"}),"\n",(0,t.jsx)(n.li,{children:"\u66f4\u504f\u5411\u5e94\u7528\u5f00\u53d1"}),"\n",(0,t.jsx)(n.li,{children:"\u6743\u9650\u66f4\u7ec6"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://kubesphere.io",children:"kubesphere.io"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://kubesphere.com.cn",children:"kubesphere.com.cn"})," - \u4e2d\u6587"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"\u5b9e\u73b0 mysql+redis+minio+openldap+redis+es"}),"\n",(0,t.jsx)(n.li,{children:"\u9ed8\u8ba4 NodePort 30880 - admin/P@88w0rd"}),"\n",(0,t.jsx)(n.li,{children:"\u5168\u5957\u5b89\u88c5\u4e0b\u6765\u81f3\u5c11 16G+ - \u56e0\u6b64\u670d\u52a1\u5668\u81f3\u5c11\u9700\u8981 48G/64G"}),"\n",(0,t.jsxs)(n.li,{children:["kubesphere-system\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5b89\u88c5 installer"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"kubesphere-monitoring-system"}),"\n",(0,t.jsx)(n.li,{children:"kubesphere-controls-system"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/kubesphere/ks-installer",children:"kubesphere/ks-installer"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5b89\u88c5 Kubesphere \u7684 Operator"}),"\n",(0,t.jsx)(n.li,{children:"\u5b89\u88c5\u4f7f\u7528 Ansible"}),"\n"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Integration"}),(0,t.jsx)(n.th,{children:"CPU"}),(0,t.jsx)(n.th,{children:"Memory"}),(0,t.jsx)(n.th,{children:"Impl"}),(0,t.jsx)(n.th,{children:"Desc"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"alerting"}),(0,t.jsx)(n.td,{children:"0.3 Core"}),(0,t.jsx)(n.td,{children:"300 MiB"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"auditing"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"\u5ba1\u8ba1\u65e5\u5fd7 - \u4f9d\u8d56 ES"}),(0,t.jsx)(n.td,{children:"kubesphere-logging-system"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"devops"}),(0,t.jsx)(n.td,{children:"0.47 Core"}),(0,t.jsx)(n.td,{children:"8.6 G"}),(0,t.jsx)(n.td,{children:"CI/CD Jinkins"}),(0,t.jsx)(n.td,{children:"kubesphere-devops-system"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"events"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"kubesphere-logging-system"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"logging"}),(0,t.jsx)(n.td,{children:"57 m"}),(0,t.jsx)(n.td,{children:"2.76 G"}),(0,t.jsx)(n.td,{children:"Elasticsearch, fluentbit"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"metrics_server"}),(0,t.jsx)(n.td,{children:"56 m"}),(0,t.jsx)(n.td,{children:"44.35 MiB"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"HPA - Horizontal Pod Autoscaler"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"multicluster"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"\u591a\u96c6\u7fa4\u7ba1\u7406"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"networkpolicy"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"\u96c6\u7fa4\u5185\u7f51\u7edc\u9694\u79bb"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"notification"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Email, WeChat Work, Slack"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"monitoring"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Request 400Mi"}),(0,t.jsx)(n.td,{children:"Prometheus"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"openpitrix"}),(0,t.jsx)(n.td,{children:"2 Core"}),(0,t.jsx)(n.td,{children:"3.6 G"}),(0,t.jsx)(n.td,{children:"openpitrix"}),(0,t.jsx)(n.td,{children:"HELM/\u5e94\u7528\u5546\u5e97"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"servicemesh"}),(0,t.jsx)(n.td,{children:"0.3 Core"}),(0,t.jsx)(n.td,{children:"300 MiB"}),(0,t.jsx)(n.td,{children:"Istio"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# crd installer.kubesphere.io/v1alpha1\n# kubesphere-system\n# ServiceAccount ks-installer\n# ClusterRole ks-installer\n# Deployment ks-installer\n#   https://hub.docker.com/layers/kubesphere/ks-installer\nkubectl apply -f https://raw.githubusercontent.com/kubesphere/ks-installer/v3.0.0/deploy/kubesphere-installer.yaml\n# \u5b89\u88c5\u914d\u7f6e - \u53ef\u4e0b\u8f7d\u81ea\u884c\u4fee\u6539\n# ClusterConfiguration installer.kubesphere.io/v1alpha1\n# \u4e0a\u6b21\u7684 jwtSecret kubectl -n kubesphere-system get cm kubesphere-config -o yaml | grep -v \"apiVersion\" | grep jwtSecret\nkubectl apply -f https://raw.githubusercontent.com/kubesphere/ks-installer/v3.0.0/deploy/cluster-configuration.yaml\n\n# \u5b89\u88c5\u8fc7\u7a0b\nkubectl logs -n kubesphere-system $(kubectl get pod -n kubesphere-system -l app=ks-install -o jsonpath='{.items[0].metadata.name}') -f\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/kubesphere/kubekey/blob/master/docs/config-example.md",children:"https://github.com/kubesphere/kubekey/blob/master/docs/config-example.md"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'apiVersion: installer.kubesphere.io/v1alpha1\nkind: ClusterConfiguration\nmetadata:\n  name: ks-installer\n  namespace: kubesphere-system\n  labels:\n    version: v3.0.0\nspec:\n  persistence:\n    storageClass: ""        # If there is not a default StorageClass in your cluster, you need to specify an existing StorageClass here.\n  authentication:\n    jwtSecret: ""           # Keep the jwtSecret consistent with the host cluster. Retrive the jwtSecret by executing "kubectl -n kubesphere-system get cm kubesphere-config -o yaml | grep -v "apiVersion" | grep jwtSecret" on the host cluster.\n  etcd:\n    monitoring: false       # Whether to enable etcd monitoring dashboard installation. You have to create a secret for etcd before you enable it.\n    endpointIps: localhost  # etcd cluster EndpointIps, it can be a bunch of IPs here.\n    port: 2379              # etcd port\n    tlsEnable: true\n  common:\n    mysqlVolumeSize: 20Gi # MySQL PVC size.\n    minioVolumeSize: 20Gi # Minio PVC size.\n    etcdVolumeSize: 20Gi  # etcd PVC size.\n    openldapVolumeSize: 2Gi   # openldap PVC size.\n    redisVolumSize: 2Gi # Redis PVC size.\n    es:   # Storage backend for logging, events and auditing.\n      # elasticsearchMasterReplicas: 1   # total number of master nodes, it\'s not allowed to use even number\n      # elasticsearchDataReplicas: 1     # total number of data nodes.\n      elasticsearchMasterVolumeSize: 4Gi   # Volume size of Elasticsearch master nodes.\n      elasticsearchDataVolumeSize: 20Gi    # Volume size of Elasticsearch data nodes.\n      logMaxAge: 7                     # Log retention time in built-in Elasticsearch, it is 7 days by default.\n      elkPrefix: logstash              # The string making up index names. The index name will be formatted as ks-<elk_prefix>-log.\n      # \u5916\u90e8 Elasticsearch - \u751f\u4ea7\u5efa\u8bae\u4f7f\u7528\u5916\u90e8\n      externalElasticsearchUrl: # The URL of external Elasticsearch\n      externalElasticsearchPort: # The port of external Elasticsearch\n  console:\n    enableMultiLogin: true  # enable/disable multiple sing on, it allows an account can be used by different users at the same time.\n    port: 30880\n  alerting:                # (CPU: 0.3 Core, Memory: 300 MiB) Whether to install KubeSphere alerting system. It enables Users to customize alerting policies to send messages to receivers in time with different time intervals and alerting levels to choose from.\n    enabled: false\n  auditing:                # Whether to install KubeSphere audit log system. It provides a security-relevant chronological set of records\uff0crecording the sequence of activities happened in platform, initiated by different tenants.\n    enabled: false\n  devops:                  # (CPU: 0.47 Core, Memory: 8.6 G) Whether to install KubeSphere DevOps System. It provides out-of-box CI/CD system based on Jenkins, and automated workflow tools including Source-to-Image & Binary-to-Image.\n    enabled: false\n    jenkinsMemoryLim: 2Gi      # Jenkins memory limit.\n    jenkinsMemoryReq: 1500Mi   # Jenkins memory request.\n    jenkinsVolumeSize: 8Gi     # Jenkins volume size.\n    jenkinsJavaOpts_Xms: 512m  # The following three fields are JVM parameters.\n    jenkinsJavaOpts_Xmx: 512m\n    jenkinsJavaOpts_MaxRAM: 2g\n  events:                  # Whether to install KubeSphere events system. It provides a graphical web console for Kubernetes Events exporting, filtering and alerting in multi-tenant Kubernetes clusters.\n    enabled: false\n    ruler:\n      enabled: true\n      replicas: 2\n  logging:                 # (CPU: 57 m, Memory: 2.76 G) Whether to install KubeSphere logging system. Flexible logging functions are provided for log query, collection and management in a unified console. Additional log collectors can be added, such as Elasticsearch, Kafka and Fluentd.\n    enabled: false\n    logsidecarReplicas: 2\n  metrics_server:                    # (CPU: 56 m, Memory: 44.35 MiB) Whether to install metrics-server. IT enables HPA (Horizontal Pod Autoscaler).\n    enabled: false\n  monitoring:\n    # prometheusReplicas: 1            # Prometheus replicas are responsible for monitoring different segments of data source and provide high availability as well.\n    prometheusMemoryRequest: 400Mi   # Prometheus request memory.\n    prometheusVolumeSize: 20Gi       # Prometheus PVC size.\n    # alertmanagerReplicas: 1          # AlertManager Replicas.\n  multicluster:\n    clusterRole: none  # host | member | none  # You can install a solo cluster, or specify it as the role of host or member cluster.\n  networkpolicy:       # Network policies allow network isolation within the same cluster, which means firewalls can be set up between certain instances (Pods).\n    # Make sure that the CNI network plugin used by the cluster supports NetworkPolicy. There are a number of CNI network plugins that support NetworkPolicy, including Calico, Cilium, Kube-router, Romana and Weave Net.\n    enabled: false\n  notification:        # Email Notification support for the legacy alerting system, should be enabled/disabled together with the above alerting option.\n    enabled: false\n  openpitrix:          # (2 Core, 3.6 G) Whether to install KubeSphere Application Store. It provides an application store for Helm-based applications, and offer application lifecycle management.\n    enabled: false\n  servicemesh:         # (0.3 Core, 300 MiB) Whether to install KubeSphere Service Mesh (Istio-based). It provides fine-grained traffic management, observability and tracing, and offer visualization for traffic topology.\n    enabled: false\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u5378\u8f7d",children:"\u5378\u8f7d"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/kubesphere/ks-installer/blob/master/scripts/kubesphere-delete.sh",children:"scripts/kubesphere-delete.sh"})}),"\n",(0,t.jsx)(n.li,{children:"\u4f1a\u7528\u5230 helm"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -LO https://raw.githubusercontent.com/kubesphere/ks-installer/master/scripts/kubesphere-delete.sh\nchmod +x kubesphere-delete.sh\n\n# alpine 3.12 \u5b89\u88c5 helm\napk add helm -X https://mirrors.aliyun.com/alpine/edge/testing/\n# K3S\nexport KUBECONFIG=/etc/rancher/k3s/k3s.yaml\n\n./kubesphere-delete.sh\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},38088:(e,n,s)=>{var t=s(96651),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var t,i={},d=null,c=null;for(t in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)l.call(n,t)&&!a.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:r,type:e,key:d,ref:c,props:i,_owner:o.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},2488:(e,n,s)=>{e.exports=s(38088)},62780:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>l});var t=s(96651);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);