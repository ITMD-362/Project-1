(function () {

function validateForm() {

var nameField = document.forms["signup-form"]["name"].value;
var emailField = document.forms["signup-form"]["email"].value;
var phoneField = document.forms["signup-form"]["phone"].value;

if (nameField === "") {
alert("You must fill out the Name before going forward");
return false;
}

if (emailField === "") {
alert("You must fill out the Name before going forward");
return false;
}

if (phoneField === "") {
alert("You must fill out the Name before going forward");
return false;
}

}

document.forms["signup-form"].addEventListener('submit', validateForm);

})();


