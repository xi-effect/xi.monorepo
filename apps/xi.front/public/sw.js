if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + '.js', n).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, i) => {
    const c = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (s[c]) return;
    let t = {};
    const r = (e) => a(e, c),
      d = { module: { uri: c }, exports: t, require: r };
    s[c] = Promise.all(n.map((e) => d[e] || r(e))).then((e) => (i(...e), t));
  };
}
define(['./workbox-c5ed321c'], function (e) {
  'use strict';
  importScripts('fallback-zvDjXZtQTCWx0-wznOZy3.js', 'worker-zvDjXZtQTCWx0-wznOZy3.js'),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/RoundedLogo.svg', revision: 'bb4c57567d7b2cf0f043532e4fb98c92' },
        { url: '/_next/static/chunks/1cc2734a.517e47735cf5143e.js', revision: '517e47735cf5143e' },
        { url: '/_next/static/chunks/250.cdc6b989dd3800be.js', revision: 'cdc6b989dd3800be' },
        { url: '/_next/static/chunks/263.9c7e93d4d2d06ba2.js', revision: '9c7e93d4d2d06ba2' },
        { url: '/_next/static/chunks/286.bf562442d79d649f.js', revision: 'bf562442d79d649f' },
        { url: '/_next/static/chunks/296550e7.682640e5f21f9393.js', revision: '682640e5f21f9393' },
        { url: '/_next/static/chunks/43-a79c3d90d325b470.js', revision: 'a79c3d90d325b470' },
        { url: '/_next/static/chunks/490.90ee9321c7815df7.js', revision: '90ee9321c7815df7' },
        { url: '/_next/static/chunks/554.db58e51950dc00aa.js', revision: 'db58e51950dc00aa' },
        { url: '/_next/static/chunks/577-237f09794f082376.js', revision: '237f09794f082376' },
        { url: '/_next/static/chunks/673.83964aacee655802.js', revision: '83964aacee655802' },
        { url: '/_next/static/chunks/890-50da8947a15d5fad.js', revision: '50da8947a15d5fad' },
        { url: '/_next/static/chunks/8bd53eb9.d900a3cee6414532.js', revision: 'd900a3cee6414532' },
        { url: '/_next/static/chunks/918-33f77f84bd8c8fa9.js', revision: '33f77f84bd8c8fa9' },
        { url: '/_next/static/chunks/969-ea953f0989b2021c.js', revision: 'ea953f0989b2021c' },
        { url: '/_next/static/chunks/97-f944157d7ab33f04.js', revision: 'f944157d7ab33f04' },
        { url: '/_next/static/chunks/981-c19b87a3eaba45bb.js', revision: 'c19b87a3eaba45bb' },
        { url: '/_next/static/chunks/framework-d6b15d8b3dd1dcdb.js', revision: 'd6b15d8b3dd1dcdb' },
        { url: '/_next/static/chunks/main-f4aff0b4d3ff9f21.js', revision: 'f4aff0b4d3ff9f21' },
        { url: '/_next/static/chunks/pages/404-760a1022e500c2a0.js', revision: '760a1022e500c2a0' },
        {
          url: '/_next/static/chunks/pages/_app-b8ced97f0a70ee81.js',
          revision: 'b8ced97f0a70ee81',
        },
        {
          url: '/_next/static/chunks/pages/_error-ff10f69ee16dd524.js',
          revision: 'ff10f69ee16dd524',
        },
        {
          url: '/_next/static/chunks/pages/_offline-9febba8baf310a90.js',
          revision: '9febba8baf310a90',
        },
        {
          url: '/_next/static/chunks/pages/community/%5Bcomid%5D-809fd8c59e709883.js',
          revision: '809fd8c59e709883',
        },
        {
          url: '/_next/static/chunks/pages/community/%5Bcomid%5D/page/%5BtypeId%5D-bf65b8134295230c.js',
          revision: 'bf65b8134295230c',
        },
        {
          url: '/_next/static/chunks/pages/community/%5Bcomid%5D/posts/%5Bchid%5D-8c0fd39fead58de8.js',
          revision: '8c0fd39fead58de8',
        },
        {
          url: '/_next/static/chunks/pages/community/%5Bcomid%5D/posts/%5Bchid%5D/post/%5Bpostid%5D-66f71b2ba17a51b8.js',
          revision: '66f71b2ba17a51b8',
        },
        {
          url: '/_next/static/chunks/pages/community/%5Bcomid%5D/room/%5BtypeId%5D-ddba590201498fd6.js',
          revision: 'ddba590201498fd6',
        },
        {
          url: '/_next/static/chunks/pages/community/%5Bcomid%5D/tasks/%5Bchid%5D-2d0cb02970b3443f.js',
          revision: '2d0cb02970b3443f',
        },
        {
          url: '/_next/static/chunks/pages/community/%5Bcomid%5D/tasks/%5Bchid%5D/task/%5Btaskid%5D-2622a493b3aea14a.js',
          revision: '2622a493b3aea14a',
        },
        {
          url: '/_next/static/chunks/pages/email/%5Bid%5D-e70a84a8527248c2.js',
          revision: 'e70a84a8527248c2',
        },
        {
          url: '/_next/static/chunks/pages/home-2fa5df8a0ffa1b50.js',
          revision: '2fa5df8a0ffa1b50',
        },
        {
          url: '/_next/static/chunks/pages/index-9e3b45e3a76732db.js',
          revision: '9e3b45e3a76732db',
        },
        {
          url: '/_next/static/chunks/pages/invite/%5Bid%5D-79cc046020150dd3.js',
          revision: '79cc046020150dd3',
        },
        {
          url: '/_next/static/chunks/pages/resetpassword/%5Bid%5D-7d5a312431faa42c.js',
          revision: '7d5a312431faa42c',
        },
        {
          url: '/_next/static/chunks/pages/resetpassword/email-33a28c668e7b72b0.js',
          revision: '33a28c668e7b72b0',
        },
        {
          url: '/_next/static/chunks/pages/signup-23a2bd72eea6151b.js',
          revision: '23a2bd72eea6151b',
        },
        {
          url: '/_next/static/chunks/pages/testcomponents-a5a7b8f8fbaeb90a.js',
          revision: 'a5a7b8f8fbaeb90a',
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        { url: '/_next/static/chunks/webpack-317a4c5c15beb78d.js', revision: '317a4c5c15beb78d' },
        { url: '/_next/static/css/f7ec84b810a6aab6.css', revision: 'f7ec84b810a6aab6' },
        {
          url: '/_next/static/zvDjXZtQTCWx0-wznOZy3/_buildManifest.js',
          revision: '1345decab2f0e8abee25be9c3e85b1dd',
        },
        {
          url: '/_next/static/zvDjXZtQTCWx0-wznOZy3/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        { url: '/_offline', revision: 'zvDjXZtQTCWx0-wznOZy3' },
        { url: '/assets/apple-touch-icon.png', revision: 'b369a75d619a1a10263da4ad80bd57e8' },
        { url: '/assets/auth/Frame 12.svg', revision: '5195a0ec646f4d0ae70cf965a348e71c' },
        { url: '/assets/auth/xi.effect.svg', revision: 'ac3402b62a2814ff87b62ed7bcb4c9a6' },
        { url: '/assets/icons/icon-128x128.png', revision: '5b7e88d7c1e1e4a2f9d07e6379313df0' },
        { url: '/assets/icons/icon-144x144.png', revision: '2ca4a4fdc4ff33ac1bb6983e50a3c19c' },
        { url: '/assets/icons/icon-152x152.png', revision: 'a8fddce30646c917bf5e618eb97b0453' },
        { url: '/assets/icons/icon-192x192.png', revision: 'a7da8ab5151931cb203c82a95a41f74d' },
        { url: '/assets/icons/icon-384x384.png', revision: 'cdf9b196536fe9e02a6e3dd3a4a57d5a' },
        { url: '/assets/icons/icon-48x48.png', revision: '35c072854c4b73e20b7a6ca7cbfd9951' },
        { url: '/assets/icons/icon-512x512.png', revision: '68d88847679899e785d937cf143c75d2' },
        { url: '/assets/icons/icon-72x72.png', revision: 'b3a2b0cd97281e3d9b7d2d0a1591fadf' },
        { url: '/assets/icons/icon-96x96.png', revision: '97196a9034a392866a79bda0667f0333' },
        { url: '/assets/landing/logo-alpha.svg', revision: '6205bed934a4f8d9332ecb11e8e62266' },
        { url: '/assets/landing/star.svg', revision: 'cef6c8decb05b6b052dad6112b6850f3' },
        { url: '/assets/landing/triangle.svg', revision: '1eef41a457ba98276523ac6ad0bc7eea' },
        { url: '/assets/safari-pinned-tab.svg', revision: '12d336e015e866233922720b1082d286' },
        { url: '/assets/test-cat.jpg', revision: 'f25e8b5fa9ed05829282f2f0655c39b8' },
        { url: '/browserconfig.xml', revision: 'e3433190e710ef12cd94cc39e97c078c' },
        { url: '/favicon.svg', revision: '706b8fc1e9c0715357309695d0bc6c6d' },
        { url: '/icons/arrow.svg', revision: 'eca97fb7e300ae16ea83ad036c54b571' },
        { url: '/loaderForDarkTheme.gif', revision: '12f15a4f2c397364d6cd31b271344116' },
        { url: '/loaderForWhiteTheme.gif', revision: 'c0b140026b8df6107687458a616da5ad' },
        { url: '/logo.svg', revision: 'f3393d054b075a9ca85ea36e9d0be24e' },
        { url: '/manifest.json', revision: 'fba4507e00a544be32749858a92a641a' },
        { url: '/robots.txt', revision: '59cc1e0b031a5606feb7e3e3ec27149b' },
        { url: '/sitemap.xml', revision: '6da9f8e4b9a7d10cebaea3e55bc0bd0b' },
        { url: '/xi.effect.svg', revision: 'ecb9f9bf48c1becbcce29f2e074f7055' },
        { url: '/xieffect.svg', revision: '3f723e93bd97511f9ca0688adb5eaa27' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: a, state: n }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, { status: 200, statusText: 'OK', headers: s.headers })
                : s,
          },
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET',
    );
});
