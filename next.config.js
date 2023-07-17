const { languages } = require('./constants');
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: [ languages.en.route , languages.es.route ],
    defaultLocale: languages.en.route,
  },
  images: {
    domains: ['images.ctfassets.net', '//images.ctfassets.net']
  }
}

module.exports = nextConfig
