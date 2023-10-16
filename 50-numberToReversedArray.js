//Given a random non-negative number, return the digits of this number within an array in reverse order.
//35231 => [1,3,2,5,3]

function digitize(n) {
  return `${n}`
    .split("")
    .reverse()
    .map((number) => +number);
}
