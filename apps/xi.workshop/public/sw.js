if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),d={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-c5ed321c"],(function(e){"use strict";importScripts("fallback-VSu4OGf2UQoib60NjPCH0.js","worker-VSu4OGf2UQoib60NjPCH0.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/RoundedLogo.svg",revision:"bb4c57567d7b2cf0f043532e4fb98c92"},{url:"/_next/static/VSu4OGf2UQoib60NjPCH0/_buildManifest.js",revision:"fb358012b281479a82f1d80a4d0b6c85"},{url:"/_next/static/VSu4OGf2UQoib60NjPCH0/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1cc2734a.de97df025e4c2650.js",revision:"de97df025e4c2650"},{url:"/_next/static/chunks/220.efdc4f7a37d8692e.js",revision:"efdc4f7a37d8692e"},{url:"/_next/static/chunks/250.116fbfa8a30d310a.js",revision:"116fbfa8a30d310a"},{url:"/_next/static/chunks/296550e7.a08f4c072c5a315a.js",revision:"a08f4c072c5a315a"},{url:"/_next/static/chunks/376-e6cf4cd0ac98f458.js",revision:"e6cf4cd0ac98f458"},{url:"/_next/static/chunks/387.c876dd8558fbb5a0.js",revision:"c876dd8558fbb5a0"},{url:"/_next/static/chunks/431.d6328c1a7003dad0.js",revision:"d6328c1a7003dad0"},{url:"/_next/static/chunks/554.7d5beb97bef2761f.js",revision:"7d5beb97bef2761f"},{url:"/_next/static/chunks/577-5978c594779cd8af.js",revision:"5978c594779cd8af"},{url:"/_next/static/chunks/594-ae609bf47d755183.js",revision:"ae609bf47d755183"},{url:"/_next/static/chunks/611.f6afa00491944f17.js",revision:"f6afa00491944f17"},{url:"/_next/static/chunks/740-09461f7151fd87db.js",revision:"09461f7151fd87db"},{url:"/_next/static/chunks/8bd53eb9.7b8f49d46c85bae3.js",revision:"7b8f49d46c85bae3"},{url:"/_next/static/chunks/969-33bf65ad0da037d1.js",revision:"33bf65ad0da037d1"},{url:"/_next/static/chunks/framework-5bb4f355ac165f9a.js",revision:"5bb4f355ac165f9a"},{url:"/_next/static/chunks/main-6c479a9626b2e0eb.js",revision:"6c479a9626b2e0eb"},{url:"/_next/static/chunks/pages/404-9a18b1edfa6ced6f.js",revision:"9a18b1edfa6ced6f"},{url:"/_next/static/chunks/pages/_app-cb431dc09355d10c.js",revision:"cb431dc09355d10c"},{url:"/_next/static/chunks/pages/_error-b54373691d0649dc.js",revision:"b54373691d0649dc"},{url:"/_next/static/chunks/pages/_offline-6c5fceede48763e3.js",revision:"6c5fceede48763e3"},{url:"/_next/static/chunks/pages/community/%5Bcomid%5D-89c3a1a278225e3f.js",revision:"89c3a1a278225e3f"},{url:"/_next/static/chunks/pages/community/%5Bcomid%5D/page/%5BtypeId%5D-c2956c01f74604be.js",revision:"c2956c01f74604be"},{url:"/_next/static/chunks/pages/community/%5Bcomid%5D/posts/%5Bchid%5D-7bc9dfc65081b543.js",revision:"7bc9dfc65081b543"},{url:"/_next/static/chunks/pages/community/%5Bcomid%5D/posts/%5Bchid%5D/post/%5Bpostid%5D-aaba396c6ace847d.js",revision:"aaba396c6ace847d"},{url:"/_next/static/chunks/pages/community/%5Bcomid%5D/room/%5BtypeId%5D-07e56f1f1d699dab.js",revision:"07e56f1f1d699dab"},{url:"/_next/static/chunks/pages/community/%5Bcomid%5D/tasks/%5Bchid%5D-654eb07b5f1e1c3f.js",revision:"654eb07b5f1e1c3f"},{url:"/_next/static/chunks/pages/community/%5Bcomid%5D/tasks/%5Bchid%5D/task/%5Btaskid%5D-b962521be9b68f1c.js",revision:"b962521be9b68f1c"},{url:"/_next/static/chunks/pages/email/%5Bid%5D-d00fcca0bcbd6baa.js",revision:"d00fcca0bcbd6baa"},{url:"/_next/static/chunks/pages/home-754fa7c5a19e67d5.js",revision:"754fa7c5a19e67d5"},{url:"/_next/static/chunks/pages/index-35d45886b9b5f961.js",revision:"35d45886b9b5f961"},{url:"/_next/static/chunks/pages/invite/%5Bid%5D-056f1a8b5f3d421e.js",revision:"056f1a8b5f3d421e"},{url:"/_next/static/chunks/pages/resetpassword/%5Bid%5D-c7c7e898b6370630.js",revision:"c7c7e898b6370630"},{url:"/_next/static/chunks/pages/resetpassword/email-7d63406a90aa4f8a.js",revision:"7d63406a90aa4f8a"},{url:"/_next/static/chunks/pages/signup-61032edaee4da46a.js",revision:"61032edaee4da46a"},{url:"/_next/static/chunks/pages/testcomponents-fecf153601b14819.js",revision:"fecf153601b14819"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f418a93cdfda44f6.js",revision:"f418a93cdfda44f6"},{url:"/_next/static/css/b456136f9ad8cd9a.css",revision:"b456136f9ad8cd9a"},{url:"/_offline",revision:"VSu4OGf2UQoib60NjPCH0"},{url:"/assets/apple-touch-icon.png",revision:"b369a75d619a1a10263da4ad80bd57e8"},{url:"/assets/auth/Frame 12.svg",revision:"5195a0ec646f4d0ae70cf965a348e71c"},{url:"/assets/auth/xi.effect.svg",revision:"ac3402b62a2814ff87b62ed7bcb4c9a6"},{url:"/assets/icons/icon-128x128.png",revision:"5b7e88d7c1e1e4a2f9d07e6379313df0"},{url:"/assets/icons/icon-144x144.png",revision:"2ca4a4fdc4ff33ac1bb6983e50a3c19c"},{url:"/assets/icons/icon-152x152.png",revision:"a8fddce30646c917bf5e618eb97b0453"},{url:"/assets/icons/icon-192x192.png",revision:"a7da8ab5151931cb203c82a95a41f74d"},{url:"/assets/icons/icon-384x384.png",revision:"cdf9b196536fe9e02a6e3dd3a4a57d5a"},{url:"/assets/icons/icon-48x48.png",revision:"35c072854c4b73e20b7a6ca7cbfd9951"},{url:"/assets/icons/icon-512x512.png",revision:"68d88847679899e785d937cf143c75d2"},{url:"/assets/icons/icon-72x72.png",revision:"b3a2b0cd97281e3d9b7d2d0a1591fadf"},{url:"/assets/icons/icon-96x96.png",revision:"97196a9034a392866a79bda0667f0333"},{url:"/assets/landing/logo-alpha.svg",revision:"6205bed934a4f8d9332ecb11e8e62266"},{url:"/assets/landing/star.svg",revision:"cef6c8decb05b6b052dad6112b6850f3"},{url:"/assets/landing/triangle.svg",revision:"1eef41a457ba98276523ac6ad0bc7eea"},{url:"/assets/safari-pinned-tab.svg",revision:"12d336e015e866233922720b1082d286"},{url:"/assets/test-cat.jpg",revision:"f25e8b5fa9ed05829282f2f0655c39b8"},{url:"/browserconfig.xml",revision:"e3433190e710ef12cd94cc39e97c078c"},{url:"/favicon.svg",revision:"706b8fc1e9c0715357309695d0bc6c6d"},{url:"/icons/arrow.svg",revision:"eca97fb7e300ae16ea83ad036c54b571"},{url:"/loaderForDarkTheme.gif",revision:"12f15a4f2c397364d6cd31b271344116"},{url:"/loaderForWhiteTheme.gif",revision:"c0b140026b8df6107687458a616da5ad"},{url:"/logo.svg",revision:"f3393d054b075a9ca85ea36e9d0be24e"},{url:"/manifest.json",revision:"fba4507e00a544be32749858a92a641a"},{url:"/robots.txt",revision:"59cc1e0b031a5606feb7e3e3ec27149b"},{url:"/sitemap.xml",revision:"6da9f8e4b9a7d10cebaea3e55bc0bd0b"},{url:"/xi.effect.svg",revision:"ecb9f9bf48c1becbcce29f2e074f7055"},{url:"/xieffect.svg",revision:"3f723e93bd97511f9ca0688adb5eaa27"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));