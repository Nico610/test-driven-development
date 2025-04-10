export function isValid(isbn13: string): boolean {
 
  // Entferne Bindestriche oder Leerzeichen
   const cleanIsbn = isbn13.replace(/[-\s]/g, "");

  // sind 13 Ziffern vorhanden?
  if (!/^\d{13}$/.test(cleanIsbn)) return false;

  const digits = cleanIsbn.split("").map(Number);

  // Berechne die Summe der ersten 12 Ziffern mit Gewichtung 1 oder 3
   const sum = digits.slice(0, 12).reduce((acc, digit, idx) => {
    return acc + digit * (idx % 2 === 0 ? 1 : 3);
  }, 0);

  // Berechne Prüfziffer
  const checksum = (10 - (sum % 10)) % 10;

  return digits[12] === checksum;

}
