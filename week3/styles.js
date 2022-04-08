for (var i = 0; i < 5; i++) {      
    var newH = document.createElement("h2");
    newH.textContent = "~These are my Headings~";
    newH.style.textAlign = "center";
    newH.style.fontSize = "20px";
    newH.style.fontWeight = "lighter"
    newH.style.fontFamily = "sans-serif"
    newH.style.color = "cornflowerblue"
    document.body.appendChild(newH);
}