// Не поддавайтесь соблазну использовать здесь import
const path = require('path');

const plugins = [];

const nextConfig = {
  experimental: {
    esmExternals: true,
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  transpilePackages: [
    '@slate-yjs/react',
    'pkg.theme.scheme',
    'pkg.components.badge',
    'pkg.components.loading',
    'pkg.components.file',
    'pkg.data.avatar',
    'pkg.dialogs.exit',
    'pkg.forms.signin',
    'pkg.layout.pages',
    'pkg.pages.error',
    'pkg.icons',
    'pkg.inputs.button',
    'pkg.inputs.radio',
    'pkg.inputs.toggle',
    'pkg.inputs.switcher',
    'pkg.hooks',
    'pkg.utils',
    'pkg.editor.text',
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
      'avatar.vercel.sh',
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
