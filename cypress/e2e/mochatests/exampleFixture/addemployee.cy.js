import logindata from "../../fixtures/logincreds.json"

describe('Verify Add employee functionality', () => {
   
    it('Verify add employee with Mandotory details', () => {

        cy.log("Test execution started")
       cy.raju(logindata.username, logindata.password)
       
        cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        //or

        cy.url().should("include", "/web/index.php/dashboard/index")

        cy.contains('PIM').click()

         cy.addemployee("Raju", "G")

      })

     
  })