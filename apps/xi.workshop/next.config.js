// Не поддавайтесь соблазну использовать здесь import
const path = require('path');

const plugins = [];

const nextConfig = {
  experimental: {
    esmExternals: true,
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  transpilePackages: [
    'pkg.theme.scheme',
    'pkg.components.badge',
    'pkg.components.loading',
    'pkg.components.file',
    'pkg.data.avatar',
    'pkg.dialogs.exit',
    'pkg.forms.signin',
    'pkg.layout.pages',
    'pkg.pages.error',
    'pkg.icons.account',
    'pkg.icons.add',
    'pkg.icons.announce',
    'pkg.icons.arrow',
    'pkg.icons.burger',
    'pkg.icons.calendar',
    'pkg.icons.camera',
    'pkg.icons.chat',
    'pkg.icons.check',
    'pkg.icons.clip',
    'pkg.icons.close',
    'pkg.icons.endcall',
    'pkg.icons.exit',
    'pkg.icons.external',
    'pkg.icons.eyeoff',
    'pkg.icons.eyeon',
    'pkg.icons.file',
    'pkg.icons.grid',
    'pkg.icons.hand',
    'pkg.icons.home',
    'pkg.icons.invite',
    'pkg.icons.maximize',
    'pkg.icons.microphone',
    'pkg.icons.notification',
    'pkg.icons.screenshare',
    'pkg.icons.send',
    'pkg.icons.settings',
    'pkg.icons.task',
    'pkg.icons.trash',
    'pkg.icons.users',
    'pkg.icons.copy',
    'pkg.icons.updates',
    'pkg.icons.photo',
    'pkg.inputs.radio',
    'pkg.inputs.toggle',
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
