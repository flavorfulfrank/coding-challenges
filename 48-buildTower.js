//Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors.
//A tower block is represented with "*" character.

//For example, a tower with 3 floors looks like this:

/*
    [
    "  *  ",
    " *** ", 
    "*****"
    ]
*/

function towerBuilder(nFloors) {
  let tower = [];
  let floor = 1 + 2 * (nFloors - 1);
  for (let i = nFloors; i > 0; i--) {
    const emptySpace = " ".repeat(nFloors - i);
    const floorString = emptySpace + "*".repeat(floor) + emptySpace;
    tower.push(floorString);
    floor -= 2;
  }
  return tower.reverse();
}
