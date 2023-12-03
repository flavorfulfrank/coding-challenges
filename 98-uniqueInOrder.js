// Implement the function uniqueinorder which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

function uniqueInOrder(iterable) {
  let uniqueArray = [];
  let unique = "";
  for (let i = 0; i < iterable.length; i++) {
    if (unique === iterable[i]) continue;
    uniqueArray.push(iterable[i]);
    unique = iterable[i];
  }
  return uniqueArray;
}
