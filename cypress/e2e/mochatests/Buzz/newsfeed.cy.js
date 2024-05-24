import login from "../../pages/Login/login.po"
import dashboard from "../../pages/dashboard.po"

import data from '../../fixtures/logincreds.json'
describe('Verify Buzz Functionalities', () => {

    const  creds = {

        username: "Admin",
        password : "admin123"
    }

    it(`Verify What's on "your" mind`, () => {
     
        cy.log("Test execution started")
       
        //cy.visit('/web/index.php/auth/login')

        // cy.get(login.usernameInput()).type(creds.username)
        // cy.get(login.passwordInput()).type(creds.password)
        // cy.get(login.loginBtn()).click()

        cy.login("Admin", "admin123")

        cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        //or

        cy.url().should("include", "/web/index.php/dashboard/index")

        cy.contains(dashboard.buzzMenu()).click()

        cy.url().should("include", "/web/index.php/buzz/viewBuzz")

        cy.get(`textarea[placeholder="What's on your Raju?"]`,{timeout: 40000}).type("Happy Birthday Ramesh")

        cy.get('button[type="submit"]').click()
        cy.contains('Happy Birthday Ramesh').should("be.visible")

    })
  })