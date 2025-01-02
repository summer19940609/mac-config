// ==UserScript==
// @name         高亮商品ID输入框
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  在商品列表页面高亮商品ID输入框
// @require      https://update.greasyfork.org/scripts/482702/1299083/Wait%20for%20key%20element.js
// @author       Your name
// @match        https://msh.mwee.cn/c_mshplatform/*
// @match        https://m.st.9now.net/c_mshplatform/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    waitForKeyElements('input[placeholder="输入商品ID"]', commentCallbackFunction);
    waitForKeyElements('input[placeholder="请输入商品ID"]', commentCallbackFunction);
    waitForKeyElements('input[placeholder="输入微信openid"]', commentCallbackFunction);


    // 高亮
    function commentCallbackFunction(jNode) {
        jNode.style.border = '2px solid red';
        jNode.style.boxShadow = '0 0 5px rgba(255, 0, 0, 0.5)';
    }

})();
