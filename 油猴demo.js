// ==UserScript==
// @name         美味测试
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  美味商家添加个跳转登录页
// @author       xnj
// @match        http://shop.test.9now.net/**
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    $('body').append('<div id="toLogin" style=" position: absolute; z-index: 1000; width: 100px; height: 100px; background: #e8e8e8; right: 100px; bottom: 100px; border: 5px solid #e8e8e8; line-height: 100px; text-align: center; font-size: 20px; "><a href="http://shop.test.9now.net/bmanage/account/login?type=">登录页</a></div>')
})();
