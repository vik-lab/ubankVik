import { Page } from 'playwright';
import { BASE_URL } from '../settings/playwrightSettings';

export class UBankPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto(BASE_URL);
  }

  async getPageTitle() {
    return await this.page.title();
  }

  async isCalculatorsLinkPresent() {
    return await this.page.isVisible('text=Calculators & tools');
  }

  async clickCalculatorsLink() {
    await this.page.click('text=Calculators & tools');
  }
}