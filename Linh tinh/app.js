$.get("https://api.openweathermap.org/data/2.5/weather?q=hanoi&id=524901&APPID=710a8a155ade8daf23d7240bf1ca4d6f&units=metric",
function(api){
console.log(api);
console.log("local Temp: " +api.main.temp);
console.log(api.weather[0].description);
console.log(api.wind.speed);
$('.temp').html('Local Temp: '+api.main.temp)
$('.description').html(api.weather[0].description)
});