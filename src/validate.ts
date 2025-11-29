export const slugify = (str: string): string =>
  str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

export const isValidURL = (url: string): boolean =>
  /^(https?:\/\/)?([\w\d-]+\.)+[\w]{2,}(\/.+)?$/.test(url);

export const reverseString = (str: string): string =>
  str.split("").reverse().join("");

export const isPalindrome = (str: string): boolean =>
  str === reverseString(str);
