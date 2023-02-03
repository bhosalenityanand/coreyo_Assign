///<reference types="cypress" />

describe('verify the otp authentication functionality',()=>{
    it('verify the otp authentication for valid otp',()=>{
        cy.visit('https://github.com/login')
        cy.get('#login_field').type('bhosalenityanand5@gmail.com')
        cy.get('#password').type('Nityanandb@2020')
        cy.get('input[value="Sign in"]').click()

        // waiting for the otp request
        cy.wait(10000)

        // recive the OTP

        cy.request('https://receive-smss.com/sms/447923432062/')
            .then( html =>{
                const otpLine = html.body.match(/.*GitHub.*/)
                const boldText = otpLine[0].match(/<b>\d+/)
                cy.log(otpLine)
                // cy.log(boldText)

                // return boldText[0].match(/\d+/)[0]
            })

    })
})