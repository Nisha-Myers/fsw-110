var form = document.getElementById("forms");
var submits = document.getElementById("submit");

function formAlert() {
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var questions = form.elements["question"].value;
var locations = form.elements["location"].value;
var politics = [];

    if (form.elements["liberal"].checked) {
        politics.push(document.getElementById("liberal").value);
    }
    if (form.elements["democrat"].checked) {
        politics.push(document.getElementById("democrat").value);
    }
    if (form.elements["republican"].checked) {
        politics.push(document.getElementById("republican").value);
    }

    alert ("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nQuestion: " + questions + "\nLocation: " + locations + "\nPolitical Affiliation: " + politics + "\nThank you for registering to vote this year with E.R.V.R.!");

    form.reset();
    
};

submits.addEventListener("click", formAlert);