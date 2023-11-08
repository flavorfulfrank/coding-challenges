//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//Using array function
function removeExclamationMarks(s) {
  return s
    .split("")
    .filter((letter) => letter !== "!")
    .join("");
}

//Using Regex
function removeExclamationMarks(s) {
  return s.replace(/!/gi, "");
}
