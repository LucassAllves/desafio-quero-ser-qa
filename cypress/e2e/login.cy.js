import localizador from '../support/elementos/localizadores'

describe('logar usuario valido', () => {

  beforeEach(() => {
    cy.visit('/');

  })

  it('Deve realizar login e logout com sucesso', () => {

    cy.get(localizador.login.username).type(Cypress.env('user_name'))
    cy.get(localizador.login.password).type(Cypress.env('password'))
    cy.get(localizador.login.btn_login).click()
    cy.get(localizador.inventory.titulo_products).should('have.text', 'Products')
    cy.get(localizador.Menu.Setting).click()
    cy.get(localizador.Menu.logout).contains('Logout').click()
    cy.get(localizador.login.btn_login).should('have.value', 'Login')
  })

  it('Deve realizar login e finalizar checkout', () => {
    cy.get(localizador.login.username).type(Cypress.env('user_name'))
    cy.get(localizador.login.password).type(Cypress.env('password'))
    cy.get(localizador.login.btn_login).click()
    cy.get(localizador.inventory.btn_add_cart).click()
    cy.get(localizador.inventory.btn_carrinho).click()
    cy.get(localizador.card.btn_checkout).click()
    cy.get(localizador.checkout.first_name).type('Edenilson')
    cy.get(localizador.checkout.last_name).type('Rafael')
    cy.get(localizador.checkout.postal_code).type('08572-450')
    cy.get(localizador.checkout.btn_continue).click()
    cy.get(localizador.checkout.btn_finish).click()
    cy.get(localizador.checkout_complete.text_thank_you_for_your_order).should('have.text', 'THANK YOU FOR YOUR ORDER')
  })
  
  
})








