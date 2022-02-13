// Array.prototype.filter()
// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

const pessoas = [
  { nome: "Lucas", idade: 23, pais: "Brasil" },
  { nome: "Edward", idade: 25, pais: "Inglaterra" },
  { nome: "Carlos", idade: 18, pais: "Alemanha" },
  { nome: "Melissa", idade: 21, pais: "Espanha" },
  { nome: "João", idade: 20, pais: "Brasil" },
  { nome: "John", idade: 15, pais: "EUA" },
  { nome: "Lorena", idade: 16, pais: "Alemanha" },
];

const filtrarPorPais = (el) => el.pais === "Brasil";

console.log(pessoas.filter(filtrarPorPais));
/* 
    Resultado:
    [
        { nome: 'Lucas', idade: 23, pais: 'Brasil' },
        { nome: 'João', idade: 20, pais: 'Brasil' }
    ]
*/

const filtrarPorDeMaior = (el) => el.idade > 18;

console.log(pessoas.filter(filtrarPorDeMaior));
/* 
    Resultado:
    [
        { nome: 'Lucas', idade: 23, pais: 'Brasil' },
        { nome: 'Edward', idade: 25, pais: 'Inglaterra' },
        { nome: 'Melissa', idade: 21, pais: 'Espanha' },
        { nome: 'João', idade: 20, pais: 'Brasil' }
    ]
*/

// Navegando mais profundo...
function filterParametros(element, index, array) {
  console.log("-------------------------------------------------");
  console.log(element);
  console.log(index);
  console.log(array);
}

console.log(pessoas.filter(filterParametros));
