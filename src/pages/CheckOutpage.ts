import { Locator, Page,expect } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/Playwrightwrapper";


export default class CheckOutPage {
    private base:PlaywrightWrapper;
    

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

private Elements = {
    loginButtonHomePages: 'a[class*="ico-login"]',
    emaillogin: '#Email',
    passwordlogin: '#Password',
    loginButtonclick: '//div[@class="inputs reversed"]//following-sibling::div//input[@class="button-1 login-button"]',
    Shoppingcart: '#topcartlink > a',
    serachfields: '//input[@class="button-1 search-box-button"]//preceding-sibling::input',
    addtocartlap: '//div//child::input[@class="button-2 product-box-add-to-cart-button"]',
    checkboxbtn: '//div[@class="terms-of-service"]//child::input',
    checkoutbtn: '//button[@class="button-1 checkout-button" and @id="checkout"]',
    popupcheckboxmsg: '//div[@id="terms-of-service-warning-box"]//p[contains(text(),"Please accept the terms of service before the next step.")]',
    addressfield: '//label[@for="billing-address-select"]//parent::div//select',
    option1: '//*[@id="billing-address-select"]/option[1]',
    billingaddresscontinue:"//div[@id='billing-buttons-container']//input",
    billcontinuebtn: '//div//child::input[@class="button-1 new-address-next-step-button"]',
    storepick: '//input[@id="PickUpInStore"]',
    shipcontinuebtn: '//div[@id="shipping-buttons-container"]//input',
    shippingcntinue: '//div[@id="shipping-method-buttons-container"]//input',
    paymentcontinue: '//*[@id="payment-method-buttons-container"]//input',
    paymentinfobtncontinue: '//input[@class="button-1 payment-info-next-step-button"]',
    confirmbtnincheckout: '//div[@id="confirm-order-buttons-container"]//input[@class="button-1 confirm-order-next-step-button"]',
    invoicepdfdownload:"//div//ul//li[2]//a[text()=\"Click here for order details.\"]",
    confirmplacedoreder: '//div[@class="section order-completed"]//div[@class="title"]//strong',
    ordernumber: '//div[@class="buttons"]//preceding-sibling::ul//li[1]',
    invoiceclickhere: '//div[@class="buttons"]//preceding-sibling::ul//li[2]//a',
    pdfinvoice: '//a[@class="button-2 pdf-order-button"]',
    orderinfo: '//div[@class="page-title"]//child::h1',
    orderinfo2: '//div[@class="page-title"]//a[contains(text(),"Print")]//preceding-sibling::h1',
    creditcheckbox: '//div[@class="section payment-method"]//ul//li[3]//div//div[2]//input',
    selectpaymentopt: '//select[@id="CreditCardType" and @class="dropdownlists valid"]',
    visaopt: '//select[@id="CreditCardType" and @class="dropdownlists valid"]//option[1]',
    cardholdername: '//td//child::input[@id="CardholderName"]',
    cardnumber: '//table//td[2]//child::input[@id="CardNumber"]',
    expirymonth: '//td[2]//child::select[@id="ExpireMonth"]',
    year: '//div[@class="section payment-info"]//div//table//tbody//tr[4]//td[2]//select[2]',
    cardcode: '//tr[5]//td[2]//span//preceding-sibling::input',
    onedaypick: '//ul[@class="method-list"]//li[2]//div//input[@id="shippingoption_1"]',
    twodayshipping: '//ul[@class="method-list"]//li[3]//div//input[@id="shippingoption_2"]',
    backtoshipping: '//div[@id="shipping-method-buttons-container"]//p//a',
    thankyou: '//div[@class="page-title"]//h1',
    steps:"//div[@class='page-body checkout-data']//ol//li//div//h2",
    checkouttext:"//div[@class='page-title']//h1",
    storepickupcontinue:'//*[@id="shipping-buttons-container"]/input',
    orderdetailslink:'//div//ul//li[2]//a[text()="Click here for order details."]',
    orderinformation:'h1:has-text("Order information")',
    invoicedetailstext:'//table[@class="cart-total"]//tbody//tr//td//span',
    orderinfotext:'//div[@class="page-title"]//h1',
    creaditcardcheckbox:'//div[@class="section payment-method"]//ul//li[3]//div//div[2]//input',
};

    async clickLoginButtonHomePage() {
        await this.base.waitAndClick(this.Elements.loginButtonHomePages);

    }

    async fillEmail(email: string) {
        await this.page.locator(this.Elements.emaillogin).fill(email);
    }

    async fillPassword(password: string) {
        await this.page.locator(this.Elements.passwordlogin).fill(password);
    }

    async clickLoginButton() {
        await this.page.locator(this.Elements.loginButtonclick).click();
    }

    async searchProduct(productName: string) {
        await this.page.locator(this.Elements.serachfields).click();
        await this.page.locator(this.Elements.serachfields).fill(productName);
        await this.page.locator(this.Elements.serachfields).press('Enter');
    }

    async addToCart() {
        await this.page.locator(this.Elements.addtocartlap).click();
    }
    async clickShoppingCart() {
        await this.page.locator(this.Elements.Shoppingcart).click();
    }

    async clickCheckbox() {
        
        const isChecked = await this.page.locator(this.Elements.checkboxbtn).isChecked();
        console.log(`Checkbox is checked: ${isChecked}`);

    }
    async clickcheckboxforcheckout() {
        const isChecked = await this.page.locator(this.Elements.checkboxbtn).isChecked();
        if (!isChecked) {
            await this.page.locator(this.Elements.checkboxbtn).check();
        }
    }
    async seecheckoutpage() {
        const steps = this.page.locator(this.Elements.steps);

        const count = await steps.count();
        console.log("Follow these steps to checkout:");

        for (let i = 0; i < count; i++) {
        const text = await steps.nth(i).innerText();
        console.log(text);
  }
        const actualText = await this.page.locator(this.Elements.checkouttext).innerText();
        const expectedText = "Checkout";

        expect(actualText).toBe(expectedText);
    }

    async clickCheckoutButton() {
        await this.page.locator(this.Elements.checkoutbtn).click();
    }

    async verifyPopupMessage() {
        const message = await this.page.locator(this.Elements.popupcheckboxmsg).textContent();
        expect(message).toContain("Please accept the terms of service before the next step.");
    }

    async selectAddress() {
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.Elements.addressfield).click();
        await this.page.locator(this.Elements.addressfield).selectOption({ index: 0 });
        
    }

    async clickBillingAddressContinueButton() {
        await this.page.locator(this.Elements.billingaddresscontinue).click();
    }

    async twodaypickup()
    {
        await this.page.locator(this.Elements.twodayshipping).click();
    }

    async selectStorePick() {
      
        await this.page.locator(this.Elements.storepick).check();
    }

    async clickShipContinueButton() {
    
        await this.page.locator(this.Elements.storepickupcontinue).click();
        
    }
    async clickshippinfctninue()
    {
        await this.page.locator(this.Elements.shippingcntinue).click();

    }

    async clickPaymentContinueButton() {
        await this.page.locator(this.Elements.paymentcontinue).click();
    }
    
    async clickPaymentInfoContinueButton() {
        await this.page.locator(this.Elements.paymentinfobtncontinue).click();
        
    }

    async clickConfirmButtonInCheckout() {
        await this.page.locator(this.Elements.confirmbtnincheckout).click();
    }
    async downloadInvoiceAsPDF() {
        await this.page.locator(this.Elements.invoicepdfdownload).click();
        
    }

    async verifyOrderPlacedSuccessfully() {
        const invoiceText = await this.page.locator(this.Elements.orderinfo).textContent();
        expect(invoiceText).toContain("Order information");
        await this.page.locator(this.Elements.pdfinvoice).click();
        await this.page.waitForTimeout(2000); 

    }
    async downloadInvoicePDF() {
    try {
      const orderDetailsLink = this.page.locator(this.Elements.orderdetailslink);
      await orderDetailsLink.scrollIntoViewIfNeeded();
      await orderDetailsLink.click();

      const actualText = await this.page.locator(this.Elements.orderinformation).textContent();
      const expectedText = "Order information";

      expect(actualText?.trim()).toBe(expectedText);

      console.log("Invoice PDF download flow verified.");
    } catch (error) {
      console.log("Invoice not downloaded:", error);
    }
  }
   async verifyInvoiceDetails() {
    const elements = this.page.locator(this.Elements.invoicedetailstext);
    const count = await elements.count();

    for (let i = 0; i < count; i++) {
      const text = await elements.nth(i).textContent();
      console.log(text?.trim());
    }

    const header = this.page.locator(this.Elements.orderinfotext);
    await header.waitFor({ state: 'visible', timeout: 30000 });

    const actual = (await header.textContent())?.trim();
    const expected = "Order information";

    await expect(actual).toBe(expected);
  }

  async checkboxforcreditcard()
  {
    await this.page.locator(this.Elements.creaditcardcheckbox).check();
  }
  async fillCreditCardDetails(name: string, number: string, expMonth: string, year: string, code: string) {
    await this.page.fill(this.Elements.cardholdername, name);
    await this.page.fill(this.Elements.cardnumber, number);
    await this.page.selectOption(this.Elements.expirymonth, expMonth); 
    await this.page.selectOption(this.Elements.year, year);
    await this.page.fill(this.Elements.cardcode, code);

    console.log(`Entered credit card details: ${name}, ${number}, ${expMonth}, ${year}, ${code}`);
  }

  async backtoshippings()
  {
    await this.page.locator(this.Elements.backtoshipping).click();
  }



   


}