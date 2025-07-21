import { Page } from '@playwright/test';

interface AddressData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  country: string;
  city: string;
  address1: string;
  zip: string;
  phone: string;
}

export default class AddressPage {
  constructor(private page: Page) {}

  private elements = {
    myEmail: "//a[contains(text(), 'abccy@gmail.com')]",
    addressesLink: "(//a[contains(text(), 'Addresses')])[1]",
    addNew: "//a[contains(text(), 'Addresses')]/following::input[contains(@class, 'add-address-button')]",
    firstNameField: "//label[contains(text(), 'First name')]/following-sibling::input",
    lastNameField: "//label[contains(text(), 'Last name')]/following-sibling::input",
    emailField: "//label[contains(text(), 'Email')]/following-sibling::input",
    companyField: "//label[contains(text(), 'Company')]/following-sibling::input",
    countryDropdown: "//label[contains(text(), 'Country')]/following-sibling::select",
    cityField: "//label[contains(text(), 'City')]/following-sibling::input",
    address1Field: "(//label[contains(text(), 'Address')]/following-sibling::input)[1]",
    zipCodeField: "//label[contains(text(), 'Zip')]/following-sibling::input",
    phoneNumberField: "//label[contains(text(), 'Phone')]/following-sibling::input",
    saveButton: "//input[contains(@class, 'save-address-button')]",
    deleteButton: "(//input[contains(@class, 'delete-address-button')])[1]"
  };

  async clickAddressLink() {
    await this.page.locator(this.elements.addressesLink).click();
  }

  async clickAddNew() {
    await this.page.locator(this.elements.addNew).click();
  }

  async fillAddressForm(address: AddressData) {
    await this.page.locator(this.elements.firstNameField).fill(address.firstName);
    await this.page.locator(this.elements.lastNameField).fill(address.lastName);
    await this.page.locator(this.elements.emailField).fill(address.email);
    await this.page.locator(this.elements.companyField).fill(address.company);
    await this.page.locator(this.elements.countryDropdown).selectOption({ label: address.country });
    await this.page.locator(this.elements.cityField).fill(address.city);
    await this.page.locator(this.elements.address1Field).fill(address.address1);
    await this.page.locator(this.elements.zipCodeField).fill(address.zip);
    await this.page.locator(this.elements.phoneNumberField).fill(address.phone);
  }

  async clickSaveButton() {
    await this.page.locator(this.elements.saveButton).click();
  }
  async getSavedAddressText(): Promise<string> {
  const addressBlock = this.page.locator("//div[@class='section address-item']").first();
  return await addressBlock.textContent() ?? '';
}
  async deleteAddressIfPresent() {
    const deleteButton = this.page.locator(this.elements.deleteButton);
    if (await deleteButton.isVisible()) {
      this.page.once('dialog', async dialog => await dialog.accept());
      await deleteButton.click();
    }
  }
}
