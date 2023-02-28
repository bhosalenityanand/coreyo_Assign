///<reference types="cypress" />(

describe('verify the continues login',()=>{
    // cy.on('uncaught:exeption',(err,runnable)=>{
    //     return false
    // })

    Cypress.Cookies.defaults({
        preserve:'login_uid'
    })

    // beforeEach(()=>{
    //     Cypress.Cookies.preserveOnce('login_uid')

    // })
    it('verify th login',()=>{
        
       cy.loginNew('Trip2000@gmail.com','Trip@2000')
    })

    it('verify the home',()=>{
        cy.get('#header_action_nav_hotels').click()
        cy.get('.main-topic >h1').should('have.text', 'Hotels')
    })

    it('verify the home',()=>{
        cy.get('#header_action_nav_hotels').click()
        cy.get('.main-topic >h1').should('have.text', 'Hotels')
    })

    // it('verify the home',()=>{
    //     cy.get('#header_action_nav_hotels').click()
    //     cy.get('.main-topic >h1').should('have.text', 'Hotels')
    // })

    // it('verify the home',()=>{
    //     cy.get('#header_action_nav_hotels').click()
    //     cy.get('.main-topic >h1').should('have.text', 'Hotels')
    // })

    // it('verify the home',()=>{
    //     cy.get('#header_action_nav_hotels').click()
    //     cy.get('.main-topic >h1').should('have.text', 'Hotels')
    // })

    // it('verify the home',()=>{
    //     cy.get('#header_action_nav_hotels').click()
    //     cy.get('.main-topic >h1').should('have.text', 'Hotels')
    // })

    // it('verify the home',()=>{
    //     cy.get('#header_action_nav_hotels').click()
    //     cy.get('.main-topic >h1').should('have.text', 'Hotels')
    // })
})

//Trip2000@gmail.com
//Trip@2000