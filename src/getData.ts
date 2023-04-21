export const getData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok)
    // check if response worked (no 404 errors etc...)
    throw new Error(response.statusText);

  return response.text(); // returns the promise as html
};
