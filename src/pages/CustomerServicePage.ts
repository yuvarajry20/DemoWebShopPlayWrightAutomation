import { Page, expect } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/Playwrightwrapper';

export default class CustomerServicePage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  private elements = {
    newsLink: "//a[text()='News']",
    latestNewsTitle: "//a[text()='News']/ancestor::div/descendant::a[@class='news-title']",

    blogLink: "//a[text()='Blog']",
    blogTitle: "(//a[text()='Blog']/ancestor::div/descendant::a[@class='post-title'])[1]",
    commentInput: "#AddNewComment_CommentText",
    postCommentButton: "//input[@class='button-1 blog-post-add-comment-button']",
    successMessage: "//div[text()='Blog comment is successfully added.']"
  };

  async clickNewsLink() {
    await this.base.waitAndClick(this.elements.newsLink);
  }

  async getLatestNewsTitle(): Promise<string> {
    const newsTitle = this.page.locator(this.elements.latestNewsTitle).first();
    await expect(newsTitle).toBeVisible({ timeout: 5000 });
    return await newsTitle.textContent() ?? '';
  }

  async clickBlogLink() {
    await this.base.waitAndClick(this.elements.blogLink);
  }

  async getBlogTitle(): Promise<string> {
    const blogTitle = this.page.locator(this.elements.blogTitle).first();
    await expect(blogTitle).toBeVisible({ timeout: 5000 });
    return await blogTitle.textContent() ?? '';
  }

  async clickFirstBlog() {
    await this.base.waitAndClick(this.elements.blogTitle);
  }

  async addComment(comment: string) {
    await this.page.locator(this.elements.commentInput).fill(comment);
  }

  async clickPostCommentButton() {
    await this.base.waitAndClick(this.elements.postCommentButton);
  }

  async getCommentResult(): Promise<string> {
    const result = this.page.locator(this.elements.successMessage);
    await expect(result).toBeVisible({ timeout: 5000 });
    return await result.textContent() ?? '';
  }
}
