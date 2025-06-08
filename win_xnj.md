测试1

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

关闭 Windows 11 系统广告的工具：OFGB

https://github.com/xM4ddy/OFGB

### 清除系统保留空间
```
DISM.exe /Online /Set-ReservedStorageState /State:Disabled
```

### 禁用win更新

WUB

https://www.sordum.org/9470/windows-update-blocker-v1-8/

### 关闭 Windows Defender

https://iknow.lenovo.com.cn/spider/detail/kd/181036

Defender Control v2.1

https://github.com/ionuttbara/windows-defender-remover


优雅的跳过 win10/win11 新系统强制登录微软账号

OOBE 界面直接 [shift+f10] 弹出 CMD ，往里头输 [oobe\bypassnro] 优雅重启

oobe\bypassnro（失效）

no@thankyou.com (未知）


**最新 start ms-cxh:localonly 调出账户设置窗口，快速创建账号然后确定重启即可**



