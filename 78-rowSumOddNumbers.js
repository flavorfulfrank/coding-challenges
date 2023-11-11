//Given the triangle of consecutive odd numbers:
// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...

//Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
//1 -->  1
//2 --> 3 + 5 = 8

//Iterative Solution
function rowSumOddNumbers(n) {
  let sum = 0;
  //Find the ending last odd number of the triangle
  let lastOdd = 2 * ((n * (n + 1)) / 2) - 1;
  for (let i = 0; i < n; ) {
    if (lastOdd % 2 === 1) {
      sum += lastOdd;
      i++;
    }
    lastOdd--;
  }

  return sum;
}

//Mathematical Solution
function rowSumOddNumbersTwo(n) {
    return Math.pow(n, 3);
}