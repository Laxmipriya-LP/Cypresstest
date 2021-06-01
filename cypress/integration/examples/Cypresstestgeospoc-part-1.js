describe('my test suite', function(){

    before(function(){
                //data driven test using fixture
                cy.fixture('example').then(function(data){
                    this.value=data;
                })
            })

    it('geospoc part-1', function(){
        //visit the site
        cy.visit("https://www.demoblaze.com/index.html")

        //sign up successfully
        cy.get('#signin2').click();
        cy.get('#sign-username').type(this.value.username);
        cy.get('#sign-password').type(this.value.pw);
        cy.get('.btn.btn-primary').eq(1).click();
        cy.get('.btn.btn-secondary').eq(1).click();

        //login to the page
        cy.get('#login2').click();
        cy.get('#loginusername').type(this.value.username);
        cy.get('#loginpassword').type(this.value.pw);
        cy.get('.btn.btn-primary').eq(2).click();


        //logout
        cy.wait(15000);
        cy.get('#logout2').click();
    })
})