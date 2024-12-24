// ==UserScript==
// @name         高亮商品ID输入框
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  在商品列表页面高亮商品ID输入框
// @author       Your name
// @match        https://msh.mwee.cn/c_mshplatform/goodslist
// @match        https://m.st.9now.net/c_mshplatform/goodslist
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 页面加载完成后执行
    window.addEventListener('load', function() {
        // 查找目标input元素
        const inputElement = document.querySelector('input[type="number"][placeholder="输入商品ID"]');

        // 如果找到元素，修改其样式
        if (inputElement) {
            inputElement.style.border = '2px solid red';
            inputElement.style.boxShadow = '0 0 5px rgba(255, 0, 0, 0.5)';
        }
    });
})();