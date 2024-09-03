// ==UserScript==
// @name         Disable target="_blank" on Aliexpress items
// @namespace    https://github.com/Mathis-Gasparotto/tampermonkey-scripts/tree/master/scripts/maggio
// @version      0.1.1
// @updateURL    https://mathis-gasparotto.github.io/tampermonkey-scripts/scripts/maggio/noTargetBlankOnAliexpressItems.js
// @downloadURL  https://mathis-gasparotto.github.io/tampermonkey-scripts/scripts/maggio/noTargetBlankOnAliexpressItems.js
// @description  Oui
// @author       Maggio
// @match        https://aliexpress.com/*
// @match        https://*.aliexpress.com/*
// @exclude      https://*.aliexpress.com/gcp/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=aliexpress.com
// @run-at       document-body
// ==/UserScript==

(function () {
  const body = document.body
  let previousContent = body.innerHTML
  function checkForChanges() {
    const currentContent = body.innerHTML
    if (currentContent !== previousContent) {
      // console.log('Le contenu du body a été modifié.')

      const links = document.querySelectorAll('a[href*="aliexpress.com/item/"][target="_blank"]')
      links.forEach(link => {
        link.removeAttribute('target')
      })

      previousContent = currentContent
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
})();