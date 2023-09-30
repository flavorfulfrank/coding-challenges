//There is a bus moving in the city which takes and drops some people at each bus stop.
//You are provided with a list (or array) of integer pairs.
//Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

//Return the remaining passengers at the last bus stop

const number = function (busStops) {
  return busStops.reduce(
    (passengers, current) => passengers + current[0] - current[1],
    0
  );
};
