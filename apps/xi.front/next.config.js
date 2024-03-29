// Не поддавайтесь соблазну использовать здесь import
const path = require('path');
const runtimeCaching = require('next-pwa/cache');

const plugins = [];

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  runtimeCaching,
  mode: 'production',
  reloadOnOnline: true,
  cacheOnFrontEndNav: true,
  disable: process.env.NODE_ENV === 'development',
  skipWaiting: true,
  sw: '/sw.js',
  buildExcludes: [
    /middleware-manifest\.json$/,
    /_middleware\.js$/,
    /_middleware\.js\.map$/,
    /middleware-runtime\.js$/,
    /server\/pages\/_middleware\.js$/,
  ],
});

plugins.push(withPWA);

const nextConfig = {
  experimental: {
    esmExternals: true,
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  transpilePackages: [
    '@slate-yjs/react',
    'pkg.theme.scheme',
    'pkg.inputs.switcher',
    'pkg.components.loading',
    'pkg.components.badge',
    'pkg.components.file',
    'pkg.inputs.button',
    'pkg.data.avatar',
    'pkg.dialogs.exit',
    'pkg.forms.signin',
    'pkg.layout.pages',
    'pkg.pages.error',
    'pkg.inputs.radio',
    'pkg.inputs.toggle',
    'pkg.icons',
    'pkg.hooks',
    'pkg.utils',
    'pkg.notistack.saveconfirm',
    'pkg.notistack.notification',
    'pkg.editor.text',
    'pkg.inputs.chat',
  ],
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.discordapp.com',
      'localhost:3000',
      'localhost:5000',
      'xieffect.ru:5000',
      'xieffect.ru',
    ],
  },
  output: 'standalone',
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      type: 'asset/resource',
    });
    return config;
  },
};

module.exports = () => plugins.reduce((acc, next) => next(acc), nextConfig);
