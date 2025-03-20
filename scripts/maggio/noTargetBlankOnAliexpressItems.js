// ==UserScript==
// @name         Disable target="_blank" on Aliexpress items
// @namespace    https://github.com/Mathis-Gasparotto/tampermonkey-scripts/tree/master/scripts/maggio
// @version      0.1.4
// @updateURL    https://mathis-gasparotto.github.io/tampermonkey-scripts/scripts/maggio/noTargetBlankOnAliexpressItems.js
// @downloadURL  https://mathis-gasparotto.github.io/tampermonkey-scripts/scripts/maggio/noTargetBlankOnAliexpressItems.js
// @description  Oui
// @author       Maggio
// @match        https://aliexpress.com/*
// @match        https://*.aliexpress.com/*
// @exclude      https://*.aliexpress.com/gcp/*
// @exclude      https://*.aliexpress.com/ssr/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=aliexpress.com
// @run-at       document-end
// ==/UserScript==

;(function () {
  let previousLinks = document.querySelectorAll('a[href*="aliexpress.com/item/"][target="_blank"]')
  previousLinks.forEach((link) => {
    link.removeAttribute('target')
  })
  // let previousFusionProducts = document.querySelectorAll('#fusionPageCard div[class*="fusion-page-card--listItem--"] div[class*="productItem--itemImg--"], #fusionPageCard div[class*="fusion-page-card--listItem--"] div[class*="productItem--itemInfoTitle--"]')
  function checkForChanges() {
    const currentLinks = document.querySelectorAll('a[href*="aliexpress.com/item/"][target="_blank"]')
    // const currentFusionProducts = document.querySelectorAll('#fusionPageCard div[class*="fusion-page-card--listItem--"] div[class*="productItem--itemImg--"], #fusionPageCard div[class*="fusion-page-card--listItem--"] div[class*="productItem--itemInfoTitle--"]')

    const sameLinks =
      currentLinks.length === previousLinks.length &&
      Object.values(currentLinks).every(function (value, index) {
        return value === previousLinks[index]
      })
    // const sameFusionProducts = currentFusionProducts.length === previousFusionProducts.length && Object.values(currentFusionProducts).every(function(value, index) { return value === previousFusionProducts[index]})

    // if (!sameLinks || !sameFusionProducts) {
    if (!sameLinks) {
      // console.log('Les liens ont été modifiés.')

      currentLinks.forEach((link) => {
        link.removeAttribute('target')
      })

      // const fusionProducts = document.querySelectorAll('#fusionPageCard div[class*="fusion-page-card--listItem--"] div[class*="productItem--itemImg--"], #fusionPageCard div[class*="fusion-page-card--listItem--"] div[class*="productItem--itemInfoTitle--"]')
      // console.log("fusionProducts", fusionProducts)

      previousLinks = currentLinks
      // previousFusionProducts = fusionProducts
    }
  }
  setInterval(checkForChanges, 500)

  // const config = { childList: true, subtree: true }
  // const observer = new MutationObserver((mutationsList, observer) => {
  //   for (let mutation of mutationsList) {
  //     if (mutation.type === 'childList') {
  //       console.log('Le contenu du DOM a été modifié.')

  //     }
  //   }
  // })
  // observer.observe(body, config)
})()
