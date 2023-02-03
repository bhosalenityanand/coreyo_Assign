///<reference types="cypress" />

import { provSearch } from "../support/POM/provider"
import data from "../fixtures/providerData.json"

let provider = new provSearch()

describe('verify the provider search functionality', () => {

    beforeEach(function () {
        cy.stgLoginUser('user',data.login.mailId, data.login.password,'Sujay Apale')
        // provider.visit()

    })
    it('TC_01 verify the provider search functionality for valid data', () => {
        provider.domDeliveryGrms(data.validTestData.pickLocationPin, data.validTestData.dropLocationPin, data.validTestData.weight)
        provider.ValidateProvider(3)
    })

    it('TC_02 verify the provider search functionality for mandatory fields', () => {
        provider.domDeliveryGrms(data.invalidTestData.pickLocationPin, data.invalidTestData.dropLocationPin, data.invalidTestData.weight)
        provider.mandatoryErrMsg()

    })

    it('TC_03 verify the provider search functionality for valid weight in grams', () => {
        provider.domDeliveryGrms(data.invalidWeight.pickLocationPin, data.validWeight.dropLocationPin, data.validWeight.weight)
        provider.ValidateProvider(3)


    })

    it('TC_04 verify the provider search functionality for invalid weight in grams', () => {
        provider.domDeliveryGrms(data.invalidWeight.pickLocationPin, data.invalidWeight.dropLocationPin, data.invalidWeight.weight)


    })

    it('TC_05 verify the provider search functionality for valid weight in Kg', () => {
        provider.domDeliveryKg(data.validWeightKg.pickLocationPin, data.validWeightKg.dropLocationPin, data.validWeightKg.weight)
        provider.ValidateProvider(3)

    })

    it('TC_06 verify the provider search functionality for invalid weight in Kg', () => {
        provider.domDeliveryKg(data.invalidWeightKg.pickLocationPin, data.invalidWeightKg.dropLocationPin, data.invalidWeightKg.weight)


    })

})