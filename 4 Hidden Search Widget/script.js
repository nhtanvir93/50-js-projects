const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  searchInput.classList.toggle("active");
  searchInput.focus();
});
