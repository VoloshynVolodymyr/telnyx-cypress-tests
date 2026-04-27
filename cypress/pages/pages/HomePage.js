import BasePage from '../base/BasePage'

class HomePage extends BasePage {
  constructor() {
    super()
    this.url = ''
  }

  get pageTitle() {
    return cy.title()
  }

  get mainHeading() {
    return cy.get('h1').first()
  }

  get productsMenuItem() {
    return cy
      .get('header button, header [role="navigation"] button')
      .filter(':visible')
      .contains('Products')
  }

  get visibleProductCards() {
    return cy.get('.w-full.col-span-8.grid a[href*="/products/"]').should('have.length', 4)
  }

  get resourcesMenuItem() {
    return cy
      .get('header button, header [role="navigation"] button')
      .filter(':visible')
      .contains('Resources')
  }

  get resourceCenterLink() {
    return cy.get('a[href*="/resources"].group').filter(':visible')
  }

  get hamburgerMenu() {
    return cy.get('button.block')
  }

  get mobileMenu() {
    return cy.get('#main-menu')
  }

  get textToSpeechTab() {
    return cy.get('button[role="tab"]').contains('Text to Speech')
  }

  get textArea() {
    return cy.get('textarea[placeholder*="Enter text to convert to speech"]')
  }

  get playAudioButton() {
    return cy.get('button').contains('PLAY AUDIO')
  }

  get textToSpeechTab() {
    return cy.get('button[role="tab"]').contains('Text to Speech')
  }

  get textArea() {
    return cy.get('textarea[placeholder*="Enter text"]')
  }

  get textToSpeechContainer() {
    return cy.get('.new-grid-item-full-width')
  }

  get contactUsLink() {
    return cy.get('a[href*="contact-us"]').filter(':visible').first()
  }

  visitHomePage() {
    this.visit(this.url)
    this.waitForPageLoad()
  }

  verifyHomePageLoaded() {
    this.pageTitle.should('contain', 'Telnyx')
    this.mainHeading.should('be.visible')
  }

  openProductsDropdown() {
    cy.wait(1000)
    this.productsMenuItem.should('be.visible').click({ force: true })
    cy.get('.w-full.col-span-8.grid', { timeout: 10000 }).should('be.visible')
    cy.get('.w-full.col-span-8.grid a[href*="/products/"]').should('have.length', 4)
    cy.wait(500)
  }

  clickProductByName(productName) {
    cy.contains('a[href*="/products/"].group', productName).click({ force: true })
  }

  clickResourceCenter() {
    this.resourceCenterLink.click()
  }

  clickHamburgerMenu(attempts = 0) {
    const maxAttempts = 3

    this.hamburgerMenu.should('be.visible').click({ force: true })
    cy.wait(800)

    cy.get('#main-menu').then(($menu) => {
      if ($menu.attr('data-state') !== 'open' && attempts < maxAttempts) {
        cy.log(`Menu not open, attempt ${attempts + 1} of ${maxAttempts}`)
        this.clickHamburgerMenu(attempts + 1)
      } else {
        cy.log('Menu opened successfully')
      }
    })

    cy.get('#main-menu', { timeout: 5000 }).should('have.attr', 'data-state', 'open')
  }
  verifyMobileMenuOpen() {
    this.mobileMenu.should('have.attr', 'data-state', 'open')
    this.mobileMenu.should('be.visible')
  }

  verifyMobileMenuItems() {
    const expectedItems = [
      'Products',
      'Solutions',
      'Pricing',
      'Why Telnyx',
      'Resources',
      'Developers',
      'Contact us',
      'Log in'
    ]
    this.mobileMenu.find('a, button').should('have.length.at.least', expectedItems.length)
  }

  scrollToFooter() {
    cy.scrollTo('bottom')
  }

  getFooterSocialLink(socialName) {
    const selectors = {
      linkedin: '#linkedin',
      twitter: '#twitter',
      facebook: '#facebook'
    }
    return cy.get(selectors[socialName.toLowerCase()]).closest('a')
  }

  verifySocialLinksVisible() {
    this.getFooterSocialLink('linkedin').should('be.visible')
    this.getFooterSocialLink('twitter').should('be.visible')
    this.getFooterSocialLink('facebook').should('be.visible')
  }

  clickResourceMenuItem() {
    this.resourcesMenuItem.click()
  }

  scrollToTextToSpeech() {
    this.textToSpeechTab.scrollIntoView()
    cy.wait(500)
    return this
  }

  clickTextToSpeechTab() {
    this.textToSpeechTab.click({ force: true })
    cy.wait(1000)
    return this
  }

  scrollToTextToSpeech() {
    this.textToSpeechTab.scrollIntoView()
    cy.wait(500)
    return this
  }

  clearTextArea() {
    this.textArea.should('exist').clear({ force: true })
    return this
  }

  enterTextInTextArea(text) {
    this.textArea.should('exist').clear({ force: true }).type(text, { force: true })
    return this
  }

  clickPlayAudio() {
    this.playAudioButton.should('exist').click({ force: true })
    return this
  }

  clickContactUsLink() {
    this.contactUsLink.should('be.visible').click({ force: true })
    return this
  }
}

export default HomePage
