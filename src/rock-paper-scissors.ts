export function play(move1: string, move2: string): number {
  const m1 = move1.trim().toLowerCase();
  const m2 = move2.trim().toLowerCase();
  
  const validMoves = ["rock", "paper", "scissors"];
  
  if (!validMoves.includes(m1)) {
    throw new Error(`Ungültiger Spielzug: ${move1}`); //Move ungültig
  }
  if (!validMoves.includes(m2)) {
    throw new Error(`Ungültiger Spielzug: ${move2}`); //Move ungültig
  }
  
  if (m1 === m2) {
    return 0;
  }
  
  if (
    (m1 === "rock" && m2 === "scissors") ||
    (m1 === "scissors" && m2 === "paper") ||
    (m1 === "paper" && m2 === "rock")
  ) {
    return 1;
  } else {
    return 2;
  }
}
