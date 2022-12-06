
import loginData from './../../fixtures/sign-in.json'
import loginPage from './../../page/loginPage'

describe('should sign in with', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    loginData.forEach(element => {
        it(`${element.userType}`, () => {
            loginPage.login(element.username, element.password)
            if(element.userType === 'invalid user' || element.userType === 'locked out user'){
                cy.url().should('eq', element.expectedUrl)
                loginPage.elements.loginMessage().should('have.text', element.message)
            }else{
                cy.url().should('eq', element.expectedUrl)
            }
        })
    });
})