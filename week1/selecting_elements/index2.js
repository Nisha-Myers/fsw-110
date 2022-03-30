//document.getElementById("heading").innerHTML = "This text was inserted with JavaScript";

var header = document.createElement("h1");
header.textContent = "This text was inserted with JavaScript";
var heading = document.getElementById("heading");
heading.appendChild(header);