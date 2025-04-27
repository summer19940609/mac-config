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
            text: "node-mw-msh",
            url: "http://log.mwbyd.cn/ali/app/kibana#/discover?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now%2Fd,mode:quick,to:now%2Fd))&_a=(columns:!(_source),index:AZFt0P_BjNRlzHRlcbbz,interval:auto,query:(match_all:()),sort:!('@timestamp',desc))",
        },
        {
            text: "queue-book",
            url: "http://log.mwbyd.cn/ali/app/kibana#/discover?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now%2Fd,mode:quick,to:now%2Fd))&_a=(columns:!(_source),index:AZFzmgzNjNRlzHRll3em,interval:auto,query:(match_all:()),sort:!('@timestamp',desc))",
        },
        {
            text: "node-app-api",
            url: "http://log.mwbyd.cn/ali/app/kibana#/discover?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now%2Fd,mode:quick,to:now%2Fd))&_a=(columns:!(_source),index:AZFuWSYfjNRlzHRlymq0,interval:auto,query:(match_all:()),sort:!('@timestamp',desc))",
        },
        {
            text: "c_api_common",
            url: "http://log.mwbyd.cn/ali/app/kibana#/discover?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now%2Fd,mode:quick,to:now%2Fd))&_a=(columns:!(url,request_time,level),index:AZGTnrKgrXrUFj5QLS3T,interval:s,query:(match_all:()),sort:!('@timestamp',desc))"
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
        buttonContainer.style.left = '50%';
        buttonContainer.style.transform = 'translateX(-50%)';
        buttonContainer.style.fontSize = '18px';
        buttonContainer.style.padding = '5px';
        buttonContainer.style.background = '#c4ffc5';
        buttonContainer.style.position = 'fixed';
        buttonContainer.style.zIndex = '9999';
        buttonContainer.style.display = 'flex';
        buttonContainer.style.flexDirection = 'row';
        buttonContainer.style.alignItems = 'center';
        buttonContainer.style.justifyContent = 'center';

        const span = document.createElement('span');
        span.innerHTML = '快捷操作：';
        buttonContainer.appendChild(span)

        buttons.forEach(btnConfig => {
            const link = document.createElement('a');
            // 保存原始的颜色
            const originalColor = link.style.color;

            link.innerHTML = btnConfig.text;
            link.href = btnConfig.url;
            link.style.marginRight = '5px';
            // 添加鼠标悬停时的样式
            link.addEventListener('mouseover', function () {
                link.style.color = 'red';
            });
            // 移出鼠标悬停时的样式
            link.addEventListener('mouseout', function () {
                link.style.color = originalColor;
            });
            // link.target = '_blank'; // 新窗口打开
            buttonContainer.appendChild(link);
        });

        // 将整个按钮容器添加到body
        document.body.appendChild(buttonContainer);

        // 为View single document链接添加复制按钮
        const viewLinks = document.querySelectorAll('a');
        // 使用MutationObserver监听DOM变化
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    const newLinks = document.querySelectorAll('a');
                    newLinks.forEach(link => {
                        if (link.innerHTML.includes('View single document') && !link.nextSibling?.classList?.contains('copy-button')) {
                            // console.log('====> 发现新的View single document链接: ', link);
                            const copyButton = document.createElement('button');
                            copyButton.className = 'copy-button';
                            copyButton.innerHTML = '复制短链接';
                            copyButton.style.marginLeft = '5px';
                            copyButton.style.padding = '2px 5px';
                            copyButton.style.fontSize = '12px';
                            copyButton.style.cursor = 'pointer';

                            copyButton.addEventListener('click', function() {
                                const shortUrl = 'http://log.mwbyd.cn/ali/app/kibana' + link.getAttribute('href');
                                // console.log('====> shortUrl 的值为: ', shortUrl);
								if (navigator.clipboard && navigator.clipboard.writeText) {
									navigator.clipboard.writeText(shortUrl);
								} else {
									const textArea = document.createElement('textarea');
									textArea.value = shortUrl;
									textArea.style.position = 'fixed';
									textArea.style.opacity = 0;
									document.body.appendChild(textArea);
									textArea.select();
									document.execCommand('copy');
									document.body.removeChild(textArea);
								}
                            });

                            link.parentNode.insertBefore(copyButton, link.nextSibling);
                        }
                    });
                }
            });
        });

        // 开始观察整个文档的DOM变化
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

})();
