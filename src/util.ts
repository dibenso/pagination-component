export const range = (start: number, stop: number, step = 1, inclusive = false): number[] => {
  const rangeArray = [start];
  let rangeIndex = start;

  if (inclusive) while (rangeIndex <= stop) rangeArray.push((rangeIndex += step));
  else while (rangeIndex < stop) rangeArray.push((rangeIndex += step));

  return rangeArray;
};
