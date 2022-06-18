import Page from './page';

class ContractPage extends Page {
    get inputContractName () {
        return $('[name="name"]');
    }

    get inputJobTitle() {
        return $('[name="jobTitle"]');
    }
    
    get inputContractorTaxResidence() {
        return $('#react-select-2-input')
    }

    get inputSeniorityLevel() {
        return $('#react-select-3-input')
    }

    get inputScope() {
        return $('[name="scope"]')
    }

    get inputPaymentRate() {
        return $('[name="rate"]');
    }

    get inputPaymentFrequency() {
        return $("//div[@class='box clearfix']/div[@class='deel-ui__stack deel-ui__stack_vertical deel-ui__stack_with-spacing']/div[2]//input[1]")
    }

    get inputInvoiceCycleEnds() {
        return $("//div[@class='box clearfix']//div[4]//div[@class='deel-ui__select__single-value css-1uccc91-singleValue']")
    }

    get inputPaymentDue() {
        return $("//div[@class='box clearfix']//div[4]//input[1]")
    }

    get inputChooseState() {
        return $('#react-select-4-input')
    }

    get btnNext () {
        return $('button[type="submit"]');
    }

    get btnMenuCreateContract() {
        return $('div=Create A Contract')
    }

    get fixedRateOption() {
        return $('h4=Fixed Rate')
    }

    get inputCurrency() {
        return $("//div[@class='deel-ui__select deel-ui__select__compact css-2b097c-container']//input[1]")
    
    }

    get inputContractorStartDate() {
        return $("//div[@class='MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-o8ow3c']")
    }

    get yesterdayDate() {
        const today = new Date()
        let yesterday = new Date()
        yesterday.setDate(today.getDate() - 1)        
        return $(`[aria-label='${yesterday.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})}']`)
    }

    get switchFirstPayment() {
        return $("[data-qa='tab-button-full']")
    }

    get btnSpecialClause() {
        return $("[data-qa='add-a-special-clause']")
    }

    get btnNextCompliance() {
        return $("[data-qa='next']")
    }

    get btnCreateContract() {
        return $('[data-qa="create-contract"]')
    }
    get textareaSpecialClause() {
        return $(".textarea-container")
    }

    get complianceContract() {
        return $('h4=USE DEEL CONTRACT')
    }

    get infoWaitClient() {
        return $(".contract-layout-status")
    }

    get btnHome() {
        return $("//a[.='Home']")
    }

    get checkContractTitleName() {
        return $('h4=teste01')
    }

    async chooseContract() {
        await this.btnMenuCreateContract.click()
        await this.fixedRateOption.click()
    }

    async contractGeneralInfo() {
        await this.inputContractName.setValue('teste01')
        await this.inputContractorTaxResidence.setValue('United States')
        await browser.keys("Enter"); 
        await this.inputChooseState.setValue('Colorado')
        await browser.keys("Enter"); 
        await this.inputJobTitle.setValue('Software QA Engineer')
        await browser.keys("Enter"); 
        await this.inputSeniorityLevel.setValue("Senior (Individual Contributor Level 3)")
        await browser.keys("Enter");
        await this.inputScope.setValue("teste")
        await this.inputContractorStartDate.click()

        await browser.pause(2000)
        await this.yesterdayDate.doubleClick()
        await browser.pause(2000)
        await this.btnNext.click()
    }   
    
    async contractPaymentDetails() {
        await expect(this.inputCurrency).toBeDisplayed()

        await this.inputCurrency.setValue("GBP - British Pound")
        await browser.keys("Enter");
        await this.inputPaymentRate.setValue('100')
        await this.inputPaymentFrequency.setValue('Weekly')
        await browser.keys("Enter");
        await browser.pause(2000)
        await this.inputInvoiceCycleEnds.setValue('Sunday')
        await browser.keys("Enter");
        await browser.pause(2000)
        await this.inputPaymentDue.setValue('Same Day')
        await browser.keys("Enter");

        await this.btnNext.click()
    }

    async defineDetails() {
        await expect(this.switchFirstPayment).toBeDisplayed()
        await this.switchFirstPayment.click()
        await this.btnNext.click()
    }

    async benefitsAndExtras() {
        await expect(this.btnSpecialClause).toBeDisplayed()

        await this.btnSpecialClause.click()

        await this.btnNextCompliance.click()
    }

    async contractCompliance() {
        await expect(this.complianceContract).toBeDisplayed()

        await this.complianceContract.click()

        await this.btnCreateContract.click()
        await browser.pause(10000)
    }

    async checkContractCreateSucessfull() {
        await expect(this.infoWaitClient).toBeDisplayed()
        
        await this.btnHome.click()
        
        await expect(this.checkContractTitleName).toBeDisplayed()
    }
}   

export default new ContractPage();