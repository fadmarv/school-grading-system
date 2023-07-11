var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var age = document.getElementById("age");
var Gender = document.getElementById("gender")

function submit() {
    alert(firstName.value + " " + lastName.value + " added sucessfully");
    firstName.value = null;
    lastName.value = null;
    age.value = null;
}