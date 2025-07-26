const close = document.getElementById("close");
const open = document.getElementById("open");
const rotatingCircleContainer = document.getElementById(
  "rotating-circle-container"
);
const content = document.querySelector(".content");
const nav = document.querySelector(".nav-link-container");

open.addEventListener("click", () => {
  rotatingCircleContainer.classList.add("show-nav");
  content.classList.add("show-nav");
  nav.classList.add("show-nav");
});

close.addEventListener("click", () => {
  rotatingCircleContainer.classList.remove("show-nav");
  content.classList.remove("show-nav");
  nav.classList.remove("show-nav");
});
