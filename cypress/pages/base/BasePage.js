/**
 * BasePage - Base class for all page objects
 * Provides common methods for page interactions
 */
class BasePage {
  constructor() {
    this.baseUrl = Cypress.env('BASE_URL') || 'https://telnyx.com'
  }

  visit(path = '') {
    cy.visit(`${this.baseUrl}${path}`)
    return this
  }

  waitForPageLoad() {
    cy.document().should('have.property', 'readyState', 'complete')
    cy.get('body').should('be.visible')
    return this
  }

  getElement(selector) {
    return cy.get(selector)
  }

  waitForVisible(selector, timeout = 10000) {
    this.getElement(selector).should('be.visible', { timeout })
    return this
  }

  waitForExist(selector, timeout = 10000) {
    this.getElement(selector).should('exist', { timeout })
    return this
  }
}

export { BasePage }

export const basePage = new BasePage()
