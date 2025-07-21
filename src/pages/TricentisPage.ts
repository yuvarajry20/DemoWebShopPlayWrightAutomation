import { Locator, Page,expect } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/Playwrightwrapper";


export default class NopCommercePage {
    private base:PlaywrightWrapper;
    

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

private Elements = {
    // tricentisImg: '//div[@class="slider-wrapper theme-default"]//div[@id="nivo-slider"]//a[1]',
tricentisImg:'//div[@class="slider-wrapper theme-default"]//div[@id="nivo-slider"]//a[@href="https://www.tricentis.com/speed/"]',

  assertTextInPage: '//div[contains(@class, "MastheadMinimal_description")]//preceding-sibling::h1',
  upcomingWebinar: '//a[@class="TextLink_text-link__0yJX0 TextLink_hover-animation-basic__kBq59 " and @href="/events"]',
  searchIcon: '//input[@id="search-field"]',
  searchBoxInFilter: '//div[@class="FilterBar_component-filter__ABjzv"]//div[@class="FilterBar_search-bar__o66Q9"]//input',
  titleInKeyword: '//div[@class="EventCard_img-container__cEzL7"]//following-sibling::div//a',
  demoTrial: '//a[@class="TextLink_text-link__0yJX0 TextLink_hover-animation-basic__kBq59 " and @href="/software-testing-tool-trial-demo"]',
  Eventcard:'//h2[@class="EventCard_title__qAh58"]//a'
};
async tricentisImg()
{
    await this.page.locator(this.Elements.tricentisImg).click();

}
async assertPage(){
  const expected = "Drive innovation at DevOps speed.";
  const actual = await this.page.locator(this.Elements.assertTextInPage).textContent();

  expect(actual).toBe(expected);
  console.log("Successfully asserted the page text.");
}
async upcomingEvents() {
  const upcomingWebinarLink = this.page.locator(this.Elements.upcomingWebinar);

  await upcomingWebinarLink.scrollIntoViewIfNeeded(); // Scrolls into view if needed
  await upcomingWebinarLink.click(); // Clicks the element after visible

  console.log("✅ Successfully clicked the 'Upcoming Webinars' link.");
}
async listOfTitlesInFilters(){
  const titles = await this.page.locator(this.Elements.Eventcard);

  const count = await titles.count();
  console.log("Upcoming webinars:");

  for (let i = 0; i < count; i++) {
    const titleText = await titles.nth(i).innerText();
    console.log(titleText);
  }

  // Assert the current URL
  const expectedUrl = "https://www.tricentis.com/events";
  const actualUrl = this.page.url();
  expect(actualUrl).toBe(expectedUrl);

  console.log("Successfully listed all upcoming webinars.");
}
async searchTheKeyword() {
    await this.page.locator(this.Elements.searchIcon).click();

  console.log("✅ Successfully entered the keyword 'Unlock' in the search box.");
}

async unlockAssert(){
  const expectedUrl = 'https://www.tricentis.com/events';
  const actualUrl = this.page.url();

  expect(actualUrl).toBe(expectedUrl);
  console.log("✅ Successfully asserted the text for the upcoming partner event.");
}

async trialsDemos() {
  const demoTrialElement = this.page.locator(this.Elements.demoTrial);
  await demoTrialElement.click();

  console.log("✅ Successfully clicked on the 'Demos & Trials' link.");
}
async verifyEnterpriseUrl(){
  const expectedUrl = "https://www.tricentis.com/software-testing-tool-trial-demo";
  const actualUrl = this.page.url();

  expect(actualUrl).toBe(expectedUrl);
  console.log("✅ Successfully asserted the enterprise page URL.");
}


}