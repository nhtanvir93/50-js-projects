const rippleBtns = document.querySelectorAll(".ripple");

rippleBtns.forEach((rippleBtn) => {
  rippleBtn.addEventListener("click", function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rippleCircle = document.createElement("span");
    rippleCircle.classList.add("ripple-circle");
    rippleCircle.style.left = x + "px";
    rippleCircle.style.top = y + "px";

    this.appendChild(rippleCircle);

    setTimeout(() => rippleCircle.remove(), 500);
  });
});
