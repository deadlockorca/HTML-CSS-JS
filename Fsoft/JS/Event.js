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


const form = document.querySelector("form")
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const notify = document.querySelector("#warning")

form.onsubmit = function(event){
    if(fname.value === "" || lname.value === ""){
        event.preventDefault();
        alert("Submit error!");
        notify.textContent = "Submit error"
        notify.style.color = "red";
    }else{
    alert("Submit success");
    notify.textContent = "Submit success";
};
}
window.addEventListener("contextmenu", function(event){
    event.preventDefault();
});

const btnVideo = document.getElementById("display-video")
const videoBox = document.getElementById("main-video")
const video = document.querySelector("video")

btnVideo.onclick = function(){
    videoBox.setAttribute("class", "showing");
};

video.onclick = function(){
    video.play();
};

videoBox.onclick = function(){
    videoBox.setAttribute("class", "hidden");
}

