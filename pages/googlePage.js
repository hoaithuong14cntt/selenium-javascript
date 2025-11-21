import { By } from 'selenium-webdriver';

class GooglePage {
  constructor(driver) {
    this.driver = driver;
    this.searchBox = By.name('q');
  }

  async open() {
    await this.driver.get('https://www.google.com');
  }

  async search(text) {
    const input = await this.driver.findElement(this.searchBox);
    await input.sendKeys(text);
    await input.submit();
  }

  async getTitle() {
    return await this.driver.getTitle();
  }
}

export default GooglePage;
