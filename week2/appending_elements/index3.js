// my heading
var newH = document.createElement("h1");
newH.textContent = "Welcome to my JS site"
document.body.appendChild(newH);

// my paragraph
var newP = document.createElement("p");
newP.textContent = "All of this was created with JavaScript!"
document.body.appendChild(newP);


// my ordered list
var newList = document.createElement("ol");
newList.textContent = "~My Hobbies~"
document.body.appendChild(newList);

// my 6 list items
var newItem = document.createElement("li");
newItem.appendChild(document.createTextNode("gaming"));
document.querySelector("ol").appendChild(newItem);

var newItem = document.createElement("li");
newItem.appendChild(document.createTextNode("drawing"));
document.querySelector("ol").appendChild(newItem);

var newItem = document.createElement("li");
newItem.appendChild(document.createTextNode("sculpting"));
document.querySelector("ol").appendChild(newItem);

var newItem = document.createElement("li");
newItem.appendChild(document.createTextNode("playing guitar"));
document.querySelector("ol").appendChild(newItem);

var newItem = document.createElement("li");
newItem.appendChild(document.createTextNode("practicing coding"));
document.querySelector("ol").appendChild(newItem);

var newItem = document.createElement("li");
newItem.appendChild(document.createTextNode("studying for my College classes"));
document.querySelector("ol").appendChild(newItem);