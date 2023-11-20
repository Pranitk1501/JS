const contentElement = document.getElementById("content");
const focusElement = document.getElementById("focusElement");

// Function to change background color on mouseover
contentElement.addEventListener("mouseover", function() {
    contentElement.style.backgroundColor = "#e74c3c"; // Red color
});

contentElement.addEventListener("mouseout", function() {
    contentElement.style.backgroundColor = "#3498db"; // Original blue color
});

// Function to change background color on input box focus
focusElement.addEventListener("focus", function() {
    contentElement.style.backgroundColor = "#27ae60"; // Green color
});

focusElement.addEventListener("blur", function() {
    contentElement.style.backgroundColor = "#3498db"; // Original blue color
});
