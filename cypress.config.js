const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "failOnStatusCode": false,
    env:{
      stagingUser:"https://staging-user-coreyo.web.app/",
      stagingPatner:"https://staging-reseller-coreyo.web.app/"
    },
    // "experimentalSessionAndOrigin":true

    
  },
});
