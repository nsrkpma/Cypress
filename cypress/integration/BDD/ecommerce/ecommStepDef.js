import {DataTable,Given,Then,When} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pageObjects/HomePage"
import ProductPage from "../../pageObjects/ProductPage"
import CheckOutPage from "../../pageObjects/CheckOutPage"
const homepage=new HomePage()
const productpage= new ProductPage()
const checkoutpage= new CheckOutPage()

Given('I open Ecommerce page',()=>{
    cy.visit(Cypress.env('url')+"/angularpractice/");
});
When('I add items to cart',function(){
    homepage.getShopPage().click()
    this.data.productName.forEach(function(element){
        cy.selectProduct(element)
           });
    productpage.getCheckOutButton().click()
});
Then('Validate the total prices',()=>{
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
});
Then('Select the county submit and verify Thankyou',()=>{
    checkoutpage.checkoutButton().click()
    checkoutpage.checkbox().click()
    checkoutpage.getcountry().type('India')
    checkoutpage.country().click()
    checkoutpage.purchasebutton().click()
    checkoutpage.successalert().should('exist',true)
    checkoutpage.successalert().should('contain','Success')
});

When('I fill the form Details',function(DataTable){
    homepage.getEditBox().type(DataTable.rawTable[1][0])
    homepage.getGender().select(DataTable.rawTable[1][1]);
});

Then('Validate the form behavior',function(DataTable){
    homepage.getTwoWayBindingEditBox().should('have.value',DataTable.rawTable[1][0])
    homepage.getEditBox().should('have.value',DataTable.rawTable[1][0])
    homepage.getEditBox().should('have.attr','minlength','2')
    homepage.getEnterpreneur().should('be.disabled')
});

Then('Select the shop page',function(){
    homepage.getShopPage().click()
});