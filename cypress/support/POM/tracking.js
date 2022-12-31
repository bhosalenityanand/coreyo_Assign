
export class ShipTrack{
    elements={
        trackButton:'[class="flex items-center md:ml-6 desk-only"]>button',
        validateEle:'[class="px-6 pt-10 bg-accent track__shipment"]>h3',
        inputId:'[placeholder="AWB/Order ID"]',
        submitBtn:'button[type="submit"]',
        validateDelv:'[class="flex flex-wrap -mx-3 overflow-hidden sm:-mx-1 desk-only"]>div',
        errMessage:'[id="root"]>div'

    }

    trackShip(){
        cy.get(this.elements.trackButton).click()
        cy.get(this.elements.validateEle).should('have.text','Track Shipment')
    }

    trackingData(OrderId){
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get(this.elements.inputId).type(OrderId)
        if(OrderId != " "){
            cy.get(this.elements.submitBtn).last().click()
        }
        else{
            cy.get(this.elements.submitBtn).last().should('be.disabled')
        }
    }

    validateDelivary(){
        cy.get(this.elements.validateDelv).first().find('p').first().should('have.text','Estimated Delivery')
    }

    errorMsg(){
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        let message = 'Please check your Order ID/ AWB'
        cy.get(this.elements.errMessage).first().find('div').first().find('div').first().find('div').eq(1).should('be.visible')
         
    }

    
}