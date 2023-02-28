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

Cypress.Commands.add('loginUser', (mail, password, name) => {
    cy.visit(Cypress.env('staging'))
    cy.get('span[class="mx-2"]').first().click()
    cy.contains('Login with email').click()
    cy.get('input[type="email"]').type(mail)
    cy.get('input[type="password"]').type(password)
    cy.get('button[type="submit"]').last().click()
    cy.get('button[id="headlessui-menu-button-20"] >p').should('have.text', name)

})

Cypress.Commands.add('stgLoginUser', (type, mail, password, name) => {
    if (type == 'user') {
        cy.visit(Cypress.env('stagingUser'))
    }
    else if (type == 'patner') {
        cy.visit(Cypress.env('stagingPatner'))
    }
    // cy.visit(Cypress.env('stagingUser'))
    cy.get('input[type="email"]').type(mail)
    cy.get('input[type="password"]').type(password)
    cy.get('button[type="submit"]').last().click()
    cy.get('#headlessui-menu-button-2>p').should('have.text', name)
})

Cypress.Commands.add('loginNew', (username, pass) => {
    cy.visit('https://www.trip.com/')
    cy.get('.close-icon.fi.fi-close').click()
    cy.get('.mc-hd__login-btn').click({ fortce: true })
    // cy.get('#ibuHeaderMenu .mc-hd__account.mc-hd__dropdown-con').click({force:true})
    cy.get('input[placeholder="Please enter an email address"]').type(username)
    cy.get('#ibu_login_submit').click()
    cy.get('input[placeholder="Please enter your password"]').type(pass)
    cy.get('.ibu-login-btn-primary ').click()
})

// Cypress.Commands.add('loginSess', (username, password) => {
//     cy.session([username, password], () => {
//         cy.visit('https://www.trip.com/')
//         cy.get('.close-icon.fi.fi-close').click()
//         cy.get('.mc-hd__login-btn').click({ fortce: true })
//         cy.get('input[placeholder="Please enter an email address"]').type(username)
//         cy.get('#ibu_login_submit').click()
//         cy.get('input[placeholder="Please enter your password"]').type(pass)
//         cy.get('.ibu-login-btn-primary ').click()
//     })
// })