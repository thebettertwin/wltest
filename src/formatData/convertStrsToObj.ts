export const convertStrsToObj = (productDataArr: string[][]) => {
  // convert our ordered and updated Array items into Objects so they can be stringified
  const mappedArr = productDataArr.map((product) => {
    return {
      "option title": product[0],
      description: product[1],
      price: product[2],
      discount: product[3].length ? product[3] : null,
    };
  });
  return mappedArr;
};
