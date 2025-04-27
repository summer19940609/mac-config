// ==UserScript==
// @name         获取MW_BM_PHPSESSID
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  在页面右下角添加一个按钮，用于复制MW_BM_PHPSESSID
// @author       Your name
// @match        http://shop.test.9now.net/bmanage/*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	// 创建按钮样式
	const style = document.createElement('style');
	style.textContent = `
        .copy-token-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            z-index: 9999;
        }
        .copy-token-btn:hover {
            background-color: #45a049;
        }
    `;
	document.head.appendChild(style);

	// 创建按钮
	const button = document.createElement('button');
	button.className = 'copy-token-btn';
	button.textContent = '复制Token';
	document.body.appendChild(button);

	// 添加点击事件
	button.addEventListener('click', function () {
		const token = localStorage.getItem('MW_BM_PHPSESSID');
		if (token) {
			const textArea = document.createElement('textarea');
			textArea.value = token;
			document.body.appendChild(textArea);
			textArea.select();
			try {
				document.execCommand('copy');
				textArea.remove();
			} catch (err) {
				console.error('复制失败:', err);
			}
		} else {
			button.textContent = '未找到Token';
			setTimeout(() => {
				button.textContent = '复制Token';
			}, 2000);
		}
	});
})();
