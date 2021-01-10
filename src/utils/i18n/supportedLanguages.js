// @ts-nocheck

/* IMPORTANT, this file is consumed by node files as well as
es6 modules, so it needs to stay in js common module format until further configuration
and dependancies can be put in place to allow the node files to import Typescript modules */

// NOTE, we don't translate the language labels, they should appear translated for their target audience.

const supportedLanguages = [
  {
    label: 'English',
    languageTag: 'en',
  },
  {
    label: 'Español',
    languageTag: 'es',
  },
  {
    label: '中文',
    languageTag: 'zh',
  }
];

module.exports = supportedLanguages;
