import { play } from "./rock-paper-scissors";

describe("rock-paper-scissors", () => {
  test("identische Züge ergeben Unentschieden", () => {
    expect(play("rock", "rock")).toBe(0);
    expect(play("paper", "paper")).toBe(0);
    expect(play("scissors", "scissors")).toBe(0);
  });

  test("Stein schlägt Schere", () => {
    expect(play("rock", "scissors")).toBe(1);
    expect(play("scissors", "rock")).toBe(2);
  });

  test("Schere schlägt Papier", () => {
    expect(play("scissors", "paper")).toBe(1);
    expect(play("paper", "scissors")).toBe(2);
  });

  test("Papier schlägt Stein", () => {
    expect(play("paper", "rock")).toBe(1);
    expect(play("rock", "paper")).toBe(2);
  });

  test("Groß-/Kleinschreibung und Leerzeichen werden ignoriert", () => {
    expect(play(" Rock ", "scISSors")).toBe(1);
    expect(play(" PaPer", "  rock ")).toBe(1);
  });

  test("Ungültige Spielzüge werfen einen Error", () => {
    expect(() => play("apple", "rock")).toThrow(Error);
    expect(() => play("rock", "socks")).toThrow(Error);
  });
});
