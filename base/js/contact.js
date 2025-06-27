document.addEventListener("DOMContentLoaded", function () {
  // Select the form and its elements
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const termsCheckbox = document.getElementById("terms");

  // Add event listener for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Clear previous error messages
    clearErrors();

    // Validate inputs
    let isValid = true;

    // Check if the name field is empty
    if (!nameInput.value.trim()) {
      showError(nameInput, "Name is required.");
      isValid = false;
    }

    // Check if the email field is empty or invalid
    if (!emailInput.value.trim()) {
      showError(emailInput, "Email is required.");
      isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
      showError(emailInput, "Please enter a valid email address.");
      isValid = false;
    }

    // Check if the message field is empty
    if (!messageInput.value.trim()) {
      showError(messageInput, "Message is required.");
      isValid = false;
    }

    // Check if the terms checkbox is checked
    if (!termsCheckbox.checked) {
      alert("You must accept the terms to submit the form.");
      isValid = false;
    }

    // If all validations pass, show success message
    if (isValid) {
      showSuccess(nameInput.value);
      form.reset(); // Reset the form after successful submission
    }
  });

  // Function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Function to show error messages
  function showError(inputElement, message) {
    const parentDiv = inputElement.parentElement;
    const errorElement = document.createElement("p");
    errorElement.className = "mt-1 text-sm text-red-500";
    errorElement.textContent = message;
    parentDiv.appendChild(errorElement);
  }

  // Function to clear error messages
  function clearErrors() {
    const errorMessages = document.querySelectorAll(".text-red-500");
    errorMessages.forEach((error) => error.remove());
  }

  // Function to show success message
  function showSuccess(name) {
    alert(`Thank you, ${name}! Your message has been successfully sent.`);
  }
});
