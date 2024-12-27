// ==UserScript==
// @name         kibana测验
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  123
// @require      https://update.greasyfork.org/scripts/482702/1299083/Wait%20for%20key%20element.js
// @author       Your name
// @match        http://log.mwbyd.cn/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    waitForKeyElements('.global-nav-link__title', commentCallbackFunction);
    // 定义按钮配置
    const buttons = [
        {
            text: "msh",
            url: "http://log.mwbyd.cn/ali/app/kibana#/discover?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now%2Fd,mode:quick,to:now%2Fd))&_a=(columns:!(_source),index:AZFt0P_BjNRlzHRlcbbz,interval:auto,query:(match_all:()),sort:!('@timestamp',desc))",
        },
        {
            text: "queue-book",
            url: "http://log.mwbyd.cn/ali/app/kibana#/discover?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now%2Fd,mode:quick,to:now%2Fd))&_a=(columns:!(_source),index:AZFzmgzNjNRlzHRll3em,interval:auto,query:(match_all:()),sort:!('@timestamp',desc))",
        }
    ]

    // 高亮
    function commentCallbackFunction(jNode) {
        // 创建按钮组容器
        const exits = document.querySelector('#button-container');
        if (exits) {
            return;
        }

        const buttonContainer = document.createElement('div');
        buttonContainer.id = 'button-container';
        buttonContainer.style.top = '4px';
        buttonContainer.style.right = '40%';
        buttonContainer.style.fontSize = '20px';
        buttonContainer.style.padding = '5px';
        buttonContainer.style.background = '#c4ffc5';
        buttonContainer.style.position = 'fixed';
        buttonContainer.style.zIndex = '9999';
        buttonContainer.style.display = 'flex';
        buttonContainer.style.flexDirection = 'row';
        buttonContainer.style.alignItems = 'center';
        buttonContainer.style.justifyContent = 'center';

        buttons.forEach(btnConfig => {
            const link = document.createElement('a');
            link.innerHTML = btnConfig.text;
            link.href = btnConfig.url;
            link.style.marginRight = '5px';
            // link.target = '_blank'; // 新窗口打开
            buttonContainer.appendChild(link);
        });

        // 将整个按钮容器添加到body
        document.body.appendChild(buttonContainer);

    }

})();
