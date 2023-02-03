export class login {
    elements = {
        valid: 'div[style="justify-content: space-around;"]> button',
        logButn: 'span[class="mx-2"]',
        inpMail: 'input[type="email"]',
        inpPawd: 'input[type="password"]',
        buttonlog: 'button[type="submit"]',
        valName: '#headlessui-menu-button-2>p',
        invalidMessage:'div[id="root"] div[aria-live="polite"]',
        manditoryMsg:'[class="space-y-0.5 p-4"]>p'

    }

    visit() {
        cy.visit(Cypress.env('staging'))
        // cy.get(this.elements.valid).eq(0).find('p').should('have.text', 'Courier')
    }

    login() {
        cy.get(this.elements.logButn).first().click()
        cy.contains('Login with email').click()
    }

    enterData(mail, password) {
        cy.get(this.elements.inpMail).type(mail)
        cy.get(this.elements.inpPawd).type(password)
        
    }

    loginButton(){
        cy.get(this.elements.buttonlog).last().click()
    }

    validateNm(name) {
        cy.get(this.elements.valName).should('have.text', name)
    }

    invalidMsg() {

        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        // cy.intercept({
        //     method: 'POST',

        //     url: 'https://api.staging.coreyoo.com/api/v1/user/login'
        // }).as('getErrorMessage').then(Response => {
        //     cy.log(Response)
        // })
        // cy.wait('@getErrorMessage')
        let userNotFound = "User not found with this E-mail ID"
        let invalidcredentials = "The email and password combination is incorrect" 
        cy.get(this.elements.invalidMessage).then(function(msg){
            if(msg.text()==userNotFound){
                cy.wrap(msg).should('have.text', userNotFound)
            }
            else{
                cy.wrap(msg).should('have.text', invalidcredentials)
            }
        })
    }

    manditoryField(){
        cy.get(this.elements.manditoryMsg).eq(1).should('have.text','Please enter a valid email.')
        cy.get(this.elements.manditoryMsg).eq(3).should('have.text','Please lengthen the password upto 8 characters.')
    }

    passwordErrorMsg(){
        cy.get(this.elements.manditoryMsg).eq(2).invoke('show').should('have.text','Please lengthen the password upto 8 characters.')
    }


}

//.should('have.text', 'User not found with this E-mail ID')