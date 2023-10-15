//Given a string, replace every letter with its position in the alphabet.
//If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
  //Create map of letters and their position in the alphabet
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetMap = new Map();
  for (let i = 0; i < alphabet.length; i++) {
    alphabetMap.set(alphabet.charAt(i), i + 1);
  }
  //Create array of positions and return them as one string
  let positions = [];
  text
    .toLowerCase()
    .split("")
    .forEach((word) => {
      word.split("").forEach((letter) => {
        const position = alphabetMap.get(letter);
        if (position) positions.push(position);
      });
    });
  return positions.join(" ");
}
