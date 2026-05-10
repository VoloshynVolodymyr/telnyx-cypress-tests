// cypress/support/e2e.js
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ігноруємо всі помилки, які виникають на сайті
  return false
})

beforeEach(() => {
  // Закриваємо cookie банер перед кожним тестом, якщо він з'являється
  cy.get('body').then(($body) => {
    if ($body.find('#onetrust-accept-btn-handler').length) {
      cy.get('#onetrust-accept-btn-handler').click()
    }
  })
})
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
