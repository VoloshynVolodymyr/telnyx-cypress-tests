const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '84t3bz',
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'https://telnyx.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    video: false,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
  env: {
    BASE_URL: 'https://telnyx.com'
  }
})
