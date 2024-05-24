const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    'baseUrl':"https://docs.cypress.io",
    //'defaultCommandTimeout': 20000,
    'pageLoadTimeout': 120000,
    retries: {openMode:1,runMode: 2},
    "viewportWidth":375,
    "viewportHeight": 667,
    "video":true,
    env: {
      
      "username": "Raju123",
      "password": "Raju@1234"


    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  
});
