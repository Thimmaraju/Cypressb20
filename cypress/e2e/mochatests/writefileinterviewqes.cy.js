
describe('Automation - Working with Write file', function () {

    it('Cypress Test Case - write file', function () {
  
      Cypress.on("uncaught:exception", function () {
    
        return false;
      });
  
      cy.visit('https://www.flipkart.com/');
  
       cy.get('._1XjE3T > span').eq(1).then((txt) =>{

          var textvalue = txt.text()

          cy.writeFile('cypress/fixtures/module1/test7.json', { Extractedtext: textvalue});
       })
    })
  
  
  
  })