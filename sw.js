if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let a={};const l=e=>n(e,o),t={module:{uri:o},exports:a,require:l};i[o]=Promise.all(r.map((e=>t[e]||l(e)))).then((e=>(s(...e),a)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"1bb7c3d60785de2abca13b87f045ee44"},{url:"assets/main-OWoP1E1q.css",revision:null},{url:"assets/main-W_cR5q3Z.js",revision:null},{url:"index.html",revision:"fe690ab811f2b155a0ab4a0bd11b835b"},{url:"public/404.html",revision:"9fe6f01e7eaa001550f752e6dc11081f"},{url:"registerSW.js",revision:"189931d40d1c430356224ade4a95ba50"},{url:"favicon.ico",revision:"eac25b670b83be28c10b34a3b73d4907"},{url:"maskable-icon-512x512.png",revision:"91cb74cd026f6f89ca10d5547641b06c"},{url:"pwa-192x192.png",revision:"9bb063aa0764571f9c28a56024657d39"},{url:"pwa-512x512.png",revision:"2a64a129b392130bf53deaa2793bfeab"},{url:"pwa-64x64.png",revision:"44cd71567278b2f08443074d812cf53f"},{url:"manifest.webmanifest",revision:"7c15b21ded05a6664fe573abd691612f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
