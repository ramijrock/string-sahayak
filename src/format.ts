export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const toTitleCase = (str: string): string =>
  str.replace(/\w\S*/g, (w) => w[0].toUpperCase() + w.substring(1).toLowerCase());

export const camelCase = (str: string): string =>
  str
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));

export const snakeCase = (str: string): string =>
  str.trim().toLowerCase().replace(/\s+/g, "_");

export const kebabCase = (str: string): string =>
  str.trim().toLowerCase().replace(/\s+/g, "-");
