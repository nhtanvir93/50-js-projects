const smallCups = document.querySelectorAll(".cup-small");
const remained = document.getElementById("remained");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");

smallCups.forEach((smallCup, idx) => {
  smallCup.addEventListener("click", () => {
    updateFillProperty(idx);
  });
});

function updateFillProperty(idx) {
  if (
    smallCups[idx].classList.contains("fill") &&
    !smallCups[idx].nextElementSibling?.classList.contains("fill")
  )
    idx--;

  smallCups.forEach((smallCup, currentIdx) => {
    if (currentIdx <= idx) smallCup.classList.add("fill");
    else smallCup.classList.remove("fill");
  });

  updateDrinkStatus();
}

function updateDrinkStatus() {
  const filledCups = document.querySelectorAll(".cup-small.fill").length;
  const remainedWater = 2 - (250 * filledCups) / 1000;

  liters.textContent = `${remainedWater}L`;
  percentage.textContent = `${((2 - remainedWater) / 2) * 100}%`;

  const remainedHeight = 320 * (remainedWater / 2);
  const drunkWaterHeight = 320 - remainedHeight;

  if (remainedWater === 2) percentage.classList.add("hidden");
  else percentage.classList.remove("hidden");

  percentage.style.height = `${drunkWaterHeight}px`;
  remained.style.height = `${remainedHeight}px`;
}
