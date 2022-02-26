/// <reference types="cypress" />


it('google test', function() {

    cy.visit('https://google.com')
    cy.get('.gLFyf',).type("automation step by step{enter}")

    cy.get('[data-hveid="CA4QAA"] > .tF2Cxc > .yuRUbf > a > .LC20lb').click()
    
cy.wait("6000")

 });

it.only('login test', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('#divUsername > .form-hint').type("Admin");
    cy.get('#txtPassword').type("admin123");

    cy.get('#btnLogin').click();
    cy.get('#menu_admin_viewAdminModule > b').click();
    cy.get('#btnAdd').click();
    cy.get('#btnSave').click();
   


   
    
})