describe('Understanding click ', () => {

    it('Verify click in hidden element', () => {

        cy.visit('https://www.cypress.io/')

        cy.xpath("//a[text()='Installing Cypress']").click({force:true})


      })

      it.only('Verify click serially elements', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.xpath("//button[text()='ADD TO CART']").click({multiple:true})


      })
    
  })