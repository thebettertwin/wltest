import { getData } from "./getData";
import { formatData } from "./formatData";

console.info("Fetching data...");
getData("https://wltest.dns-systems.net/")
  .then((data) => {
    const formattedData = formatData(data);
    console.info(formattedData);
    return formattedData;
  })
  .catch((error) => {
    console.error(error);
  });
