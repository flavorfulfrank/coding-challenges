//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

//Example
//{ 6, 2, 1, 8, 10 } => 16

//Input validation
//If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
  if (!array || array.length === 1) return 0;
  array = array.sort((a, b) => b - a);
  return array
    .slice(1, array.length - 1)
    .reduce((total, current) => total + current, 0);
}
