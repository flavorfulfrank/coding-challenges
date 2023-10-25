//Complete the solution so that the function will break up camel casing, using a space between words.

//Example
//"camelCasing"  =>  "camel Casing"

//Iterative Solution
function breakCamelCase(string) {
  string = string.split("");
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      string.splice(i, 0, " ");
      i++;
    }
  }
  return string.join("");
}

//Using Regular Expression and replace string function
function breakCamelCase(string) {
  return string.replace(/([A-Z])/g, " $1");
}
