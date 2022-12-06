import inventoryPage from '../../page/inventoryPage'
import loginPage from './../../page/loginPage'
import cartPage from '../../page/cartPage'
import checkoutPage from '../../page/checkoutPage'

describe('it should', () => {
    let numProducts = Math.floor(Math.random() * 5) + 1
    const product = (numProducts + 1)
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        loginPage.elements.inputUserName().type('standard_user')
        loginPage.elements.inputPassword().type('secret_sauce')
        loginPage.elements.loginBtn().click()
    })
    it('add a single products to the cart', () =>{
        inventoryPage.elements.addToCartBtn(product).click()
        inventoryPage.elements.cartCount().should('have.text', '1');
    })
    it('add multiple products to the cart', () =>{
        inventoryPage.elements.addToCartBtn(1).click()
        inventoryPage.elements.addToCartBtn(2).click()
        inventoryPage.elements.addToCartBtn(3).click()
        inventoryPage.elements.cartCount().should('have.text', '3');
    })
    it('remove a product from the inventory page', () =>{
        inventoryPage.elements.addToCartBtn(product).click()
        inventoryPage.elements.cartCount().should('have.text', '1');
        inventoryPage.elements.addToCartBtn(product).click()
        inventoryPage.elements.cartCount().should('not.exist');
    })
    it('remove a product from the cart page', () =>{
        inventoryPage.elements.addToCartBtn(1).click()
        inventoryPage.elements.addToCartBtn(2).click()
        inventoryPage.elements.cartCount().should('have.text', '2');
        inventoryPage.elements.cartCount().click()
        cartPage.elements.removeBtn().click()
        inventoryPage.elements.cartCount().should('have.text', '1');
    })
    it('complete an order', () => {
        inventoryPage.elements.addToCartBtn(product).click()
        inventoryPage.elements.cartCount().should('have.text', '1');
        inventoryPage.elements.cartCount().click()
        cartPage.elements.checkoutBtn().click()
        checkoutPage.elements.inputFirstName().type('Joe')
        checkoutPage.elements.inputLastName().type('Brown')
        checkoutPage.elements.inputZipCode().type('12345')
        checkoutPage.elements.continueBtn().click()
        checkoutPage.elements.finishBtn().click()
        checkoutPage.elements.finalHeader().should('have.text', 'THANK YOU FOR YOUR ORDER')
    })
    it('try to continue checkout without a first name', () => {
        inventoryPage.elements.addToCartBtn(product).click()
        inventoryPage.elements.cartCount().should('have.text', '1');
        inventoryPage.elements.cartCount().click()
        cartPage.elements.checkoutBtn().click()
        checkoutPage.elements.inputLastName().type('Brown')
        checkoutPage.elements.inputZipCode().type('12345')
        checkoutPage.elements.continueBtn().click()
        checkoutPage.elements.errorMessage().should('have.text', 'Error: First Name is required')
    })
    it('try to continue checkout without a last name', () => {
        inventoryPage.elements.addToCartBtn(product).click()
        inventoryPage.elements.cartCount().should('have.text', '1');
        inventoryPage.elements.cartCount().click()
        cartPage.elements.checkoutBtn().click()
        checkoutPage.elements.inputFirstName().type('Joe')
        checkoutPage.elements.inputZipCode().type('12345')
        checkoutPage.elements.continueBtn().click()
        checkoutPage.elements.errorMessage().should('have.text', 'Error: Last Name is required')
    })
    it('try to continue checkout without a zip code', () => {
        inventoryPage.elements.addToCartBtn(product).click()
        inventoryPage.elements.cartCount().should('have.text', '1');
        inventoryPage.elements.cartCount().click()
        cartPage.elements.checkoutBtn().click()
        checkoutPage.elements.inputFirstName().type('Joe')
        checkoutPage.elements.inputLastName().type('Brown')
        checkoutPage.elements.continueBtn().click()
        checkoutPage.elements.errorMessage().should('have.text', 'Error: Postal Code is required')
    })
    it('try to continue checkout without entering data', () => {
        inventoryPage.elements.addToCartBtn(product).click()
        inventoryPage.elements.cartCount().should('have.text', '1');
        inventoryPage.elements.cartCount().click()
        cartPage.elements.checkoutBtn().click()
        checkoutPage.elements.continueBtn().click()
        checkoutPage.elements.errorMessage().should('have.text', 'Error: First Name is required')
    })
})