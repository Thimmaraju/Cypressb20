describe('Automation - Working With Iframe', function () {



    it('Cypress Test Case - Understanding Iframe and how to work with Iframe', function () {
  
      cy.visit('https://jqueryui.com/checkboxradio/');

      cy.get('#checkbox-1').check({force:true})

     
    })

    it.only('Select Radio Button', () => {

        cy.visit("https://jqueryui.com/checkboxradio/")

        cy.get('iframe[class="demo-frame"]').then(($iframe) =>{

           let checkbox1 = $iframe.contents().find('label[for="checkbox-1"]')

           cy.wrap(checkbox1).click()
        })

       //cypress-iframe - plugin

    
   })


  })
  
