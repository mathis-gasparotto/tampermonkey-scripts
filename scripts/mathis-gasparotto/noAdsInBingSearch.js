// ==UserScript==
// @name         No ad results on bing search
// @namespace    http://tampermonkey.net/
// @version      0.2
// @updateURL    https://mathis-gasparotto.github.io/tampermonkey-scripts/scripts/mathis-gasparotto/noAdsInBingSearch.js
// @downloadURL  https://mathis-gasparotto.github.io/tampermonkey-scripts/scripts/mathis-gasparotto/noAdsInBingSearch.js
// @description  ui
// @author       Mathis Gasparotto
// @match        https://www.bing.com/search?q=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bing.com
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    GM_addStyle(`
    .b_ad.b_adTop {
        display: none;
    `)
    console.log('voici la v0.2')
})();