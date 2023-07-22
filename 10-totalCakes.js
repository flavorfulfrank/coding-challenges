//Take a recipe(object) and available ingredients(object)
//Return the maximum amount of cakes that you can bake

//Example: cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
//Returns 2
function cakes(recipe, available) {
    return Object.keys(recipe).reduce((maxCakes, ingredient) => {
      if (available[ingredient] === undefined) return 0;
      return Math.min(maxCakes, Math.floor(available[ingredient] / recipe[ingredient]));
    }, Infinity);
}