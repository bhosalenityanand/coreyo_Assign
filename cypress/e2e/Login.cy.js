///<reference types="cypress" />

import { login } from "../support/POM/login"
import data from "../fixtures/login.json"

let loginFun = new login()


describe('verify the login functionality', () => {

  beforeEach(function () {
    cy.visit(Cypress.env('stagingUser'))
    cy.clearCookies()
  })

  it('TC_01 verify the login with valid credentails', () => {
    // loginFun.login()
    loginFun.enterData(data.validTestData.mailId, data.validTestData.password)
    loginFun.loginButton()
    loginFun.validateNm('Sujay Apale')
  })

  it('TC_02 verify the login with invalid emailId and valid password', () => {
    // loginFun.login()
    loginFun.enterData(data.invalidMail.mailId, data.invalidMail.password)
    loginFun.loginButton()
    loginFun.invalidMsg()

  })


  it('TC_03 verify the login with valid emailId and invalid password', () => {
    // loginFun.login()
    loginFun.enterData(data.invalidPassword.mailId, data.invalidPassword.password)
    loginFun.loginButton()
    loginFun.invalidMsg()
  })

  it('TC_04 verify the login error with invalid emailId and password fields', () => {
    // loginFun.login()
    loginFun.enterData(data.invalidData.mailId, data.invalidData.password)
    loginFun.loginButton()
    loginFun.invalidMsg()
  })

  it('TC_05 verify the login error with invalid emailId and password fields', () => {
    // loginFun.login()
    loginFun.enterData(data.invalidTestData.mailId,data.invalidTestData.password)
    loginFun.manditoryField()
  })

  it('TC_06 verify the login error with less number of password character', () => {
    // loginFun.login()
    loginFun.enterData(data.lessCharacterPswd.mailId,data.lessCharacterPswd.password)
    loginFun.loginButton()
    loginFun.passwordErrorMsg()

    cy.on('uncaught:exception',(err,runnable)=>{
      return false
    })
  })



})