var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function(){
    console.log(window.location.href);
    window.location.href = "http://dantri.com.vn";
});

var nodeList = document.querySelectorAll("h2, h4");
console.log(nodeList);


window.addEventListener('DOMContentLoaded', (event) => {
   
    var firstElement = document.querySelector("body > *");

    
    var h2Elements = document.querySelectorAll("h2");
    h2Elements.forEach(function(element) {
      element.style.backgroundColor = "#ccc";
    });

    
    var menuItem = document.querySelector(".menu-item");
    menuItem.classList.add("active");

    
    var logo = document.querySelector("#logo");
    logo.src = "https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg";
    var firstLi = document.querySelector("ul > li");
    firstLi.textContent = "Test";
  });