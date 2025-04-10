export function calcPoints(hits: string): number {
  const hitTokens = hits.trim().split(/\s+/).map(Number);
  let totalScore = 0;

  for (let i = 0; i < hitTokens.length - 1; i += 2) {
    const ringMultiplier = hitTokens[i];     // z. B. 1=Single, 2=Double, 3=Triple
    const sectorValue = hitTokens[i + 1];      // z. B. 20, 17, etc.
    totalScore += ringMultiplier * sectorValue;
  }

  return totalScore;
}

export function possibleCheckout(currentScore: number): string{
  const remainingPoints = 501 - currentScore;

  if (remainingPoints % 2 !== 0) {
    return "No checkout possible";  // Nur gerade Zahlen sind per Double beendbar
  }

  const doubleSector = remainingPoints / 2;

  if (doubleSector < 1 || doubleSector > 20) {
    return "No checkout possible";  // Nur Double 1 bis Double 20 erlaubt
  }
  
  return `Double ${doubleSector}`; //direkt im String einfügen
}

