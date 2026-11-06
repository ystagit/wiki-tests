const { defineConfig } = require('cypress');
const webpackPreprocessor = require('@cypress/webpack-preprocessor');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://uk.wikipedia.org/',
    specPattern: 'cypress/**/*.cy.js',

    setupNodeEvents(on, config) {
      on(
        'file:preprocessor',
        webpackPreprocessor({
          webpackOptions: require('./webpack.config'),
        })
      );

      return config;
    },
  },
});