var heading = document.createElement("h1");
heading.textContent = "My FSW-110 Website";
var header = document.getElementById("heading");
header.appendChild(heading);

var myParagraph = document.createElement("p");
myParagraph.textContent = "This is my paragraph for my first fsw-110 class website...";
var paragraph = document.getElementById("paragraph");
paragraph.appendChild(myParagraph);



var newItem = document.createElement("li");
newItem.textContent = "drawing"
var mylist = document.getElementById("mylist");
mylist.prepend(newItem);

var newItem = document.createElement("li");
newItem.textContent = "sculpting"
var mylist = document.getElementById("mylist");
mylist.appendChild(newItem);

var newItem = document.createElement("li");
newItem.textContent = "gaming"
var mylist = document.getElementById("mylist");
mylist.appendChild(newItem);