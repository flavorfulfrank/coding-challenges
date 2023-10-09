//An isogram is a word that has no repeating letters, consecutive or non-consecutive.
//Implement a function that determines whether a string that contains only letters is an isogram.
//Assume the empty string is an isogram. Ignore letter case.

//Iterative solution
function isIsogram(str) {
  let stringSet = new Set();
  let result = true;
  str.split("").forEach((letter) => {
    letter = letter.toLowerCase();
    if (stringSet.has(letter)) result = false;
    stringSet.add(letter);
  });
  return result;
}

//Check by length solution
function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length;
}
