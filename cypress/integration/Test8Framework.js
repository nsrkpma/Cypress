/// <reference types="Cypress" />
import HomePage from "./pageObjects/HomePage"
import ProductPage from "./pageObjects/ProductPage"
import CheckOutPage from "./pageObjects/CheckOutPage"
//const { data } = require("cypress/types/jquery");

describe('My framework Test Suite MouseOver',function(){


    before(function() {
        // root-level hook
        // runs once before all tests
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
      })
    it('My 6th Test Case',function(){
        Cypress.config('defaultCommandTimeout',10000)

        const homepage=new HomePage()
        const productpage= new ProductPage()
        const checkoutpage= new CheckOutPage()

        cy.visit(Cypress.env('url')+"/angularpractice/");
        homepage.getEditBox().type(this.data.name)
        homepage.getGender().select(this.data.gender);
        homepage.getTwoWayBindingEditBox().should('have.value',this.data.name)
        homepage.getEditBox().should('have.value',this.data.name)
        homepage.getEditBox().should('have.attr','minlength','2')
        homepage.getEnterpreneur().should('be.disabled')
        //cy.pause()
        homepage.getShopPage().click()

        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })
        productpage.getCheckOutButton().click()
        var sum=0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            var amount=(parseInt($el.text().replace(/[^0-9]/g, ''), 10));
            cy.log(amount)
            sum=Number(sum)+amount        
        }).then(function(){
        cy.log(sum)})
        cy.get('h3 strong').then(function(element){
            const t=element.text()
            var total=(parseInt(t.replace(/[^0-9]/g, ''), 10));
            cy.log(total)
            expect(sum).to.equal(total)
          });
        
        
        checkoutpage.checkoutButton().click()
        checkoutpage.checkbox().click()
        checkoutpage.getcountry().type('India')
        checkoutpage.country().click()
        checkoutpage.purchasebutton().click()
        checkoutpage.successalert().should('exist',true)
        checkoutpage.successalert().should('contain','Success')

    })
})