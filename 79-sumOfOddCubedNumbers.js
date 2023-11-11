//Find the sum of the odd numbers within an array, after cubing the initial integers.
//The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
  const sum = arr
    .map((n) => Math.pow(n, 3))
    .filter((n) => n % 2 !== 0)
    .reduce((sum, current) => sum + current, 0);
  return isNaN(sum) ? undefined : sum;
}
