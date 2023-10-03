var hour = new Date().getHours();
console.log("now", hour);
if(hour >= 18){
    document.getElementById("demo").innerHTML = "Afternoon";
}else{
    document.getElementById("demo").innerHTML = "Morning";
};
//EX2
var checkBox = document.querySelector("#shoppingCheck");
var shoppingText = document.querySelector("#shoppingText");
var shoppingDone = false; 

checkBox.addEventListener("change",function(){
    shoppingDone = !shoppingDone;
    updateAllowance();
});
function updateAllowance(){
    if (shoppingDone === true){
        var childsAllowance = 10;
    }else{
        childsAllowance = 5;
    }
    shoppingText.textContent = ` Child has earned $${childsAllowance} this week.`;
}
updateAllowance();
//EX3
var seclectWeather = document.querySelector("#weather");
var weatherText = document.querySelector("#weatherText");
seclectWeather.addEventListener("change", setWeather);

function setWeather(){
    let choice = seclectWeather.value;
    let temperature = 30;
    console.log("choice", choice);
    if(choice === "sunny" && temperature < 40){
        weatherText.textContent = "It's nice and sunny outside today"    
    }else if (choice === "sunny" && temperature >= 40){
        weatherText.textContent = "It's super hot, dont go out";

    }else if( choice === "rainy"){
            weatherText.textContent = "Rain is falling outside"
    }else if( choice === "snowing"){
        weatherText.textContent = "Snow is comming down"
    }else if( choice === "overcast"){
        weatherText.textContent = "It's not raining , but sky is grey"
    }else{
        weatherText.textContent = "";
    }
}    
//EX4
var selectTheme = document.querySelector("#theme");
selectTheme.addEventListener("change", setTheme);
const html = document.querySelector("html");


function setTheme(){
    let bgColor = selectTheme.value === "pik" ? "pink" : "black";
    console.log("bgColor: ", bgColor);
    let textColor = selectTheme.value !== "pik" ? "pink" : "black"; 
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}
setTheme();