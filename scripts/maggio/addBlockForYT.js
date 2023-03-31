// ==UserScript==
// @name         Ad block for YT
// @namespace    https://github.com/Mathis-Gasparotto/tampermonkey-scripts/tree/master/scripts/maggio
// @version      0.2.2
// @updateURL    https://mathis-gasparotto.github.io/tampermonkey-scripts/scripts/maggio/addBlockForYT.js
// @downloadURL  https://mathis-gasparotto.github.io/tampermonkey-scripts/scripts/maggio/addBlockForYT.js
// @description  disable top ads on YT
// @author       Maggio
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
  GM_addStyle(`
    .ytd-page-top-ad-layout-renderer,
    ytd-promoted-video-renderer,
    .ytd-promoted-video-renderer,
    ytd-in-feed-ad-layout-renderer,
    ytd-promoted-sparkles-web-renderer,
    .ytd-promoted-sparkles-web-renderer,
    ytd-ad-slot-renderer {
      display: none;
    }
  `)
})();