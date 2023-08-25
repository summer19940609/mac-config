#!/bin/bash

urls=(
    "https://purge.jsdelivr.net/gh/summer19940609/mac-config@main/rule/direct.list"
    "https://purge.jsdelivr.net/gh/summer19940609/mac-config@main/rule/reject.list"
    "https://purge.jsdelivr.net/gh/summer19940609/mac-config@main/rule/proxy.list"
    "https://purge.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/OpenAi.list"
    "https://purge.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/SteamCN.list"
    "https://purge.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/GoogleCN.list"
    "https://purge.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/WeChat/WeChat.list"
    "https://purge.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/ChinaDomain.list"
    "https://purge.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/ChinaCompanyIp.list"
    "https://purge.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Download.list"
    "https://purge.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/LocalAreaNetwork.list"
    "https://purge.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/UnBan.list"
    "https://purge.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/ProxyGFWlist.list"
    "https://purge.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/Porn.list"
)

for url in "${urls[@]}"; do
    echo "Clearing cache for: $url"
    curl -X GET "$url"
    echo "Cache cleared for: $url"
done
