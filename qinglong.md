docker pull whyour/qinglong:latest

docker pull whyour/qinglong:debian

### 设置源（推荐）
```
Node 软件包镜像源
https://registry.npmmirror.com/
Python 软件包镜像源
https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple
Linux 软件包镜像源
https://mirrors.aliyun.com
```

## 青龙安装puppeteer

依赖安装chromium

qinglong镜像默认是Alpine Linux 

```
apk update
sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
apk update && apk add chromium
```

代码里使用 
```
const puppeteer = require('puppeteer-core');
```

```
// 启动浏览器
const browser = await puppeteer.launch({
	headless: 'new',
	args: ['--no-sandbox', '--disable-setuid-sandbox'],
	// executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
	executablePath: '/usr/bin/chromium-browser'
});
```
