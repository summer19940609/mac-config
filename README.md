# mac-config

### 开发命令行工具
```
xcode-select --install
```

How to remove the ‘Last Login’ prompt from iTerm/Terminal on macOS?

https://stackoverflow.com/questions/15769615/remove-last-login-message-for-new-tabs-in-terminal

```
touch .hushlogin
```
### mac 安装任何来源

`sudo spctl --master-disable`

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

macOS 14 输入法提示去处
```
sudo mkdir -p /Library/Preferences/FeatureFlags/Domain

sudo /usr/libexec/PlistBuddy -c "Add 'redesigned_text_cursor:Enabled' bool false" /Library/Preferences/FeatureFlags/Domain/UIKit.plist
```



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
brew update && brew upgrade && brew cu -a -y

// zsh-syntax-highlighting + zsh-autosuggestions
brew install zsh-syntax-highlighting
brew install zsh-autosuggestions

# zshrc
source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source $(brew --prefix)/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

brew install autojump fnm pyenv ffmpeg git wget zsh-syntax-highlighting zsh-autosuggestions jmeter youtube-dl

brew install dozer mos clash-verge-rev input-source-pro google-chrome another-redis-desktop-manager orbstack font-jetbrains-mono reqable iterm2 input-source-pro utools visual-studio-code microsoft-edge karabiner-elements syntax-highlight --cask


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

~/.huskyrc

eval "$(fnm env)"
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

cat ~/.huskyrc

eval "$(fnm env)"
```


### 输入法自动切换


### 油猴脚本安装列表


### zshrc
```
printf '\33c\e[3J'

# 历史记录文件和大小
HISTFILE=~/.zsh_history
# HISTSIZE=1000
# SAVEHIST=1000
# 忽略以空格开头的命令
setopt HIST_IGNORE_SPACE
setopt PROMPT_SUBST
# 忽略重复记录
setopt HIST_IGNORE_DUPS

DISABLE_MAGIC_FUNCTIONS=true

autoload -Uz compinit && compinit 

# zsh git 提示
autoload -Uz vcs_info
precmd_vcs_info() { vcs_info }
precmd_functions+=( precmd_vcs_info )
setopt prompt_subst
PROMPT='%F{green}→%f %F{magenta}%1~%f ${vcs_info_msg_0_} %F{green}$%f '
zstyle ':vcs_info:git:*' formats '[%F{cyan}%b%f]'

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
# export https_proxy=http://127.0.0.1:7897 http_proxy=http://127.0.0.1:7897 all_proxy=socks5://127.0.0.1:7897
alias setproxy='export https_proxy=http://127.0.0.1:7897 http_proxy=http://127.0.0.1:7897 all_proxy=socks5://127.0.0.1:7897'
alias unsetproxy='unset https_proxy http_proxy all_proxy'

# java管理
# export JAVA_8_HOME=/Library/Java/JavaVirtualMachines/zulu-8.jdk/Contents/Home
# export JAVA_11_HOME=/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home
# export JAVA_HOME=$JAVA_11_HOME
# alias jdk8="export JAVA_HOME=$JAVA_8_HOME"
# alias jdk11="export JAVA_HOME=$JAVA_11_HOME"

eval "$(fnm env --use-on-cd --shell zsh)"

source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source $(brew --prefix)/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

[ -f $HOMEBREW_PREFIX/etc/profile.d/autojump.sh ] && . $HOMEBREW_PREFIX/etc/profile.d/autojump.sh

# DEFAULT_USER="xxxxx"

# export NVM_DIR="$HOME/.nvm"
#   [ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
#   [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion

# eval "$(pyenv init -)"

```




