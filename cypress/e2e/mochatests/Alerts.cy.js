describe('Automation - Working with Alerts', function () {

    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    })

    it.only('Cypress Test Case - Simple Alert', function () {

        cy.contains('Click for JS Alert').click();

        cy.on('window:alert', (alert) => {
		
            expect(alert).to.equal(`I am a JS Alert`)
            return true
        })
    })

    it.only('Cypress Test Case - test Confirm Alert - OK', function () {

        cy.contains('Click for JS Confirm').click();
        cy.on('window:confirm', () => {
            return true;
        })
    })


    it('Cypress Test Case - test Confirm Alert - Cancle', function () {

        cy.contains('Click for JS Confirm').click();
        cy.on('window:confirm', () => {

            return false;
        })
    })

    it.only('Cypress Test Case - test prompt Alert - Ok', function () {
    
        cy.window().then(($win) => {

            cy.stub($win, 'prompt').returns("Naveen");
            cy.contains('Click for JS Prompt').click();
        })
    
    })

    it.only('Cypress Test Case - test prompt Alert - Cancel', function () {

        cy.window().then(($win) => {

            cy.stub($win, 'prompt').callsFake(() => null)
            cy.contains('Click for JS Prompt').click();
        })
    })
})