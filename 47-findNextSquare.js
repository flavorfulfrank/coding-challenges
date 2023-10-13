//Return the next perfect square
//If the parameter itself is not a perfect square, return -1
function findNextSquare(sq) {
  let squareRoot = Math.sqrt(sq);
  if (squareRoot % 1) return -1;
  return Math.pow(++squareRoot, 2);
}
