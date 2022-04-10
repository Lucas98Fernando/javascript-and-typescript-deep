/*
    Array.prototype.entries()

    - O método entries() retorna um novo objeto Array Iterator que contém os pares chave/valor para cada índice no array.
*/

const nomes = ["Lucas", "Fernando", "Silva"];
const eNomes = nomes.entries();

for (let i in nomes) {
  console.log(eNomes.next().value);
  /* 
      Resultado: 
      [ 0, 'Lucas' ]
      [ 1, 'Fernando' ]
      [ 2, 'Silva' ]
  */
}

const pessoas = [
  { nome: "Lucas", idade: 23 },
  { nome: "Fernando", idade: 25 },
];
const ePessoas = pessoas.entries();

for (let i in pessoas) {
  console.log(ePessoas.next().value);
   /* 
      Resultado: 
      [ 0, { nome: 'Lucas', idade: 23 } ]
      [ 1, { nome: 'Fernando', idade: 25 } ]
  */
}
