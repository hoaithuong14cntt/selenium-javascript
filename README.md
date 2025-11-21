Selenium JS Demo

Đây là project demo sử dụng Selenium WebDriver với JavaScript để thực hành automation testing.

📦 Thông tin project

Name: selenium-js-demo

Version: 1.0.0

Main file: index.js

Package manager: pnpm@10.18.1

Dependencies:

selenium-webdriver

chromedriver

Dev dependencies:

mocha

chai

⚙️ Cài đặt

Clone project về máy:

git clone <URL-repo-của-bạn>
cd selenium-js-demo

Cài dependencies bằng pnpm:

pnpm install
🧪 Chạy test

Project có các test scripts được định nghĩa trong package.json:

Chạy demo test:

pnpm test:demo

Chạy xpath test:

pnpm test:xpath

Chạy script test mặc định (hiện tại chưa có test):

pnpm test
📂 Cấu trúc thư mục
selenium-js-demo/
├─ pages/          # Chứa page object
├─ tests/          # Chứa các test case
├─ package.json
├─ pnpm-lock.yaml
└─ README.md
🔧 Công cụ sử dụng

Node.js (>=16)

pnpm

Selenium WebDriver

ChromeDriver

Mocha + Chai

📝 Ghi chú

node_modules/ đã được ignore, cài lại bằng pnpm install nếu clone repo.

Test được chạy trên Chrome với Selenium WebDriver.

📌 License

ISC