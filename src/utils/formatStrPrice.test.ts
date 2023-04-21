import { formatStrPrice } from "./formatStrPrice";

describe("formatStrPrice", () => {
  test("returns a float from a string", () => {
    expect(formatStrPrice("£3.99", "£")).toBe(3.99);
  });

  test("is currency agnostic", () => {
    expect(formatStrPrice("3.99€", "€")).toBe(3.99);
  });
});
