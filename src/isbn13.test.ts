import { isValid } from "./isbn13";

describe("isValid", () => {
  it("should return true for valid ISBN-13 numbers", () => {
    expect(isValid("9780134190440")).toBe(true);
    expect(isValid("978-3-16-148410-0")).toBe(true);
    expect(isValid("9783161484100")).toBe(true);
  });

  it("should return false for invalid ISBN-13 numbers", () => {
    expect(isValid("9780134190441")).toBe(false);
    expect(isValid("978-3-16-148410-X")).toBe(false);
    expect(isValid("978316148410X")).toBe(false);
  });

  it("should return false for non-numeric characters", () => {
    expect(isValid("97801341a0440")).toBe(false);
    expect(isValid("978-3-16-148410-0a")).toBe(false);
  });
});