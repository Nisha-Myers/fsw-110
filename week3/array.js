for (var i = 0; i < 10; i++) {      
    var newH = document.createElement("h1");
    newH.textContent = "Hello World";
    newH.setAttribute("style", "color:purple")
    document.body.appendChild(newH);
}



/*
I couldn't for the life of me get the array for loop to work. 
And when I made it "const", as required, the previous loop vanished. 
So I switched it to "var" so that at least the code I managed to get 
correct would actually show up....
*/

var names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];
var theNames = document.getElementById("names");

for (var i = 0; 1 < names.length; i++) {
  var newName = document.createElement("li");
  newName.textContent = names[i];
  theNames.append(newName);
}
