//Take a string and return the string with all vowels removed
function removeVowels(str) {
  return str
    .split("")
    .filter((letter) => /[^aeiou]/gi.test(letter))
    .join("");
}

/*
function removeVowelsTwo(str) {
  return str.replace(/aeiou/gi, '');
*/