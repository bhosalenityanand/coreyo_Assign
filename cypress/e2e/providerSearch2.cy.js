///<reference types="cypress" />

import { provSearch } from "../support/POM/provider"
import data from "../fixtures/providerData2.json"


let searchProvider = new provSearch()

describe('verify the provider search functionality for parcel', () => {

    beforeEach(function () {
        // cy.loginUser('https://reference-user-web.web.app/', data.login.mailId, data.login.password, 'Sujay Apale')
        cy.stgLoginUser('user',data.login.mailId, data.login.password, 'Sujay Apale')
    })

    it('TC_01 verify the provider search functionality for valid data', () => {
        searchProvider.parcelDelivGrms(data.validtData.pickLocationPin,data.validtData.dropLocationPin,data.validtData.weight)
        searchProvider.parcelData(data.validtData.length,data.validtData.width,data.validtData.hight)
        searchProvider.ValidateProvider(3)
    })

    it('TC_02 verify the provider search functionality for mandatory fields',()=>{
        searchProvider.parcelDelivGrms(data.invalidData.pickLocationPin,data.invalidData.dropLocationPin,data.invalidData.weight)
        searchProvider.parcelData(data.invalidData.length,data.invalidData.width,data.invalidData.hight)
        searchProvider.mandatoryErrMsg()
    })

    it('TC_03 verify the provider search functionality for mandatory fields for length,width & hight',()=>{
        searchProvider.parcelDelivGrms(data.invalidLength.pickLocationPin,data.invalidLength.dropLocationPin,data.invalidLength.weight)
        searchProvider.parcelData(data.invalidLength.length,data.invalidLength.width,data.invalidLength.hight)
        
    })

    it('TC_04 TC_04 verify the provider search functionality for fields length,width & hight',()=>{
        searchProvider.parcelDelivGrms(data.validAllFields.pickLocationPin,data.validAllFields.dropLocationPin,data.validAllFields.weight)
        searchProvider.parcelData(data.validAllFields.length,data.validAllFields.width,data.validAllFields.hight)
        searchProvider.ValidateProvider(3)
        
    })
})