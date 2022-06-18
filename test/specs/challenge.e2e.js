import LoginPage from  '../pageobjects/login.page';
import ContractPage from  '../pageobjects/contract.page';
import LoginData from '../../data/loginData';
import ContractData from '../../data/contractData';

describe('My Login application', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await browser.setWindowRect( 0, 0, 1200, 800 );
        await LoginPage.login(LoginData.email, LoginData.password);
    });

    it('Create Fixed Rate contract with success', async () => {
        await ContractPage.chooseContract(
        );
        await ContractPage.contractGeneralInfo(ContractData.contractName, 
                                                ContractData.taxResidence,
                                                ContractData.state,
                                                ContractData.jobTitle,
                                                ContractData.seniorityLevel,
                                                ContractData.scope
                                                );
        await ContractPage.contractPaymentDetails(ContractData.currecy,
                                                   ContractData.paymentRate,
                                                   ContractData.paymentFrequency,
                                                   ContractData.invoiceCycleEnds,
                                                   ContractData.paymentDue
                                                );
        await ContractPage.defineDetails();
        await ContractPage.benefitsAndExtras();
        await ContractPage.contractCompliance();
        await ContractPage.checkContractCreateSucessfull();
    });
});

