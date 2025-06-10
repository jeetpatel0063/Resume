window.addEventListener("load", function () {
    alert("Welcome to Jeet Patel's Resume Page!");
    console.log("Page loaded successfully.");
});

// Change the heading text content
const mainHeading = document.querySelector("header h1");
mainHeading.textContent = "Jeet Patel - Junior Web Developer";

// Change styles of nav links dynamically
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.style.color = "blue";
    link.style.fontWeight = "bold";
    link.style.fontSize = "18px";
});

// Add a button to change background color of About section
const aboutSection = document.getElementById("about");

// Create the button
const colorBtn = document.createElement("button");
colorBtn.textContent = "Change Color";
colorBtn.style.marginTop = "20px";
colorBtn.style.padding = "10px";

// Append the button inside the About section
aboutSection.appendChild(colorBtn);

// Function to change background color
function changeAboutBackground() {
    aboutSection.style.backgroundColor = "#e6f2ff";
    console.log("Changed About section background color.");
}

// Add event listener to button
colorBtn.addEventListener("click", changeAboutBackground);

// Log console messages for debugging.
console.log(" JavaScript Code Execute Successfully.");
