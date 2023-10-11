//Complete the function that accepts a string parameter, and reverses each word in the string.
//All spaces in the string should be retained.

//Example
//"This is an example!" ==> "sihT si na !elpmaxe"

function reverseWords(str) {
  //Separate each word
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    //Reverse each word
    str[i] = str[i].split("").reverse().join("");
  }
  return str.join(" ");
}
