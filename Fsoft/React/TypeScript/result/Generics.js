"use strict";
//Generics
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [1, 5, 7, 4, 2, 9];
var colors = ["red", "green", "blue"];
var numberArray = [1, 5, 7, 4, 2, 9, "blue"];
var booleanArray = [true, false, true];
console.log(getRandomElement(numbers));
console.log(getRandomElement(numberArray));
//# sourceMappingURL=Generics.js.map