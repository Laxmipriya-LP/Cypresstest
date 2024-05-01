// login, add products to cart and verify cart products' desc and price

describe('Login test case', function(){

    it('invalid login',function(){

        cy.visit("https://www.saucedemo.com/")
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.get('#add-to-cart-sauce-labs-onesie').click()
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
        cy.get('#shopping_cart_container').click()
        cy.get('.inventory_item_desc').eq(0).should('contain',"Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.")
        cy.get('.inventory_item_price').eq(0).should('contain',"$7.99")
        cy.get('.inventory_item_desc').eq(1).should('contain',"It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.")
        cy.get('.inventory_item_price').eq(1).should('contain',"$49.99")
    })
    
})