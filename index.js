const fetchMovies = async () => {
  try {
    const response = await fetch("https://freetestapi.com/api/v1/movies");
    const data = await response.json();
    displayMovies(data);
  } catch (error) {
    console.error("Error al traer las peliculas", error);
  }
};

const displayMovies = (movies) => {
  const moviesContainer = document.getElementById("movies-container");

  movies.forEach((movie) => {
    const card = createCard(movie);
    moviesContainer.appendChild(card);
  });
};

const createCard = (movie) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = movie.poster || "default-image.jpg";
  image.alt = `${movie.title} Poster`

  const title = document.createElement("h2")
  title.textContent = movie.title;

  const description = document.createElement("p");
  description.textContent = movie.plot;

  const year = document.createElement("p");
  year.textContent = `Year: ${movie.year}`;

  const rating = document.createElement("p");
  rating.textContent = `Rating: ${movie.rating}`;

  const actors = document.createElement("p");
  //                              join "junta" elementos dentro de un array, separados por un elemento de nuestra eleccion
  actors.textContent = `Actors: ${movie.actors.join(" - ")}`;

  const directors = document.createElement("p");
  directors.textContent = `Director: ${movie.director}`;

  const website = document.createElement("a");
  website.href = movie.website;
  website.textContent = "To website";
  // Que se cree en una nueva pestaña
  website.target = "_blank";


  card.appendChild(image)
  card.appendChild(title)
  card.appendChild(description)
  card.appendChild(year)
  card.appendChild(rating)
  card.appendChild(actors)
  card.appendChild(directors)
  card.appendChild(website)


  return card
};

document.addEventListener("DOMContentLoaded", fetchMovies);
