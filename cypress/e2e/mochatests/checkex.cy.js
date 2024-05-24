
describe("Understanding working with check boxes", ()=>{

     it.only("Check the check box ", ()=>{

        cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')

      //   cy.get('input[name^="chk_altemail"]').check().should("be.checked")

      //   //cy.get('input[name^="chk_altemail"]').should("be.checked")

      //   cy.wait(5000)

      //   cy.get('input[name^="chk_altemail"]').uncheck().should("not.be.checked")

      cy.get('input[value="m"]').should("be.checked")
      cy.get('input[value="f"]').check().should("be.checked")

      cy.get('input[value="m"]').should("not.be.checked")

      cy.get('select[name*="DOB_Month"]').select(7).should("have.value", "raju")
     
     



     })


     it("Check the check box ", ()=>{

      cy.visit('https://form-devs.s3.eu-central-1.amazonaws.com/formulario.html')

      cy.get('input[type="checkbox"]').check(["HTML", "C#"])

      cy.wait(5000)

      cy.get('input[type="checkbox"]').uncheck(["HTML", "C#"])


      })
})