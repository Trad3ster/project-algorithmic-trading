(()=>{"use strict";var e,c,a,t,r,d={},f={};function o(e){var c=f[e];if(void 0!==c)return c.exports;var a=f[e]={id:e,loaded:!1,exports:{}};return d[e].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=d,o.c=f,e=[],o.O=(c,a,t,r)=>{if(!a){var d=1/0;for(i=0;i<e.length;i++){a=e[i][0],t=e[i][1],r=e[i][2];for(var f=!0,b=0;b<a.length;b++)(!1&r||d>=r)&&Object.keys(o.O).every((e=>o.O[e](a[b])))?a.splice(b--,1):(f=!1,r<d&&(d=r));if(f){e.splice(i--,1);var n=t();void 0!==n&&(c=n)}}return c}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[a,t,r]},o.n=e=>{var c=e&&e.__esModule?()=>e.default:()=>e;return o.d(c,{a:c}),c},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var d={};c=c||[null,a({}),a([]),a(a)];for(var f=2&t&&e;"object"==typeof f&&!~c.indexOf(f);f=a(f))Object.getOwnPropertyNames(f).forEach((c=>d[c]=()=>e[c]));return d.default=()=>e,o.d(r,d),r},o.d=(e,c)=>{for(var a in c)o.o(c,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:c[a]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((c,a)=>(o.f[a](e,c),c)),[])),o.u=e=>"assets/js/"+({53:"935f2afb",686:"debda829",713:"b5fae9ec",720:"7695628c",740:"986fb218",751:"6c261d36",1270:"f85a1a6c",1506:"71f2d541",1650:"fc3d0314",1996:"9ca7995a",2602:"3969468d",3085:"1f391b9e",3196:"a854a899",3206:"f8409a7e",3211:"83adae89",3344:"819c0b7d",3470:"97b83a15",3729:"80b850c9",3783:"208c22c0",3860:"fb650936",3961:"ed7b2b8d",4033:"72dce597",4195:"c4f5d8e4",4533:"92d98dc0",4966:"86928986",5216:"863266b1",5509:"61dd07e5",5813:"f99371b7",6225:"c0b1a2d5",6582:"f8907193",6585:"61760bca",6654:"5410c81d",6711:"ecf98249",6937:"c28e829f",7349:"db8db704",7414:"393be207",7607:"651d1379",7799:"fdeefd99",7918:"17896441",8126:"91c4cfa2",8513:"05989c46",8525:"8c39825e",8612:"f0ad3fbb",8794:"5bc0003a",9123:"25cd59bd",9169:"c8f9dd72",9496:"43d31808",9514:"1be78505",9617:"bafd4460",9817:"14eb3368"}[e]||e)+"."+{53:"9b206cb0",686:"88d26c26",713:"216700bc",720:"cb0cc9bf",740:"08f677a9",751:"732ee4b7",1270:"fb51f210",1506:"11f725ba",1650:"c811838b",1996:"91a790f5",2547:"d212db1e",2602:"d14693ee",3085:"3108908b",3196:"34c529d1",3206:"a2d22fe3",3211:"fb5623e7",3344:"2aed7c64",3470:"634b6829",3729:"88b35509",3783:"c076f8d9",3860:"e326aec5",3961:"10671afb",4033:"73833f12",4195:"911969a8",4533:"8a8633c4",4912:"7511b8d6",4966:"1a149363",4972:"e70ff803",5216:"929da084",5509:"16c8da6c",5813:"3e37621c",6225:"15480cc7",6582:"9ec0f41f",6585:"5c8eb6f2",6654:"2e4ae3b8",6711:"e222b848",6937:"8e7b7c63",7349:"a0d53825",7414:"b3058095",7607:"ef1d4c9c",7799:"3f3f02ca",7918:"25f79f4f",8126:"abb553eb",8513:"6f8ff1c9",8525:"5df1b81f",8612:"31e0dc56",8794:"fac06ffa",9123:"215c1466",9169:"249a068d",9496:"23f4fd1e",9514:"ce69a6d8",9617:"ed309610",9817:"6e502322"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,c)=>Object.prototype.hasOwnProperty.call(e,c),t={},r="create-project-docs:",o.l=(e,c,a,d)=>{if(t[e])t[e].push(c);else{var f,b;if(void 0!==a)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==r+a){f=l;break}}f||(b=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,o.nc&&f.setAttribute("nonce",o.nc),f.setAttribute("data-webpack",r+a),f.src=e),t[e]=[c];var u=(c,a)=>{f.onerror=f.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],f.parentNode&&f.parentNode.removeChild(f),r&&r.forEach((e=>e(a))),c)return c(a)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=u.bind(null,f.onerror),f.onload=u.bind(null,f.onload),b&&document.head.appendChild(f)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.p="/project-algorithmic-trading/",o.gca=function(e){return e={17896441:"7918",86928986:"4966","935f2afb":"53",debda829:"686",b5fae9ec:"713","7695628c":"720","986fb218":"740","6c261d36":"751",f85a1a6c:"1270","71f2d541":"1506",fc3d0314:"1650","9ca7995a":"1996","3969468d":"2602","1f391b9e":"3085",a854a899:"3196",f8409a7e:"3206","83adae89":"3211","819c0b7d":"3344","97b83a15":"3470","80b850c9":"3729","208c22c0":"3783",fb650936:"3860",ed7b2b8d:"3961","72dce597":"4033",c4f5d8e4:"4195","92d98dc0":"4533","863266b1":"5216","61dd07e5":"5509",f99371b7:"5813",c0b1a2d5:"6225",f8907193:"6582","61760bca":"6585","5410c81d":"6654",ecf98249:"6711",c28e829f:"6937",db8db704:"7349","393be207":"7414","651d1379":"7607",fdeefd99:"7799","91c4cfa2":"8126","05989c46":"8513","8c39825e":"8525",f0ad3fbb:"8612","5bc0003a":"8794","25cd59bd":"9123",c8f9dd72:"9169","43d31808":"9496","1be78505":"9514",bafd4460:"9617","14eb3368":"9817"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(c,a)=>{var t=o.o(e,c)?e[c]:void 0;if(0!==t)if(t)a.push(t[2]);else if(/^(1303|532)$/.test(c))e[c]=0;else{var r=new Promise(((a,r)=>t=e[c]=[a,r]));a.push(t[2]=r);var d=o.p+o.u(c),f=new Error;o.l(d,(a=>{if(o.o(e,c)&&(0!==(t=e[c])&&(e[c]=void 0),t)){var r=a&&("load"===a.type?"missing":a.type),d=a&&a.target&&a.target.src;f.message="Loading chunk "+c+" failed.\n("+r+": "+d+")",f.name="ChunkLoadError",f.type=r,f.request=d,t[1](f)}}),"chunk-"+c,c)}},o.O.j=c=>0===e[c];var c=(c,a)=>{var t,r,d=a[0],f=a[1],b=a[2],n=0;if(d.some((c=>0!==e[c]))){for(t in f)o.o(f,t)&&(o.m[t]=f[t]);if(b)var i=b(o)}for(c&&c(a);n<d.length;n++)r=d[n],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(i)},a=self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[];a.forEach(c.bind(null,0)),a.push=c.bind(null,a.push.bind(a))})(),o.nc=void 0})();