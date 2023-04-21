import { formatData } from ".";

describe("formatData", () => {
  test("returns JSON from a HTML string", () => {
    const mockData =
      '<div class="package"><h3>Test title 1</h3><p>Random data</p><div class="package-description">test desc</div><div class="package-price"><span class="price-big">£3.99</span><p style="color: red">A great offer</p></div></div>';
    const formattedOutput = [
      {
        "option title": "Test title 1",
        description: "test desc",
        price: "£47.88",
        discount: "A great offer",
      },
    ];
    expect(formatData(mockData)).toBe(JSON.stringify(formattedOutput));
  });
});
