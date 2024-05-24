import data from "../../fixtures/logincreds.json"
const availablefixtures = [
    {
      "name": "PIM/addemployee",
      "context": "1"
    },
    {
      "name": "PIM/rameshdata",
      "context": "2"
    },
    {
      "name": "PIM/pavandata",
      "context": "3"
    }
  ]
  
  
  
  describe("verify addemployee functionality", function () {
  
    availablefixtures.forEach((raju) => {
      describe(raju.context, () => {
        //Mostly used for Setup Part
        before(function () {
          cy.fixture(raju.name).then(function (data) {
            this.data = data;
          })
        })
  
        it('Cypress Test Case - add employee', function () {
        
            cy.log("Test execution started")
       
            cy.login("Admin", "admin123")
    
            cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
            //or
    
            cy.url().should("include", "/web/index.php/dashboard/index")
    
            cy.contains('PIM').click()
    
            cy.contains('Add Employee').click()
    
            cy.get('input[name="firstName"]').type(this.data.firstname)
    
            cy.get('input[name="lastName"]').type(this.data.lastname)
    
            cy.get('button[type="submit"]').click()
    
            cy.contains('Successfully Saved').should("be.visible")

        })
  
      })
    })
  })