import BasePage from '../base/BasePage'

class PricingPage extends BasePage {
  constructor() {
    super()
    this.url = '/'
  }

  // Селектори
  get pricingMenuItem() {
    return cy.contains('#main-menu-content button', 'Pricing')
  }

  get pricingCards() {
    return cy
      .get('.w-full.col-span-8.grid.grid-cols-2 a[href*="/pricing/"].group')
      .filter(':visible')
  }

  get viewAllPricingButton() {
    return cy.get('a[href="/pricing"]').filter(':visible')
  }

  // Методи
  openPricingContent() {
    this.pricingMenuItem.should('be.visible').click({ force: true })
    this.pricingCards.should('have.length', 4)
    return this
  }

  verifyPricingCardsVisible() {
    this.pricingCards.should('have.length', 4)
    return this
  }

  verifyViewAllPricingButtonVisible() {
    this.viewAllPricingButton.scrollIntoView().should('be.visible')
    return this
  }

  clickViewAllPricingButton() {
    this.viewAllPricingButton.click()
    return this
  }

  verifyRedirectToPricingPage() {
    cy.url().should('eq', 'https://telnyx.com/pricing')
    return this
  }
}

export default PricingPage
