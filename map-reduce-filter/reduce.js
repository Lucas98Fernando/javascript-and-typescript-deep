// Array.prototype.reduce()
// O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

const pessoas = [
  { nome: "Lucas", idade: 23, pais: "Brasil" },
  { nome: "Edward", idade: 25, pais: "Inglaterra" },
  { nome: "Carlos", idade: 19, pais: "Alemanha" },
  { nome: "Melissa", idade: 21, pais: "Espanha" },
  { nome: "João", idade: 20, pais: "Brasil" },
  { nome: "John", idade: 27, pais: "EUA" },
  { nome: "Lorena", idade: 16, pais: "Alemanha" },
];

const listarIdades = pessoas.map((el) => el.idade);

const mediaDeIdade = (acumulador, valorAtual, index, array) => {
  if (array.length - 1 === index)
    return (acumulador + valorAtual) / array.length;
  else return acumulador + valorAtual;
};

const valorInicial = 0;
console.log(listarIdades.reduce(mediaDeIdade, valorInicial).toFixed(2));
/* 
    Resultado:
    21.57
*/

// Se o valorInicial não tiver sido passado como argumento, então reduce() executará o callback da função começando a partir do índice 1 (index 1), pulando o primeiro índice (index 0). Se o valorInicial for passado como argumento, a função irá começar no index 0.

const produtos = [
  {
    id: 1,
    name: "Caneta",
    qtd: 3,
    amount: 2.5,
  },
  {
    id: 2,
    name: "Lápis",
    qtd: 2,
    amount: 1.5,
  },
  {
    id: 3,
    name: "Caderno",
    qtd: 3,
    amount: 25,
  },
  {
    id: 4,
    name: "Mochila",
    qtd: 1,
    amount: 35,
  },
];

// Quantidade total do carrinho
const totalCarrinho = produtos.reduce(
  (total, objetoAtual) => total + (objetoAtual.qtd * objetoAtual.amount),
  0
);

console.log(totalCarrinho); // 120.5
