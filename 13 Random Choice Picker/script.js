const choiceInput = document.getElementById("choices");
const tags = document.getElementById("tags");

choiceInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    removePreviousHighlightedChoice();
    return highlightRandomChoice();
  }

  const choices = choiceInput.value;
  const currentChoices = choices
    .trim()
    .split(",")
    .filter((choice) => choice.trim().length !== 0)
    .map((choice) => choice.trim());

  tags.innerHTML = "";

  createChoices(currentChoices);
});

function createChoices(choices) {
  choices.forEach((choice) => {
    const choiceElement = document.createElement("span");
    choiceElement.classList.add("choice");
    choiceElement.textContent = choice;
    tags.appendChild(choiceElement);
  });
}

function removePreviousHighlightedChoice() {
  const highlightedChoice = document.querySelector(".choice.highlight");

  if (highlightedChoice)
    document.querySelector(".choice.highlight").classList.remove("highlight");
}

function getCurrentRandomIndex(length) {
  return Math.floor(Math.random() * length);
}

function highlightRandomChoice() {
  const choices = document.querySelectorAll(".choice");
  const choiceLength = choices.length;
  const times = 20;

  let processed = 0;

  const intervalId = setInterval(() => {
    const idx = getCurrentRandomIndex(choiceLength);
    const currentChoice = choices[idx];
    currentChoice.classList.add("highlight");

    setTimeout(() => {
      if (++processed === times) clearInterval(intervalId);
      else currentChoice.classList.remove("highlight");
    }, 149);
  }, 150);
}
