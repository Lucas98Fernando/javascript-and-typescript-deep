// Array.prototype.map()
// O map() é um método que invoca uma função callback passada como argumento para cada elemento do Array e devolve um novo Array como resultado

const pessoas = [
  { nome: "Lucas", idade: 23, pais: "Brasil" },
  { nome: "Edward", idade: 25, pais: "Inglaterra" },
  { nome: "Carlos", idade: 19, pais: "Alemanha" },
  { nome: "Melissa", idade: 21, pais: "Espanha" },
  { nome: "João", idade: 20, pais: "Brasil" },
  { nome: "John", idade: 27, pais: "EUA" },
  { nome: "Lorena", idade: 16, pais: "Alemanha" },
];

const listarNomes = (el) => el.nome;

console.log(pessoas.map(listarNomes));
/*  
    Resultado: 
    ['Lucas','Edward','Carlos','Melissa','João','John','Lorena']
    - Um novo Array foi gerado com apenas os nomes das pessoas
*/

const listarPaises = (el) => el.pais;

console.log(pessoas.map(listarPaises));
/* 
    Resultado: 
    ['Brasil','Inglaterra','Alemanha','Espanha','Brasil','EUA','Alemanha']

    Ops... Parece que temos um problema aqui, algums países tiveram seus nomes repetidos, como podemos corrigir isso?
*/

// Set
// Com o objeto Set, podemos armazenar valores únicos de qualquer tipo, desde valores primitivos a referências a objetos.

const somentePaises = pessoas.map(listarPaises);

const removeRepetidos = new Set(somentePaises);

console.log(removeRepetidos);
/* 
    Resultado:
    Set(5) { 'Brasil', 'Inglaterra', 'Alemanha', 'Espanha', 'EUA' }
*/

// Vamos melhorar essa implementação criando uma função que recebe um determinado valor ou lista de valores e retorna um new Set()
function fnArraySet(items) {
  return new Set(items);
}

console.log(fnArraySet(somentePaises));
/* 
    Teremos o mesmo resultado:
    Set(5) { 'Brasil', 'Inglaterra', 'Alemanha', 'Espanha', 'EUA' }
*/

// Navegando mais profundo...
function mapParametros(element, index, array) {
  console.log("-------------------------------------------------");
  console.log(element);
  console.log(index);
  console.log(array);
}

console.log(pessoas.filter(mapParametros));
