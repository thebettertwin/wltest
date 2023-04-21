import { convertStrsToObj } from "./convertStrsToObj";

describe("convertStrsToObj", () => {
  test("converts string properties to structured object", () => {
    const mockData = [
      ["title 1", "desc 1", "£4.99", ""],
      ["title 2", "desc 2", "£8.99", ""],
    ];
    expect(convertStrsToObj(mockData)[0].description).toBe("desc 1");
  });
});
