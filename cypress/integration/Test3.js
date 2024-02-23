/// <reference types="Cypress" />
describe('Handling alerts',function(){

    it('My First Test Case',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()

        cy.on('window:alert',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        }
    )    
    cy.get('#confirmbtn').click()
    cy.on('window:confirm',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        }
    )   

})


})
