// login to website with invalid passsword

describe('Login test case', function(){

    it('invalid login',function(){

        cy.visit("https://www.saucedemo.com/")
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret-sauce')
        cy.get('#login-button').click()
        cy.get('.error-message-container.error').should('contain','Epic sadface: Username and password do not match any user in this service')

    })
    
})