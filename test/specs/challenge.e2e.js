import LoginPage from  '../pageobjects/login.page';
import ContractPage from  '../pageobjects/contract.page';

describe('My Login application', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await browser.setWindowSize(1900, 780);
        await LoginPage.login('yoleki2062@syswift.com', 'Teste@12345');
    });

    it('should login with valid credentials', async () => {
        await ContractPage.chooseContract();
        await ContractPage.contractGeneralInfo();
        await ContractPage.contractPaymentDetails();
        await ContractPage.defineDetails();
        await ContractPage.benefitsAndExtras();
        await ContractPage.contractCompliance();
    });
});

