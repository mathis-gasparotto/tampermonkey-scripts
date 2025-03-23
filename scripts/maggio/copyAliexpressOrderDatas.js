// ==UserScript==
// @name         Copy Aliexpress order datas
// @namespace    https://github.com/Mathis-Gasparotto/tampermonkey-scripts/tree/master/scripts/maggio
// @version      0.1.2
// @updateURL    https://mathis-gasparotto.github.io/tampermonkey-scripts/scripts/maggio/copyAliexpressOrderDatas.js
// @downloadURL  https://mathis-gasparotto.github.io/tampermonkey-scripts/scripts/maggio/copyAliexpressOrderDatas.js
// @description  Copy Aliexpress order datas for past on a google sheet
// @author       Maggio
// @match        https://www.aliexpress.com/p/order/index.html
// @match        https://www.aliexpress.com/p/order/index.html?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=aliexpress.com
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict'

  const tab = '	'
  const ordersDone = []
  let interval = null

  function addButton(orders) {
    if (Array.from(orders).filter((order) => !ordersDone.includes(order)).length > 0) clearInterval(interval)

    Array.from(orders)
      .filter((order) => !ordersDone.includes(order))
      .forEach((order) => {
        const header = order.getElementsByClassName('order-item-header-status')[0]

        const orderNumber = order.getElementsByClassName('order-item-header-right-info')[0].getElementsByTagName('div')[1].innerText.match(/(\d+)/)[0]
        const orderDate = new Date(
          order
            .getElementsByClassName('order-item-header-right-info')[0]
            .getElementsByTagName('div')[0]
            .innerText.match(/:\s(.+)/)[1]
        ).toLocaleDateString('en-US')
        const orderTotal = order
          .getElementsByClassName('order-item-content-opt-price-total')[0]
          .innerText.match(/(\d+),(\d{2})/)[0]
          .replace(',', '.')

        const productName = order.getElementsByClassName('order-item-content-info-name')[0]?.innerText ?? ''
        const productLink = order.getElementsByClassName('order-item-content-info-name')[0]?.getElementsByTagName('a')[0].href ?? ''
        const productQuantity = order.getElementsByClassName('order-item-content-info-number-quantity')[0]?.innerText.match(/(\d+)/)[0] ?? ''
        const productUnitPrice =
          order
            .getElementsByClassName('order-item-content-info-number')[0]
            ?.getElementsByTagName('div')[0]
            .innerText.match(/(\d+),(\d{2})/)[0]
            .replace(',', '.') ?? ''

        const copySpan = document.createElement('span')
        copySpan.style.fontSize = '13px'
        copySpan.style.fontWeight = 500
        copySpan.style.lineHeight = 1.5
        copySpan.classList.add('order-item-header-right-copy')
        copySpan.id = orderNumber
        copySpan.innerText = 'Copier les données'

        copySpan.addEventListener('click', () => {
          navigator.clipboard.writeText(orderDate + tab + '=HYPERLINK("' + productLink + '", "' + productName + '")' + tab + '=HYPERLINK("https://www.aliexpress.com/p/order/detail.html?orderId=' + orderNumber + '", "' + orderNumber + '")' + tab + productUnitPrice + tab + productQuantity + tab + orderTotal)

          //const range = document.createRange()
          //range.selectNode(productName)
          //const selection = window.getSelection()
          //selection.remo/llRanges()
          //selection.addRange(range)
          //document.execCommand('copy')
        })

        header.appendChild(copySpan)

        ordersDone.push(order)
      })
  }

  addButton(document.getElementsByClassName('order-item'))

  const orderMoreBtn = document.getElementsByClassName('order-more')[0].getElementsByTagName('button')[0]
  orderMoreBtn.addEventListener('click', () => {
    interval = setInterval(() => {
      addButton(document.getElementsByClassName('order-item'))
    }, 2000)
  })
})()
