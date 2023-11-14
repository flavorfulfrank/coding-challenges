//There is a queue for the self-checkout tills at the supermarket.
//Your task is write a function to calculate the total time required for all the customers to check out!

//input
//customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
//n: a positive integer, the number of checkout tills.

//output
//The function should return an integer, the total time required.

//example
//queueTime([5,3,4], 1) => 12

function queueTime(customers, n) {
  let tills = [];
  let totalTime = 0;
  //Fill the supermarket tills with customers
  while (customers.length > 0 || tills.length > 0) {
    while (tills.length < n && customers.length > 0) {
      tills.push(customers.shift());
    }
    let shortestTime = Math.min(...tills);
    tills = tills
      .map((queue) => queue - shortestTime)
      .filter((queue) => queue > 0);
    totalTime += shortestTime;
  }
  return totalTime;
}
