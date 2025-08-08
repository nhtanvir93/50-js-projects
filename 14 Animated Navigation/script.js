const navMenu = document.getElementById("nav-menu-container");
const toggleBtn = document.getElementById("toggle-nav-btn");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
