//Take an array of integers
//Return the sum of all positive integers
function positiveSum(arr) {
  let sum = 0;
  arr.forEach((num) => {
    if (num > 0) {
      sum += num;
    }
  });
  return sum;
}
