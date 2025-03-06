// ==UserScript==
// @name         腾讯位置服务经纬度转换输入框内容
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  在指定元素后添加p标签，并转换a,b为b,a格式
// @author       你的名字
// @match        https://lbs.qq.com/getPoint/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 等待页面加载完成
    window.addEventListener('load', function() {
        // 获取目标元素
        const targetElement = document.querySelector('#app > div > div > div.layout-view > div > div.getpoint-info > div.getpoint-info-content > div:nth-child(2) > p.getpoint-info-label');

        if (targetElement) {
            // 创建一个新的p元素来显示转换后的文本
            const pElement = document.createElement('p');
            pElement.style.marginTop = '10px'; // 设置一些样式
            pElement.style.color = 'red';
            pElement.textContent = '等待输入...'; // 初始文本

            // 将p元素插入到目标元素后面
            targetElement.parentNode.insertBefore(pElement, targetElement.nextSibling);

            // 获取输入框元素
            const inputElement = document.querySelector('#location > div > input');

            if (inputElement) {
                // 监听输入框的input事件（用户输入）
                inputElement.addEventListener('input', function() {
                    updateText(inputElement.value);
                });

                // 使用MutationObserver监听输入框的value属性变化（程序动态更新）
                const observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
                            updateText(inputElement.value);
                        }
                    });
                });

                // 配置并启动观察
                observer.observe(inputElement, {
                    attributes: true // 监听属性变化
                });

                // 更新文本的函数
                function updateText(value) {
                    // 检查输入内容是否包含逗号
                    if (value.includes(',')) {
                        // 将a,b转换为b,a
                        const reversedValue = value.split(',').reverse().join(',');
                        pElement.textContent = `转换后: ${reversedValue}`;
                    } else {
                        pElement.textContent = `输入内容: ${value}`;
                    }
                }
            }
        }
    });
})();