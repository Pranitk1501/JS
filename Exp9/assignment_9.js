function validateForm() {
    // Validation code (same as previous)
    // If all validations pass, display welcome message
    document.getElementById("welcomeName").textContent = name;
    document.getElementById("studentForm").style.display = "none";
    document.getElementById("welcomeMessage").style.display = "block";
    return false; // Prevent form submission
    }
    function goBack() {
    // Hide the welcome message and show the form
    document.getElementById("studentForm").style.display = "block";
    document.getElementById("welcomeMessage").style.display = "none";
    // Reset the form values
    document.getElementById("studentForm").reset();
    // Clear any error messages
document.getElementById("nameError").innerHTML = "";
document.getElementById("addressError").innerHTML = "";
document.getElementById("mobileError").innerHTML = "";
document.getElementById("emailError").innerHTML = "";
}
function validateForm() {
var name = document.getElementById("name").value;
var mobile = document.getElementById("mobile").value;
var email = document.getElementById("email").value;
var address = document.getElementById("address").value;
var city = document.getElementById("city").value;
var state = document.getElementById("state").value;
// Validation for name (only alphabets and spaces allowed)
var namePattern = /^[A-Za-z\s]+$/;
if (!name.match(namePattern)) {
document.getElementById("nameError").innerHTML = "Invalid name";
return false;
}
else{
document.getElementById("nameError").innerHTML = "";
}
// Validation for mobile number (10 digits required)
var mobilePattern = /^\d{10}$/;
if (!mobile.match(mobilePattern)) {
document.getElementById("mobileError").innerHTML =
"Invalid mobile number";
return false;
}
else{
document.getElementById("mobileError").innerHTML = "";
}
// Validation for email
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
if (!email.match(emailPattern)) {
document.getElementById("emailError").innerHTML =
"Invalid email address";
return false;
}
else{
document.getElementById("emailError").innerHTML = "";
}
var addressPattern = /^[a-zA-Z0-9\s,'-.]*$/;
if (address.trim() === "") {
    document.getElementById("addressError").innerHTML = "Address is required";
    return false;
    }
    else if(!address.match(addressPattern)){
    document.getElementById("addressError").innerHTML = "Invalid Address";
    return false;
    }
    else {
    document.getElementById("addressError").innerHTML = "";
    }
    if (city.trim() === "") {
    document.getElementById("cityError").innerHTML = "City is required";
    return false;
    }
    else if(!city.match(namePattern)){
    document.getElementById("cityError").innerHTML = "Invalid City name";
    return false;
    }
    else {
    document.getElementById("cityError").innerHTML = "";
    }
    if (state.trim() === "") {
    document.getElementById("stateError").innerHTML = "State is required";
    return false;
    }
    else if(!state.match(namePattern)){
    document.getElementById("stateError").innerHTML = "Invalid State name";
    return false;
    }
    else {
    document.getElementById("stateError").innerHTML = "";
    }
    // If all validations pass, display welcome message
    document.getElementById("welcomeName").textContent = name;
    document.getElementById("studentForm").style.display = "none";
    document.getElementById("welcomeMessage").style.display = "block";
    return false; // Prevent form submission
    }
