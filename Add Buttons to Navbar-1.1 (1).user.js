// ==UserScript==
// @name         Add Buttons to Navbar
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  在navbar后添加按钮
// @author       Your Name
// @match        http://auto.mwbyd.cn/pages/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', function() {
        const navbarHeader = document.querySelector('.navbar-header');

        if (navbarHeader) {
            // 按钮配置数组
            const buttons = [
                { text: '列表', href: 'http://auto.mwbyd.cn/pages/flow_list.html?projectId=649', className: 'btn btn-warning' },
                { text: 'node-mw-msh', href: 'http://auto.mwbyd.cn/pages/flow.html?templateId=6058&projectId=649', className: 'btn btn-primary' },
                { text: 'QueueBookBasic', href: 'http://auto.mwbyd.cn/pages/flow.html?templateId=5155&projectId=649', className: 'btn btn-primary' },
                { text: 'CPAPI_AppNode', href: 'http://auto.mwbyd.cn/pages/flow.html?templateId=2916&projectId=649', className: 'btn btn-primary' },
                { text: 'OperateNode', href: 'http://auto.mwbyd.cn/pages/flow.html?templateId=4927&projectId=788', className: 'btn btn-primary' },
                { text: 'OperateNodeManager', href: 'http://auto.mwbyd.cn/pages/flow.html?templateId=5966&projectId=788', className: 'btn btn-primary' },
                { text: 'MSHPlatform', href: 'http://auto.mwbyd.cn/pages/flow.html?templateId=5930&projectId=2104', className: 'btn btn-primary' },
                { text: 'OperateAdmin (运营后台)', href: 'http://auto.mwbyd.cn/pages/flow.html?templateId=5191&projectId=2104', className: 'btn btn-primary' },
            ];

            // 创建并插入按钮
            buttons.forEach(buttonInfo => {
                const button = document.createElement('a');
                button.innerText = buttonInfo.text;
                button.href = buttonInfo.href;
                button.className = buttonInfo.className;
                button.style.marginLeft = '10px'; // 添加间隙
                navbarHeader.parentNode.insertBefore(button, navbarHeader.nextSibling);
            });
        }
    });
})();