// login, add products to cart and verify cart products' desc and price

describe('Login test case', function(){

    it('invalid login',function(){

        cy.visit("https://www.saucedemo.com/")
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.get('#add-to-cart-sauce-labs-onesie').click()
        cy.get('#shopping_cart_container').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type('Ram')
        cy.get('#last-name').type('Das')
        cy.get('#postal-code').type('100011')
        cy.get('[data-test="continue"]').click()
        cy.get('.title').eq(0).should('contain',"Checkout: Overview")
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="complete-header"]').should('contain', "Thank you for your order!")
        cy.get('[data-test="complete-text"]').should('contain', "Your order has been dispatched, and will arrive just as fast as the pony can get there!")

    })
    
})