const details = document.getElementById("details");
const infoText = document.getElementById("info-txt");

window.addEventListener("keyup", (event) => {
  infoText.style.display = "none";
  details.innerHTML = `<div class="key">
        <p>${event.key === " " ? "Space" : event.key}</p>
        <small>event.key</small>
    </div>
    <div class="key">
        <p>${event.keyCode}</p>
        <small>event.keyCode</small>
    </div>
    <div class="key">
        <p>${event.code}</p>
        <small>event.code</small>
    </div>`;
});
