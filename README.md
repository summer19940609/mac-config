# mac-config
mac安装任何来源

`sudo spctl --master-disable`

![2K35Ul](https://gitee.com/summer19940609/pic/raw/master/uPic/2K35Ul.png)

### Quick Look plugins
quicklook插件

https://github.com/sindresorhus/quick-look-plugins

### brew
切换国内中科大源

https://zhuanlan.zhihu.com/p/102760018

安装指定版本的Command Line Tools for Xcode

https://developer.apple.com/download/more/

```
brew update && brew upgrade && brew cu -a -y 

// zsh-nvm
git clone https://github.com/lukechilds/zsh-nvm ~/.oh-my-zsh/custom/plugins/zsh-nvm
// zsh-autosuggestions

// zsh-syntax-highlighting
```

### git
使用vscode作为git默认编辑器
```
git config --global user.name xxxxxx  
git config --global user.email xxxxxx 
git config --global core.editor "code --wait"
git config --global -e
```

### npm
使用淘宝仓库
```
npm config set registry https://registry.npm.taobao.org/
```

### vscode
vscode配置通过编辑器自带的功能同步




取消开机声音
```
sudo nvram StartupMute=%01
```

同步远程分支
```
git remote prune origin
```

### mysql(非docker安装方式)
1. 安装：```brew install mysql```
2. 开启mysql：```mysql.server start```
3. 使用mysql的配置脚本：```/usr/local/opt/mysql/bin/mysql_secure_installation //mysql 提供的配置向导```

启动这个脚本后，即可根据如下命令提示进行初始化设置，本地数据库密码123456

### docker
mirrors配置
```
"registry-mirrors": [
    "https://hub-mirror.c.163.com",
    "https://mirror.baidubce.com"
]
 ```

### pyenv
python版本管理

zsh中pyenv启动懒加载，使用pyenv-lazy插件

`git clone https://github.com/davidparsson/zsh-pyenv-lazy.git ~/.oh-my-zsh/custom/plugins/pyenv-lazy`



```
pillow安装出错
python -m pip install --upgrade pip
python -m pip install --upgrade pillow
```
### nvm安装node

### 当前安装的软件记录
![](https://cdn.jsdelivr.net/gh/summer19940609/picture-repo/blog/20210116125851.png)

![](https://cdn.jsdelivr.net/gh/summer19940609/picture-repo/blog/20210116130023.png)

![](https://cdn.jsdelivr.net/gh/summer19940609/picture-repo/blog/20210121171508.png)

### 图床设置
`uPic_hosts.json`    uPic导出的配置

![nTEkt4](https://gitee.com/summer19940609/pic/raw/master/uPic/nTEkt4.png)
![ScXndl](https://gitee.com/summer19940609/pic/raw/master/uPic/ScXndl.png)

输入法自动切换

![LFbbHL](https://gitee.com/summer19940609/pic/raw/master/uPic/LFbbHL.png)

### 油猴脚本安装列表
![BJ6i9B](https://gitee.com/summer19940609/pic/raw/master/uPic/BJ6i9B.png)
