import { chromium, Browser, Page } from 'playwright';
import { UBankPage } from '../objects/UBankPage';
import { BASE_URL } from '../settings/playwrightSettings';

describe('UBank Tests', () => {
  let browser: Browser;
  let page: Page;
  let uBankPage: UBankPage;

  beforeAll(async () => {
    browser = await chromium.launch();
  });

  afterAll(async () => {
    if (browser) {
      await browser.close();
    }
  });  

  beforeEach(async () => {
    page = await browser.newPage();
    uBankPage = new UBankPage(page);
    await uBankPage.open();
    //await page.waitForLoadState('networkidle');
  }, 10000 );

  afterEach(async () => {
    await page.close();
  });

  it('should have correct title', async () => {
    expect(await uBankPage.getPageTitle()).toBe('Online Bank | Bank Accounts & Home Loans - ubank');
  });

  it('should have "Calculators & tools" link present', async () => {
    expect(await uBankPage.isCalculatorsLinkPresent()).toBeTruthy();
  });

  it('should navigate to calculators page when "Calculators & tools" link is clicked', async () => {
    await uBankPage.clickCalculatorsLink();
    expect(await page.url()).toBe(`${BASE_URL}/home-loans/calculators`);
  });
});