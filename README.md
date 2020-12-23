# mac-config

# Quick Look plugins
https://github.com/sindresorhus/quick-look-plugins

# brew
安装指定版本的Command Line Tools for Xcode

https://developer.apple.com/download/more/

```
brew update && brew upgrade && brew cu -a -y 

// zsh-nvm
git clone https://github.com/lukechilds/zsh-nvm ~/.oh-my-zsh/custom/plugins/zsh-nvm
// zsh-autosuggestions

// zsh-syntax-highlighting
```

# git
使用vscode作为git默认编辑器
```
git config --global user.name xxxxxx  
git config --global user.email xxxxxx 
git config --global core.editor "code --wait"
git config --global -e
```

# npm
使用淘宝仓库
```
npm config set registry https://registry.npm.taobao.org/
```

# vscode
vscode配置通过编辑器自带的功能同步




取消开机声音
```
sudo nvram StartupMute=%01
```

同步远程分支
```
git remote prune origin
```

