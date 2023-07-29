//Take a list of integers
//Return the first two values in order of appearance from left to right
//that add up to the value of sum
function sumOfPairs(ints, sum) {
    let compliments = {};
  
    for (let i = 0; i < ints.length; i++) {
      const int = ints[i];
      const compliment = sum - int;
  
      if (compliment in compliments) {
        return [compliment, int];
      }
  
      compliments[int] = true;
    }
    return undefined;
}