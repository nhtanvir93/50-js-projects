const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  if (input.value.trim() !== "") input.classList.add("filled");

  input.addEventListener("input", () => {
    if (input.value.trim() !== "") input.classList.add("filled");
    else input.classList.remove("filled");
  });
});

const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.textContent
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`
    )
    .join("");
});
