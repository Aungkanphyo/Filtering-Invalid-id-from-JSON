const fruits = ["apple", "banana", "grapes", "mango", "orange"];
function searchFruit(arr, query) {
  return fruits.filter((fruit) =>
    fruit.toLowerCase().includes(query.toLowerCase())
  );
}

console.log(searchFruit(fruits, "ap"));
console.log(searchFruit(fruits, "rap"));
