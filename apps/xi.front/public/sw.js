if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),d={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-c5ed321c"],(function(e){"use strict";importScripts("fallback-vIGIcZw-MH-z5GiV8OX_x.js","worker-vIGIcZw-MH-z5GiV8OX_x.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/RoundedLogo.svg",revision:"1b9bf67e51bc6b8bf0945569d53bfd15"},{url:"/_next/static/chunks/1cc2734a.517e47735cf5143e.js",revision:"517e47735cf5143e"},{url:"/_next/static/chunks/250.cdc6b989dd3800be.js",revision:"cdc6b989dd3800be"},{url:"/_next/static/chunks/263.9c7e93d4d2d06ba2.js",revision:"9c7e93d4d2d06ba2"},{url:"/_next/static/chunks/286.bf562442d79d649f.js",revision:"bf562442d79d649f"},{url:"/_next/static/chunks/296550e7.682640e5f21f9393.js",revision:"682640e5f21f9393"},{url:"/_next/static/chunks/43-a79c3d90d325b470.js",revision:"a79c3d90d325b470"},{url:"/_next/static/chunks/490.90ee9321c7815df7.js",revision:"90ee9321c7815df7"},{url:"/_next/static/chunks/554.db58e51950dc00aa.js",revision:"db58e51950dc00aa"},{url:"/_next/static/chunks/577-237f09794f082376.js",revision:"237f09794f082376"},{url:"/_next/static/chunks/673.83964aacee655802.js",revision:"83964aacee655802"},{url:"/_next/static/chunks/890-a38f097fd3d44888.js",revision:"a38f097fd3d44888"},{url:"/_next/static/chunks/8bd53eb9.d900a3cee6414532.js",revision:"d900a3cee6414532"},{url:"/_next/static/chunks/918-f286feeb586c092a.js",revision:"f286feeb586c092a"},{url:"/_next/static/chunks/969-ea953f0989b2021c.js",revision:"ea953f0989b2021c"},{url:"/_next/static/chunks/97-f944157d7ab33f04.js",revision:"f944157d7ab33f04"},{url:"/_next/static/chunks/981-c19b87a3eaba45bb.js",revision:"c19b87a3eaba45bb"},{url:"/_next/static/chunks/framework-d6b15d8b3dd1dcdb.js",revision:"d6b15d8b3dd1dcdb"},{url:"/_next/static/chunks/main-f4aff0b4d3ff9f21.js",revision:"f4aff0b4d3ff9f21"},{url:"/_next/static/chunks/pages/404-760a1022e500c2a0.js",revision:"760a1022e500c2a0"},{url:"/_next/static/chunks/pages/_app-3ca33c072ae07ed0.js",revision:"3ca33c072ae07ed0"},{url:"/_next/static/chunks/pages/_error-ff10f69ee16dd524.js",revision:"ff10f69ee16dd524"},{url:"/_next/static/chunks/pages/_offline-9febba8baf310a90.js",revision:"9febba8baf310a90"},{url:"/_next/static/chunks/pages/community/%5Bcomid%5D-809fd8c59e709883.js",revision:"809fd8c59e709883"},{url:"/_next/static/chunks/pages/community/%5Bcomid%5D/page/%5BtypeId%5D-bf65b8134295230c.js",revision:"bf65b8134295230c"},{url:"/_next/static/chunks/pages/community/%5Bcomid%5D/posts/%5Bchid%5D-8c0fd39fead58de8.js",revision:"8c0fd39fead58de8"},{url:"/_next/static/chunks/pages/community/%5Bcomid%5D/posts/%5Bchid%5D/post/%5Bpostid%5D-66f71b2ba17a51b8.js",revision:"66f71b2ba17a51b8"},{url:"/_next/static/chunks/pages/community/%5Bcomid%5D/room/%5BtypeId%5D-ddba590201498fd6.js",revision:"ddba590201498fd6"},{url:"/_next/static/chunks/pages/community/%5Bcomid%5D/tasks/%5Bchid%5D-2d0cb02970b3443f.js",revision:"2d0cb02970b3443f"},{url:"/_next/static/chunks/pages/community/%5Bcomid%5D/tasks/%5Bchid%5D/task/%5Btaskid%5D-2622a493b3aea14a.js",revision:"2622a493b3aea14a"},{url:"/_next/static/chunks/pages/email/%5Bid%5D-e70a84a8527248c2.js",revision:"e70a84a8527248c2"},{url:"/_next/static/chunks/pages/home-2fa5df8a0ffa1b50.js",revision:"2fa5df8a0ffa1b50"},{url:"/_next/static/chunks/pages/index-9e3b45e3a76732db.js",revision:"9e3b45e3a76732db"},{url:"/_next/static/chunks/pages/invite/%5Bid%5D-79cc046020150dd3.js",revision:"79cc046020150dd3"},{url:"/_next/static/chunks/pages/resetpassword/%5Bid%5D-7d5a312431faa42c.js",revision:"7d5a312431faa42c"},{url:"/_next/static/chunks/pages/resetpassword/email-33a28c668e7b72b0.js",revision:"33a28c668e7b72b0"},{url:"/_next/static/chunks/pages/signup-23a2bd72eea6151b.js",revision:"23a2bd72eea6151b"},{url:"/_next/static/chunks/pages/testcomponents-a5a7b8f8fbaeb90a.js",revision:"a5a7b8f8fbaeb90a"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-317a4c5c15beb78d.js",revision:"317a4c5c15beb78d"},{url:"/_next/static/css/f7ec84b810a6aab6.css",revision:"f7ec84b810a6aab6"},{url:"/_next/static/vIGIcZw-MH-z5GiV8OX_x/_buildManifest.js",revision:"a73215d9d0fd7ff944411765e5c41c46"},{url:"/_next/static/vIGIcZw-MH-z5GiV8OX_x/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_offline",revision:"vIGIcZw-MH-z5GiV8OX_x"},{url:"/assets/apple-touch-icon.png",revision:"b369a75d619a1a10263da4ad80bd57e8"},{url:"/assets/auth/Frame 12.svg",revision:"b2a37f97fd2809a9629aa2db9d0a0c01"},{url:"/assets/auth/xi.effect.svg",revision:"99c2e3f36af708faf5f9a93bf552163c"},{url:"/assets/icons/icon-128x128.png",revision:"5b7e88d7c1e1e4a2f9d07e6379313df0"},{url:"/assets/icons/icon-144x144.png",revision:"2ca4a4fdc4ff33ac1bb6983e50a3c19c"},{url:"/assets/icons/icon-152x152.png",revision:"a8fddce30646c917bf5e618eb97b0453"},{url:"/assets/icons/icon-192x192.png",revision:"a7da8ab5151931cb203c82a95a41f74d"},{url:"/assets/icons/icon-384x384.png",revision:"cdf9b196536fe9e02a6e3dd3a4a57d5a"},{url:"/assets/icons/icon-48x48.png",revision:"35c072854c4b73e20b7a6ca7cbfd9951"},{url:"/assets/icons/icon-512x512.png",revision:"68d88847679899e785d937cf143c75d2"},{url:"/assets/icons/icon-72x72.png",revision:"b3a2b0cd97281e3d9b7d2d0a1591fadf"},{url:"/assets/icons/icon-96x96.png",revision:"97196a9034a392866a79bda0667f0333"},{url:"/assets/landing/logo-alpha.svg",revision:"2355211409bce4ab5c6e6c965be128ef"},{url:"/assets/landing/star.svg",revision:"7dd01446450307846e89ab93e10fb541"},{url:"/assets/landing/triangle.svg",revision:"9c6c9afc941b36f398e465f6ebfacbb2"},{url:"/assets/safari-pinned-tab.svg",revision:"fcf2d470492edfb2a6c354a0e5baf718"},{url:"/assets/test-cat.jpg",revision:"f25e8b5fa9ed05829282f2f0655c39b8"},{url:"/browserconfig.xml",revision:"5a4d2523d3ea47ea2e240f926f67637b"},{url:"/favicon.svg",revision:"0dd045887e3951b23ac1a97c5e0430c6"},{url:"/icons/arrow.svg",revision:"d5445ec54036b02ff262e7f443a65dda"},{url:"/loaderForDarkTheme.gif",revision:"12f15a4f2c397364d6cd31b271344116"},{url:"/loaderForWhiteTheme.gif",revision:"c0b140026b8df6107687458a616da5ad"},{url:"/logo.svg",revision:"e522a27658ec2f9574989d0136cc1db9"},{url:"/manifest.json",revision:"9e2a28245393ede47c68f1bd36279268"},{url:"/robots.txt",revision:"50a91b7447af86d67db1534bd09bc9a6"},{url:"/sitemap.xml",revision:"99b5c4d2102649db39ef7bcb78668a2b"},{url:"/xi.effect.svg",revision:"d9a43a1ed1b69f4e94e3551f35fa6e23"},{url:"/xieffect.svg",revision:"212504d2bc5cf1c1b6c1b9f384fa0d9a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
