// ==UserScript==
// @name         Disable target="_blank" on Bing Search
// @namespace    https://github.com/Mathis-Gasparotto/tampermonkey-scripts/tree/master/scripts/maggio
// @version      0.1.2
// @updateURL    https://mathis-gasparotto.github.io/tampermonkey-scripts/scripts/maggio/noBingSearchTargetBlank.js
// @downloadURL  https://mathis-gasparotto.github.io/tampermonkey-scripts/scripts/maggio/noBingSearchTargetBlank.js
// @description  Prevent Bing Search from opening links in a new tab (on default settings) by removing the target="_blank" attribute on search results links
// @author       Maggio
// @match        https://bing.com/search?*
// @match        https://www.bing.com/search?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bing.com
// @run-at       document-end
// ==/UserScript==

(function () {
  setTimeout(() => {
    const links = document.querySelectorAll('a[target="_blank"]');
    links.forEach((link) => {
      link.removeAttribute("target");
    });
  }, 500);
})();
