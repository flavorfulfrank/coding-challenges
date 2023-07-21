//Take an array
//Return a new array with all of the zeros moved to the end
function moveZeros(arr) {
    return arr
      .filter(item => item !== 0)
      .concat(arr.filter(item => item === 0));
}