// 71a9b1f0c0a18eb693f6bd8ef23fa457

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=71a9b1f0c0a18eb693f6bd8ef23fa457";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";
const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=71a9b1f0c0a18eb693f6bd8ef23fa457&query=";

const movieContainer = document.getElementById("movies");
const searchForm = document.getElementById("search-form");
const search = document.getElementById("search");

fetchMovies();

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchKey = search.value;
  searchMovies(searchKey);
});

function getRatingClass(rating) {
  if (rating >= 8) return "green";
  if (rating >= 5) return "orange";
  return "red";
}

function generateMovieElements(movies) {
  if (movies.results.length === 0) window.location.reload();

  movieContainer.innerHTML = "";

  for (const movie of movies.results) {
    const { title, vote_average, overview, poster_path } = movie;
    const newMovie = document.createElement("div");
    newMovie.classList.add("movie");
    newMovie.innerHTML = `<img
          src="${IMAGE_URL + poster_path}"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getRatingClass(vote_average)}">${vote_average.toFixed(
      2
    )}</span>
        </div>
        <div class="overview">
          <p>${overview}</p>
        </div>`;

    movieContainer.appendChild(newMovie);
  }
}

async function searchMovies(searchKey) {
  try {
    const response = await fetch(SEARCH_URL + searchKey, {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok)
      throw new Error("Something went wrong while searching movies");

    const movies = await response.json();
    generateMovieElements(movies);
  } catch (error) {
    console.error("Error occured while fetching movies", error);
    window.location.reload();
  }
}

async function fetchMovies() {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok)
      throw new Error("Something went wrong while fetching movies");

    const movies = await response.json();
    generateMovieElements(movies);
  } catch (error) {
    console.error("Error occured while fetching movies", error);
  }
}
