/// <reference types="Cypress" />
describe('Handling MouseOver',function(){

    it('My 6th Test Case',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force: true})
        cy.url().should('include','top')



    })
})