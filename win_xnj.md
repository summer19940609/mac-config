# Windows 配置与工具记录

## 目录

- [激活相关](#激活相关)
- [系统优化](#系统优化)
- [Windows 更新相关](#windows-更新相关)
- [Defender / 安全相关](#defender--安全相关)
- [OOBE 跳过微软账号](#oobe-跳过微软账号)
- [Microsoft Edge 相关](#microsoft-edge-相关)
- [Microsoft Store](#microsoft-store)
- [系统功能调整](#系统功能调整)
- [Ventoy](#ventoy)
- [常用工具](#常用工具)
- [装机软件](#装机软件)
- [Chrome 问题修复](#chrome-问题修复)
- [网络探测相关](#网络探测相关)

---

# 激活相关

## 沧水 KMS

[下载地址](https://kms.cangshui.net/kms/KMS-Cangshui.net.bat)

## Microsoft Activation Scripts

项目地址：

[Microsoft Activation Scripts](https://github.com/massgravel/Microsoft-Activation-Scripts)

PowerShell：

```powershell
irm https://get.activated.win | iex
```

---

# 系统优化

## Optimizer

- [GitHub 下载](https://github.com/hellzerg/optimizer/releases/download/16.7/Optimizer-16.7.exe)
- [Gh-Proxy 下载](https://gh-proxy.com/https://github.com/hellzerg/optimizer/releases/download/16.7/Optimizer-16.7.exe)

## Dism++

- [GitHub 下载](https://github.com/Chuyu-Team/Dism-Multi-language/releases/download/v10.1.1002.2/Dism++10.1.1002.1B.zip)
- [Gh-Proxy 下载](https://gh-proxy.com/https://github.com/Chuyu-Team/Dism-Multi-language/releases/download/v10.1.1002.2/Dism++10.1.1002.1B.zip)

## Steam++

[SteamTools 下载](https://gitee.com/rmbgame/SteamTools/releases/download/3.0.0-rc.16/Steam%20%20_v3.0.0-rc.16_win_x64.exe)

## 工具库 LDTools

[LDTools 官网](https://ldt.pc.wiki/)

---

# Windows 更新相关

## 禁用 MPO（Windows 11）

官方说明：

[NVIDIA 官方说明](https://nvidia.custhelp.com/app/answers/detail/a_id/5157)

注册表：

```reg
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\Dwm]
"OverlayTestMode"=dword:00000005
```

命令行：

```cmd
reg add HKLM\SOFTWARE\Microsoft\Windows\Dwm /v OverlayTestMode /t REG_DWORD /d 5 /f
```

## 卸载小组件

```cmd
winget uninstall MicrosoftWindows.Client.WebExperience_cw5n1h2txyewy
```

## 去除搜索栏信息流

```cmd
reg add "HKEY_CURRENT_USER\SOFTWARE\Policies\Microsoft\Windows\explorer" /v DisableSearchBoxSuggestions /t reg_dword /d 1 /f
```

## 推迟 Windows 更新

### 3000 天

```cmd
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings" /v FlightSettingsMaxPauseDays /t reg_dword /d 3000 /f
```

### 100 年

```cmd
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings" /v FlightSettingsMaxPauseDays /t reg_dword /d 36525 /f
```

---

# Defender / 安全相关

## Defender Remover

项目地址：

[Defender Remover](https://github.com/ionuttbara/windows-defender-remover)

免翻墙：

[Gh-Proxy 下载](https://gh-proxy.com/https://github.com/ionuttbara/windows-defender-remover/releases/download/release_def_12_8_4/DefenderRemover.exe)

## OFGB（关闭 Windows 11 广告）

项目：

[OFGB 官方项目](https://github.com/xM4ddy/OFGB)

汉化版：

[OFGB 汉化版](https://github.com/zetaloop/OFGB)

---

# OOBE 跳过微软账号

## 方法一：Shift + F10

```cmd
oobe\bypassnro
```

## 方法二

```cmd
start ms-cxh:localonly
```

## 方法三：注册表

```cmd
reg add HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\OOBE /v BypassNRO /t REG_DWORD /d 1 /f
shutdown -r -t 0
```

---

# Microsoft Edge 相关

## 卸载 Edge

[Remove-MS-Edge](https://github.com/ShadowWhisperer/Remove-MS-Edge)

## MSEdgeRedirect

[MSEdgeRedirect](https://github.com/rcmaehl/MSEdgeRedirect)

---

# Microsoft Store

## 安装 Microsoft Store

```cmd
wsreset -i
```

---

# 系统功能调整

## Win10 / Win11 卓越性能

```cmd
powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61
```

## 禁用 SysMain 服务

```text
services.msc
```

找到：

```text
SysMain
```

---

# Ventoy

[Ventoy 官方项目](https://github.com/ventoy/Ventoy)

---

# 常用工具

- EmEditor
- Registry Workshop
- Easy Context Menu
- ContextMenuManager

---

# 装机软件

- 火绒
- 微信
- QQ
- VSCode
- WPS
- Everything
- LocalSend
- SpaceSniffer
- WizTree
- TrafficMonitor
- MagicPods
- SumatraPDF
- PotPlayer
- Dism++
- Optimizer

---

# Chrome 问题修复

## Chrome 被“所属组织管理”

删除注册表：

```text
HKEY_CURRENT_USER\Software\Policies\Google\Chrome

HKEY_LOCAL_MACHINE\Software\Policies\Google\Chrome
```

删除：

```text
EnabledPlugins
```

---

# 网络探测相关

## 自动打开 MSN / 154.44.25.252

```reg
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NlaSvc\Parameters\Internet]
"EnableActiveProbing"=dword:00000000

[HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows\NetworkConnectivityStatusIndicator]
"NoActiveProbe"=dword:00000001

[HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows\NetworkConnectivityStatusIndicator]
"DisablePassivePolling"=dword:00000001
```

---

# 华硕主板

![](https://cdn.jsdelivr.net/gh/summer19940609/picture-repo@latest/uPic/ChatGPT%20Image%202026%E5%B9%B45%E6%9C%888%E6%97%A5%2014_23_36.png)

![](https://cdn.jsdelivr.net/gh/summer19940609/picture-repo//uPic/rxakXACpibRt.jpg)

