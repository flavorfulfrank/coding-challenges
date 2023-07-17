//Take number n
//Return true/false => n is a perfect square
var isSquare = function(n){
    if (n < 0) return false;
    return Number.isInteger(Math.sqrt(n));
}