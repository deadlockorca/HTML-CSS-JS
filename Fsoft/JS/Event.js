var btnChangeColor = document.querySelector("#change-color");
function random(number){
    return Math.floor(Math.random() * number);
}

function bgChange(name){
    console.log(name);
    const rndColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndColor;
}

btnChangeColor.addEventListener("click", () => bgChange("Change color"));
//
function colorChange(){
    const rndColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    btnChangeColor.style.color = rndColor;
}

for ( let index = 1; index < 17; index++){
    const currentDiv = document.createElement("div");
    document.body.appendChild(currentDiv);
}

var divArray = document.querySelectorAll("div");

function bgDivChange(){
    const rndColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

    return rndColor;
}
for( let index = 0; index < divArray.length; index++){
    divArray[index].onclick = function(event){
        event.target.style.backgroundColor = bgDivChange();
    };
}



