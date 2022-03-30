document.getElementById("heading").innerHTML = "Welcome to my JS site";

document.getElementById("paragraph").innerHTML = "All of this was created with Javascript";

var newItem = document.getElementById("heading");
newItem.textContent = "Welcome to my JS site";

var heading = document.createElement("h1");
heading.textContent = "Welcome to my JS site";
var header = document.getElementById("heading");
header.appendChild(heading);

var myParagraph = document.createElement("p");
myParagraph.textContent = "All of this was created with Javascript";
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