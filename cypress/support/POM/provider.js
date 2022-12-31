export class provSearch {
    elements={
        deliveryType:'div[role="tablist"] button',
        pickUpPin:'input[name="pickupLocation"]',
        dropUpPin:'input[name="deliveryLocation"]',
        radioBtn:'label[for="radio1"]',
        weightType:'div[class="relative "]',
        dropDown:'ul[role="listbox"] li',
        weightEle:'input[placeholder="Weight"]',
        findProvider:'button[type="submit"]',
        providerResult:'table[class=" border-separate table-auto "] tbody tr',
        errMsgPin:'[class="py-3 tl-py1"]>form>p',
        weightErrMsg:'[class="py-3 tl-py1"]>form >div[class="flex weight_dimension_wrap"]> div',
        lengthEle:'[placeholder="Length"]',
        weidth:'[placeholder="Width"]',
        hightEle:'[placeholder="Height"]'
    }

    visit(url){
        cy.visit(url)
    }

    domDeliveryGrms(pinFrom,pinTo,weight){
        cy.get(this.elements.deliveryType).first().click()
        cy.get(this.elements.pickUpPin).type(pinFrom)
        cy.get(this.elements.dropUpPin).type(pinTo)
        cy.get(this.elements.weightType).click()
        cy.get(this.elements.dropDown).first().click()
        cy.get(this.elements.weightEle).type(weight)

        let errorMessage = "For weight exceeding 2000gms, Select Parcel"
        if(weight<= 2000){
            cy.get(this.elements.findProvider).click()
        }
        else{
            cy.get(this.elements.weightErrMsg).find('div').last().should('have.text',errorMessage)
        }
    }

    domDeliveryKg(pinFrom,pinTo,weight){
        cy.get(this.elements.deliveryType).first().click()
        cy.get(this.elements.pickUpPin).type(pinFrom)
        cy.get(this.elements.dropUpPin).type(pinTo)
        cy.get(this.elements.radioBtn).first().click()
        cy.get(this.elements.weightType).click()
        cy.get(this.elements.dropDown).last().click()
        cy.get(this.elements.weightEle).type(weight)

        let errorMessage = "For weight exceeding 2000gms, Select Parcel"
        if(weight<= 2){
            cy.get(this.elements.findProvider).click()
        }
        else{
            cy.get(this.elements.weightErrMsg).find('div').last().should('have.text',errorMessage)
        }
    }

    ValidateProvider(numOfProviders){
        cy.url().should('contain','providers')
        cy.get(this.elements.providerResult).should('have.length',numOfProviders)

    }

   
    mandatoryErrMsg(){
        let invalidPinErr = 'Please enter a valid pickup pincode.'
        cy.get(this.elements.errMsgPin).should('have.text',invalidPinErr)
    }

    parcelDelivGrms(pin1,pin2,weight){
        cy.get(this.elements.deliveryType).first().click()
        cy.get(this.elements.pickUpPin).type(pin1)
        cy.get(this.elements.dropUpPin).type(pin2)
        cy.get(this.elements.radioBtn).last().click()
        cy.get(this.elements.weightType).click()
        cy.get(this.elements.dropDown).first().click()
        cy.get(this.elements.weightEle).type(weight)

    }

    parcelData(len,widt,hig){
        cy.get(this.elements.lengthEle).type(len)
        cy.get(this.elements.weidth).type(widt)
        cy.get(this.elements.hightEle).type(hig)

        if(len != " " && widt != null && hig != null){
            cy.get(this.elements.findProvider).click()
        }
        else{
            cy.get(this.elements.findProvider).should('be.disabled')
        }
        
    }


}