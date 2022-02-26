/// <reference types= "cypress" />


//This function is to describe the test suite
describe("Instagram Login Test suite", function () {
    
    //This function is to describe the test case
    it(`Instagram login`, function () {
    //Visit instagram.
    cy.visit("https://www.instagram.com/")
    
    cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ').type("qatest71");
   
    cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ').type("education789");

    cy.get('.sqdOP > .qF0y9').click();

    cy.get('.eyXLr').should("be.visible");

    cy.get(':nth-child(8) > a > ._7UhW9').click();
    
  });
});