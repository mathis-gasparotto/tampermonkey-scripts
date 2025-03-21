// ==UserScript==
// @name         Remove search params from path on Aliexpress
// @namespace    https://github.com/Mathis-Gasparotto/tampermonkey-scripts/tree/master/scripts/maggio
// @version      0.1.1
// @updateURL    https://mathis-gasparotto.github.io/tampermonkey-scripts/scripts/maggio/removeSearchParamsAliexpress.js
// @downloadURL  https://mathis-gasparotto.github.io/tampermonkey-scripts/scripts/maggio/removeSearchParamsAliexpress.js
// @description  bye bye huge links on Aliexpress
// @author       Maggio
// @match        https://*.aliexpress.com/*
// @exclude      https://www.aliexpress.com/p/order/detail.html*
// @exclude      https://www.aliexpress.com/p/reverse-pages/start.html*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=aliexpress.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict'

  window.history.replaceState('object or string', 'Title', window.location.origin + window.location.pathname)
})()
