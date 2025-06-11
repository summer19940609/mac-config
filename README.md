更新时间：2025年6月8日


# mac-config

### 开发命令行工具
```
xcode-select --install

sudo xattr -rd com.apple.quarantine xxxx

```

How to remove the ‘Last Login’ prompt from iTerm/Terminal on macOS?

https://stackoverflow.com/questions/15769615/remove-last-login-message-for-new-tabs-in-terminal

```
touch .hushlogin
```
### mac 安装任何来源

`sudo spctl --master-disable`

关闭AWDL：sudo ifconfig awdl0 down

开启AWDL：sudo ifconfig awdl0 up

取消开机声音

`sudo nvram StartupMute=%01`

dock 栏显示/隐藏无延迟

`defaults write com.apple.Dock autohide-delay -float 0 && killall Dock`

延迟
```
defaults write com.apple.dock autohide-delay -int 0（时间设为最短）

defaults write com.apple.dock autohide-delay -int 0.5（时间设为 0.5s）
```
延迟动画
```
defaults write com.apple.dock autohide-time-modifier -int 0.5;killall Dock
```
恢复：
```
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



macOS 14 输入法提示去除
```
sudo mkdir -p /Library/Preferences/FeatureFlags/Domain

sudo /usr/libexec/PlistBuddy -c "Add 'redesigned_text_cursor:Enabled' bool false" /Library/Preferences/FeatureFlags/Domain/UIKit.plist
```

```
# 关闭 CursorUIViewService 防止导致卡顿，并重启
sudo mkdir -p /Library/Preferences/FeatureFlags/Domain && sudo /usr/libexec/PlistBuddy -c "Add 'redesigned_text_cursor:Enabled' bool false" /Library/Preferences/FeatureFlags/Domain/UIKit.plist && sudo shutdown -r now
```

切换中英文延迟

hidutil property --set '{"CapsLockDelayOverride":0}'

brew install --cask capslocknodelay


开启任意位置拖动窗口功能,重启, 需要按住control+command，然后再去用鼠标拖动窗口的任意位置

defaults write -g NSWindowShouldDragOnGesture -bool true


### Quick Look plugins

quicklook 插件

https://github.com/sindresorhus/quick-look-plugins

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
# eval "$(fnm env --use-on-cd)"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"


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


### nvm 安装 node

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash 或者

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

安装了 `nvm-lazy` 后不需要下面的命令

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

```

### fnm use
```
eval "$(fnm env --use-on-cd --shell zsh)"  # zshrc

~/.config/husky/init.sh 或 ~/.huskyrc

cat ~/.huskyrc

eval "$(fnm env --use-on-cd)"
```


### 输入法自动切换


### 油猴脚本安装列表


### zshrc
```
# 历史记录文件和大小
HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000

# autocd：直接通过路径更改目录
# extendedglob：使用额外的模式匹配特性
# nomatch：未匹配的模式导致错误
# beep：错误时发出蜂鸣声
# notify：立即报台作业状态的变化
setopt extendedglob nomatch notify
unsetopt autocd beep

setopt HIST_IGNORE_SPACE
# 忽略重复记录
setopt HIST_IGNORE_DUPS

# 关掉 flowcontrol
unsetopt flowcontrol

DISABLE_MAGIC_FUNCTIONS=true

if type brew &>/dev/null; then
  FPATH=$(brew --prefix)/share/zsh-completions:$FPATH
  autoload -Uz compinit
  compinit
fi

# zsh git 提示
# autoload -Uz vcs_info
# precmd_vcs_info() { vcs_info }
# precmd_functions+=( precmd_vcs_info )
# setopt prompt_subst
# PROMPT='%F{green}→%f %F{magenta}%1~%f ${vcs_info_msg_0_} %F{green}$%f '
# zstyle ':vcs_info:git:*' formats '[%F{cyan}%b%f]'

# PROMPT='%F{green}→%f %F{magenta}%1~%f %F{green}$%f'

export EDITOR='code'

export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
export LC_CTYPE=en_US.UTF-8

alias gco="git checkout"
alias glo="git log --oneline"
alias gb="git branch"
alias gst="git status"
alias ll="ls -lAh"
alias src="source ~/.zshrc"
alias clrhist='cat /dev/null > ~/.zsh_history && fc -R ~/.zsh_history'

# zsh-autosuggestions 卡顿
pasteinit() {
  OLD_SELF_INSERT=${${(s.:.)widgets[self-insert]}[2,3]}
  zle -N self-insert url-quote-magic # I wonder if you'd need `.url-quote-magic`?
}
pastefinish() {
  zle -N self-insert $OLD_SELF_INSERT
}
zstyle :bracketed-paste-magic paste-init pasteinit
zstyle :bracketed-paste-magic paste-finish pastefinish

# 代理
alias setproxy='export https_proxy=http://127.0.0.1:7897 http_proxy=http://127.0.0.1:7897 all_proxy=socks5://127.0.0.1:7897'
alias unsetproxy='unset https_proxy http_proxy all_proxy'

# java管理
# export JAVA_8_HOME=/Library/Java/JavaVirtualMachines/zulu-8.jdk/Contents/Home
# export JAVA_11_HOME=/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home
# export JAVA_HOME=$JAVA_11_HOME
# alias jdk8="export JAVA_HOME=$JAVA_8_HOME"
# alias jdk11="export JAVA_HOME=$JAVA_11_HOME"

eval "$(fnm env --use-on-cd --shell zsh)"

# 先尝试从历史记录中查找建议，如果找不到，再从补全引擎中查找。
export ZSH_AUTOSUGGEST_STRATEGY=(match_prev_cmd completion)

source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source $(brew --prefix)/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

[ -f $HOMEBREW_PREFIX/etc/profile.d/autojump.sh ] && . $HOMEBREW_PREFIX/etc/profile.d/autojump.sh

# eval "$(pyenv init -)"

# brew install romkatv/gitstatus/gitstatus
source $(brew --prefix)/opt/gitstatus/gitstatus.prompt.zsh
PROMPT='%F{green}→%f %F{magenta}%1~%f ${GITSTATUS_PROMPT:+[}${GITSTATUS_PROMPT}${GITSTATUS_PROMPT:+]}${GITSTATUS_PROMPT:+ }$ '

```


```
### clash自定义规则
prepend:
  - 'DOMAIN,alilang-unify-struct-log.cn-hangzhou.log.aliyuncs.com,REJECT'
append: []
delete: []
```



