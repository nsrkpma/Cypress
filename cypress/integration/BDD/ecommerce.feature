Feature: End to End Ecommerce validation

    Application Regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When I add items to cart
    And Validate the total prices
    Then Select the county submit and verify Thankyou

    @Smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce page
    When I fill the form Details
    |name | gender |
    |Bobby| Male   |
    Then Validate the form behavior
    |name|
    |Bobby|
    And Select the shop page