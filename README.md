# mac-config记录

```
# 防止在网络驱动器上创建.DS_Store文件
defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool TRUE
```

### 启动台行列设置
```
# 7行9列，设置生效
defaults write com.apple.dock springboard-rows -int 6
defaults write com.apple.dock springboard-columns -int 8
defaults write com.apple.dock ResetLaunchPad -bool true;killall Dock

# 恢复默认
defaults write com.apple.dock springboard-rows Default defaults write com.apple.dock springboard-columns Default killall Dock
```

### 定时任务
```
→ ~ EDITOR=vi crontab -e
crontab: installing new crontab
→ ~ crontab -l
0 */1 * * * kill -9 $(pgrep CursorUIViewService) > /dev/null 2>&1
0 */1 * * * kill -9 $(pgrep SCIM) > /dev/null 2>&1
```
### 重建索引

```
sudo mdutil -a -i off
sudo mdutil -a -i on
sudo mdutil -E

// 清理Preboot，重建索引

# 删除根卷的索引
sudo mdutil -X /
# 删除Preboot分区索引
sudo mdutil -X /System/Volumes/Preboot
# 删除Data分区索引
sudo mdutil -X /System/Volumes/Data

```

### 开发命令行工具
```
xcode-select --install

sudo xattr -rd com.apple.quarantine xxxx
```

> How to remove the ‘Last Login’ prompt from iTerm/Terminal on macOS?

> https://stackoverflow.com/questions/15769615/remove-last-login-message-for-new-tabs-in-terminal

```
touch .hushlogin 
```

### mac 安装任何来源
```
sudo spctl --master-disable
```

#### AWDL
```
关闭AWDL：`sudo ifconfig awdl0 down`

开启AWDL：`sudo ifconfig awdl0 up`
```
#### 取消开机声音

```
sudo nvram StartupMute=%01
```

#### dock栏设置
```
defaults write com.apple.Dock autohide-delay -float 0 && killall Dock

延迟
defaults write com.apple.dock autohide-delay -int 0（时间设为最短）

defaults write com.apple.dock autohide-delay -int 0.5（时间设为 0.5s）

延迟动画
defaults write com.apple.dock autohide-time-modifier -int 0.5;killall Dock

恢复：
defaults delete com.apple.dock autohide-time-modifier;killall Dock
```

### 菜单栏间距调整
```bash
# 指定间距
defaults -currentHost write -globalDomain NSStatusItemSpacing -int 10
# 指定内边距
defaults -currentHost write -globalDomain NSStatusItemSelectionPadding -int 6
# 当前间距查询
defaults -currentHost read -globalDomain NSStatusItemSpacing
defaults -currentHost read -globalDomain NSStatusItemSelectionPadding
# 重置
defaults -currentHost delete -globalDomain NSStatusItemSpacing
defaults -currentHost delete -globalDomain NSStatusItemSelectionPadding
```

### 输入法提示

macOS 14 输入法提示去除
```
sudo mkdir -p /Library/Preferences/FeatureFlags/Domain

sudo /usr/libexec/PlistBuddy -c "Add 'redesigned_text_cursor:Enabled' bool false" /Library/Preferences/FeatureFlags/Domain/UIKit.plist


# 关闭 macos 自带的切换输入法提示体验更佳！
sudo defaults write /Library/Preferences/FeatureFlags/Domain/UIKit.plist redesigned_text_cursor -dict-add Enabled -bool NO

```

```
# 关闭 CursorUIViewService 防止导致卡顿，并重启
sudo mkdir -p /Library/Preferences/FeatureFlags/Domain && sudo /usr/libexec/PlistBuddy -c "Add 'redesigned_text_cursor:Enabled' bool false" /Library/Preferences/FeatureFlags/Domain/UIKit.plist && sudo shutdown -r now
```

切换中英文延迟

`hidutil property --set '{"CapsLockDelayOverride":0}'`

开启任意位置拖动窗口功能,重启, 需要按住`control+command`，然后再去用鼠标拖动窗口的任意位置。

`defaults write -g NSWindowShouldDragOnGesture -bool true`


### Quick Look plugins

quicklook 插件

> https://github.com/sindresorhus/quick-look-plugins

### brew

https://gitee.com/cunkai/HomebrewCN

```
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"

/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh)"
```

安装指定版本的 Command Line Tools for Xcode

https://developer.apple.com/download/more/

```
// 更新
brew update && brew upgrade && brew cu -a -y && brew cleanup --prune 0

// zsh-syntax-highlighting + zsh-autosuggestions
brew install zsh-syntax-highlighting
brew install zsh-autosuggestions

# zshrc
source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source $(brew --prefix)/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

brew install autojump fnm pyenv ffmpeg git wget zsh-syntax-highlighting zsh-autosuggestions jmeter youtube-dl bruno romkatv/gitstatus/gitstatus

brew install only-switch

# prevent iTunes or Apple Music
brew install --cask notunes 

brew install dozer mos clash-verge-rev input-source-pro google-chrome another-redis-desktop-manager orbstack font-jetbrains-mono reqable iterm2 input-source-pro utools visual-studio-code microsoft-edge karabiner-elements syntax-highlight alt-tab --cask


==> Casks
another-redis-desktop-manager	qlcolorcode
charles				qlimagesize
clash-verge-rev			qlmarkdown
dozer				qlstephen
font-jetbrains-mono		qlvideo
google-chrome			quicklook-json
iina				quicklookase
input-source-pro		sourcetree
iterm2				sublime-text
microsoft-edge			switchkey
mos				syntax-highlight
neteasemusic			temurin
playcover-nightly		utools
postman				visual-studio-code
proxyman


# 屏蔽 Apple music 自启动
brew install --cask notunes



```

### git
```
code ~/.gitconfig

[user]
	name = xia.nianjun
	email = xia.nianjun@mwee.cn
	useConfigOnly = true
[core]
	editor = code --wait
	# 忽略大小写
    ignorecase = false
[oh-my-zsh]
	hide-dirty = 1
	hide-status = 1

```

### npm

使用淘宝仓库

```
npm i nrm -g
nrm ls
nrm add mw XXXXXXXXXXXXX
nrm use mw
nrm use taobao
```

### vscode

```
git remote prune origin
```

### ssh
```
~/.ssh/config

HostkeyAlgorithms +ssh-rsa

PubkeyAcceptedAlgorithms +ssh-rsa
```
### 配置
```
~/.npmrc

sass_binary_site=https://registry.npmmirror.com/node-sass/
chromedriver_cdnurl=https://registry.npmmirror.com/chromedriver
phantomjs_cdnurl=https://registry.npmmirror.com/phantomjs/
electron_mirror=https://registry.npmmirror.com/electron/
puppeteer_download_host=https://registry.npmmirror.com/
sentrycli_cdnurl=https://registry.npmmirror.com/sentry-cli/
sqlite3_binary_site=https://registry.npmmirror.com/sqlite3/
python_mirror=https://registry.npmmirror.com/python/
canvas_binary_host_mirror=https://registry.npmmirror.com/node-canvas-prebuilt/

unsafe-perm=true

→ ~ $ cat ~/.config/husky/init.sh
eval "$(fnm env --use-on-cd)"


# 安装其他版本
$ fnm install 16

# 在当前 Shell 使用指定版本
$ fnm use 16

# 查看本地已安装的版本
$ fnm ls

# 查看官方已发布的所有版本
$ fnm ls-remote | grep v16

# 速度慢的时候，可以切换到国内源
$ fnm install 16 --node-dist-mirror=https://npmmirror.com/mirrors/node

```

### docker、orbstack

mirrors 配置

```
"registry-mirrors": [

]
```

### pyenv


### fnm use
```
eval "$(fnm env --use-on-cd --shell zsh)"  # zshrc

~/.config/husky/init.sh 或 ~/.huskyrc

cat ~/.huskyrc

eval "$(fnm env --use-on-cd)"
```

### 油猴脚本安装列表


### zshrc
```
HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000

export EDITOR='code'

export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
export LC_CTYPE=en_US.UTF-8

alias gco="git checkout"
alias glo="git log --oneline"
alias gb="git branch"
alias gst="git status -s"
alias ll="ls -lAh"

# alias setproxy="export https_proxy=http://127.0.0.1:7897 http_proxy=http://127.0.0.1:7897 all_proxy=socks5://127.0.0.1:7897"
# alias unsetproxy="unset ALL_PROXY"

alias zsh-rosetta="arch -x86_64 zsh"
alias killdock="killall Dock"
alias src="source ~/.zshrc"

# java管理
# export JAVA_8_HOME=/Library/Java/JavaVirtualMachines/zulu-8.jdk/Contents/Home
# export JAVA_11_HOME=/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home
# export JAVA_HOME=$JAVA_11_HOME
# alias jdk8="export JAVA_HOME=$JAVA_8_HOME"
# alias jdk11="export JAVA_HOME=$JAVA_11_HOME"

# pip源 阿里源
export PIP_INDEX_URL=https://mirrors.aliyun.com/pypi/simple

# 阿里云源
export FNM_NODE_DIST_MIRROR=https://npmmirror.com/mirrors/node/
export NPM_CONFIG_REGISTRY=https://registry.npmmirror.com/

export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node/

# 先尝试从历史记录中查找建议，如果找不到，再从补全引擎中查找。
export ZSH_AUTOSUGGEST_STRATEGY=(match_prev_cmd completion)

alias awdloff='sudo ifconfig awdl0 down'

eval "$(fnm env --use-on-cd --shell zsh)"

source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source $(brew --prefix)/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

source $(brew --prefix)/opt/gitstatus/gitstatus.prompt.zsh

# # 设置提示符，只在git仓库中显示git信息
PROMPT='%F{green}→%f %F{magenta}%1~%f${GITSTATUS_PROMPT:+ ($GITSTATUS_PROMPT)} '

[ -f $HOMEBREW_PREFIX/etc/profile.d/autojump.sh ] && . $HOMEBREW_PREFIX/etc/profile.d/autojump.sh

# 设置CapsLock延迟为0
hidutil property --set '{"CapsLockDelayOverride":0}' > /dev/null 2>&1

```


```
### clash自定义规则

```



### orbstack

开启 Rosetta，在 Apple Silicon (ARM) 上运行 Intel 架构 (x86/x86_64/amd64) 镜像。

```
orb config set rosetta true   # 开启
orb config set rosetta false  # 关闭

orb restart

```


### 系统python环境

```
python3 -m venv .venv		#创建虚拟环境	
source .venv/bin/activate 	#激活
pip install ragas			#安装包
deactivate					#退出

```

### 禁用Siri

```
defaults write com.apple.assistant.support 'Siri Data Sharing Opt-In Status' -int 2

defaults write com.apple.assistant.backedup 'Use device speaker for TTS' -int 3

defaults write com.apple.assistant.support 'Assistant Enabled' -bool false

defaults write com.apple.SetupAssistant 'DidSeeSiriSetup' -bool True
```

### adb记录

```
brew install --cask android-platform-tools


adb devices
adb shell
settings put global vivo_screen_refresh_rate_mode 90
```

