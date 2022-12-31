// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginUser',(url,mail,password,name)=>{
    cy.visit(url)
    cy.get('span[class="mx-2"]').first().click()
    cy.contains('Login with email').click()
    cy.get('input[type="email"]').type(mail)
    cy.get('input[type="password"]').type(password)
    cy.get('button[type="submit"]').last().click()
    cy.get('button[id="headlessui-menu-button-20"] >p').should('have.text',name)

})