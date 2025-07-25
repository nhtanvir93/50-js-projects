const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const stepCircles = document.querySelectorAll(".progress-step .circle");

const totalSteps = stepCircles.length;

let currentStep = 1;

prev.addEventListener("click", () => {
  currentStep--;

  if (currentStep < totalSteps) next.removeAttribute("disabled");

  if (currentStep === 1) prev.setAttribute("disabled", "");

  updateProcessedSteps();
});

next.addEventListener("click", () => {
  currentStep++;

  if (currentStep > 1) prev.removeAttribute("disabled");

  if (currentStep === totalSteps) next.setAttribute("disabled", "");

  updateProcessedSteps();
});

function updateProcessedSteps() {
  stepCircles.forEach((stepCircle, index) => {
    if (index < currentStep) stepCircle.classList.add("active");
    else stepCircle.classList.remove("active");
  });

  progress.style.width = `${((currentStep - 1) / (totalSteps - 1)) * 100}%`;
}
