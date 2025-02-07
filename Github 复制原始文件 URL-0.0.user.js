// ==UserScript==
// @name              Github 复制原始文件 URL
// @author            xnj
// @match             https://github.com/*
// @run-at            document-ready
// ==/UserScript==

const scanInterval = 2


const waitForFilelist = setInterval(() => {
    let fileListContainer = document.querySelector('div.Box > div.js-details-container.Details div') || document.querySelector('table')
    let fileList = []
    let isTable = false

    if (fileListContainer.tBodies) {
        fileList = fileListContainer.tBodies[0].children
        isTable = true
    } else {
        fileList = fileListContainer.children
    }

    if (fileList < 1) return

    appendButtons(fileList, isTable)

}, scanInterval * 1000)

function appendButtons(fileList, isTable = false) {
    let fileUrl = ''
    let rawFileUrl = ''
    for (let i = 0; i < fileList.length; i++) {
        let file = fileList[i]

        if (file.classList.contains('cp-btn-rdy')) continue

        file.classList.add('cp-btn-rdy')

        if (!isTable) {
            if (
                file.classList.contains('sr-only') ||
                file.childElementCount !== 4
            ) continue

            fileUrl = file.querySelector('div:nth-child(2) .js-navigation-open')
                .href
        } else {
            if (i === 0) continue

            if (
                file.classList.contains('sr-only')
            ) continue


            fileUrl = file.querySelector('a')
                .href
            file = file.querySelector('td:nth-child(4) > div')
        }
        //alert(fileUrl)
        // Dont add button if its a folder
        if (!fileUrl.includes('/blob/')) continue

        rawFileUrl = fileUrl.replace('/blob/', '/raw/')
        file.style = 'display: flex; justify-content: flex-end;'

        const rawTrueUrl = rawFileUrl.replace('/raw/', '/').replace('https://github.com', 'https://raw.githubusercontent.com')
        file.append(creatyCopyButton(rawTrueUrl))
        file.append(creatyDownButton(rawFileUrl))
    }
};

function creatyCopyButton(copyText) {
    const copy2clipboard = `
		<clipboard-copy aria-label="Copy" value="test value" data-view-component="true" class="" tabindex="0" role="button" title="Copy raw file url">
			<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy">
			<path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
			</svg>
		</clipboard-copy>`

    const copyButton = document.createElement('div')
    copyButton.setAttribute('role', 'gridcell')
    copyButton.style = 'margin-left: 10px; display: inline;'
    copyButton.innerHTML = copy2clipboard
    copyButton.children[0].value = copyText
    copyButton.children[0].style = 'cursor: pointer;'

    return copyButton
}
function creatyDownButton(copyText) {
    const copy2clipboard = `
<clipboard-copy aria-label="Download" value="test value" data-view-component="true" class="" tabindex="0" role="button" title="Download raw file url">
	<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-download">
		<path fill-rule="evenodd" d="M1.75 14.25A1.75 1.75 0 013.5 12.5h9a1.75 1.75 0 011.75 1.75v1.5a.75.75 0 01-.75.75H2.5a.75.75 0 01-.75-.75v-1.5zM10.75 9.25a.25.25 0 01.25.25v2.5a.25.25 0 01-.25.25H5.25a.25.25 0 01-.25-.25v-2.5a.25.25 0 01.25-.25h5.5zM8 1.75a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25H6.75a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25h1.5zM10.25 5.25l1.5 1.5a.25.25 0 01.35 0l3-3a.25.25 0 00-.35-.35L11 5.25 9.25 3.5a.25.25 0 00-.35.35z"></path>
	</svg>
</clipboard-copy>
`

    const copyButton = document.createElement('div')
    copyButton.setAttribute('role', 'gridcell')
    copyButton.style = 'margin-left: 10px; display: inline;'
    copyButton.innerHTML = copy2clipboard
    copyButton.children[0].value = copyText
    copyButton.children[0].style = 'cursor: pointer;'
    copyButton.addEventListener('click', () => {
        //    window.location.href = copyText;
        downloadFile(copyText, getFilenameFromUrl(copyText))
    })
    return copyButton
}
function downloadFile(url, filename) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.responseType = 'blob'
    xhr.onload = function () {
        if (xhr.status === 200) {
            var blob = xhr.response
            var objectUrl = window.URL.createObjectURL(blob)
            var a = document.createElement('a')
            a.href = objectUrl
            a.download = filename // 设置下载文件名
            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(objectUrl) // 清理 object URL
            document.body.removeChild(a) // 清理 DOM
        }
    }
    xhr.send()
}
function getFilenameFromUrl(url) {
    if (typeof url !== 'string' || url.trim() === '') {
        logMessage('getFilenameFromUrl', 'URL无效，默认文件名download', false)
        return 'download' // 返回一个默认的文件名
    }
    var lastSlashIndex = url.lastIndexOf('/')
    if (lastSlashIndex === -1 || lastSlashIndex === url.length - 1) {
        logMessage('getFilenameFromUrl', 'URL格式无效缺少文件名，默认文件名download', false)
        return 'download' // 返回一个默认的文件名
    }
    var filenameWithExtension = url.substring(lastSlashIndex + 1)
    var decodedFilename = decodeURIComponent(filenameWithExtension)
    decodedFilename = decodedFilename.replace(/%20/g, '_') // 替换所有的 %20 为下划线
    return decodedFilename
}