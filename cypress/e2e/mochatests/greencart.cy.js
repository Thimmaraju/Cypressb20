describe('Greencart', () => {
    it('passes', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')


        cy.get('h4[class="product-name"]+p').first().then((txt) => {

            var brocoliprice = txt.text()

            cy.log(brocoliprice)

        })
    })


    it.only('Click tips', () => {
        cy.visit('https://www.cypress.io/')


        cy.contains('Installing Cypress').click({force:true})

        
    })
})