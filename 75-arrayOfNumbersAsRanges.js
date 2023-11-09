//Your task is to take arrays of numbers and compress them into ranges.
//The numbers in the array are mostly consecutive. 
// If you convert them as ranges, it will save a lot of space.
//You should write a function that will convert an array of numbers into a string. 
// range, or series of consecutive numbers, will be represented as two numbers separated by an underscore, a range of one just by the number its self and multiple ranges separated by commas.

//For example,
//The numbers 5, 6, 7, 8 and 9 would be displayed as "5_9"
//The number 6 would just be "6"
//The numbers 3,4,5,6,9 would be "3_6,9"

//Using the above system, you should write two functions:
//toRange - convert an array of numbers to a range string
//toArray - convert a range string back to an array

//Warnings
//The numbers could arrive all jumbled up so you'll need to sort them.
//Sometimes the same number may appear more than once, duplicates should be discarded.

//Edge cases
//An empty array should become an empty string if passed to toRange and vise versa for the toArray function.

// Should return a string representing the ranges
function toRange(arr) {
  //Filter duplicates and sort array
  arr = arr.filter((item, index) => arr.indexOf(item) === index);
  arr = arr.sort((a, b) => a - b);
  let range = [];
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    //Continue to next iteration if next int is consecutive
    if (arr[i] + 1 === arr[i + 1]) continue;
    //If no consecutive numbers exist, push the number alone
    if (start === i) {
      range.push(arr[i]);
    //If the range is consecute, push the range
    } else {
      range.push(`${arr[start]}_${arr[i]}`);
    }
    //Move start up to current index
    start = i + 1;
  }
  return range.join(",");
}

// Should return an array
function toArray(str) {
  if (str === "") return [];
  const arr = [];
  str = str.split(",");
  str.forEach((range) => {
    if (range.includes("_")) {
      range = range.split("_");
      //Push each number from range start to end to arr
      for (let i = +range[0]; i <= +range[1]; i++) {
        arr.push(i);
      }
    } else {
      arr.push(+range);
    }
  });
  return arr;
}
