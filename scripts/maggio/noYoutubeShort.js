// ==UserScript==
// @name         Remove Shorts from Youtube
// @namespace    https://github.com/Mathis-Gasparotto/tampermonkey-scripts/tree/master/scripts/maggio
// @version      0.2.1
// @updateURL    https://mathis-gasparotto.github.io/tampermonkey-scripts/scripts/maggio/noYoutubeShort.js
// @downloadURL  https://mathis-gasparotto.github.io/tampermonkey-scripts/scripts/maggio/noYoutubeShort.js
// @description  Save your time
// @author       Maggio
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        GM_addStyle
// @grant        window.onurlchange
// @run-at       document-start
// ==/UserScript==

(function () {
  GM_addStyle(`
    /* Home page */
    ytd-rich-shelf-renderer[is-shorts] {
      display: none;
    }

    /* Side suggestions */
    ytd-reel-shelf-renderer {
      display: none;
    }

    /* Shorts btn on side bar */
    #guide-content a.ytd-guide-entry-renderer[title="Shorts"] {
      display: none;
    }
  `)
  if (window.location.href.includes('youtube.com/shorts')) {
    window.location.href = window.location.href.replace('youtube.com/shorts/', 'youtube.com/watch?v=')
  }
  if (window.onurlchange === null) {
    window.addEventListener('urlchange', () => {
      if (window.location.href.includes('youtube.com/shorts')) {
        window.location.href = window.location.href.replace('youtube.com/shorts/', 'youtube.com/watch?v=')
      }
    })
  }


})();