//Return the number (count) of vowels in the given string.
//The input string will only consist of lower case letters and/or spaces.

function getVowelCount(str) {
  let total = 0;
  str.split("").forEach((letter) => {
    //Increment total if letter is a vowel
    if (/[aeiou]/.test(letter)) total++;
  });
  return total;
}
