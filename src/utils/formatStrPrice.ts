export const formatStrPrice = (price: string, currencyChar: string = "£") => {
  return parseFloat(price.replace(currencyChar, ""));
};
