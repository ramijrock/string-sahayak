export const removeSpaces = (str: string): string => str.replace(/\s+/g, "");

export const removeExtraSpaces = (str: string): string => str.trim().replace(/\s+/g, " ");

export const onlyNumbers = (str: string): string => str.replace(/[^\d]/g, "");

export const onlyText = (str: string): string => str.replace(/[^a-zA-Z]/g, "");
