// action's popup effect
const actionIcon = document.getElementById("action-icon");

const toggleMenu = () => {
  const actionMenu = document.getElementById("action-menu");
  actionMenu.classList.toggle("hidden");
};

actionIcon.addEventListener("click", toggleMenu);

// dark mode
const darkModeToggle = document.getElementById("dark-mode-toggle");
const darkModeImg = document.getElementById("dark-mode-img");
const logoImg = document.getElementById("logo-img");

// Changing image URL according to mode
const imageUrls = {
  dark: {
    logo: "https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/logo-dark.svg",
    darkMode:
      "https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/darkmode-off.svg",
  },
  light: {
    logo: "https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/logo.svg",
    darkMode:
      "https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/darkmode-off.svg",
  },
};

// Toggle between dark and light mode and update img
const darkModeToggleHandler = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    logoImg.src = imageUrls.dark.logo;
    darkModeImg.src = imageUrls.dark.darkMode;
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    logoImg.src = imageUrls.light.logo;
    darkModeImg.src = imageUrls.light.darkMode;
  }
};
darkModeToggle.addEventListener("change", darkModeToggleHandler);

darkModeImg.addEventListener("click", () => {
  darkModeToggle.click();
});
