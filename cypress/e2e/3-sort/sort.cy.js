import inventoryPage from '../../page/inventoryPage'
import loginPage from './../../page/loginPage'

describe('should check if items', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        loginPage.elements.inputUserName().type('standard_user')
        loginPage.elements.inputPassword().type('secret_sauce')
        loginPage.elements.loginBtn().click()
    })

    it('titles are in ascending order', () => {
        inventoryPage.elements.sortDropdown().select('az').invoke('val')
        inventoryPage.elements.itemTitles().then( items => {
            expect(items[0]).to.contain.text('Sauce Labs Backpack')
            expect(items[1]).to.contain.text('Sauce Labs Bike Light')
            expect(items[2]).to.contain.text('Sauce Labs Bolt T-Shirt')
            expect(items[3]).to.contain.text('Sauce Labs Fleece Jacket')
            expect(items[4]).to.contain.text('Sauce Labs Onesie')
            expect(items[5]).to.contain.text('Test.allTheThings() T-Shirt (Red)')
        })
    })
    it('titles are in descending order', () => {
        inventoryPage.elements.sortDropdown().select('za').invoke('val')
        inventoryPage.elements.itemTitles().then( items => {
            expect(items[0]).to.contain.text('Test.allTheThings() T-Shirt (Red)')
            expect(items[1]).to.contain.text('Sauce Labs Onesie')
            expect(items[2]).to.contain.text('Sauce Labs Fleece Jacket')
            expect(items[3]).to.contain.text('Sauce Labs Bolt T-Shirt')
            expect(items[4]).to.contain.text('Sauce Labs Bike Light')
            expect(items[5]).to.contain.text('Sauce Labs Backpack')   
        })
    })
    it('prices are in ascending order', () => {
        inventoryPage.elements.sortDropdown().select('lohi').invoke('val')
        inventoryPage.elements.itemPrices().then( items => {
            expect(items[0]).to.contain.text('$7.99')
            expect(items[1]).to.contain.text('$9.99')
            expect(items[2]).to.contain.text('$15.99')
            expect(items[3]).to.contain.text('$15.99')
            expect(items[4]).to.contain.text('$29.99')
            expect(items[5]).to.contain.text('$49.99')
        })
    })
    it('prices are in ascending order', () => {
        inventoryPage.elements.sortDropdown().select('hilo').invoke('val')
        inventoryPage.elements.itemPrices().then( items => {
            expect(items[0]).to.contain.text('$49.99')
            expect(items[1]).to.contain.text('$29.99')
            expect(items[2]).to.contain.text('$15.99')
            expect(items[3]).to.contain.text('$15.99')
            expect(items[4]).to.contain.text('$9.99')
            expect(items[5]).to.contain.text('$7.99')
        })
    })
})