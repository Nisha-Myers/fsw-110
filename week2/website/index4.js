// my navbar
var newNav = document.createElement("nav");
newNav.textContent = "home about news";
document.body.prepend(newNav);




/*
I had difficulties figuring out how to make a navbar with ONLY JS... I searched & searched to no avail...
*/





// my heading
var newH = document.createElement("h1");
newH.textContent = "~This Is My FSW-110 Site~";
newH.style.textAlign = "center";
newH.style.fontSize = "60px";
document.body.appendChild(newH);

// my paragraph
var newP = document.createElement("p");
newP.textContent = "All of this was created with JavaScript!";
newP.style.textAlign = "center";
newP.style.fontSize = "25px";
document.body.appendChild(newP);




// my ordered list
var newList = document.createElement("ol");
newList.textContent = "~My Hobbies~"
newList.style.fontSize = "30px";
document.body.appendChild(newList);

// my 6 list items
var newItem = document.createElement("li");
newItem.appendChild(document.createTextNode("gaming"));
newItem.style.fontSize = "18px";
document.querySelector("ol").appendChild(newItem);

var newItem = document.createElement("li");
newItem.appendChild(document.createTextNode("drawing"));
newItem.style.fontSize = "18px";
document.querySelector("ol").appendChild(newItem);

var newItem = document.createElement("li");
newItem.appendChild(document.createTextNode("sculpting"));
newItem.style.fontSize = "18px";
document.querySelector("ol").appendChild(newItem);

var newItem = document.createElement("li");
newItem.appendChild(document.createTextNode("playing guitar"));
newItem.style.fontSize = "18px";
document.querySelector("ol").appendChild(newItem);

var newItem = document.createElement("li");
newItem.appendChild(document.createTextNode("practicing coding"));
newItem.style.fontSize = "18px";
document.querySelector("ol").appendChild(newItem);

var newItem = document.createElement("li");
newItem.appendChild(document.createTextNode("studying for my College classes"));
newItem.style.fontSize = "18px";
document.querySelector("ol").appendChild(newItem);



// my footer
var newFooter = document.createElement("footer");
newFooter.textContent = "Author: Denisha Shae Myers"
newFooter.style.fontSize = "13px"
document.body.appendChild(newFooter);


// change background color
function changeBackground(color) {
    document.body.style.background = color;
 }
 window.addEventListener("load",function() { changeBackground("lightcoral") });
