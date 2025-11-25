import { Builder, Browser, until } from "selenium-webdriver";
import { expect } from "chai";
import ResetPasswordPage from "../../pages/resetpasswordPage.js";
import chrome from "selenium-webdriver/chrome.js";

describe("OrangeHRM - Reset Password Test Suite", function () {
  this.timeout(30000); // tăng timeout để Selenium không bị timeout

  let driver;
  let resetPasswordPage;

  before(async () => {
    // Khởi tạo trình duyệt Chrome
    const options = new chrome.Options();

    // Chạy ở chế độ headless
    options.addArguments("--headless=new");
    options.addArguments("--disable-gpu");
    options.addArguments("--window-size=1920,1080");

    driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();
    resetPasswordPage = new ResetPasswordPage(driver);
  });

  beforeEach(async () => {
    await resetPasswordPage.openPage();
  });

  after(async () => {
    await driver.quit();   // đóng trình duyệt sau mỗi test
  });

  // ---------------------------------------------------
  // 01 — Access reset password page
  // ---------------------------------------------------
  it("TC01 - Access reset password page", async () => {
    // Chờ URL có chứa "/dashboard" tối đa 5s
    await driver.wait(until.urlContains("/requestPasswordResetCode"), 5000, "URL did not change to /requestPasswordResetCode");

    // Sau khi wait xong thì assert URL
    const url = await driver.getCurrentUrl();
    expect(url).to.include("/requestPasswordResetCode");
  });

  // ---------------------------------------------------
  // 02 — Reset password with valid username
  // ---------------------------------------------------
  it("TC02 - Reset password successfully with valid email", async () => {
    await resetPasswordPage.resetPassword("username");
    // Chờ URL có chứa "/sendPasswordReset" tối đa 5s
    await driver.wait(until.urlContains("/sendPasswordReset"), 5000, "URL did not change to /sendPasswordReset");

    // Sau khi wait xong thì assert URL
    const url = await driver.getCurrentUrl();
    expect(url).to.include("/sendPasswordReset");
  });

  // ---------------------------------------------------
  // 03 — Reset password with invalid username
  // ---------------------------------------------------
  it("TC03 - Reset password failed with invalid username", async () => {
    await resetPasswordPage.resetPassword("");
    const errorElement = await resetPasswordPage.getErrorMessage();
    expect(errorElement).to.equals("Required");
  });

  // ---------------------------------------------------
  // 04 — Can cancel reset password and return to login page
  // ---------------------------------------------------
  it("TC04 - Cancel reset password and return to login page", async () => {
    await resetPasswordPage.cancelResetPassword();

    // Chờ URL có chứa "/auth/login" tối đa 5s
    await driver.wait(until.urlContains("/auth/login"), 5000, "URL did not change to /auth/login");

    // Sau khi wait xong thì assert URL
    const url = await driver.getCurrentUrl();
    expect(url).to.include("/auth/login");
  });

  // ---------------------------------------------------
  // Additional test cases can be added here
  // ---------------------------------------------------
});
