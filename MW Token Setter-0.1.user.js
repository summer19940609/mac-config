// ==UserScript==
// @name         MW Token Setter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  设置MW_BM_PHPSESSID到localStorage并自动刷新
// @author       Your name
// @match        http://localhost:8080/bmanage/index
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 创建输入框和按钮的容器
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.bottom = '10px';
    container.style.right = '10px';
    container.style.zIndex = '9999';
    container.style.padding = '10px';
    container.style.backgroundColor = '#fff';
    container.style.border = '1px solid #ccc';
    container.style.borderRadius = '4px';

    // 创建输入框
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = '输入 access-token';
    input.style.marginRight = '5px';
    input.style.padding = '5px';

    // 创建按钮
    const button = document.createElement('button');
    button.textContent = 'Set';
    button.style.padding = '5px 10px';
    button.style.backgroundColor = '#4CAF50';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.cursor = 'pointer';

    // 添加点击事件
    button.addEventListener('click', function() {
        const token = input.value.trim();
        if (token) {
            localStorage.setItem('MW_BM_PHPSESSID', token);
            setTimeout(() => {
                window.location.reload();
            }, 200);
        } else {
            alert('请输入有效的 token！');
        }
    });

    // 将元素添加到容器中
    container.appendChild(input);
    container.appendChild(button);

    // 将容器添加到页面中
    document.body.appendChild(container);
})();