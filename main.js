// Get DOM elements
const actionIcon = document.getElementById("action-icon");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const darkModeImg = document.getElementById("dark-mode-img");
const logoImg = document.getElementById("logo-img");
const checkBox = document.querySelector(".table-tbody");
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

// Action's popup effect
const toggleMenu = () => {
  const actionMenu = document.getElementById("action-menu");
  actionMenu.classList.toggle("hidden");
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

// change table row style
const selectTable = (event) => {
  const parent = event.target.closest(".table-row");
  parent.classList.toggle("checked");
};

// Event listeners
actionIcon.addEventListener("click", toggleMenu);
darkModeToggle.addEventListener("change", darkModeToggleHandler);
darkModeImg.addEventListener("click", () => {
  darkModeToggle.click();
});
checkBox.addEventListener("change", selectTable);
