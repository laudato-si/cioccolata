if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let l={};const t=e=>s(e,o),a={module:{uri:o},exports:l,require:t};i[o]=Promise.all(r.map((e=>a[e]||t(e)))).then((e=>(n(...e),l)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"1bb7c3d60785de2abca13b87f045ee44"},{url:"assets/browser-CjZoOTQk.js",revision:null},{url:"assets/main-DLAqehRM.css",revision:null},{url:"assets/main-uDT-LVqp.js",revision:null},{url:"index.html",revision:"a86af377dbebac97e68ee1f98faf39bb"},{url:"public/404.html",revision:"9fe6f01e7eaa001550f752e6dc11081f"},{url:"registerSW.js",revision:"189931d40d1c430356224ade4a95ba50"},{url:"android-chrome-192x192.png",revision:"788509c990b14a7d0b7903baa1f234a8"},{url:"android-chrome-512x512.png",revision:"7489dd515d068386829f0d652a8c8a17"},{url:"maskable_icon.png",revision:"3276aa7d52e257490a9469ae07909f74"},{url:"manifest.webmanifest",revision:"7d56ab279278f60878db4c0561381bf6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
