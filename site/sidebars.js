const YAML = require('yaml');
const fs = require('fs');

module.exports = {
  docs: {
    Java: YAML.parse(fs.readFileSync('sidebars-java.yaml').toString()),
    前端技术: [
      {
        type: 'category',
        label: '框架',
        items: [
          'web/framework/nextjs',
          'web/framework/nextjs-version',
          'web/framework/nextjs-cookbook',
          'web/framework/electron',
          'web/framework/vue',
          'web/framework/angular',
          'web/framework/riot',
          'web/framework/prisma',
        ],
      },
    ],
    语言: [
      'languages/languages',
      'languages/parsing',
      'languages/peg',
      'languages/pegjs',
      'languages/php',
      'languages/zig',
      'languages/lua/lua',
      'languages/lua/lua-version',
      {
        type: 'category',
        label: 'Golang',
        items: [
          'languages/go/go',
          'languages/go/go-template',
          'languages/go/go-pkg-net-rpc',
          'languages/go/go-kit',
          'languages/go/go-windows',
        ],
      },
    ],
    开发运维: [
      'devops/tracing/tracing',
      {
        type: 'category',
        label: '指标监控',
        items: [
          'devops/metrics/metrics',
          'devops/metrics/prometheus',
          'devops/metrics/promql',
          'devops/metrics/prometheus-exporter',
          'devops/metrics/statsd_exporter',
          'devops/metrics/prometheus-k8s',
          'devops/metrics/prometheus-storage',
          'devops/metrics/grafana',
          'devops/metrics/thanos',
          'devops/metrics/cortex',
        ],
      },
      {
        type: 'category',
        label: '日志',
        items: ['service/logging/logging', 'service/logging/syslog', 'service/logging/loki', 'service/logging/fluentbit'],
      },
      {
        type: 'category',
        label: '服务',
        items: [
          'devops/service/microservices',
          'devops/service/servicemesh',
          'devops/service/linkerd',
          'devops/service/kuma',
          'devops/service/consul',
          'devops/service/consul-conf',
          'devops/service/consul-connect',
          'devops/service/fabio',
        ],
      },
      {
        type: 'category',
        label: 'Web',
        items: ['devops/web/nginx', 'devops/web/caddy', 'devops/web/traefik'],
      },
      {
        type: 'category',
        label: '平台服务',
        items: ['devops/xaas/db-schema', 'devops/xaas/paas/dokku'],
      },
    ],
    AlpineLinux: [
      'os/alpine/alpine',
      'os/alpine/alpine-intro',
      'os/alpine/alpine-ops',
      'os/alpine/alpine-pkgs',
      'os/alpine/alpine-lbu',
      'os/alpine/alpine-boot',
      'os/alpine/alpine-version',
      'os/alpine/alpine-faq',
    ],
    Docker: [
      'devops/docker/docker-intro',
      'devops/docker/docker-network',
      'devops/docker/docker-storage',
      'devops/docker/docker-swarm',
      'devops/docker/docker-cookbook',
    ],
    Kubernetes: [
      'devops/kubernetes/k8s-intro',
      'devops/kubernetes/k8s-dashboard',
      'devops/kubernetes/k3s',
      'devops/kubernetes/k3d',
      'devops/kubernetes/k8s-glossary',
      'devops/kubernetes/helm-intro',
      'devops/kubernetes/helm2',
      'devops/kubernetes/platform/rancher-intro',
      'devops/kubernetes/rancher-rke',
      'devops/kubernetes/tool/kustomize',
      'devops/kubernetes/tool/krew',
      {
        type: 'category',
        label: '网络',
        items: [
          'devops/kubernetes/network/k8s-network',
          'devops/kubernetes/network/kong-ingress',
          'devops/kubernetes/network/nginx-ingress',
          'devops/kubernetes/network/traefik-ingress',
          'devops/kubernetes/network/metallb',
          'devops/kubernetes/network/flannel',
        ],
      },
      {
        type: 'category',
        label: '存储',
        items: [
          'devops/kubernetes/storage/k8s-storage',
          'devops/kubernetes/storage/longhorn',
          'devops/kubernetes/storage/k8s-nfs',
          'devops/kubernetes/storage/rook',
        ],
      },
      {
        type: 'category',
        label: '平台',
        items: ['devops/kubernetes/platform/knative-intro', 'devops/kubernetes/platform/istio-intro'],
      },
      {
        type: 'category',
        label: '应用',
        items: [
          'devops/kubernetes/app/cert-manager',
          'devops/kubernetes/app/k8s-consul',
          'devops/kubernetes/app/harbor',
        ],
      },
    ],
    ...YAML.parse(fs.readFileSync('sidebars-os.yaml').toString()),
    指南: [
      {
        type: 'category',
        label: '运维',
        items: ['howto/ops/alpine-admin-ansible'],
      },
      {
        type: 'category',
        label: '网络',
        items: [
          'howto/network/dns-prevent-spoofing',
          'howto/network/tinc-get-started',
          'howto/network/tinc-multi-path-failover',
          'howto/network/tinc-transparency-proxy',
        ],
      },
    ],
    系统管理: ['ops/admin/htop', 'ops/admin/mosh'],
    基础设施: [
      'ops/infra/infra',
      'ops/infra/ansible',
      'ops/infra/ansible-awx',
      'ops/infra/ansible-faq',
      'ops/infra/terraform',
      'ops/infra/terraform-provider',
      'ops/infra/terraform-cookbook',
      'ops/infra/packer',
      'ops/infra/cloud-init',
    ],
    工具: [
      {
        type: 'category',
        label: '网络',
        items: ['tool/network/ip-lookup'],
      },
    ],
    数据库: [
      'db/db',
      {
        type: 'category',
        label: 'PostgreSQL',
        items: [
          'db/relational/postgresql/postgresql',
          'db/relational/postgresql/datatype',
          'db/relational/postgresql/fts',
          'db/relational/postgresql/version',
          'db/relational/postgresql/faq',
          'db/relational/postgresql/postgresql-sql-faq',
          'db/relational/postgresql/timescale',
          'db/relational/postgresql/postgrest-hello',
          'db/relational/postgresql/hasura',
        ],
      },
      {
        type: 'category',
        label: '关系型',
        items: ['db/relational/mysql', 'db/relational/mysql-gtid', 'db/relational/sqlite'],
      },
      {
        type: 'category',
        label: '文档型',
        items: ['db/document/mongodb', 'db/document/rethinkdb', 'db/document/couchdb'],
      },
      {
        type: 'category',
        label: '键值型',
        items: ['db/kv/kv', 'db/kv/redis', 'db/kv/lmdb', 'db/kv/leveldb'],
      },
    ],
    参考: [
      'reference/words',
      {
        type: 'category',
        label: '软件',
        items: ['reference/software/saas', 'reference/software/glossary'],
      },
      {
        type: 'category',
        label: '用户增长',
        items: ['reference/growth/formula', 'reference/growth/glossary'],
      },
      {
        type: 'category',
        label: '烹饪',
        items: ['reference/cook/glossary'],
      },
    ],
    网络: [
      {
        type: 'category',
        label: '应用',
        items: ['ops/network/application/dns', 'ops/network/application/http', 'ops/network/application/ssl'],
      },
      {
        type: 'category',
        label: '链路',
        items: ['ops/network/link/wireless', 'ops/network/link/infiniband'],
      },
      {
        type: 'category',
        label: '私有',
        items: [
          'ops/network/private/intro',
          'ops/network/private/tinc',
          'ops/network/private/tinc-conf',
          'ops/network/private/privoxy',
          'ops/network/private/privoxy-action',
          'ops/network/private/ipsec',
          'ops/network/private/wireguard',
          'ops/network/private/vpn-faq',
        ],
      },
      {
        type: 'category',
        label: '工具',
        items: [
          'ops/network/tool/intro',
          'ops/network/tool/bonding',
          'ops/network/tool/dnsmasq',
          'ops/network/tool/ifconfig',
          'ops/network/tool/mitmproxy',
          'ops/network/tool/nmap',
          'ops/network/tool/powerdns',
          'ops/network/tool/wireshark',
        ],
      },
      'ops/network/standard/ieee-802',
    ],
    存储: [
      'ops/storage/intro',
      {
        type: 'category',
        label: '块存储',
        items: ['ops/storage/block/raid', 'ops/storage/block/mdadm', 'ops/storage/block/lvm'],
      },
      {
        type: 'category',
        label: '文件存储',
        items: [
          'ops/storage/fs/intro',
          'ops/storage/fs/zfs',
          'ops/storage/fs/btrfs',
          'ops/storage/fs/fuse',
          'ops/storage/fs/nfs',
          'ops/storage/fs/smb',
          'ops/storage/fs/ntfs',
          // 'ops/storage/fs/zfs-tuning',
        ],
      },
      {
        type: 'category',
        label: '网络存储',
        items: ['ops/storage/network/share', 'ops/storage/network/sshfs'],
      },
    ],
    开发服务: [
      {
        type: 'category',
        label: 'Auth',
        items: [
          'service/auth/auth',
          'service/auth/auth-faq',
          'service/auth/keycloak',
          'service/auth/keycloak-dev',
          'service/auth/keycloak-faq',
          'service/auth/louketo',
          'service/auth/oauth2-proxy',
          'service/auth/ldap',
          'service/auth/ldap-schema',
          'service/auth/ldif',
          'service/auth/apacheds',
          'service/auth/apacheds-ops',
          'service/auth/apacheds-kerberos',
          'service/auth/kerberos',
          'service/auth/kerberos-faq',
          'service/auth/oauth',
          'service/auth/jwt',
          'service/auth/auth-protocol',
          'service/auth/auth-glossary',
        ],
      },
      {
        type: 'category',
        label: '内容管理',
        items: ['service/cms/cms','service/cms/docusaurus',],
      },
      {
        type: 'category',
        label: 'Office',
        items: ['service/office/office', 'service/office/collabora', 'service/office/onlyoffice'],
      },
      {
        type: 'category',
        label: '客户关系管理',
        items: ['service/crm/crm-insight'],
      },
      {
        type: 'category',
        label: '文件',
        items: ['service/file/nextcloud', 'service/file/nextcloud-config', 'service/file/nextcloud-faq'],
      },
      {
        type: 'category',
        label: '存储',
        items: [
          'service/storage/seaweedfs',
          'service/storage/minio',
          'service/storage/minio-operator',
          'service/storage/ceph',
          'service/storage/ceph-glossary',
          'service/storage/ceph-k8s',
          'service/storage/ceph-ubuntu-16-install',
          'service/storage/distributed-storage',
        ],
      },
      {
        type: 'category',
        label: '仓库',
        items: ['service/repository/nexus'],
      },
    ],
    运维: [
      {
        type: 'category',
        label: '服务',
        items: ['ops/service/remote-desktop', 'ops/service/matomo'],
      },
      {
        type: 'category',
        label: 'Gitlab',
        items: ['ops/service/gitlab-config', 'ops/service/gitlab-cicd', 'ops/service/gitlab-k8s'],
      },
    ],
    硬件: [
      {
        type: 'category',
        label: '硬件',
        items: ['hardware/battery/battery', 'hardware/microcontroller/dev/arduino'],
      },
    ],
    算法: [
      {
        type: 'category',
        label: '计算机视觉',
        items: ['algorithm/cv/imagemagick'],
      },
    ],
    VoIP: YAML.parse(fs.readFileSync('sidebars-voip.yaml').toString()),
  },
};
