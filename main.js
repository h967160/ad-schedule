// Get DOM elements
const darkModeToggle = document.getElementById("dark-mode-toggle");
const darkModeImg = document.getElementById("dark-mode-img");
const logoImg = document.getElementById("logo-img");
const tableTbody = document.querySelector(".table-tbody");
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

// Table data
const data = Array.from({ length: 20 }, (__, i) => ({
  id: i + 1,
  name: "Christmas 2020",
  advertiser: "Food Market",
  group: "Krab",
  description: "holiday night during christmas 2020",
  price: "$2000",
  startTime: "2020/12/24 19:30",
  endTime: "2021/01/02 23:00",
}));

// Render table
const renderTable = () => {
  let htmlContent = "";
  data.forEach((data) => {
    htmlContent += `<tr class="table-row">
      <td class="table-cell table-cell-checkbox">
        <input type="checkbox">
      </td>
      <td class="table-cell table-cell-id">${data.id}</td>
      <td class="table-cell table-cell-name">${data.name}</td>
      <td class="table-cell table-cell-advertiser">
        <span class="advertiser-name">${data.advertiser}</span>
        <span class="advertiser-group">${data.group}</span>
      </td>
      <td class="table-cell table-cell-description">${data.description}</td>
      <td class="table-cell table-cell-price">${data.price}</td>
      <td class="table-cell table-cell-start-time">${data.startTime}</td>
      <td class="table-cell table-cell-end-time">${data.endTime}</td>
      <td class="table-cell table-cell-action">
        <img class="menu-icon action-icon-img"
          src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/menu.svg"
          alt="menu-icon">
        <!-- action's popup Start -->
        <div class="action-menu hidden" id="action-menu">
          <div class="action-menu-wrapper">
            <div class="duplicate actions-icon">
              <img class="actions-icon duplicate-icon"
                src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/duplicate.svg"
                alt="duplicate-icon">
              <span>Duplicate</span>
            </div>
            <div class="edit actions-icon">
              <img class="edit-icon"
                src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/edit.svg"
                alt="duplicate-icon">
              <span>Edit</span>
            </div>
            <div class="delete actions-icon">
              <img class="delete-icon"
                src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/delete.svg"
                alt="duplicate-icon">
              <span>Delete</span>
            </div>
          </div>
        </div>
        <!-- action's popup End -->
      </td>
    </tr>`;
  });
  tableTbody.innerHTML = htmlContent;
  return htmlContent;
};

// 將 renderTable 的結果插入到 DOM 中
tableTbody.innerHTML = renderTable();

// Action's popup effect
const toggleMenu = (icon) => {
  const actionMenu = icon.nextElementSibling;
  // 利用 hidden 來切換開關
  actionMenu.classList.toggle("hidden");
  // 自動關閉 action-menu
  setTimeout(function () {
    actionMenu.classList.add("hidden");
  }, 3000);
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
darkModeToggle.addEventListener("change", darkModeToggleHandler);
darkModeImg.addEventListener("click", () => {
  darkModeToggle.click();
});
tableTbody.addEventListener("change", selectTable);

// Add click event listener to each 'active-icon' element
activeIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    toggleActiveClass(icon);
  });
});

// Get all action-icons
const actionIcons = document.querySelectorAll(".action-icon-img");
actionIcons.forEach(function (icon) {
  icon.addEventListener("click", function (event) {
    toggleMenu(icon);
  });
});
