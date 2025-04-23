## 青龙安装puppeteer

依赖安装chromium

qinglong镜像默认是Alpine Linux 

```
apk update

sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories

apk update && apk add chromium
```
