//document.getElementById("heading").innerHTML = "This text was inserted with JavaScript";

/*
let element = document.getElementById('heading');
element.innerHTML += 'This text was inserted with JavaScript';
*/

var heading = document.createElement("h1");
heading.textContent = "Welcome to my JS site";
var header = document.getElementById("mylist");
header.appendChild(heading);

