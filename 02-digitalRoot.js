//Digital root is the recursive sum of all the digits in a number (example: 123 --> 1 + 2 + 3 = 6)

//Take the sum of the digits of n
//If the sum has more than one digit, continue recursively until a single-digit number is produced
function digitalRoot(n) {
    let digitalSum = n
      .toString()
      .split('')
      .map(Number)
      .reduce((a, b) => a + b, 0);
    return (digitalSum < 10) ? digitalSum : digitalRoot(digitalSum);
}