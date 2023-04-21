import { sortByCost } from "./sortByCost";

describe("sortByCost", () => {
  test("places highest priced product first", () => {
    const mockData = [
      ["title 1", "desc 1", "£4.99", ""],
      ["title 2", "desc 2", "£8.99"],
    ];
    expect(sortByCost(mockData)[0][2]).toBe("£8.99");
  });
});
