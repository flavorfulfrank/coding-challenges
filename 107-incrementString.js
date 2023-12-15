// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
  let endingNumber = strng.match(/[0-9]+$/) ? strng.match(/[0-9]+$/)[0] : "";
  let leadingString = strng.replace(new RegExp(endingNumber + "$"), "");
  let leadingZeros = endingNumber.match(/^0+/)
    ? endingNumber.match(/^0+/)[0]
    : "";
  if (endingNumber.match(/^0+$/))
    return `${leadingString}${endingNumber.slice(0, -1)}1`;
  if (endingNumber[endingNumber.length - 1] === "9")
    return `${leadingString}${leadingZeros.slice(0, -1)}${+endingNumber + 1}`;
  return `${leadingString}${leadingZeros}${+endingNumber + 1}`;
}
