# 🧵 string-sahayak  
A lightweight, easy-to-use **TypeScript string utility library** for formatting, masking, cleaning, and validating text in JavaScript/TypeScript applications.

Perfect for beginners, production-ready for real projects.  
Built with ❤️ by Ramij Dafadar.

---

## 🚀 Features

### 🔤 Text Formatting
- `capitalize("hello world")` → `Hello world`
- `toTitleCase("welcome to india")` → `Welcome To India`
- `camelCase("hello world")` → `helloWorld`
- `snakeCase("Hello World")` → `hello_world`
- `kebabCase("Hello World")` → `hello-world`

### 🔐 Masking Utilities
- `maskPhone("9876543210")` → `987****210`
- `maskEmail("ramij@example.com")` → `r***@example.com`
- `maskAadhaar("123412341234")` → `1234 **** 1234`
- `maskString("password123", 1)` → `p**********`
- `maskPAN("ABCDE1234F")` → `A****1234F`
- `maskCustom("abcdef", 2, 4)` → `ab**ef`


### ✂️ Cleaning
- `removeSpaces("a b c")` → `abc`
- `removeExtraSpaces(" Hello   world ")` → `Hello world`
- `onlyNumbers("AB12CD34")` → `1234`
- `onlyText("Hello123")` → `Hello`

### ✔ Validation + Extra Tools
- `slugify("Hello World!")` → `hello-world`
- `isValidURL("https://google.com")` → `true`
- `reverseString("Hello")` → `olleH`
- `isPalindrome("madam")` → `true`

---

## 📦 Installation

```bash
npm install string-sahayak
# or
yarn add string-sahayak
# string-sahayak
