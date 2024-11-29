export function formatTime(timeMs: number): string {
  const minutes = Math.floor(timeMs / 60000);
  const seconds = Math.floor((timeMs % 60000) / 1000);

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
