const dadJokeAPI = "https://icanhazdadjoke.com/";

const loading = document.getElementById("loading");
const joke = document.getElementById("joke");
const newJokeBtn = document.getElementById("new-joke-btn");

newJokeBtn.addEventListener("click", () => {
  fetchNewJoke();
});

fetchNewJoke();

async function fetchNewJoke() {
  joke.innerHTML = "";
  loading.style.display = "block";

  const result = await fetch(dadJokeAPI, {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await result.json();

  loading.style.display = "none";
  joke.innerHTML = data.joke;
}
