document.addEventListener("DOMContentLoaded", function () {
  // Set header height variable
  const header = document.querySelector("header");
  if (header) {
    document.documentElement.style.setProperty(
      "--header-height",
      `${header.offsetHeight}px`
    );
  }

  // Hero section image slideshow
  const heroSection = document.getElementById("hero-section");

  // Restaurant slides data
  const slides = [
    "./base/images/meeting-1.jpg",
    "./base/images/get-togethers.jpg",
    "./base/images/cheese-kitfo.jpg",
  ];

  let currentIndex = 0;

  // Create a background container for the images and overlay
  const backgroundContainer = document.createElement("div");
  backgroundContainer.style.position = "absolute";
  backgroundContainer.style.top = "0";
  backgroundContainer.style.left = "0";
  backgroundContainer.style.width = "100%";
  backgroundContainer.style.height = "100%";
  backgroundContainer.style.zIndex = "-1"; // Place it behind the content
  heroSection.appendChild(backgroundContainer);

  // Add a semi-transparent overlay to the background container
  const overlay = document.createElement("div");
  overlay.style.position = "absolute";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Semi-transparent black overlay
  overlay.style.zIndex = "1"; // Ensure it's above the background but below the content
  backgroundContainer.appendChild(overlay);

  // Preload images to avoid flickering
  slides.forEach((image) => {
    const img = new Image();
    img.src = image;
  });

  // Function to update the background image with sliding effect
  function updateBackgroundImage() {
    if (!backgroundContainer || slides.length === 0) return;

    const nextIndex = (currentIndex + 1) % slides.length;

    // Create a temporary background layer for the sliding effect
    const tempBackground = document.createElement("div");
    tempBackground.style.position = "absolute";
    tempBackground.style.top = "0";
    tempBackground.style.left = "0";
    tempBackground.style.width = "100%";
    tempBackground.style.height = "100%";
    tempBackground.style.backgroundImage = `url(${slides[nextIndex]})`;
    tempBackground.style.backgroundSize = "cover"; // Ensure the image covers the entire section
    tempBackground.style.backgroundPosition = "center"; // Center the image
    tempBackground.style.zIndex = "-2"; // Place it behind the overlay
    tempBackground.style.transition = "opacity 1s ease-in-out"; // Smooth fade effect
    tempBackground.style.opacity = "0"; // Start with the image invisible

    // Append the temporary background to the background container
    backgroundContainer.appendChild(tempBackground);

    // Animate the opacity to make the image visible
    setTimeout(() => {
      tempBackground.style.opacity = "1";
    }, 50);

    // Remove the temporary background after the animation completes
    setTimeout(() => {
      backgroundContainer.style.backgroundImage = `url(${slides[nextIndex]})`;
      backgroundContainer.style.backgroundSize = "cover"; // Ensure the final image covers the section
      backgroundContainer.style.backgroundPosition = "center"; // Center the final image
      tempBackground.remove(); // Clean up the temporary element
      currentIndex = nextIndex; // Update current index
    }, 1000); // Match this duration with the animation duration
  }

  // Set initial image
  if (backgroundContainer && slides.length > 0) {
    backgroundContainer.style.backgroundImage = `url(${slides[currentIndex]})`;
    backgroundContainer.style.backgroundSize = "cover"; // Ensure the initial image covers the section
    backgroundContainer.style.backgroundPosition = "center"; // Center the initial image
  }

  // Change image every 5 seconds
  setInterval(updateBackgroundImage, 5000);

  // Typewriter effect for restaurant name
  const restaurantName = document.getElementById("restaurant-name");
  const nameText = "Totot Ethiopian Traditional Restaurant";

  function typeWriter(text, element, speed = 100) {
    let i = 0;
    element.innerHTML = "";

    function typing() {
      if (i < text.length) {
        element.innerHTML =
          text.substring(0, i + 1) + '<span class="typewriter-cursor"></span>';
        i++;
        setTimeout(typing, speed);
      } else {
        element.innerHTML = text;
      }
    }

    typing();
  }

  // Initialize typewriter effect
  typeWriter(nameText, restaurantName);
});
