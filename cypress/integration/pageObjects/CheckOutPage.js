class CheckOutPage{
    getCheckOutButton(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
    checkoutButton(){
        return cy.get("button[class='btn btn-success']")
    }
    getcountry(){
        return cy.get('#country')
    }
    country(){
        return cy.get('.suggestions > ul > li > a')
    }
    checkbox(){
        return cy.get('.checkbox')
    }
    purchasebutton(){
        return cy.get('.ng-untouched > .btn')
    }
    successalert(){
        return cy.get('.alert')
    }
}
export default CheckOutPage;