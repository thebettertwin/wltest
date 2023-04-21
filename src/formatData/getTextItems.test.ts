import { getTextItems } from "./getTextItems";

describe("getTextItems", () => {
  test("accepts a string of html and returns an array", () => {
    const mockData = '<div class="package"><h3>Test title 1</h3></div>';
    expect(Array.isArray(getTextItems(mockData))).toBe(true);
  });

  test("will not return data if package class is absent", () => {
    const mockData = '<div class=""><h3>Test title 1</h3></div>';
    expect(getTextItems(mockData).length).toBe(0);
  });

  test("getTextItems will look for a title", () => {
    const mockData = '<div class="package"><h3>Test title 1</h3></div>';
    const flattenArr = getTextItems(mockData)[0];
    expect(flattenArr).toContain("Test title 1");
  });

  test("getTextItems will look for a description", () => {
    const mockData =
      '<div class="package"><h3>Test title 1</h3><p>Random data</p><div class="package-description">test desc</div></div>';
    const flattenArr = getTextItems(mockData)[0];
    expect(flattenArr).toContain("test desc");
  });

  test("getTextItems will look for a price", () => {
    const mockData =
      '<div class="package"><h3>Test title 1</h3><p>Random data</p><div class="package-description">test desc</div><div class="package-price"><span class="price-big">£3.99</span></div></div>';
    const flattenArr = getTextItems(mockData)[0];
    expect(flattenArr).toContain("£3.99");
  });

  test("getTextItems will look for a promotion", () => {
    const mockData =
      '<div class="package"><h3>Test title 1</h3><p>Random data</p><div class="package-description">test desc</div><div class="package-price"><span class="price-big">£3.99</span><p style="color: red">A great offer</p></div></div>';
    const flattenArr = getTextItems(mockData)[0];
    expect(flattenArr).toContain("A great offer");
  });

  test("getTextItems will return empty string if data not found", () => {
    const mockData = '<div class="package"></div>';
    const flattenArr = getTextItems(mockData)[0];
    expect(flattenArr[0].length).toBe(0);
  });
});
