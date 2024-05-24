
describe('checkbox Test', function () {

  it('Working with Check boxes', function () {

    cy.visit("https://register.rediff.com/register/register.php");

    //CheckBox 

    cy.get('input[name^=chk_altemail]').check().should('be.checked');

    cy.wait(5000)

    cy.get('input[name^=chk_altemail]').uncheck().should('not.be.checked');

    //cy.get('input[name^=chk_altemail]')
    //         cy.wait(10000)

    //         cy.xpath('//input[starts-with(@name,"chk_altemail")]').uncheck().should('not.be.checked');

    //   // //Radio 

    cy.xpath('//input[@value="f"]').check().should('be.checked');

    cy.xpath('//input[@value="m"]').should('not.be.checked');

    //Uncheck will not work for Radio

    //Dropdowns

    //3 ways we can handle 

    //Text
    //       cy.xpath('//select[starts-with(@name,"DOB_Month")]').select("APR").should("have.value", "04" )

    //     cy.wait(5000)


    //   cy.xpath('//select[starts-with(@name,"DOB_Month")]').select("09").should("have.value", "09" )
    //   cy.wait(5000)

    //  cy.xpath('//select[starts-with(@name,"DOB_Month")]').select(6).should("have.value", "06" )

    // cy.selectdropdownvalue('//select[starts-with(@name,"DOB_Month")]',"OCT")

  });
});
