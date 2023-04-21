import { formatStrPrice } from "../utils/formatStrPrice";

export const sortByCost = (productDataArr: string[][]) => {
  // simple use of Array.sort to order by price
  const sortedAscArray = productDataArr.sort(
    (a, b) => formatStrPrice(a[2], "£") - formatStrPrice(b[2], "£")
  );
  const sortedDescArray = sortedAscArray.reverse();
  return sortedDescArray;
};
