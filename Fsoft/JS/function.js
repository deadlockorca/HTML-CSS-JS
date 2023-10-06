var arr = [1, 3, 4, 5];
var arr2 = [10, 20, 30, 99];

function calculateSum (array) {
    var sum = 0;
    for (let index = 0; index < array.length; index++){
        sum += array[index];
    }
    return sum;
}

console.log("Sum arr: ", calculateSum(arr));
console.log(("Sum arr2: ", calculateSum(arr2)));