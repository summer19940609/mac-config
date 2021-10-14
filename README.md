- [mac-config](#mac-config)
  - [mac 安装任何来源](#mac 安装任何来源)
  - [Quick Look plugins](#quick-look-plugins)
  - [brew](#brew)
  - [git](#git)
  - [npm](#npm)
  - [vscode](#vscode)
  - [mysql（非 docker 安装方式）](#mysql 非 docker 安装方式)
  - [docker](#docker)
  - [pyenv](#pyenv)
  - [nvm 安装 node](#nvm 安装 node)
  - [当前安装的软件记录](#当前安装的软件记录)
  - [图床设置](#图床设置)
  - [输入法自动切换](#输入法自动切换)
  - [油猴脚本安装列表](#油猴脚本安装列表)

# mac-config

### mac 安装任何来源

`sudo spctl --master-disable`

![PNlHBc](https://cdn.jsdelivr.net/gh/summer19940609/picture-repo@master/uPic/PNlHBc.png)

取消开机声音

`sudo nvram StartupMute=%01`

dock 栏显示/隐藏无延迟

`defaults write com.apple.Dock autohide-delay -float 0 && killall Dock`


延迟

defaults write com.apple.dock autohide-delay -int 0（时间设为最短）

defaults write com.apple.dock autohide-delay -int 0.5（时间设为 0.5s）

延迟动画

defaults write com.apple.dock autohide-time-modifier -int 0.5;killall Dock

恢复：defaults delete com.apple.dock autohide-time-modifier;killall Dock


### Quick Look plugins

quicklook 插件

https://github.com/sindresorhus/quick-look-plugins

### brew

切换国内中科大源

https://zhuanlan.zhihu.com/p/102760018

安装指定版本的 Command Line Tools for Xcode

https://developer.apple.com/download/more/

```
// 更新
brew update && brew upgrade && brew cu -a -y

// 安装 oh-my-zsh
wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh

// zsh-nvm
git clone https://github.com/lukechilds/zsh-nvm ~/.oh-my-zsh/custom/plugins/zsh-nvm

// zsh-autosuggestions
git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions

// zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

// autojump
brew install autojump

// git-open
git clone https://github.com/paulirish/git-open.git $ZSH_CUSTOM/plugins/git-open

// bat
brew install bat
```

### git

使用 vscode 作为 git 默认编辑器

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

vscode 配置通过编辑器自带的功能同步

同步远程分支

```
git remote prune origin
```

### mysql（非 docker 安装方式）

1. 安装：`brew install mysql`
2. 开启 mysql：`mysql.server start`
3. 使用 mysql 的配置脚本：`/usr/local/opt/mysql/bin/mysql_secure_installation //mysql 提供的配置向导`

启动这个脚本后，即可根据如下命令提示进行初始化设置，本地数据库密码 123456

### docker

mirrors 配置

```
"registry-mirrors": [
    "https://hub-mirror.c.163.com",
    "https://mirror.baidubce.com"
]
```

### pyenv

python 版本管理

zsh 中 pyenv 启动懒加载，使用 pyenv-lazy 插件

`git clone https://github.com/davidparsson/zsh-pyenv-lazy.git ~/.oh-my-zsh/custom/plugins/pyenv-lazy`

```
pillow 安装出错
python -m pip install --upgrade pip
python -m pip install --upgrade pillow
```

### nvm 安装 node

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash 或者

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

安装了 `nvm-lazy` 后不需要下面的命令

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

```

### 当前安装的软件记录

![](https://cdn.jsdelivr.net/gh/summer19940609/picture-repo/blog/20210116125851.png)

![](https://cdn.jsdelivr.net/gh/summer19940609/picture-repo/blog/20210116130023.png)

![uFrFnb](https://cdn.jsdelivr.net/gh/summer19940609/picture-repo@master/uPic/uFrFnb.png)

### 图床设置

`uPic_hosts.json` uPic 导出的配置

### 输入法自动切换

![VGc0oc](https://cdn.jsdelivr.net/gh/summer19940609/picture-repo@master/uPic/VGc0oc.png)

### 油猴脚本安装列表

![FDruzl](https://cdn.jsdelivr.net/gh/summer19940609/picture-repo@master/uPic/FDruzl.png)
