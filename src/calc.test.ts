import { sub, sum } from "./calc";

describe("Addition", () => {
  test("0 + 0 = 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test("1 + 2 = 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("25 + (-25) = 0", () => {
    expect(sum(25, -25)).toBe(0);
  });
});

describe("Subtraktion", () => {
  test("0 - 0 = 0", () => {
    expect(sub(0, 0)).toBe(0);
  });

  test("3 - 2 = 1", () => {
    expect(sub(3, 2)).toBe(1);
  });

  test("5 - (-5) = 10", () => {
    expect(sub(5, -5)).toBe(10);
  });
});
