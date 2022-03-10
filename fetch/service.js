const app = document.querySelector("#app");
const btnFetch = document.querySelector("#btn-fetch");

let pokemons = [];

const fetchPokemons = async () => {
  await fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => response.json())
    .then((response) => (pokemons = response.results))
    .then(() => renderPokemons());
};

const getOnlyPokemonNames = () => pokemons.map((element) => element.name);

const renderPokemons = () => {
  const pokemonNames = getOnlyPokemonNames();
  for (let pokemon of pokemonNames) {
    createList(pokemon);
  }
};

const createList = (text) => {
  let liElement = document.createElement("li");
  let liText = document.createTextNode(text);
  liElement.appendChild(liText);
  app.appendChild(liElement);
};

btnFetch.addEventListener("click", () => fetchPokemons());
