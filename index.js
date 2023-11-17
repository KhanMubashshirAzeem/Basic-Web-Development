// script.js

// Submit form event listener
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get form values
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
  
    // Validation
    if (nameInput.value === "") {
      alert("Please enter your name.");
      return;
    }
  
    if (emailInput.value === "") {
      alert("Please enter your email.");
      return;
    }
  
    // Form submission successful
    alert("Form submitted successfully!");
    nameInput.value = "";
    emailInput.value = "";
  });
  