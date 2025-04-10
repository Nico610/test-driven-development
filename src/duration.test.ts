export function formatDuration(inputSeconds: number): string {
    if (inputSeconds < 0) {
      throw new Error("Duration cannot be negative");
    }

    const Roundedseconds = Math.round(inputSeconds);
  
    const hours = Math.floor(Roundedseconds / 3600);
    const remainingAfterHours = Roundedseconds % 3600;
    const minutes = Math.floor(remainingAfterHours / 60);
    const seconds = remainingAfterHours % 60;
  
    let result = "";
    if (hours > 0) {
      result += `${hours}h`;
    }
    if (minutes > 0) {
      result += `${minutes}m`;
    }
    if (seconds > 0 || result === "") {
      result += `${seconds}s`;
    }
  
    return result;
  }
  