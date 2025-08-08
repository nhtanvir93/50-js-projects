const toggles = document.querySelectorAll(".faq-toggle-icon");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    toggle.parentNode.classList.toggle("active");
  });
});
