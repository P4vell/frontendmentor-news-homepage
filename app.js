const openMenuBtn = document.querySelector(".navbar__hamburger");
const closeMenuBtn = document.querySelector(".sidebar__btn");
const sidebar = document.querySelector(".sidebar");

let isMenuActive = false;

const toggleSidebar = () => {
  isMenuActive = !isMenuActive;
  isMenuActive
    ? sidebar.classList.add("active")
    : sidebar.classList.remove("active");
};

openMenuBtn.addEventListener("click", toggleSidebar);
closeMenuBtn.addEventListener("click", toggleSidebar);