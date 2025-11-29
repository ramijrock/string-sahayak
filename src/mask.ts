export const maskPhone = (phone: string): string =>
  phone.replace(/(\d{3})(\d{4})(\d{3})/, "$1****$3");

export const maskEmail = (email: string): string =>
  email.replace(/(.{1}).+(@.+)/, "$1***$2");

export const maskAadhaar = (id: string): string =>
  id.replace(/(\d{4})(\d{4})(\d{4})/, "$1 **** $3");

export const maskString = (str: string, visibleChars: number = 1): string =>
  str.slice(0, visibleChars) + "*".repeat(str.length - visibleChars);

// Mask PAN
export const maskPAN = (pan: string): string =>
  pan.replace(/^(.).{4}(.{4}.)$/, "$1****$2");

// Custom Mask
export const maskCustom = (str: string, start: number, end: number): string =>
  str.substring(0, start) + "*".repeat(end - start) + str.substring(end);