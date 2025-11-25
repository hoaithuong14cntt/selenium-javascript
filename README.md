# Selenium JS Demo

Đây là project **demo sử dụng Selenium WebDriver với JavaScript** để thực hành automation testing.

---

## 📦 Thông tin project

* **Name:** selenium-js-demo
* **Version:** 1.0.0
* **Main file:** index.js
* **Package manager:** pnpm@10.18.1
* **Dependencies:**

  * selenium-webdriver
  * chromedriver
* **Dev dependencies:**

  * mocha
  * chai

---

## ⚙️ Cài đặt

1. Clone project về máy:

```bash
git clone <URL-repo-của-bạn>
cd selenium-js-demo
```

2. Cài dependencies bằng **pnpm**:

```bash
pnpm install
```

---

## 🧹 Kiểm tra code trước khi push

Trước khi push code lên repository, hãy chạy **ESLint** để kiểm tra code:

```bash
pnpm lint
```

Nếu có lỗi, bạn có thể tự động sửa format bằng:

```bash
pnpm lint:fix
```

> Giúp code sạch, đồng bộ style, giảm lỗi tiềm ẩn trước khi commit.

---

## 🧪 Chạy test

Project có các test scripts được định nghĩa trong `package.json`.
Để chạy tất cả test case:

```bash
pnpm test
```

* Chạy demo test:

---

## 📂 Cấu trúc thư mục

```
selenium-js-demo/
├─ pages/          # Chứa page object
├─ tests/          # Chứa các test case
├─ package.json
├─ pnpm-lock.yaml
└─ README.md
```

---

## 🔧 Công cụ sử dụng

* Node.js (>=16)
* pnpm
* Selenium WebDriver
* ChromeDriver
* Mocha + Chai

---

## 📝 Ghi chú

* **node_modules/** đã được ignore, cài lại bằng `pnpm install` nếu clone repo.
* Test được chạy trên **Chrome** với Selenium WebDriver.
* Luôn **lint code trước khi push** để giữ code sạch.

---

## 📌 License

ISC
