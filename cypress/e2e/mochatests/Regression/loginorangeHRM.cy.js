import data from "../../fixtures/logincreds.json"

//import login from '../../pages/Login/login.po'
import dashboard from "../../pages/dashboard.po"

import login from "../../pages/Login/login.po"

//const login = new loginPage()

describe('Verify Login functionality', () => {

    beforeEach("launch url", () => {
        cy.viewport(1920, 1080)
        cy.visit('/web/index.php/auth/login')

    })


    afterEach("launch url", () => {
        cy.log("Test execution is completed")
    })




    it('Verify Login with valid Credentials', () => {

        // cy.get(login.usernameInput()).type(data.username)
        // cy.get(login.passwordInput()).type(data.password)
        // cy.get(login.loginBtn()).click()


        login.loginwithcreds(data.username, data.password)
        cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        //or

        cy.url().should("include", "/web/index.php/dashboard/index")

        //or

        cy.contains(dashboard.dashboardMenu()).should('be.visible')

    })

    specify('Verify login with valid Username and Invalid password', () => {

        login.loginwithcreds(data.username, data.wrongpassword)

        //assertion

        cy.contains(login.loginErrorMessage()).should("be.visible")


    })

    specify('Verify login with invalid Username and valid password ', () => {

       login.loginwithcreds(data.wrongusername, data.password)

        //assertion

        cy.contains(login.loginErrorMessage()).should("be.visible")

    })

    specify('Verify login with invalid Username and invalid password', () => {

       login.loginwithcreds(data.wrongusername, data.wrongpassword)

        //assertion

        cy.contains(login.loginErrorMessage()).should("be.visible")
    })

})