const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr'],
    localeDetection: false,
    localePath: path.resolve('./public/locales'),
  },
};
