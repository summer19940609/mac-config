# If you come from bash you might have to change your $PATH.
export ZSH="/Users/mw/.oh-my-zsh"

ZSH_THEME="robbyrussell"

plugins=(
  git
  zsh-autosuggestions
  zsh-syntax-highlighting
  autojump
)

export https_proxy=http://127.0.0.1:7890
export http_proxy=http://127.0.0.1:7890
export all_proxy=socks5://127.0.0.1:7890
##上面的三行命令表示,每次新建一个终端会话时,默认让终端去走代理,这样就不需要每次都复制拷贝一下了,很方便,同时,代理程序去智能分流(国内 IP 直连,国外走代理)，避免了连接国内 IP 地址时“绕远”.
alias setproxy="export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890;echo \"Set proxy successfully\" "
alias unsetproxy="unset http_proxy;unset https_proxy;unset all_proxy;echo \"Unset proxy successfully\" " 
alias ipcn="curl myip.ipip.net"
alias ip="curl ip.sb"

source $ZSH/oh-my-zsh.sh
source ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
