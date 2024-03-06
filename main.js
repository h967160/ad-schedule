const actionIcon = document.getElementById("action-icon");

const toggleMenu = () => {
  const actionMenu = document.getElementById("action-menu");
  actionMenu.classList.toggle("hidden");
};

actionIcon.addEventListener("click", toggleMenu);
