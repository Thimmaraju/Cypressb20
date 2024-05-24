
describe("Understanding download file ", ()=>{

    it("test download file ", ()=>{

        let randomtext = (Math.random() + 1).toString(36).substring(7);
        cy.downloadFile("https://i.natgeofe.com/k/6d4021bf-832e-49f6-b898-27b7fcd7cbf7/eiffel-tower-ground-up_2x1.jpg", "cypress/downloads", "raju"+randomtext+".jpg")



    })
})