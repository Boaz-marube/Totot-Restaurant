document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle (works for both desktop and mobile)
  const themeToggle = document.getElementById("theme-toggle");
  const mobileThemeToggle = document.getElementById("mobile-theme-toggle");

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      htmlElement.classList.contains("dark") ? "dark" : "light"
    );

    // Update both toggle buttons
    if (themeToggle) {
      themeToggle.innerHTML = htmlElement.classList.contains("dark")
        ? "☀️"
        : "🌙";
    }
    if (mobileThemeToggle) {
      mobileThemeToggle.innerHTML = htmlElement.classList.contains("dark")
        ? '<span class="hidden dark:inline">☀️ Light Mode</span>'
        : '<span class="dark:hidden">🌙 Dark Mode</span>';
    }
  };

  // Initialize theme
  if (
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  }

  // Add event listeners
  if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
  if (mobileThemeToggle)
    mobileThemeToggle.addEventListener("click", toggleTheme);

  // Mobile Menu Toggle
  const hamburgerButton = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMobileMenu = () => {
    hamburgerButton.classList.toggle("open");
    mobileMenu.classList.toggle("hidden");
  };

  if (hamburgerButton && mobileMenu) {
    hamburgerButton.addEventListener("click", toggleMobileMenu);

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !hamburgerButton.contains(e.target) &&
        !mobileMenu.contains(e.target)
      ) {
        if (!mobileMenu.classList.contains("hidden")) {
          toggleMobileMenu();
        }
      }
    });

    // Close when clicking links
    document.querySelectorAll("#mobile-menu a").forEach((link) => {
      link.addEventListener("click", toggleMobileMenu);
    });
  }

  // Mobile Dropdown Menu
  const mobileDropdownButton = document.querySelector(
    ".mobile-dropdown-button"
  );
  const mobileDropdownContent = document.querySelector(
    ".mobile-dropdown-content"
  );
  const mobileDropdownIcon = document.querySelector(".mobile-dropdown-icon");

  if (mobileDropdownButton && mobileDropdownContent) {
    mobileDropdownButton.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileDropdownContent.classList.toggle("hidden");
      mobileDropdownIcon.textContent = mobileDropdownContent.classList.contains(
        "hidden"
      )
        ? "+"
        : "−";
    });

    // Close when clicking outside
    document.addEventListener("click", () => {
      if (!mobileDropdownContent.classList.contains("hidden")) {
        mobileDropdownContent.classList.add("hidden");
        mobileDropdownIcon.textContent = "+";
      }
    });
  }

  // Desktop Dropdown Menu
  const menuButton = document.getElementById("menu-button");
  const menuDropdown = document.getElementById("menu-dropdown");
  const menuChevron = document.getElementById("menu-chevron");

  if (menuButton && menuDropdown) {
    menuButton.addEventListener("click", (e) => {
      e.stopPropagation();
      menuDropdown.classList.toggle("hidden");
      menuChevron.classList.toggle("rotate-180");
      menuButton.setAttribute(
        "aria-expanded",
        !menuDropdown.classList.contains("hidden")
      );
    });

    // Close when clicking outside
    document.addEventListener("click", () => {
      if (!menuDropdown.classList.contains("hidden")) {
        menuDropdown.classList.add("hidden");
        menuChevron.classList.remove("rotate-180");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }
});
