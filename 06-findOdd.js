//Take array of numbers
//Return number that has a total occurance that is odd
function findOdd(A) {
    let dictionary = {}
    A.forEach(item => {
      dictionary[item] ? dictionary[item]++ : dictionary[item] = 1;
    });
    for (let key in dictionary) {
      if (dictionary[key] % 2 === 1) return +key; 
    }
}