const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "84t3bz",
  e2e: {
    baseUrl: "https://telnyx.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 30000,
    video: false,
    screenshotOnRunFailure: true,
  },
});
