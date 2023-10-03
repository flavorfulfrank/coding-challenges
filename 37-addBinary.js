//Implement a function that adds two numbers together and returns their sum in binary.
//The conversion can be done before, or after the addition.

//The binary number returned should be a string.

function addBinary(a, b) {
  let remainders = [];
  let quotient = a + b;
  while (quotient !== 0) {
    remainders.push(quotient % 2);
    quotient = Math.floor(quotient / 2);
  }
  return remainders.reverse().join("");
}

/*
function addBinary(a, b) {
    return (a + b).toString(2);
}

*/
