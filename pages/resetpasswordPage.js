import { By, until } from "selenium-webdriver";

class ResetPasswordPage {
  constructor(driver) {
    this.driver = driver;
  }

  async openPage() {
    await this.driver.get(process.env.BASE_URL + "/web/index.php/auth/requestPasswordResetCode");
  }

  async resetPassword(username) {
    // Chờ input username hiển thị
    const inputUsername = await this.driver.wait(until.elementLocated(By.xpath("//input[@name='username']")), 5000);
    await this.driver.wait(until.elementIsVisible(inputUsername), 5000);
    await inputUsername.sendKeys(username);

    // Chờ button submit hiển thị
    const buttonSubmit = await this.driver.wait(until.elementLocated(By.xpath("//button[@type='submit']")), 5000);
    await this.driver.wait(until.elementIsVisible(buttonSubmit), 5000);

    await buttonSubmit.click();
  }

  async getErrorMessage() {
    const errorElement = await this.driver.wait(
      until.elementLocated(By.css(".oxd-input-field-error-message")),
      5000
    );
    await this.driver.wait(until.elementIsVisible(errorElement), 5000);

    return await errorElement.getText();
  }

  async cancelResetPassword() {
    // Chờ button cancel hiển thị
    const buttonCancel = await this.driver.wait(until.elementLocated(By.xpath("//button[contains(@class, 'oxd-button--ghost')]")), 5000);
    await this.driver.wait(until.elementIsVisible(buttonCancel), 5000);

    await buttonCancel.click();
  }
}

export default ResetPasswordPage;
