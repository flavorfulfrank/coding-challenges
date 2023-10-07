//Write a function which calculates the average of the numbers in a given list.
//Empty arrays should return 0.

function findAverage(array) {
  if (array.length === 0) return 0;
  return array.reduce((sum, current) => sum + current, 0) / array.length;
}
