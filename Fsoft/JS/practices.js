var select = document.querySelector("select");
var list = document.querySelector(".output ul");
var output = document.querySelector(".output p");
var input = document.querySelector(".output input");
var button = document.querySelector(".output button");


var person = {
    id: 1,
    name: "Le Van C",
    age: 20,
    email: "email@gmail.com",
};

var key = "id";

select.addEventListener("change", function(event){
    console.log("select event: ", event.target.value);
    key = event.target.value;
});

button.addEventListener("click", function(){
    var newValue  = input.value;
    
    console.log(key, person, newValue);
    output.textContent = JSON.stringify(person);
});

button.addEventListener("click", function(){
    var newValue = input.value;
    
    person[key] = newValue;
    
    output.textContent = JSON.stringify(person);
});

