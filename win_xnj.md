
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
