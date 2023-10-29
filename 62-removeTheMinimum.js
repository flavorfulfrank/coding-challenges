//Given an array of integers, remove the smallest value.

//*Do not mutate the original array/list.
//If there are multiple elements with the same value, remove the one with a lower index.
//If you get an empty array/list, return an empty array/list.
//Don't change the order of the elements that are left.

//Input: [5,3,2,1,4], output = [5,3,2,4]

function removeSmallest(numbers) {
  const minIndex = numbers.indexOf(Math.min(...numbers));
  //Create copy of array so that the original is not modified
  const newExhibition = numbers.slice();
  newExhibition.splice(minIndex, 1);
  return newExhibition;
}
