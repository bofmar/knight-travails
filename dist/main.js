(()=>{"use strict";var e={61:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(81),a=r.n(n),o=r(645),i=r.n(o)()(a());i.push([e.id,'#board-wrapper{width:800px;height:800px;display:grid;grid-template-columns:repeat(8, 1fr);background-color:#fff;border:1px solid #fff;margin:50px 50px}#board-wrapper>.square{border:1px solid #000;aspect-ratio:1;display:flex;justify-content:center;align-items:center}.square>img{height:66.6666666667%;width:66.6666666667%}.placing>.square:hover{background-color:#555}.black{background-color:#000}.white{background-color:#fff}body{background-color:#000}body{background-color:#111;display:flex;gap:100px;align-items:center}#controls{color:#fff;display:grid;grid-template-areas:"head head" "place random" "goal clear" "bstart bstart" "signature signature";gap:10px}button{all:initial;font-size:1.4rem;color:#fff;font-family:monospace;padding:5px;border:2px solid #fff;border-radius:10px;cursor:pointer}#controls>h1{grid-area:head;font-size:2.2rem;text-align:center}#place{grid-area:place}#random{grid-area:random}#place-goal{grid-area:goal}#clear{grid-area:clear}#start{grid-area:bstart;text-align:center;font-weight:bold}#signature{grid-area:signature;display:flex;justify-content:center;align-items:center}#signature>img{width:50px;height:50px}',""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);n&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=n.base?s[0]+n.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=r(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var g=a(f,n);n.byIndex=c,t.splice(c,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=r(o[i]);t[c].references--}for(var s=n(e,a),d=0;d<o.length;d++){var l=r(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=s}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.nc=void 0,(()=>{const e=r.p+"images/3ca1d3d54c27774e8e1e.svg",t=r.p+"images/abf2a1e4418b1fc5d068.svg",n=r.p+"images/e9870fc09762b1760918.svg";var a=r(379),o=r.n(a),i=r(795),c=r.n(i),s=r(569),d=r.n(s),l=r(565),p=r.n(l),u=r(216),f=r.n(u),g=r(589),m=r.n(g),h=r(61),v={};v.styleTagTransform=m(),v.setAttributes=p(),v.insert=d().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=f(),o()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;const b=document.getElementById("board-wrapper");let y,x;!function(){!function(){const e=document.getElementById("board-wrapper");let t="black",r="white";for(let n=0;n<64;n++){const a=document.createElement("div");if(a.classList.add("square"),a.id=n.toString(),n%8==0){let e=t;t=r,r=e}n%2==0?a.classList.add(t):a.classList.add(r),e.appendChild(a)}}(),function(){const t=document.getElementById("signature"),r=new Image;r.src=e,t.appendChild(r)}(),function(){const e=document.getElementById("board-wrapper");document.getElementById("place").addEventListener("click",(()=>{e.classList.add("placing"),e.classList.add("placing-knight")}))}(),function(){const e=document.getElementById("board-wrapper");document.getElementById("place-goal").addEventListener("click",(()=>{e.classList.add("placing"),e.classList.add("placing-goal")}))}();const r=new Image;r.src=t;const a=new Image;a.src=n,Array.from(b.children).forEach((e=>{e.addEventListener("click",(()=>{b.classList.contains("placing")&&(b.classList.contains("placing-knight")?(y=parseInt(e.id),e.appendChild(r)):(x=parseInt(e.id),e.appendChild(a)),b.className="")}))}))}()})()})();