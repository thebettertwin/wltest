import { updateYearlyCost } from "./updateYearlyCost";

describe("updateYearlyCost", () => {
  test("only updates first 3 items to be yearly cost", () => {
    const mockData = [
      ["title 1", "desc 1", "£4.99", ""],
      ["title 2", "desc 2", "£8.99", ""],
      ["title 3", "desc 3", "£10.07", ""],
      ["title 4", "desc 4", "£101", ""],
      ["title 5", "desc 5", "£89.99", ""],
      ["title 6", "desc 6", "£71.25", ""],
    ];
    expect(updateYearlyCost(mockData)[0][2]).toBe("£59.88");
    expect(updateYearlyCost(mockData)[5][2]).toBe("£71.25");
  });
});
