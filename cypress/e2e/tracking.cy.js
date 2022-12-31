///<reference types="cypress" />

import {ShipTrack} from "../support/POM/tracking"
import data from "../fixtures/TrackingData.json"

let track = new ShipTrack()

describe('verify the shipment tracking functionality',()=>{

    beforeEach(function(){
        cy.loginUser('https://reference-user-web.web.app/',data.loginData.mailId,data.loginData.password,'Sujay Apale')
    })

    it('TC_01 verify the shipment tracking fumctionality with valid tacking Id data',()=>{
        track.trackShip()
        track.trackingData(data.validTrackData.orderID)
        track.validateDelivary()
    })

    it.only('TC_02 verify the shipment tracking fumctionality with blank tracking Id data',()=>{
        track.trackShip()
        track.trackingData(data.blankTestData.orderID)
        // track.errorMsg()
        
    })
})