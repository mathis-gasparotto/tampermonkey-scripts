// ==UserScript==
// @name         No ad results on bing search
// @namespace    https://github.com/Mathis-Gasparotto/tampermonkey-scripts/tree/master/scripts/maggio
// @version      0.4.1
// @updateURL    https://mathis-gasparotto.github.io/tampermonkey-scripts/scripts/maggio/noAdsInBingSearch.js
// @downloadURL  https://mathis-gasparotto.github.io/tampermonkey-scripts/scripts/maggio/noAdsInBingSearch.js
// @description  ui
// @author       Maggio
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
})();