/**
 * Telnyx Test Suite - 10 Test Cases
 * Site: https://telnyx.com
 */

import HomePage from '../pages/pages/HomePage'
import PricingPage from '../pages/pages/PricingPage'
import VoiceAIPage from '../pages/pages/VoiceAIPage'
import ResourceCenterPage from '../pages/pages/ResourceCenterPage'
import ContactPage from '../pages/pages/ContactPage'

const homePage = new HomePage()
const pricingPage = new PricingPage()
const voiceAIPage = new VoiceAIPage()
const resourceCenterPage = new ResourceCenterPage()
const contactPage = new ContactPage()

describe('Telnyx.com Test Suite', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
    homePage.visitHomePage()
    cy.wait(500)
  })

  describe('TC-01: Homepage loads correctly', () => {
    it('Should load homepage with correct title and heading', () => {
      homePage.verifyHomePageLoaded()
    })
  })

  describe('TC-02: Products dropdown navigation', () => {
    it('Should show product cards and navigate to Voice AI page', () => {
      homePage.openProductsDropdown()
      homePage.visibleProductCards.should('have.length', 4)
      homePage.clickProductByName('Voice AI')
      cy.url().should('contain', '/products/voice-ai-agents')
    })
  })

  describe('TC-03: Text to Speech functionality', () => {
    it('Should send a POST request to /api/tts-synthesize and receive a successful response', () => {
      cy.intercept('POST', '**/api/tts-synthesize').as('ttsRequest')

      homePage.scrollToTextToSpeech()
      homePage.clickTextToSpeechTab()
      homePage.clearTextArea()
      homePage.enterTextInTextArea('Hello, world!')
      homePage.clickPlayAudio()

      cy.wait('@ttsRequest', { timeout: 10000 }).then((interception) => {
        cy.log('Request intercepted!')
        cy.log('Status:', interception.response.statusCode)
        expect(interception.response.statusCode).to.equal(200)
      })
    })
  })

  describe('TC-04: Pricing page displays product cards and Check "All pricing button"', () => {
    it('Should display 4 pricing cards and redirect to /pricing via "View all pricing" button', () => {
      pricingPage.openPricingContent()
      pricingPage.verifyPricingCardsVisible()
      pricingPage.verifyViewAllPricingButtonVisible()
      pricingPage.clickViewAllPricingButton()
      pricingPage.verifyRedirectToPricingPage()
    })
  })

  describe('TC-05: Voice AI page – accordion works correctly', () => {
    beforeEach(() => {
      homePage.openProductsDropdown()
      homePage.clickProductByName('Voice AI')
    })

    it('Should expand and collapse accordion on click', () => {
      voiceAIPage.verifyUrl()
      voiceAIPage.scrollToAccordion()
      cy.wait(500)

      voiceAIPage.verifyFirstAccordionState('open')

      voiceAIPage.clickFirstAccordion()
      voiceAIPage.verifyFirstAccordionState('closed')

      voiceAIPage.clickFirstAccordion()
      voiceAIPage.verifyFirstAccordionState('open')
    })
  })

  describe('TC-06: Resource center search – relevant query returns results', () => {
    it('Should search for "Flow" and display results', () => {
      homePage.clickResourceMenuItem()
      cy.wait(500)
      homePage.clickResourceCenter()
      resourceCenterPage.verifyUrl()
      resourceCenterPage.searchFor('Flow')
      resourceCenterPage.verifyResultsExist()
    })
  })

  describe('TC-07: Resource center search – irrelevant query shows no results message', () => {
    it('Should search for "Nonsense" and show no results message', () => {
      homePage.clickResourceMenuItem()
      cy.wait(500)
      homePage.clickResourceCenter()
      resourceCenterPage.verifyUrl()
      resourceCenterPage.searchFor('Nonsense')
      resourceCenterPage.verifyNoResults()
      resourceCenterPage.verifyNoResultsMessage()
    })
  })

  describe('TC-08: Contact Form - Validation for Empty Field', () => {
    it('Should display error message when first field (Reason for Contact) is left empty', () => {
      homePage.clickContactUsLink()
      cy.wait(500)
      contactPage.leaveFirstFieldEmpty()
      contactPage.submitForm()
      contactPage.verifyErrorMessageDisplayed()
    })
  })

  describe('TC-09: Footer social links are valid', () => {
    it('Should display LinkedIn, Twitter and Facebook links', () => {
      homePage.scrollToFooter()
      homePage.verifySocialLinksVisible()
    })
  })

  describe('TC-10: Responsive design – mobile menu opens correctly', () => {
    beforeEach(() => {
      cy.viewport('iphone-x')
      homePage.visitHomePage()
    })

    it('Should open hamburger menu with all navigation items', () => {
      homePage.clickHamburgerMenu()
      homePage.verifyMobileMenuOpen()
      homePage.verifyMobileMenuItems()
    })
  })
})
