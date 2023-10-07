function add(){
    console.log("Inside add")
}
function average(){
    add();
    console.log("Inside Average")
}
function main(){
    average();
    console.log("Inside main function")
}
main();
//
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
//EX2
var num1 = 99;
var num2 = 1000; 

console.log("before: ", num1, num2);
function swap(num1, num2){
    var tmp = num1;
    num1 = num2;
    num2 = tmp;

    console.log("inside: ",num1, num2);
}
swap(num1, num2);
console.log("after: ",num1,num2);

//EX3
var persion = {
    fullName: "Nguyen Thi Huyen",
    age: 24
}
function changePersonInfo(obj){
    obj.age = 23;
}
changePersonInfo(persion);
console.log("person: ", persion);
//ex4
const square = function ( number){
    return number * number;
}
console.log(square(19));
//ex5
const factorial = function fac(n){
    return n < 2 ? 1 : n * fac(n-1);
};
console.log(factorial(3));
//ex8
function product(a, b){
    console.log("product function");
    return a * b
}
function sum(a,b){
    console.log("sum prodcut");
    return a + b;
}
function cacl(){
    var c = 2;
    var d = 4;
    var e = 7;
    var f = 9;
    console.log("calc function");
    return sum(c,d) + sum (e +f); //sum(c,d) + sum (e,f)
}
function start(){
    var a = sum(a+b);  //Sum (a,b)
    var b = cacl(); // = calc()
    return product(a,b);
}
start();
///
var arr = [3,4,56,4,,5,7,7,5];
function max(arr){
    if (arr.length > 0){
        const currentValue = arr[arr.length - 1];
        const nextValue = max(arr.slice(0, -1));


        return currentValue > nextValue ? currentValue : nextValue;
    }
    return 0;
}
var currentValue;
function min(arr){
    if ( arr.length >0){
        currentValue = arr[arr.length - 1];
        const nextValue = min(arr.slice(0, -1));
        return currentValue < nextValue ? currentValue : nextValue ;
    }
    return Infinity;
}
console.log(max(arr));
console.log(min(arr));