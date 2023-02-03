///<reference types="cypress" />
import endTestData from "../fixtures/endTestData.json"
import { endToTest } from "../support/POM/endToEnd"
let endtest = new endToTest()

describe('To check the end to end test functionality',()=>{

    beforeEach(function(){
        cy.stgLoginUser('user',endTestData.ValidPayment.mailId,endTestData.ValidPayment.password,'Sujay Apale')
    })

    it('TC_01 verify the book courier with the payment',()=>{
       endtest.domDeliveryGrms(endTestData.searchData.pickLocationPin,endTestData.searchData.dropLocationPin,endTestData.searchData.weight)
       endtest.ValidateProvider(70)
       endtest.CourierSummary('book','Ceramic Tiles',500)
       endtest.pickAddress(endTestData.pick.name,endTestData.pick.mobNo,endTestData.pick.add,endTestData.pick.city,endTestData.pick.state,endTestData.pick.country)
       endtest.delivaryAdd(endTestData.delivary.name,endTestData.delivary.mobNo,endTestData.delivary.add,endTestData.delivary.city,endTestData.delivary.state,endTestData.delivary.country)
       endtest.proceedPayment()
    })
})