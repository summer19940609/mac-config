// ==UserScript==
// @name         高亮商品ID输入框
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  在商品列表页面高亮商品ID输入框
// @require      https://update.greasyfork.org/scripts/482702/1299083/Wait%20for%20key%20element.js
// @author       Your name
// @match        https://msh.mwee.cn/c_mshplatform/goodslist
// @match        https://m.st.9now.net/c_mshplatform/goodslist
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    waitForKeyElements('input[type="number"][placeholder="输入商品ID"]', commentCallbackFunction);

    // 主函数
    function commentCallbackFunction (jNode) {
        jNode.style.border = '2px solid red';
        jNode.style.boxShadow = '0 0 5px rgba(255, 0, 0, 0.5)';
    }
})();
