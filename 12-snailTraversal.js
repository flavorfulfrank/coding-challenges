//Take a matrix
//Return an array that travels clockwise around the matrix
const snailTraversal = function(matrix) {
    let snailArray = [];
    
    while(matrix.length) {
      snailArray.push(...matrix.shift());
    
      matrix.map(row => snailArray.push(row.pop()));
      
      if (matrix.length) {
        snailArray.push(...matrix.pop().reverse());
      }
      
      for (const row of matrix.slice().reverse()) {
          snailArray.push(row.shift());
      }
    }
    return snailArray;
}