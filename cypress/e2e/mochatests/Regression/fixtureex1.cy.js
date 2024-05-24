import regidata from '../../fixtures/registermodule/register.json'
describe('verify register functionality', () => {

    it('Uderstanding fixtures', () => {
      
        cy.visit('https://shop.demoqa.com/my-account/')
        cy.get('#reg_username').type(regidata.username)
        cy.get('#reg_email').type(regidata.emailaddress)
        cy.get('#reg_password').type(regidata.weakpassword)
        cy.get('.woocommerce-Button').should("be.disabled")

        //or

        cy.get('.woocommerce-Button').should("have.attr", "disabled", "disabled")
        //  cy.get('#reg_password').clear()
        //  cy.get('#reg_password').type(regidata.strongpassword)
         cy.get('#reg_password').clear().type(regidata.strongpassword)

        // cy.wait(10000)
         cy.get('.woocommerce-Button').click()


         cy.get('#username').should("have.attr", "value", regidata.username)
        // //or

         cy.get('#username').should("have.value", regidata.username)
    })
  })