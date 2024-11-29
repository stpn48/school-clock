export function getTimestamp(hour: number, minute: number): number {
  const now = new Date();

  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, 0, 0).getTime();
}
