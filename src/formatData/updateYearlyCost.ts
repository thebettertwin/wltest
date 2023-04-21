import { formatStrPrice } from "../utils/formatStrPrice";

export const updateYearlyCost = (productDataArr: string[][]) => {
  const productDataArrCopy = [...productDataArr]; // need to make a copy as we are going to update the monthly prices
  const monthlyProducts = productDataArr.slice(0, 3); // no identifier for monthly vs yearly package so have to assume first 3 are monthly
  monthlyProducts.forEach((product, index) => {
    // 3rd item in array is price, need to remove £ and multi by 12
    const priceFloat = formatStrPrice(product[2], "£");
    const yearlyPrice = priceFloat * 12;
    // Update the price in the ProductDataArrCopy
    productDataArrCopy[index][2] = `£${yearlyPrice}`;
  });
  return productDataArrCopy;
};
