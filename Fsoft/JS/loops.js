//EX1
var colors = ["red","green","blue","orange"]
var colorText = "My favorite color: ";
var colorEle = document.querySelector("#favorColor");

for (var idx = 0; idx < colors.length; idx++){
    console.log("idx", idx, colors[idx]);
    colorText += colors[idx] + (idx === colors.length - 1? "." : ",");
}
colorEle.textContent = colorText;
//ex2
const contacts = [
    "Thuyet : 1234",
    "Nam : 3456",
    "Minh : 5678",
    "Huyen : 6789",
    "Hung : 2345",
];
const searchResult = document.querySelector("#search-result");
const inputSearch = document.querySelector("#search");
const btnSearch = document.querySelector("#search-contact");

//logic search
btnSearch.addEventListener("click",function(){
    const searchValue = inputSearch.value.trim().toLowerCase();
    console.log("searchValue", searchValue);

    for (let index = 0; index < contacts.length; index++){
        var spitContact = contacts[index].split(":");
        console.log("spitContact", spitContact);

        if(searchValue === spitContact[0].trim().toLowerCase()){
            searchResult.textContent = contacts[index] + ".";
            break;
        }else{
            searchResult.textContent = "Contact not found!!!"
        }
    }
});
//EX3
const outputNumber = document.querySelector("#outputNumber");
const inputNumber = document.querySelector("#number");
const btnNumber = document.querySelector("#btnNumber");

btnNumber.addEventListener("click",function(){
    outputNumber.textContent = "Output: ";

    let number = inputNumber.value;

    for(let index = 1; index <= number; index++){
        let sqRoot = Math.sqrt(index);
        console.log(index, sqRoot);
        if(Math.floor(sqRoot) !== sqRoot){
            continue;
        }
        outputNumber.textContent += index + " ";
    }
});