//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
//Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word) {
  const map = new Map();
  word = word.toLowerCase();
  let encodedWord = "";
  for (let i = 0; i < word.length; i++) {
    map.set(word[i], map.get(word[i]) ? map.get(word[i]) + 1 : 1);
  }
  for (let i = 0; i < word.length; i++) {
    encodedWord += map.get(word[i]) > 1 ? ")" : "(";
  }

  return encodedWord;
}
