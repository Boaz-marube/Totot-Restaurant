document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector('form[action="#"]');

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form submission

      // Get form elements
      const fullName = document.getElementById("full-name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      // Validate required fields
      let isValid = true;

      // Reset error states
      document.querySelectorAll(".error-message").forEach((el) => el.remove());
      document
        .querySelectorAll(".border-red-500")
        .forEach((el) => el.classList.remove("border-red-500"));

      // Check full name
      if (!fullName.value.trim()) {
        showError(fullName, "Full name is required");
        isValid = false;
      }

      // Check email
      if (!email.value.trim()) {
        showError(email, "Email is required");
        isValid = false;
      } else if (!isValidEmail(email.value)) {
        showError(email, "Please enter a valid email");
        isValid = false;
      }

      // Check message
      if (!message.value.trim()) {
        showError(message, "Message is required");
        isValid = false;
      }

      // If all valid, show success
      if (isValid) {
        alert("Thank you for your feedback!");
        contactForm.reset(); // Reset the form
      }
    });
  }

  // Helper function to show error messages
  function showError(input, message) {
    input.classList.add("border-red-500");
    const errorDiv = document.createElement("div");
    errorDiv.className = "mt-1 text-xs text-red-500 error-message";
    errorDiv.textContent = message;
    input.parentNode.appendChild(errorDiv);
  }

  // Email validation helper
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
