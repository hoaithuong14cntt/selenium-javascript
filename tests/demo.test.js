// tests/demo.test.js
import { expect } from "chai";
import { Builder, By, until } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";
import "chromedriver"; // import mà không cần gán biến
import GooglePage from "../pages/googlePage.js"; // nhớ thêm .js khi dùng ESM

(async function runDemo() {
  // Tùy chọn: bật headless mode nếu không muốn mở trình duyệt
  const options = new chrome.Options();
//   options.addArguments('--headless=new');   // Chạy ở chế độ headless

  // Tạo driver
  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  try {
    const google = new GooglePage(driver);
    await google.open();

    // Đợi ô tìm kiếm sẵn sàng
    await driver.wait(until.elementLocated(By.name("q")), 5000);

    await google.search("Selenium");
    await driver.wait(until.titleContains("Selenium"), 5000);

    const title = await google.getTitle();
    console.log("✅ Page title:", title);

    expect(title.toLowerCase()).to.include("selenium");
    console.log("🎉 Test passed!");
  } catch (err) {
    console.error("❌ Test failed:", err);
  } finally {
    await driver.quit();
  }
})();
