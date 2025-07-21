// import { Page, Locator, expect } from '@playwright/test';
// import PlaywrightWrapper from '../helper/wrapper/Playwrightwrapper';

// export default class ReviewPage {
//   private base: PlaywrightWrapper;

//   constructor(private page: Page) {
//     this.base = new PlaywrightWrapper(page);
//   }

//   private elements = {
//     giftCategory: '(//a[contains(text(),"Gift Cards")])[3]',
//     giftCard: '//a[contains(text(),"$50 Physical Gift Card")]',
//     reviewsLink: '//div[@class="product-review-links"]//a[1]',
//     reviewTextBox: '//div[@class="product-review-item"][1]',
//     addReviewLink: '//div[@class="product-review-links"]//a[2]',
//     registerError: '//div[@class="validation-summary-errors"]',
//     submitReviewButton: '//input[@name="add-review"]',
//     reviewTitleField: '//input[@name="AddProductReview.Title"]',
//     reviewTextField: '//textarea[@class="review-text"]',
//     blankTitleError: '//span[@data-valmsg-for="AddProductReview.Title"]',
//     blankTextError: '//span[@data-valmsg-for="AddProductReview.ReviewText"]',
//     successMessage: '//div[@class="result"]',
//     ratingButton: '//input[@id="addproductrating_3"]'
//   };

//   async navigateTo(url: string) {
//     await this.base.goto(url);
//   }

//   async clickGiftCategory() {
//     await this.base.waitAndClick(this.elements.giftCategory);
//   }

//   async clickGiftCard() {
//     await this.base.waitAndClick(this.elements.giftCard);
//   }

//   async clickReviewsLink() {
//     await this.base.waitAndClick(this.elements.reviewsLink);
//   }

//   async getSubmittedReviewText(): Promise<string> {
//     return await this.page.locator(this.elements.reviewTextBox).textContent() ?? '';
//   }

//   async clickAddReviewLink() {
//     await this.base.waitAndClick(this.elements.addReviewLink);
//   }

//   async clickSubmitReview() {
//     await this.base.waitAndClick(this.elements.submitReviewButton);
//   }

//   async getRegisterErrorMessage(): Promise<string> {
//     return await this.page.locator(this.elements.registerError).textContent() ?? '';
//   }

//   async enterReviewTitle(title: string) {
//     await this.page.locator(this.elements.reviewTitleField).fill(title);
//   }

//   async enterReviewText(text: string) {
//     await this.page.locator(this.elements.reviewTextField).fill(text);
//   }

//   async selectRating() {
//     await this.base.waitAndClick(this.elements.ratingButton);
//   }

//   async getBlankTitleError(): Promise<string> {
//     return await this.page.locator(this.elements.blankTitleError).textContent() ?? '';
//   }

//   async getBlankTextError(): Promise<string> {
//     return await this.page.locator(this.elements.blankTextError).textContent() ?? '';
//   }

//   async getSuccessMessage(): Promise<string> {
//     const message = this.page.locator(this.elements.successMessage);
//     await expect(message).toBeVisible({ timeout: 5000 });
//     return await message.textContent() ?? '';
//   }
// }
