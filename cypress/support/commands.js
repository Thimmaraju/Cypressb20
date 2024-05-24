// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('@4tw/cypress-drag-drop')
import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand')

Cypress.Commands.add("addemployee", (firstname, lastname)=>{

   // cy.contains('Add Employee').click()

    cy.get('input[name="firstName"]').type(firstname)

    cy.get('input[name="lastName"]').type(lastname)

    cy.get('button[type="submit"]').click()

    cy.contains('Successfully Saved').should("be.visible")
})

Cypress.Commands.add("login", (username, password)=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('input[name="username"]').type(username)
    cy.get('input[type="password"]').type(password)
    cy.get('button[type="submit"]').click()

    

})