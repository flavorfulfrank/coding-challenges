//Take a positive number
//Return the number of times you multiply the digits in num until you reach a single digit
function persistence(num) {
    let passes = 0;
    while (num >= 10) {
      passes++;
      num = num
        .toString()
        .split('')
        .map(Number)
        .reduce((a, b) => a * b, 1);
    }
    return passes;
}