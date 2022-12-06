class LoginPage {

    elements = {

        inputUserName : () => cy.get('#user-name'),

        inputPassword : () => cy.get('#password'),

        loginBtn : () => cy.get('#login-button'),

        loginMessage : () => cy.get('h3[data-test="error"]')
    }

    login(username, password){
        this.elements.inputUserName().type(username)
        this.elements.inputPassword().type(password)
        this.elements.loginBtn().click()
    }

}

module.exports = new LoginPage()