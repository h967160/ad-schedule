// Get DOM elements
const actionIcon = document.getElementById("action-icon");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const darkModeImg = document.getElementById("dark-mode-img");
const logoImg = document.getElementById("logo-img");
const checkBox = document.querySelector(".table-tbody");
const activeIcons = document.querySelectorAll(".active-icon");

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
  const theme = event.target.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  logoImg.src = imageUrls[theme].logo;
  darkModeImg.src = imageUrls[theme].darkMode;
};

// Change table row style
const selectTable = (event) => {
  const parent = event.target.closest(".table-row");
  parent.classList.toggle("checked");
};

// Toggle 'active' class for the clicked element
const toggleActiveClass = (clickedIcon) => {
  activeIcons.forEach((icon) => {
    icon.classList.remove("active");
  });

  clickedIcon.classList.toggle("active");
};

// Event listeners
actionIcon.addEventListener("click", toggleMenu);
darkModeToggle.addEventListener("change", darkModeToggleHandler);
darkModeImg.addEventListener("click", () => {
  darkModeToggle.click();
});
checkBox.addEventListener("change", selectTable);

// Add click event listener to each 'active-icon' element
activeIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    toggleActiveClass(icon);
  });
});
