describe("Understanding origin", () => {

    it("Understanding origin - test 1", () => {

        cy.visit('https://trello.com/')
        cy.contains('Log in').click()

        cy.origin('https://id.atlassian.com', () => {
            cy.get('#username').type("fewuigevwb")

            cy.get('a').should("have.length", 7)

            cy.get('#signup').then((txt)=>{

                var textpresent = txt.text()

                cy.log(textpresent)
            })

        })




    })

})