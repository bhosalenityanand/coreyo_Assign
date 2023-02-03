
export class endToTest {
    elements = {
        pickUpPin: 'input[name="pickupLocation"]',
        dropUpPin: 'input[name="deliveryLocation"]',
        radioBtn: 'label[for="radio1"]',
        weightType: 'div[class="relative "]',
        dropDown: 'ul[role="listbox"] li',
        weightEle: 'input[placeholder="Weight"]',
        findProvider: 'button[type="submit"]',
        providerResult: '[class="flex flex-col m-10 m-lp"]',
        errMsgPin: '[class="py-3 tl-py1"]>form>p',
        itemDis:'[name="itemDescription"]',
        estmtValue:'[name="estimatedValue"]',
        addName1:'input[name="name"]',
        addPhoneNo1:'input[name="phone_no"]',
        insurenceEle:'[class="accent-pink-500 mr-2 p-10 text-text_dark_grey "]',
        proceedPayment1:'[class="mx-2"]'


    }

    domDeliveryGrms(pinFrom, pinTo, weight) {
        
        // cy.get(this.elements.deliveryType).first().click()
        cy.get(this.elements.pickUpPin).should('be.visible').type(pinFrom)
        cy.get(this.elements.dropUpPin).type(pinTo)
        cy.get(this.elements.weightType).click()
        cy.get(this.elements.dropDown).first().click()
        cy.get(this.elements.weightEle).type(weight)

        let errorMessage = "For weight exceeding 2000gms, Select Parcel"
        if (weight <= 2000) {
            cy.get(this.elements.findProvider).click({ force: true })
        }
        else {
            cy.get(this.elements.weightErrMsg).find('div').last().should('have.text', errorMessage)
        }
        cy.wait(10000)
    }

    ValidateProvider(cost) {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.url().should('contain', 'providers').as('res')
        //  let tableLen = cypress.$('table').length;
        //  console.log(tableLen);
        cy.get(this.elements.providerResult).find('table[class=" border-separate table-auto "] tbody tr>td>[class="flex flex-row   pr-3"]>div>[class="md:text-2xl font-bold"]').each(function (el,index) {
            let prise = el.text().replace('₹ ','').trim()
            // cy.log(prise)
            if(prise == cost){
                cy.get('#basF>button').eq(index).click()
            }
        })
        // cy.get(this.elements.providerResult).find('div').children('h3').should('have.text', 'No providers found')


        // cy.get(this.elements.providerResult).find('table[class=" border-separate table-auto "] tbody tr').should('have.length',numOfProviders)

    }

    CourierSummary(itmDis,category,estimateVal){
        cy.get(this.elements.itemDis).first().type(itmDis)
        cy.get('div[class="relative "]').first().find('button').first().click().then(function(){
            cy.get('ul[role="listbox"]>li>p').each(function(el,index){
                let items = el.text()
                // cy.log(items)
                if(items == category){
                    cy.get('ul[role="listbox"]>li>p').should('be.visible').eq(index).click({force:true})
                }
            })
            
        })
        cy.get(this.elements.estmtValue).first().type(estimateVal)

    }

    pickAddress(name,mbNo,add1,city,state,country){
        cy.get('[class=" text-primary"]').first().click().then(function(){
            cy.get('input[name="name"]').type(name)
            cy.get('input[name="phone_no"]').type(mbNo)
            cy.get('input[name="address1"]').type(add1)
            cy.get('input[name="city"]').type(city)
            cy.get('input[name="state"]').type(state)
            cy.get('input[name="country"]').type(country)
            cy.get('input[name="addresstypeSender"]').check()
            cy.get('div[class="flex items-center mr-4"]>input').check()
            cy.get('button[type="submit"]').last().click()

        })
    }

    delivaryAdd(name,mbNo,add1,city,state,country){
        cy.get('[class=" text-primary"]').eq(1).click().then(function(){
            cy.get('input[name="name"]').type(name)
            cy.get('input[name="phone_no"]').type(mbNo)
            cy.get('input[name="address1"]').type(add1)
            cy.get('input[name="city"]').type(city)
            cy.get('input[name="state"]').type(state)
            cy.get('input[name="country"]').type(country)
            cy.get('[name="addresstypeDelivery"]').check()
            cy.get('div[class="flex items-center mr-4"]>input').check()
            cy.get('button[type="submit"]').last().click()

        })

        cy.get('[class="accent-pink-500 mr-2"]').check()
    }

    proceedPayment(){
        cy.get(this.elements.insurenceEle).check()
        cy.get(this.elements.proceedPayment1).click()
        cy.wait(5000)

        if(cy.get('[class="accent-pink-500 mr-2"]').eq(1).check() && cy.get('[class="accent-pink-500 mr-2"]').eq(2).check()){
            cy.get('[class="mx-2"]').should('be.visible').click()
        }
        else{
            cy.get('[class="mx-2"]').should('be.disabled')
        }

    }

}

