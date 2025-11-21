import { Builder, Browser } from 'selenium-webdriver';
import assert from 'assert';
import LoginPage from '../../pages/loginPage.js';

describe("OrangeHRM - Login Test Suite", function () {
  this.timeout(30000); // tăng timeout để Selenium không bị timeout

  let driver;
  let loginPage;

  before(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    loginPage = new LoginPage(driver);
  });

  after(async () => {
    await driver.quit();
  });

  beforeEach(async () => {
    await loginPage.openLoginPage();
  });

  // ---------------------------------------------------
  // 01 — Login thành công
  // ---------------------------------------------------
  it("TC01 - Login successfully with valid account", async () => {
  await loginPage.login("Admin", "admin123");

  // Chờ URL có chứa "/dashboard" tối đa 5s
  await driver.wait(async () => {
    const currentUrl = await driver.getCurrentUrl();
    return currentUrl.includes("/dashboard");
  }, 5000, "URL did not change to /dashboard");

  // Hoặc chờ element Dashboard hiển thị (nếu muốn chính xác hơn)
  // const dashboardHeader = await driver.wait(
  //   until.elementLocated(By.css('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')),
  //   5000
  // );
  // assert.ok(await dashboardHeader.isDisplayed(), "Do not transfer to Dashboard");

  // Sau khi wait xong thì assert URL
  const url = await driver.getCurrentUrl();
  assert.ok(url.includes("/dashboard"), "Do not transfer to Dashboard");
});

  // // ---------------------------------------------------
  // // 02 — Sai password
  // // ---------------------------------------------------
  // it("TC02 - Login thất bại khi nhập sai mật khẩu", async () => {
  //   await loginPage.login("Admin", "wrongpass");

  //   const error = await loginPage.getErrorMessage();
  //   assert.strictEqual(error, "Invalid credentials");
  // });

  // // ---------------------------------------------------
  // // 03 — Sai username
  // // ---------------------------------------------------
  // it("TC03 - Login thất bại khi username sai", async () => {
  //   await loginPage.login("WrongUser", "admin123");

  //   const error = await loginPage.getErrorMessage();
  //   assert.strictEqual(error, "Invalid credentials");
  // });

  // // ---------------------------------------------------
  // // 04 — Username trống
  // // ---------------------------------------------------
  // it("TC04 - Login thất bại khi để trống username", async () => {
  //   await loginPage.login("", "admin123");

  //   const error = await loginPage.getRequiredMessage();
  //   assert.strictEqual(error, "Required");
  // });

  // // ---------------------------------------------------
  // // 05 — Password trống
  // // ---------------------------------------------------
  // it("TC05 - Login thất bại khi để trống password", async () => {
  //   await loginPage.login("Admin", "");

  //   const error = await loginPage.getRequiredMessage();
  //   assert.strictEqual(error, "Required");
  // });

  // // ---------------------------------------------------
  // // 06 — Trống cả username + password
  // // ---------------------------------------------------
  // it("TC06 - Login thất bại khi để trống cả hai trường", async () => {
  //   await loginPage.login("", "");

  //   const msg = await loginPage.getRequiredMessagesCount();
  //   assert.strictEqual(msg, 2, "Phải hiện 2 lỗi Required");
  // });
});
