/*
let element = document.getElementById('heading');
element.innerHTML += "This was inserted with JavaScript";
*/

/*
let h1Node = document.createElement('h1');
hiNode.id = 'heading';
hiNode.textContent = "This was inserted with JavaScript";
document.body.appendChild(hiNode);
*/

function addText(text) {
    document.getElementById('heading').innerHTML = "This was inserted with JavaScript"
}