const boxes = document.querySelectorAll(".box");

const checkPosition = () => {
  const viewportHeight = window.innerHeight;

  boxes.forEach((box) => {
    const boxRect = box.getBoundingClientRect();

    if (boxRect.top <= (viewportHeight / 5) * 4) box.classList.add("show");
    else box.classList.remove("show");
  });
};

checkPosition();

window.addEventListener("scroll", checkPosition);
