var heading = document.createElement("h1");
heading.textContent = "My FSW-110 Website Project";
var myHeader = document.getElementById("heading");
myHeader.appendChild(heading);

var myParagraph = document.createElement("p");
myParagraph.textContent = "My favorite hobbies include:";
var aParagraph = document.getElementById("paragraph");
aParagraph.appendChild(myParagraph);



var newItem = document.createElement("li");
newItem.textContent = "studying for my College classes"
var mylist = document.getElementById("mylist");
mylist.prepend(newItem);

var newItem = document.createElement("li");
newItem.textContent = "practicing coding"
var mylist = document.getElementById("mylist");
mylist.prepend(newItem);

var newItem = document.createElement("li");
newItem.textContent = "playing guitar"
var mylist = document.getElementById("mylist");
mylist.prepend(newItem);

var newItem = document.createElement("li");
newItem.textContent = "sculpting"
var mylist = document.getElementById("mylist");
mylist.prepend(newItem);

var newItem = document.createElement("li");
newItem.textContent = "drawing"
var mylist = document.getElementById("mylist");
mylist.prepend(newItem);

var newItem = document.createElement("li");
newItem.textContent = "gaming"
var mylist = document.getElementById("mylist");
mylist.prepend(newItem);