import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";

Given('website given to Login',function(){
    cy.visit("https://www.saucedemo.com/")
})
When('Enter Valid username and Invalid Password',function(){
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret-sauce')
})
Then('clcik the login button and verify the password validaƟon message',function(){
    cy.get('#login-button').click()
        cy.get('.error-message-container.error').should('contain','Epic sadface: Username and password do not match any user in this service')
})
