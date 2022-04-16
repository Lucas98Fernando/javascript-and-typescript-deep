const usersURL = "https://randomuser.me/api/?results=20";
const pokemonsURL = "https://pokeapi.co/api/v2/pokemon";

async function getUsers() {
  return await fetch(usersURL).then((data) => data.json());
}

async function getPokemonInfo(pokemonName) {
  return await fetch(`${pokemonsURL}/${pokemonName}`).then((data) =>
    data.json()
  );
}

(async () => {
  const [usersData, pokemonsData] = await Promise.all([
    getUsers(),
    getPokemonInfo("pikachu"),
  ]);
  console.log(usersData, pokemonsData);
  return [usersData, pokemonsData];
})();
