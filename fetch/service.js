const app = document.querySelector("#app");
const btnFetch = document.querySelector("#btn-fetch");
const container = document.querySelector(".container");

let pokemons = [];

container.style.display = "flex";
container.style.flexWrap = "wrap";

const fetchPokemons = async () => {
  await fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then((response) => response.json())
    .then((response) => (pokemons = response.results))
    .then(() => renderPokemons());
};

const renderPokemons = () => {
  for (let pokemon of pokemons) {
    createCard(pokemon.name);
  }
};

const createCard = (title) => {
  let cardElement = document.createElement("div");
  let cardTitleElement = document.createElement("h3");
  let cardTitleText = document.createTextNode(title);

  cardElement.style.width = "150px";
  cardElement.style.height = "150px";
  cardElement.style.backgroundColor = "#333";
  cardElement.style.display = "flex";
  cardElement.style.alignItems = "center";
  cardElement.style.justifyContent = "center";
  cardElement.style.margin = "0.5rem 0 0.5rem 0.5rem";
  cardTitleElement.style.color = "#f5f5f5";

  cardElement.setAttribute("class", "card");
  cardTitleElement.appendChild(cardTitleText);
  cardElement.appendChild(cardTitleElement);
  container.appendChild(cardElement);
};

btnFetch.addEventListener("click", () => fetchPokemons());
