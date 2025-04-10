import { calcPoints, possibleCheckout } from "./darts";

describe("calcPoints", () => {
  test("should calculate points correctly", () => {
    expect(calcPoints("3 20 1 17 2 4")).toBe(85);
    expect(calcPoints("2 15 1 18 3 19")).toBe(105);
    expect(calcPoints("3 20 1 5")).toBe(65);
    expect(calcPoints("3 20 1")).toBe(60); // Letzter Treffer unvollständig, ignorieren
    expect(calcPoints("")).toBe(0); // Kein Treffer
  });
});

describe("possibleCheckout", () => {
  test("should return correct double checkout", () => {
    expect(possibleCheckout(477)).toBe("Double 12");
    expect(possibleCheckout(480)).toBe("No checkout possible");
    expect(possibleCheckout(441)).toBe("No checkout possible");
    expect(possibleCheckout(501)).toBe("No checkout possible"); // Rest = 0
    expect(possibleCheckout(495)).toBe("Double 3");
  });
});
