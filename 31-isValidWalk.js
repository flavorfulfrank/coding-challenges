/*
Coding Challenge Description

You live in the city of Cartesia where all roads are laid out in a perfect grid.
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
The city provides its citizens with a Walk Generating App on their phones--
everytime you press the button it sends you an array of one-letter strings
representing directions to walk (eg. ['n', 's', 'w', 'e']).
You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block,
so create a function that will return true if the walk the app gives you will take you exactly ten minutes
(you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
*/

function isValidWalk(walk) {
  let vertical = 0;
  let horizontal = 0;
  let time = 0;

  walk.forEach((direction) => {
    if (direction === "n") vertical++;
    else if (direction === "s") vertical--;
    else if (direction === "e") horizontal++;
    else if (direction === "w") horizontal--;
    time++;
  });

  return vertical === 0 && horizontal === 0 && time === 10;
}
