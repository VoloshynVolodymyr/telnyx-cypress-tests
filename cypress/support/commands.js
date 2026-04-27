// ***********************************************
// Custom commands for Telnyx Test Suite
// ***********************************************

/**
 * Wait for page to fully load
 * Waits for network idle and checks body visibility
 */
Cypress.Commands.add('waitForPageLoad', () => {
  cy.window().should('have.property', 'document')
  cy.get('body').should('be.visible')
  cy.document().should('have.property', 'readyState', 'complete')
})

/**
 * Hover over element
 */
Cypress.Commands.add('hover', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).trigger('mouseenter')
})

/**
 * Scroll element into view
 */
Cypress.Commands.add('scrollToElement', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).scrollIntoView()
})
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
