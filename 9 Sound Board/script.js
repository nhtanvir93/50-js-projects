const mp3Player = document.getElementById("mp3-player");

const soundButtons = document.querySelectorAll(".sound-btn");

soundButtons.forEach((soundButton) => {
  soundButton.addEventListener("click", (button) => {
    const sound = button.target.textContent.toLowerCase();

    mp3Player.pause();
    mp3Player.setAttribute("src", `sounds/${sound}.wav`);
    mp3Player.play();
  });
});
