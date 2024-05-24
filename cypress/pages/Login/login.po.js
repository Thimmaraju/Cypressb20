class loginPage{


    oranegHRMLogo(){

        return 'img[alt="company-branding"]'
    }

    usernameInput(){

        return 'input[name="username"]'
    }

    passwordInput(){

        return 'input[name="password"]'
    }

    credsInput(attributevalue){

        return 'input[name="'+attributevalue+'"]' 
    }

    // loginBtn(){

    //     return 'button[type="submit"]'
    // }


      loginButton = 'button[type="submit"]'
    loginErrorMessage(){

        return 'Invalid credentials'
    }

    loginwithcreds(username, password){
        cy.get(this.credsInput("username")).type(username)
        cy.get(this.credsInput("password")).type(password)
        cy.get(this.loginButton).click()
    }
}

const login = new loginPage()

export default login