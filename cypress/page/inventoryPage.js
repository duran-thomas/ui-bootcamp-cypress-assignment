class InventoryPage{

    elements = {
        cartCount : () => cy.get('.shopping_cart_badge'),
        itemTitles : () => cy.get('.inventory_item_name'),
        itemPrices : () => cy.get('.inventory_item_price'),
        addToCartBtn : (index) => cy.get(`#inventory_container > div > div:nth-child(${index}) > div.inventory_item_description > div.pricebar > button`),
        sortDropdown : () => cy.get('.product_sort_container')
    }
}

module.exports = new InventoryPage()