import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

import login from "../../pages/Login/login.po"
import dashboard from "../../pages/dashboard.po"
import logindata from "../../fixtures/logincreds.json"


Given('Launch the Application', () => {
    cy.visit('/web/index.php/auth/login')
})

When(`User enter username {string} and password {string}`, (uername, password) => {

    cy.get(login.usernameInput()).type(uername)

    cy.get(login.passwordInput()).type(password)
})


And('User clicks on the login button', () => {
    cy.get(login.loginButton).click()
})



Then('User should be navigated to dashboard page', () => {

    cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    //or

    cy.url().should("include", "/web/index.php/dashboard/index")

    //or

    cy.contains(dashboard.dashboardMenu()).should('be.visible')

})



Then('User Should get login error message', () => {


    cy.contains(login.loginErrorMessage()).should('be.visible')

})

When(`User enter valid username and valid password`, () => {

    cy.get(login.usernameInput()).type(logindata.username)

    cy.get(login.passwordInput()).type(logindata.password)
})