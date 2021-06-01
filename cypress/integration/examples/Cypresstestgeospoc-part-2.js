
describe('my test suite', function(){

    before(function(){
                //data driven test using fixture
                cy.fixture('example').then(function(data){
                    this.value=data;
                })
            })

    it('geospoc part-2', function(){
        //visit the site
        cy.visit("https://www.demoblaze.com/index.html")

        //login to the page
        cy.get('#login2').click();
        cy.get('#loginusername').type(this.value.username);
        cy.get('#loginpassword').type(this.value.pw);
        cy.get('.btn.btn-primary').eq(2).click();

        //fill details in contact
        cy.wait(3000);
        cy.get('.nav-item').eq(1).click();
        cy.get('#recipient-email').type(this.value.username);
        cy.get('#recipient-name').type(this.value.name);
        cy.get('#message-text').type(this.value.textmsg);
        cy.get('.btn.btn-primary').eq(0).click();

        //verify categories
        cy.get('.list-group').eq(0).each(elements=>{
            if(((elements.text()).includes('Phones'))){
                expect(elements.text()).to.include('Phones')
                }
            if(((elements.text()).includes('Laptops'))){
                expect(elements.text()).to.include('Laptops')
                }
            if(((elements.text()).includes('Monitors'))){
                expect(elements.text()).to.include('Monitors')
                }
        })

        //Verify Some products and their details
        cy.get('.card-title').eq(0).should('have.text','Samsung galaxy s6');
        cy.get('.card-title').eq(1).should('have.text','Nokia lumia 1520').click();
        // cy.get('#tbodyid').should('have.','Nokia lumia 1520');
        
        //Add product to cart 
        cy.get('.btn.btn-success.btn-lg').click();

        //verify cart
        cy.get('#cartur').click({force:true});
        cy.wait(5000);
        cy.get('#tbodyid').each(product=>{
            const actualText=product.text()
            expect(actualText.includes('Nokia lumia 1520')).to.be.true
        })

        //place order
        cy.get('.btn.btn-success').click();
        cy.get('#name').type(this.value.name);
        cy.get('#country').type(this.value.country);
        cy.get('#city').type(this.value.city);
        cy.get('#card').type(this.value.card);
        cy.get('#month').type(this.value.Month);
        cy.get('#year').type(this.value.Year);
        cy.get('.btn.btn-primary').eq(2).click();
        cy.get('.sweet-alert.showSweetAlert.visible').each(element=>{
            const actualText=element.text()
            expect(actualText.includes('Thank you for your purchase!')).to.be.true
        })
        cy.get('.sa-confirm-button-container').click();

        //Logout
        cy.wait(5000);
        cy.get('#logout2').click();
    })
})