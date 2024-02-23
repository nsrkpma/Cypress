/// <reference types="Cypress" />
describe('Handling Child',function(){

    it('My 4th Test Case',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //cy.get("#opentab").click()
        cy.get("#opentab").invoke('removeAttr','target').click();
        cy.origin("https://www.qaclickacademy.com/",()=>{
            cy.get("#navbarSupportedContent a[href*='about']").click();
        cy.get('.mt-50 h2').should('contain','Welcome to QAClick Academy ');
        })

    })
})