//Take a string of lowercase letters
//Return the number of letters that are not a-m as a string "errors/total"
function printerError(s) {
  let errors = 0;
  const colors = s.split("");
  colors.forEach((color) => {
    if (/[^a-m]/.test(color)) {
      errors++;
    }
  });
  return `${errors}/${s.length}`;
}