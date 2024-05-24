import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import dashboard from "../../pages/dashboard.po"

And('User clicks on PIM', () => {
    
    cy.contains(dashboard.pimMenu()).click()
})


And('User clicks on Add employee submenu', () => {
    
    cy.contains('Add Employee').click()
})

And('User enter firstname {string} and lastname {string}', (firstname, lastName) => {
    
    cy.get('input[name="firstName"]').type(firstname)

    cy.get('input[name="lastName"]').type(lastName)
})

And('User  clicks on Save button', () => {
    
    cy.get('button[type="submit"]').click()
})


Then('User should get the successfully saved confirmation message', () => {
    
    cy.contains('Successfully Saved').should("be.visible")
})


Then('User should get error messages for firstname and lastname', () => {
    
    cy.contains('Required').should('be.visible')
})


Then('User should be able to add employee', () => {
    
   cy.addemployee("Naveen", "S")
})