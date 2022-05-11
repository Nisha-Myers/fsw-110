// .toUpperCase() .toLowerCase() .concat() 
function upperLowerCase(string) {
    var uppercasedHello = string.toUpperCase();
    var lowercasedHello = string.toLowerCase();
        return uppercasedHello.concat(lowercasedHello);
        
}
console.log(upperLowerCase("Denisha"));


// .indexOf() 
function index() {
    var str = "I'm in a major hurry"
        return str.indexOf("major");

}
console.log(index());


// .lastIndexOf()
function lastIndex() {
    var str = "I love horror films."
        return str.lastIndexOf("films");    
}
console.log(lastIndex());