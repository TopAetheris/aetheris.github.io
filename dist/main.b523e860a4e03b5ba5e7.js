(()=>{"use strict";var t={552:(t,n,e)=>{e.d(n,{A:()=>f});var r=e(601),o=e.n(r),a=e(314),i=e.n(a),s=e(417),c=e.n(s),p=new URL(e(166),e.b),d=i()(o());d.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);"]);var u=c()(p);d.push([t.id,`\t\t/* 样式统一文件 */\n\t\t* {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t\tbox-sizing: border-box;\n\t\t}\n\t\t/* 引入 Google Fonts 的 Roboto 字体 */\n\n\t\t/* 引入隶书字体 */\n\t\t@font-face {\n\t\t  font-family: 'lishu';\n\t\t  src: url(${u}) format('truetype');\n\t\t}\n\n\t\t/* 统一设置标题字体为隶书 */\n\t\th1, h2, h3, h4, h5, h6 {\n\t\t  font-family: 'lishu', sans-serif;\n\t\t}\n\n\t\t/* 设置站点正文、段落、链接、代码等内容的字体为 Roboto */\n\t\tbody, p, span, div, a, code {\n\t\t  font-family: 'Roboto', sans-serif;\n\t\t}\n\n\n\n\t\t@media (max-width: 1024px) {\n\t\t\theader {\n\t\t\t\tfont-size: 1.5rem;\n\t\t\t\tpadding: 15px;\n\t\t\t}\n\n\t\t\t.container {\n\t\t\t\tmargin: 10px;\n\t\t\t\tpadding: 10px;\n\t\t\t}\n\n\t\t\t.code-box {\n\t\t\t\tpadding: 15px;\n\t\t\t}\n\n\t\t\t.copy-btn {\n\t\t\t\tpadding: 8px 16px;\n\t\t\t\tfont-size: 12px;\n\t\t\t}\n\n\t\t\t.description {\n\t\t\t\tfont-size: 1rem;\n\t\t\t}\n\t\t}\n\n\t\t@media (max-width: 768px) {\n\t\t\theader {\n\t\t\t\tfont-size: 1.25rem;\n\t\t\t\tpadding: 15px 10px;\n\t\t\t}\n\n\t\t\t.container {\n\t\t\t\tmargin: 10px;\n\t\t\t\tpadding: 5px;\n\t\t\t}\n\n\t\t\t.code-box {\n\t\t\t\tpadding: 15px;\n\t\t\t}\n\n\t\t\t.copy-btn {\n\t\t\t\tpadding: 8px 14px;\n\t\t\t\tfont-size: 12px;\n\t\t\t}\n\n\t\t\t.description {\n\t\t\t\tfont-size: 0.9rem;\n\t\t\t}\n\t\t}\n\n\t\t@media (max-width: 480px) {\n\t\t\theader {\n\t\t\t\tfont-size: 1rem;\n\t\t\t\tpadding: 12px 10px;\n\t\t\t}\n\n\t\t\t.container {\n\t\t\t\tmargin: 5px;\n\t\t\t\tpadding: 5px;\n\t\t\t}\n\n\t\t\t.code-box {\n\t\t\t\tpadding: 10px;\n\t\t\t}\n\n\t\t\t.copy-btn {\n\t\t\t\tpadding: 6px 12px;\n\t\t\t\tfont-size: 10px;\n\t\t\t}\n\n\t\t\t.description {\n\t\t\t\tfont-size: 0.875rem;\n\t\t\t}\n\t\t}\n\n\t\t/* 超宽屏优化 */\n\t\t@media (min-width: 1600px) {\n\t\t\t.container {\n\t\t\t\tmax-width: 1400px; /* 超宽屏时扩展容器宽度 */\n\t\t\t}\n\n\t\t\theader {\n\t\t\t\tfont-size: 2.5rem; /* 更大字号适应宽屏 */\n\t\t\t}\n\n\t\t\t.code-box {\n\t\t\t\tfont-size: 1.1rem; /* 稍微增大代码框字体 */\n\t\t\t}\n\t\t}\n`,""]);const f=d},314:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var p=0;p<t.length;p++){var d=[].concat(t[p]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},417:t=>{t.exports=function(t,n){return n||(n={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]|(%20)/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],p=r.base?c[0]+r.base:c[0],d=a[p]||0,u="".concat(p," ").concat(d);a[p]=d+1;var f=e(u),l={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)n[f].references++,n[f].updater(l);else{var m=o(l,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=e(a[i]);n[s].references--}for(var c=r(t,o),p=0;p<a.length;p++){var d=e(a[p]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},659:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},166:(t,n,e)=>{t.exports=e.p+"4408435a960ec6c4f2d6.ttf"}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return t[r](a,a.exports,e),a.exports}e.m=t,e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.b=document.baseURI||self.location.href,e.nc=void 0;var r=e(72),o=e.n(r),a=e(825),i=e.n(a),s=e(659),c=e.n(s),p=e(56),d=e.n(p),u=e(540),f=e.n(u),l=e(113),m=e.n(l),h=e(552),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=f(),o()(h.A,v),h.A&&h.A.locals&&h.A.locals,console.log("Welcome to Aetheris.Top!")})();