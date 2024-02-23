/// <reference types="Cypress" />
describe('My First Test Suite',function(){

    it('My First Test Case',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //cy.get('.product').should('have.length',5)
        //cy.get('.product:visible').should('have.length',4)
        cy.get('.products').as('productLocator')
        //cy.find('.product').should('have.length',4)
        //cy.get(':nth-child(3) > .product-action > button').click()
        //cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textveg=$el.find('h4.product-name').text()
            if(textveg.includes('Cashews')){
                cy.wrap($el).find('button').click();
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()





    })
})