//Take an array of arrays of numbers
//Return the largest slide down
function longestSlideDown (pyramid) {
    const rows = pyramid.length;
    let memo = Array.from({length: rows}, () => []);
    
    function findMax(row, col) {
      if (row === rows - 1) return pyramid[row][col];
      if (memo[row][col] !== undefined) return memo[row][col];
      
      const leftMax = findMax(row + 1, col);
      const rightMax = findMax(row + 1, col + 1);
      
      memo[row][col] = pyramid[row][col] + Math.max(leftMax, rightMax);
      
      return memo[row][col];
    }
    return findMax(0, 0);
}