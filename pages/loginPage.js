import { By, until } from 'selenium-webdriver';

class LoginPage {
  constructor(driver) {
    this.driver = driver;
  }

  async openLoginPage() {
    await this.driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(username, password) {
    // Chờ input username hiển thị
    const inputUsername = await this.driver.wait(
      until.elementLocated(By.css('input[placeholder="Username"]')),
      5000
    );
    await this.driver.wait(until.elementIsVisible(inputUsername), 5000);
    await inputUsername.sendKeys(username);

    // Chờ input password hiển thị
    const inputPassword = await this.driver.wait(
      until.elementLocated(By.css('input[placeholder="Password"]')),
      5000
    );
    await this.driver.wait(until.elementIsVisible(inputPassword), 5000);
    await inputPassword.sendKeys(password);

    // Chờ button submit hiển thị
    const buttonSubmit = await this.driver.wait(
      until.elementLocated(By.css('button[type="submit"]')),
      5000
    );
    await this.driver.wait(until.elementIsVisible(buttonSubmit), 5000);
    await buttonSubmit.click();
  }

  async getErrorMessage() {
    const errorElement = await this.driver.findElement(By.css('.oxd-alert-content-text'));
    return await errorElement.getText();
  }

  async getRequiredMessage() {
    const requiredElement = await this.driver.findElement(By.css('.oxd-input-field-error-message'));
    return await requiredElement.getText();
  }

  async open() {
    await this.driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async click() {
    const button = await this.driver.findElement(this.buttonSubmit);
    await button.click();
  }

  async getTitle() {
    return await this.driver.getTitle();
  }
}

export default LoginPage;
