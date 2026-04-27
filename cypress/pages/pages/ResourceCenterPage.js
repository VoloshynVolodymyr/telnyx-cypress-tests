import BasePage from '../base/BasePage'

class ResourceCenterPage extends BasePage {
  constructor() {
    super()
    this.url = '/resources'
  }

  get searchInput() {
    return cy.get('input[type="search"]#search')
  }

  get searchResults() {
    return cy.get('ul.grid a[href^="/resources/"]')
  }

  get noResultsMessage() {
    return cy.get('p.typography-p')
  }

  verifyUrl() {
    cy.url().should('contain', '/resources')
    return this
  }

  searchFor(query) {
    this.searchInput.should('be.visible').clear().type(query)
    cy.wait(500)
    this.searchInput.type('{enter}')
    cy.wait(1000)
    return this
  }

  verifyResultsExist() {
    this.searchResults.should('have.length.at.least', 1)
    return this
  }

  verifyNoResults() {
    this.searchResults.should('have.length', 0)
    return this
  }

  verifyNoResultsMessage() {
    this.noResultsMessage.should('be.visible').and('contain', 'No results for this filter')
    return this
  }
}

export default ResourceCenterPage
