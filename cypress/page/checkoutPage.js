class CheckoutPage{

    elements = {
        inputFirstName : () => cy.get('#first-name'),
        inputLastName : () => cy.get('#last-name'),
        inputZipCode : () => cy.get('#postal-code'),
        errorMessage : () => cy.get('div.error-message-container.error > h3'),
        finishBtn : () => cy.get('#finish'),
        continueBtn : () => cy.get('#continue'),
        finalHeader : () => cy.get('.complete-header')
    }
}

module.exports = new CheckoutPage()