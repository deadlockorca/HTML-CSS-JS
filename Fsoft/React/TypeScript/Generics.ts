//Generics
function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
let numbers = [1, 5, 7, 4, 2, 9];
let colors = ["red", "green", "blue"];
let numberArray = [1, 5, 7, 4, 2, 9, "blue"];
let booleanArray = [true, false, true];

console.log(getRandomElement<number>(numbers));
console.log(getRandomElement<any>(numberArray));