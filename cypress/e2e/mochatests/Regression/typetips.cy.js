describe('Verify Login functionality', () => {

    it('Verify login with Valid creds', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
      cy.xpath('//input[@name="username"]').type("Admin", {delay:0})
  
      cy.get('input[name="password"]').type('admin123{enter}')
  
      cy.contains('Time at Work').should('be.visible')
    })
    
  })