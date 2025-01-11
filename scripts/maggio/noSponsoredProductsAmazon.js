// ==UserScript==
// @name         No sponsored products on Amazon (FR) search results
// @namespace    https://github.com/Mathis-Gasparotto/tampermonkey-scripts/tree/master/scripts/maggio
// @version      0.2.0
// @updateURL    https://mathis-gasparotto.github.io/tampermonkey-scripts/scripts/maggio/noSponsoredProductsAmazon.js
// @downloadURL  https://mathis-gasparotto.github.io/tampermonkey-scripts/scripts/maggio/noSponsoredProductsAmazon.js
// @description  NTM Amazon
// @author       Maggio
// @match        https://www.amazon.fr/s?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.fr
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function () {
  // let sponsoredProducts = Array.from(document.querySelectorAll('.s-result-item.s-asin.AdHolder'))
  //   sponsoredProducts.forEach(e => {
  //     e.parentNode.removeChild(e)
  // })
  GM_addStyle(`
    .s-result-item.s-asin.AdHolder {
      display: none;
    }
  `);
})();