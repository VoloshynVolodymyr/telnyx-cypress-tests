import BasePage from '../base/BasePage'

class VoiceAIPage extends BasePage {
  constructor() {
    super()
    this.expectedUrl = 'https://telnyx.com/products/voice-ai-agents'
  }

  get accordionItems() {
    return cy.get('[data-state][data-orientation="vertical"]').filter(':visible')
  }

  get firstAccordion() {
    return this.accordionItems.first()
  }

  get firstAccordionButton() {
    return this.firstAccordion.find('button')
  }

  scrollToAccordion() {
    cy.scrollTo('bottom')
    return this
  }

  getFirstAccordionState() {
    return this.firstAccordion.invoke('attr', 'data-state')
  }

  clickFirstAccordion() {
    this.firstAccordionButton.click({ force: true })
    cy.wait(500)
    return this
  }

  verifyFirstAccordionState(expectedState) {
    this.firstAccordion.should('have.attr', 'data-state', expectedState)
    return this
  }

  verifyUrl() {
    cy.url().should('eq', this.expectedUrl)
    return this
  }
}

export default VoiceAIPage
