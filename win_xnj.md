# win设置记录


### 激活相关

#### 沧水kms

https://kms.cangshui.net/kms/KMS-Cangshui.net.bat

#### Microsoft-Activation-Scripts

```
irm https://get.activated.win | iex
```

https://github.com/massgravel/Microsoft-Activation-Scripts 激活工具

**去除搜索界面信息流**
```
reg add "HKEY_CURRENT_USER\SOFTWARE\Policies\Microsoft\Windows\explorer" /v DisableSearchBoxSuggestions /t reg_dword /d 1 /f
```

**推迟 3000 天更新**
```
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings" /v FlightSettingsMaxPauseDays /t reg_dword /d 3000 /f
```

https://www.sordum.org/9470/windows-update-blocker-v1-8/

https://github.com/tsgrgo/windows-update-disabler

https://github.com/ionuttbara/windows-defender-remover

// 免翻墙下载链接

https://gh-proxy.com/https://github.com/ionuttbara/windows-defender-remover/releases/download/release_def_12_8_4/DefenderRemover.exe

关闭 Windows 11 系统广告的工具：OFGB

https://github.com/xM4ddy/OFGB

https://github.com/zetaloop/OFGB （汉化）

// 免翻墙下载链接

https://gh-proxy.com/https://github.com/zetaloop/OFGB/releases/download/v0.4/OFGB-ARM.exe

https://gh-proxy.com/https://github.com/zetaloop/OFGB/releases/download/v0.4/OFGB.exe

### 清除系统保留空间
```
DISM.exe /Online /Set-ReservedStorageState /State:Disabled
```

### 禁用win更新

WUB

```https://www.sordum.org/9470/windows-update-blocker-v1-8/ ```

### 关闭 Windows Defender

```https://iknow.lenovo.com.cn/spider/detail/kd/181036```

Defender Control v2.1

```https://github.com/ionuttbara/windows-defender-remover```


### 优雅的跳过 win10/win11 新系统强制登录微软账号

OOBE 界面直接 [shift+f10] 弹出 CMD ，往里头输 [oobe\bypassnro] 优雅重启

```oobe\bypassnro（失效）```

```no@thankyou.com (未知）```


日志查看软件，Emeditor，https://www.emeditor.com/

方法二 命令：

```bash
start ms-cxh:localonly
```

方法三 命令：

```bash
reg add HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\OOBE /v BypassNRO /t REG_DWORD /d 1 /f
重启命令：shutdown -r -t 0
```

### 卸载edge

```bash
https://github.com/ShadowWhisperer/Remove-MS-Edge
# 下载链接
https://gh-proxy.com/https://github.com/ShadowWhisperer/Remove-MS-Edge/releases/download/2.1/Remove-Edge.exe

Uninstall Microsoft Edge silently, through an executable or batch script.

# 仓库
https://github.com/rcmaehl/MSEdgeRedirect
# 下载链接
https://gh-proxy.com/https://github.com/rcmaehl/MSEdgeRedirect/releases/download/0.8.0.0/MSEdgeRedirect.exe

```


### 安装 Microsoft store

wsreset -i 联网自动下载安装 Microsoft store

或者下载 xbox，然后安装


### win10 卓越性能

```powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61```


### 运行库

mefcl.com/grlpackage.html

游戏运行库、游戏常用运行库 合集 | Game Runtime Libraries Package（v6.4.25.0614）


### 关闭VBS

Win11 24H2 中关闭 VBS，可以下载雷电模拟器。

https://lddl01.ldmnq.com/downloader/ldplayerinst9.exe?n=ldplayer9_ld_407589_ld.exe


### 工具库LDTools

```
https://ldt.pc.wiki/
```

### ventoy

下载链接

```
https://gh-proxy.com/https://github.com/ventoy/Ventoy/releases/download/v1.1.07/ventoy-1.1.07-windows.zip
# 备用
https://gitee.com/longpanda/Ventoy/releases/download/v1.1.06/ventoy-1.1.06-windows.zip
# 备用
https://mirrors.nju.edu.cn/github-release/ventoy/Ventoy/Ventoy%201.1.07%20release/ventoy-1.1.07-windows.zip

https://gh-proxy.com/https://github.com/ventoy/Ventoy/releases/download/v1.1.07/ventoy-1.1.07-livecd.iso

```
