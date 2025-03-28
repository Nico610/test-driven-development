export function formatDuration(inputSeconds: number): string {
    if (inputSeconds < 0) {
      throw new Error("Duration cannot be negative");
    }
    const seconds = Math.round(inputSeconds);
  
    const h = Math.floor(seconds / 3600);
    const remainingAfterHours = seconds % 3600;
    const m = Math.floor(remainingAfterHours / 60);
    const s = remainingAfterHours % 60;
  
    let result = "";
    if (h > 0) {
      result += `${h}h`;
    }
    if (m > 0) {
      result += `${m}m`;
    }
    if (s > 0 || result === "") {
      result += `${s}s`;
    }
  
    return result;
  }
  