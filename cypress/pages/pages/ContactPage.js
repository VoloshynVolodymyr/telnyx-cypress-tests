import BasePage from '../base/BasePage'

class ContactPage extends BasePage {
  constructor() {
    super()
    this.url = '/contact-us'
  }

  get selectors() {
    return {
      contactForm: '#mktoForm_1987',
      reasonForContact: '#Reason_for_Contact__c',
      firstName: '#FirstName',
      lastName: '#LastName',
      email: '#Email',
      countrySelect: '#Phone_Number_Extension__c',
      phoneNumber: '#Phone_Number_Base__c',
      companyWebsite: '#Website',
      howDidYouHear: '#How_did_you_hear_about_Telnyx_Open__c',
      subscriptionOpt: '#mktoCheckbox_16411_0',
      submitButton: 'button[type="submit"]',
      errorMessage: 'div.mktoErrorMsg'
    }
  }

  getReasonForContactSelect() {
    return cy.get(this.selectors.reasonForContact, { timeout: 15000 })
  }

  getFirstNameInput() {
    return cy.get(this.selectors.firstName)
  }

  getLastNameInput() {
    return cy.get(this.selectors.lastName)
  }

  getEmailInput() {
    return cy.get(this.selectors.email)
  }

  getSubmitButton() {
    return cy.get(this.selectors.submitButton)
  }

  getErrorMessages() {
    return cy.get(this.selectors.errorMessage)
  }

  getFirstInputField() {
    return this.getReasonForContactSelect()
  }

  visitContactPage() {
    this.visit(this.url)
    this.waitForPageLoad()
    cy.get(this.selectors.contactForm, { timeout: 15000 }).should('be.visible')
    return this
  }

  leaveFirstFieldEmpty() {
    this.getFirstInputField().should('be.visible')
    this.getFirstInputField().select('', { force: true })
    return this
  }

  submitForm() {
    this.getSubmitButton().click()
    return this
  }

  verifyErrorMessageDisplayed() {
    this.getErrorMessages().should('be.visible')
    return this
  }
}

export default ContactPage
