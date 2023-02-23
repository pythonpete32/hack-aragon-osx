export function formatSecondsToDays(seconds: number): string {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);

  let result = "";
  if (days > 0) {
    result += `${days} day${days > 1 ? "s" : ""}`;
  }
  if (hours > 0) {
    if (result.length > 0) {
      result += " ";
    }
    result += `${hours} hour${hours > 1 ? "s" : ""}`;
  }
  if (result.length === 0) {
    result = "0 hours";
  }

  return result;
}
