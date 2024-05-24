const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  e2e: {
   specPattern: "**/*.feature",
    //screenshotsFolder: "cypress/pics",
    //videosFolder: "cypress/ramesh",
    projectId: "nmharc",
    'baseUrl':"https://opensource-demo.orangehrmlive.com",
    //'defaultCommandTimeout': 20000,
    'pageLoadTimeout': 120000,
    retries: {openMode:1,runMode: 2},
    // "viewportWidth":375,
    // "viewportHeight": 667,
    "video":true,
    env: {
      
      "username": "Raju",
      "password": "admin123",
      "allureResultsPath": "allure-results",
      "cookivalue": "orangehrm=df58f72d13ecbe7cdba7026669a0c97a"


    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config)
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
      allureWriter(on, config);
            return config;
    },
  },
  
});
