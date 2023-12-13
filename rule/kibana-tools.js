// ==UserScript==
// @name         kibana快捷切换
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://log.mwbyd.cn/anchang/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mwbyd.cn
// @grant        unsafe-inline
// ==/UserScript==

(function() {
    'use strict';
    const arr = [
        { href: "http://log.mwbyd.cn/anchang/app/kibana#/discover?_g=(refreshInterval:(pause:!t,value:0),time:(from:now%2Fd,mode:quick,to:now%2Fd))&_a=(columns:!(url,request_time,level),index:'3da4d260-1964-11ee-b0eb-a5be98690e6e',interval:s,query:(language:lucene,query:''),sort:!('@timestamp',desc))", project: 'node-mw-msh'},
    ]
    let html = ''
    arr.forEach(v => {
        html += `<a class="kibana-tools" style="color: red;" target="_brank" href=${v.href}>${v.project}</a>`
    })
    $('.kbnGlobalNav').append(html)

})();