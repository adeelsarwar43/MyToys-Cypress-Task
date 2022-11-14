const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  retries: {
    runMode: 2,
    openMode: 2,
  },
 
  e2e: {
    baseUrl: 'https://www.mytoys.de',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
