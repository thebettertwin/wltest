import { convertStrsToObj } from "./convertStrsToObj";
import { getTextItems } from "./getTextItems";
import { sortByCost } from "./sortByCost";
import { updateYearlyCost } from "./updateYearlyCost";

export const formatData = (data: string) => {
  const arrayOfProductData = getTextItems(data);
  const dataWithYearlyCost = updateYearlyCost(arrayOfProductData);
  const sortedByCost = sortByCost(dataWithYearlyCost);
  const convertedStrsToObj = convertStrsToObj(sortedByCost);
  return JSON.stringify(convertedStrsToObj);
};
