// ==UserScript==
// @name Disable AMP
// @namespace    adguard
// @version      1.0.49
// @description Ini adalah skrip pengguna yang sangat sederhana menonaktifkan AMP di laman hasil penelusuran Google.
// @homepageURL  https://adguard.com/
// @author       AdGuard
// @include      https://www.google.*/*
// @include      https://yandex.*/*
// @include      https://*.turbopages.org/*
// @include      https://*/amp/*
// @include      https://*/.amp/*
// @include      https://*/amp/s*/amp*
// @include      https://*/amp/s*/*
// @include      https://*/amp/s*
// @include      https://*/*/amp/*
// @include      https://amp.*
// @include      https://.amp*
// @include      https://*/amp-*/*
// @include      https://*/amp-*/*
// @include      https://*/amp*
// @include      https://*amp*
// @include      https://*amp.*
// @include      https://amp.*/*
// @include      https://*/amp/*
// @include      https://*/?amp*
// @include      https://*?amp=1*
// @include      https://*/*&amp*
// @include      https://*/*&amp=1*
// @exclude      https://www.orfonline.org/*
// @exclude      https://tehnichka.pro/*
// @exclude      https://yandex.ru/turbo/s/terrnews.com/*
// @exclude      https://amp.dev/*
// @run-at       document-end
// ==/UserScript==
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);function n(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a=/^https?:\/\/.+/i,i="__".concat(Math.random()),u=function(e){var t=e.querySelector('[aria-label="AMP logo"], [aria-label="Logo AMP"]');t&&(t.style.display="none")},c=function(){var e,t,r;e=/(amp\/|amp-|\.amp)/,t=function(e,t){e.setAttribute("href",t),e.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),document.location.href=t}),!0),u(e)},r=function(t){return t.replace(e,"")},n(document.querySelectorAll("a.amp_r[data-amp-cur]")).forEach((function(e){if(!e[i]){e[i]=!0;var n=e.getAttribute("data-amp-cur");if(n)t(e,r(n));else{var o=e.getAttribute("data-amp");if(o){var a=r(o);t(e,a)}}}})),document.querySelectorAll("a[data-amp-cdn]").forEach((function(e){var t=e.href;t.includes("cdn.ampproject.org")&&(t="https://"+t.substr(t.indexOf("cdn.ampproject.org/wp/s/")+24)),t.substr(8).startsWith("amp.")&&(t="https://"+t.substr(12)),(t=t.replace("?amp&","?&"))!==e.href&&(e.setAttribute("href",t),e.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),document.location.href=t}),!0),u(e))}))},l=document.location,s=l.href,f=l.origin;s.includes("https://yandex.ru/turbo")||s.includes("turbopages.org")?function(){var e=document.querySelector('script[data-name="post-message"][data-message]');if(e){var t=e.getAttribute("data-message"),r=JSON.parse(t);r&&r.originalUrl&&(document.location.href=r.originalUrl)}}():f.includes(".google.")?new MutationObserver(c).observe(document,{childList:!0,subtree:!0}):function(){var e=Number(sessionStorage.getItem("__disable_amp_redirected"));if(!(window.self!==window.top||e&&Date.now()-e<3e4)){var t=document.querySelector('head > link[rel="canonical"]');document.querySelector('head > script[src^="https://cdn.ampproject.org"]')&&t&&a.test(t.href)&&(sessionStorage.setItem("__disable_amp_redirected",Date.now()),window.top.location.href=t.href)}}()}]);
