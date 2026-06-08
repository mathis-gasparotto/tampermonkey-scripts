// ==UserScript==
// @name         No premium ad on Finary
// @namespace    https://github.com/Mathis-Gasparotto/tampermonkey-scripts/tree/master/scripts/maggio
// @version      0.0.1
// @updateURL    https://mathis-gasparotto.github.io/tampermonkey-scripts/scripts/maggio/noPremiumAdOnFinary.js
// @downloadURL  https://mathis-gasparotto.github.io/tampermonkey-scripts/scripts/maggio/noPremiumAdOnFinary.js
// @description  No premium ad on Finary
// @author       Maggio
// @match        https://app.finary.com/v2/premium?origin=finary_plus_modal
// @icon         https://www.google.com/s2/favicons?sz=64&domain=finary.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict'

  window.location.href = 'https://app.finary.com/v2/'
})()
