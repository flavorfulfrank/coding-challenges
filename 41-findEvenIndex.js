//You are going to be given an array of integers.
//Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.
//If there is no index that would make this happen, return -1.

//i.g. {1,2,3,4,3,2,1} returns 3 because (1 + 2 + 3) === (3 + 2 + 1);

function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let leftSum = arr
      .slice(0, i)
      .reduce((total, current) => total + current, 0);
    let rightSum = arr
      .slice(i + 1)
      .reduce((total, current) => total + current, 0);
    if (leftSum === rightSum) return i;
  }
  return -1;
}

/*
function findEvenIndex(arr) {
  let leftSum = 0;
  let rightSum = arr.reduce((total, current) => total + current, 0);
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) leftSum += arr[i - 1];
    rightSum -= arr[i];
    if (leftSum === rightSum) return i;
  }
  return -1;
}
*/
