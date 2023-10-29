//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

//Return your answer as a number.

function sumMixedArray(array) {
  return array.reduce((sum, current) => sum + +current, 0);
}