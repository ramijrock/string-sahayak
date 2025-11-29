// Example usage of string-sahayak package
// After publishing: import { ... } from "string-sahayak";
// Before publishing (local testing): import { ... } from "../dist";

import {
  capitalize,
  toTitleCase,
  camelCase,
  snakeCase,
  kebabCase,
  maskPhone,
  maskEmail,
  maskAadhaar,
  maskString,
  maskPAN,
  maskCustom,
  removeSpaces,
  removeExtraSpaces,
  onlyNumbers,
  onlyText,
  slugify,
  isValidURL,
  reverseString,
  isPalindrome,
} from "../dist";

// ------------ Formatting Examples ---------------

console.log(capitalize("hello world"));        // Hello world
console.log(toTitleCase("welcome to india"));  // Welcome To India
console.log(camelCase("hello world"));         // helloWorld
console.log(snakeCase("Hello World"));         // hello_world
console.log(kebabCase("Hello World"));         // hello-world

// ------------ Masking Examples -----------------

console.log(maskPhone("9876543210"));          // 987****210
console.log(maskEmail("ramij@example.com"));   // r***@example.com
console.log(maskAadhaar("123412341234"));      // 1234 **** 1234
console.log(maskString("password123", 1));     // p**********
console.log(maskPAN("ABCDE1234F"));            // A****1234F
console.log(maskCustom("abcdef", 2, 4));       // ab**ef

// ------------ Cleaning Examples ----------------

console.log(removeSpaces("H e l l o"));         // Hello
console.log(removeExtraSpaces("  Hello    world  ")); // Hello world
console.log(onlyNumbers("AB12CD45"));          // 1245
console.log(onlyText("Hello123"));             // Hello

// ------------ Validation & Extra ---------------

console.log(slugify("Hello World!"));          // hello-world
console.log(isValidURL("https://google.com")); // true
console.log(reverseString("Hello"));           // olleH
console.log(isPalindrome("madam"));            // true
