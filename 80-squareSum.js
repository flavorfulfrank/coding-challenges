//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//Example
//Input [1, 2, 2] => Output 9

function squareSum(numbers) {
  return numbers.reduce((sum, current) => sum + Math.pow(current, 2), 0);
}
