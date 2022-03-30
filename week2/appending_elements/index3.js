var heading = document.createElement("h1");
heading.textContent = "My FSW-110 Website";
var myHeader = document.getElementById("heading");
myHeader.appendChild(heading);

var myParagraph = document.createElement("p");
myParagraph.textContent = "All of this was created with Javascript";
var aParagraph = document.getElementById("paragraph");
aParagraph.appendChild(myParagraph);



var newItem = document.createElement("li");
newItem.textContent = "drawing"
var mylist = document.getElementById("one");
mylist.append(newItem);

var newItem = document.createElement("li");
newItem.textContent = "sculpting"
var mylist = document.getElementById("two");
mylist.append(newItem);

var newItem = document.createElement("li");
newItem.textContent = "gaming"
var mylist = document.getElementById("three");
mylist.append(newItem);