//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
//Return the resulting string.

function fakeBinary(x) {
  let string = "";
  for (let i = 0; i < x.length; i++) {
    string += x[i] >= 5 ? "1" : "0";
  }
  return string;
}
