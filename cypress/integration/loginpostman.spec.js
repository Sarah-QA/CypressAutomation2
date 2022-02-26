/// <reference types= "cypress" />


//This function is to describe the test suite
describe("postman Login Test suite", function () {
    
    //This function is to describe the test case
    it(`postman login`, function () {
    //Visit postman.
    cy.visit("https://www.postman.com//")
    
    cy.get('.sc-fzokOt > .sc-AxmLO > .OnuHM').click();
    
   
  });
});