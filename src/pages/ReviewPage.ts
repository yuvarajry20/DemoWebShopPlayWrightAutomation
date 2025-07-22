import { expect, Page } from '@playwright/test';

export class ReviewPage {
  constructor(private page: Page) {}

  private giftCategory() { return this.page.locator('(//a[contains(text(),"Gift Cards")])[3]'); }
  private giftCard() { return this.page.locator('//a[contains(text(),"$50 Physical Gift Card")]'); }
  private reviewsLink() { return this.page.locator('//div[@class="product-review-links"]/a[1]'); }
  private commentBox() { return this.page.locator('//div[@class="product-review-item"][1]'); }
  private addReviewLink() { return this.page.locator('//div[@class="product-review-links"]/a[2]'); }
  private submitReviewButton() { return this.page.locator('//input[@name="add-review"]'); }
  private registerError() { return this.page.locator('//div[@class="validation-summary-errors"]'); }
  private reviewTitle() { return this.page.locator('//input[@name="AddProductReview.Title"]'); }
  private reviewText() { return this.page.locator('//textarea[@class="review-text"]'); }
  private blankTitleError() { return this.page.locator('//span[@data-valmsg-for="AddProductReview.Title"]'); }
  private blankTextError() { return this.page.locator('//span[@data-valmsg-for="AddProductReview.ReviewText"]'); }
  private reviewSuccess() { return this.page.locator('//div[@class="result"]'); }
  private ratingButton() { return this.page.locator('//input[@id="addproductrating_3"]'); }

  async navigateToCategory() {
    await this.giftCategory().click();
  }

  async selectGiftCard() {
    await this.giftCard().click();
  }

  async clickReviewsLink() {
    await this.reviewsLink().click();
  }

  async verifyReviewsDisplayed() {
    await expect(this.commentBox()).toBeVisible();
  }

  async clickAddReviewLink() {
    await this.addReviewLink().click();
  }

  async submitReview() {
    await this.submitReviewButton().click();
  }

  async verifyRegisterError(expectedMessage: string) {
    await expect(this.registerError()).toHaveText(expectedMessage);
  }

  async enterReview(title: string, text: string) {
    await this.reviewTitle().fill(title);
    await this.reviewText().fill(text);
    await this.ratingButton().click();
  }

  async clickRating() {
    await this.ratingButton().click();
  }

  async clickSubmitReview() {
    await this.submitReviewButton().click();
  }

  async getValidationMessage(): Promise<string> {
    if (await this.reviewSuccess().isVisible()) {
      return await this.reviewSuccess().textContent() || '';
    } else if (await this.blankTitleError().isVisible()) {
      return await this.blankTitleError().textContent() || '';
    } else if (await this.blankTextError().isVisible()) {
      return await this.blankTextError().textContent() || '';
    } else {
      return '';
    }
  }
}
