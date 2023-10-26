//You are given a string of space separated numbers.
//Return the highest and lowest number.

//highAndLow("1 2 3 4 5");  // return "5 1"

function highAndLow(numbers) {
  let numberList = numbers.split(" ");
  const high = Math.max(...numberList);
  const low = Math.min(...numberList);
  return `${high} ${low}`;
}
