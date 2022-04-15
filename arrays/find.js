/*
    Array.prototype.find()

    - O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.
*/

/* 
    Parâmetros

    callback: Função que testa cada elemento, recebe três parametros: 
    
    - element (obrigatório): O elemento atual sendo processado na array.
    - index (opcional): O índice do elemento atual sendo processado na array.
    - array (opcional): O array sobre o qual find foi chamado.
    
    thisArg (opcional): Objeto usado como this quando executando o callback.
*/

const pokemons = [
  {
    id: 1,
    nome: "Charizard",
    tipo: "Fogo",
  },
  {
    id: 2,
    nome: "Pikachu",
    tipo: "Elétrico",
  },
  {
    id: 3,
    nome: "Blastoise",
    tipo: "Aquático",
  },
  {
    id: 4,
    nome: "Incineroar",
    tipo: "Fogo",
  },
];

function primeiroDeFogo(pokemons) {
  return pokemons.tipo === "Fogo";
}

console.log(pokemons.find(primeiroDeFogo));
// Resultado: { id: 1, nome: 'Charizard', tipo: 'Fogo' }

// Utilizando arrow functions
console.log(pokemons.find((pokemon) => pokemon.tipo === "Aquático"));
// Resultado: { id: 3, nome: 'Blastoise', tipo: 'Aquático' }