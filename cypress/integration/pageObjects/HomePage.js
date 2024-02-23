class HomePage{
    getEditBox(){
        return cy.get('input[name="name"]:nth-child(2)')
    }
    getTwoWayBindingEditBox(){
        return cy.get(':nth-child(4) > .ng-untouched')
    }
    getEnterpreneur(){
        return cy.get('#inlineRadio3')
    }
    getGender(){
        return cy.get('select')
    }
    getShopPage(){
        return cy.get(':nth-child(2) > .nav-link')
    }


}
export default HomePage;