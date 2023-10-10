//You will be given an array of numbers. 
//You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

//Example
//[7, 1]  =>  [1, 7]
//[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
function sortArray(array) {
  let oddNumbers = array.filter((number) => number % 2);
  oddNumbers.sort((a, b) => b - a);

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) array[i] = oddNumbers.pop();
  }
  return array;
}
