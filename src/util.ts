/**
 * https://codereview.stackexchange.com/a/183472
 * Return an integer range within [min, min + total) of given length centered
 * around the current page number.
 */
export const pagingRange = (current: number, { min = 1, total = 20, length = 5 } = {}): number[] => {
  if (length > total) length = total;

  let start = current - Math.floor(length / 2);
  start = Math.max(start, min);
  start = Math.min(start, min + total - length);

  return Array.from({ length: length }, (el, i) => start + i);
};
