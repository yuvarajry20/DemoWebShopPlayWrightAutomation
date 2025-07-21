import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pagefixture';
import AddressPage from '../../pages/AddressPage';
import { ExcelReader } from '../../helper/utility/Excelreader';

let addressPage: AddressPage;

When('click Addressess and add new', { timeout: 20000 }, async function () {
  addressPage = new AddressPage(pageFixture.page!);
  await addressPage.clickAddressLink();
  await addressPage.clickAddNew();
});

Then('I want to add new address',{ timeout: 20000 }, async function () {
  const excelData = ExcelReader.getExcelData('C:/Users/yuvar/DemoWebShopPlayWrightAutomation/src/helper/utility/test-data/testdataExcel.xlsx', 'AddressData');
  const headers = excelData[0];
  const row = excelData[1]; // index 1 = second row = your first data

  // Convert all values to string for locator.fill compatibility
  const rowData: Record<string, string> = {};
  headers.forEach((header, i) => {
    rowData[header] = row[i]?.toString() ?? '';
  });

  const addressData = {
    firstName: rowData['address.FirstName'],
    lastName: rowData['address.LastName'],
    email: rowData['address.Email'],
    company: rowData['address.Company'],
    country: rowData['address.Country'],
    state: rowData['address.State'] || '', // fallback if not present
    city: rowData['address.City'],
    address1: rowData['address.Address1'],
    address2: rowData['address.Address2'] || '',
    zip: rowData['address.ZipCode'],
    phone: rowData['address.PhoneNumber'],
    fax: rowData['address.Fax'] || ''
  };

  await addressPage.fillAddressForm(addressData);
});

Then('select country and state', async function () {
  // Already handled inside fillAddressForm
});

Then('i click save',{ timeout: 20000 }, async function () {
  await addressPage.clickSaveButton();
  const text = await addressPage.getSavedAddressText();
  expect(text).toContain('Email:');
});

When('i click Addresses', { timeout: 20000 }, async function () {
  addressPage = new AddressPage(pageFixture.page!);
  await addressPage.clickAddressLink();
});

When('i click the Delete button',{ timeout: 30000 }, async function () {
  await addressPage.deleteAddressIfPresent();
});

Then('i should click the yes button in the alert', async function () {
  // Handled inside deleteAddressIfPresent (with dialog.accept)
});
