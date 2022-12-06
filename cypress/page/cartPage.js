class CartPage{

    elements = {
        cartTotal : () => cy.get('div.item_pricebar > div'),

        removeBtn : () => cy.get('#cart_contents_container > div > div.cart_list > div:nth-child(3) > div.cart_item_label > div.item_pricebar > button'),

        checkoutBtn : () => cy.get('#checkout'),

        itemTitle : () => cy.get(`#item_4_title_link > div`),

        itemPrice : () => cy.get('div.cart_item_label > div.item_pricebar > div')
    }
}

module.exports = new CartPage()