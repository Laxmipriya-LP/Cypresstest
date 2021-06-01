class HomePage
{
getEditBox()
{
    return cy.get('div.form-group:nth-child(1)')
}

twoWayDataBinding()
{
    return cy.get(':nth-child(4) > .ng-untouched')
}

getGendar()
{
    return cy.get('select')
}

getEntrepreneurRadioButton()
{
    return cy.get('#inlineRadio3')
}

getShoptab()
{
    return cy.get(':nth-child(2) > .nav-link')
}

}
export default HomePage;