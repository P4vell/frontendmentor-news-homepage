const openMenuBtn = document.querySelector(".navbar__hamburger");
const closeMenuBtn = document.querySelector(".sidebar__btn");
const sidebar = document.querySelector(".sidebar");
const backdrop = document.querySelector(".backdrop");

const toggleSidebar = () => {
  sidebar.classList.toggle("active");
  backdrop.classList.toggle("active");
};

openMenuBtn.addEventListener("click", toggleSidebar);
closeMenuBtn.addEventListener("click", toggleSidebar);
