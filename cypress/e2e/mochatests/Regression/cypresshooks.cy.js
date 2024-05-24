

describe("Test suite name", () => {

    after("After all", ()=>{

        cy.log("Aftetr All Tests block")
    })
    
    beforeEach("Before Each it", ()=>{

        cy.log("Before each block")
    })

    afterEach("After Each it", ()=>{

        cy.log("After each block")
    })

    before("Before All", ()=>{

        cy.log("Before All block")
    })

    it("Test case name 1", () => {

        cy.log("1st test case body")

    })

    
    it("Test case name 2", () => {

        cy.log("2nd test case body")

    })

    
    it("Test case name 3", () => {

        cy.log("3rd test case body")

    })

    
    it("Test case name 4", () => {
        cy.log("4th test case body")

    })

})