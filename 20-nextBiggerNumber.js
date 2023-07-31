//Take a positive integer
//Return the next bigger number that can be formed by rearranging its digits
function nextBigger(n) {
    let digits = n
      .toString()
      .split('')
      .map(Number);
  
    let pivotIndex = -1;
    for (let i = digits.length - 2; i >= 0; i--) {
      if (digits[i] < digits[i + 1]) {
        pivotIndex = i;
        break;
      }
    }
  
    if (pivotIndex === -1) {
      return -1;
    }
  
    let swapIndex = pivotIndex + 1;
    for (let i = pivotIndex + 2; i < digits.length; i++) {
      if (digits[i] > digits[pivotIndex] && digits[i] <= digits[swapIndex]) {
        swapIndex = i;
      }
    }
  
    [digits[pivotIndex], digits[swapIndex]] = [digits[swapIndex], digits[pivotIndex]];
  
    const sortedRight = digits.splice(pivotIndex + 1).sort((a, b) => a - b);
  
    digits = digits.concat(sortedRight);
  
    return +digits.join('');
}