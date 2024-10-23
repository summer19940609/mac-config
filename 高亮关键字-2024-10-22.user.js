// ==UserScript==
// @name         高亮关键字
// @namespace    http://tampermonkey.net/
// @version      2024-10-22
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=v2ex.com
// @grant        none
// ==/UserScript==
function highlightKeywords(keywords) {
    const textNodes = getTextNodes(document.body);
    textNodes.forEach(node => {
        let originalText = node.nodeValue;
        keywords.forEach(keyword => {
            const regex = new RegExp(`(${keyword})`, 'gi');
            // 使用正则表达式替换关键字
            originalText = originalText.replace(regex, (match) => {
                return `<span style="color:red;background-color:yellow;">${match}</span>`;
            });
        });
        // 创建一个临时的div来解析HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = originalText;
        // 将解析后的HTML插入到文档中
        const fragment = document.createDocumentFragment();
        while (tempDiv.firstChild) {
            fragment.appendChild(tempDiv.firstChild);
        }
        const parent = node.parentNode;
        if (parent) {
            parent.replaceChild(fragment, node);
        }
    });
}

function getTextNodes(element) {
    const textNodes = [];
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while (node = walker.nextNode()) {
        if (node.nodeValue?.trim().length > 0) {
            textNodes.push(node);
        }
    }
    return textNodes;
}

// 立即执行函数
(function () {
    'use strict';
    highlightKeywords(['生产', 'release_aliyun']);
})();