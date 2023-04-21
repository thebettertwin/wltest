import * as cheerio from "cheerio";

export const getTextItems = (data: string) => {
  const textItemsArray = []; // use an array to hold our data
  const $ = cheerio.load(data);
  const pricingTables = $(".package");
  pricingTables.each(function () {
    // get each product item, being as specific as possible
    const title = $(this).find("h3").text();
    const desc = $(this).find(".package-description").text();
    const priceContainer = $(this).find(".package-price");
    const price = $(priceContainer).find(".price-big").text();
    const discount = $(priceContainer).find('p[style="color: red"]').text(); // really fragile - would suggest developers add identifier to discount
    textItemsArray.push([title, desc, price, discount]);
  });
  return textItemsArray;
};
