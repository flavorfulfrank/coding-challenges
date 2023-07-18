//Take positive integer
//Return sum of multiples of 3 or 5 from 0...n
function solution(number){
    let sum = 0;
    for (let i = 2; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum+= i;
      }
    }
    return sum;
}