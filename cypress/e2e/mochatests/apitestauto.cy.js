
import data from "../fixtures/createemployee.json"
describe("Userstanding API Test automation", ()=>{

    it("List of users", ()=>{

        cy.request("GET", "https://reqres.in/api/users?page=2").then((response) =>{

            expect(response.status).to.equal(200)

            cy.writeFile("cypress/fixtures/response.txt", response)

            expect(response.body).to.have.property("per_page", 6)

            expect(response.body.data[0].id).to.equal(7)

            expect(response.body.data[0].email).to.equal("michael.lawson@reqres.in")
        })
    })

    it.only("Create user", ()=>{
        const payload = {
            "name": "Raju",
            "job": "Trainer"
        }

        cy.request("POST", "https://reqres.in/api/users", payload).then((response) =>{

            expect(response.status).to.equal(201)

            expect(response.body).to.have.property("name", "Raju")
            expect(response.body).to.have.property("job", "Trainer")

            var time = JSON.stringify(response.body.createdAt)
            var idvalue = JSON.stringify(response.body.id)

            cy.log(time)
            cy.log(idvalue)

            cy.writeFile('cypress/fixtures/module1/test10.json', { "Id": idvalue });
        })
    })

    it("Delete user", ()=>{
   

        cy.request("DELETE", "https://reqres.in/api/users/2").then((response) =>{

            expect(response.status).to.equal(204)

        })
    })

    it("Create employee", ()=>{
       
     

        cy.request({

            method: "POST",
            url: "/web/index.php/api/v2/pim/employees",
            headers: {
                Cookie : Cypress.env("cookivalue"),
                Referer: "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee"

            },
            body: data

        }).then((response) =>{

            expect(response.status).to.equal(200)

            expect(response.body.data.lastName).to.equal("TL")
            expect(response.body.data.firstName).to.equal("Mamata")

        })
    })

    it.only("Create employee - 401", ()=>{
       
     

        cy.request({

            method: "POST",
            url: "/web/index.php/api/v2/pim/employees",failOnStatusCode: false,
            headers: {
                Cookie : "ierjgiutrj",
                Referer: "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee"

            },
            body: data

        }).then((response) =>{

            expect(response.status).to.equal(401)



        })
    })


})