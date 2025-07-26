const loadingText = document.querySelector(".loading-percentage");
const background = document.querySelector(".blurry-img-container");

let currentLoading = 0;

const loadingIntervalRef = setInterval(() => {
  currentLoading++;

  if (currentLoading === 100) clearInterval(loadingIntervalRef);

  loadingText.textContent = `${currentLoading}%`;

  background.style.filter = `blur(${scale(
    currentLoading,
    1,
    100,
    30,
    0
  ).toFixed(2)}px)`;

  loadingText.style.opacity = `${scale(currentLoading, 1, 100, 1, 0).toFixed(
    2
  )}`;
}, 30);

function scale(current, inputMin, inputMax, outputMin, outputMax) {
  return (
    ((current - inputMin) * (outputMax - outputMin)) / (inputMax - inputMin) +
    outputMin
  );
}
