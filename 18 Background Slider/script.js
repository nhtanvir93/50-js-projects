const leftArrowBtn = document.getElementById("btn-arrow-left");
const rightArrowBtn = document.getElementById("btn-arrow-right");
const slides = document.querySelectorAll(".slide");
const body = document.body;

let active = 4;

leftArrowBtn.addEventListener("click", () => {
  active--;
  const totalSlides = slides.length;

  if (active < 0) active = totalSlides - 1;

  setCurrentBgSlide();
});

rightArrowBtn.addEventListener("click", () => {
  active++;
  const totalSlides = slides.length;

  if (active >= totalSlides) active = 0;

  setCurrentBgSlide();
});

function setCurrentBgSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[active].classList.add("active");
  body.style.backgroundImage = slides[active].style.backgroundImage;
}

setCurrentBgSlide();
