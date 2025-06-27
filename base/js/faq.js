// faq-accordion.js
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = question.querySelector("svg");

    question.addEventListener("click", () => {
      const isOpen = answer.classList.contains("active");

      // Close all items first
      faqItems.forEach((faq) => {
        faq.querySelector(".faq-answer").classList.remove("active", "block");
        faq.querySelector(".faq-answer").classList.add("hidden");
        rotateIcon(faq.querySelector("svg"), false);
      });

      // If clicked item wasn't open, open it
      if (!isOpen) {
        answer.classList.add("active", "block");
        answer.classList.remove("hidden");
        rotateIcon(icon, true);
      }
    });
  });

  function rotateIcon(icon, isOpen) {
    if (isOpen) {
      icon.style.transform = "rotate(180deg)";
    } else {
      icon.style.transform = "rotate(0deg)";
    }
  }
});
