/*  
    Array.prototype.every()

    - O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida.
*/

/*
    Parâmetros

    callback: Função que testa cada elemento, recebe três parametros: 
    
    - element (obrigatório): O elemento atual sendo processado na array.
    - index (opcional): O índice do elemento atual sendo processado na array.
    - array (opcional): O array de origem.
    
    thisArg (opcional): Valor a ser usado como this quando o callback é executado.
*/

const alunos = [
  { nome: "Lucas", media: 7.5 },
  { nome: "João", media: 6.5 },
  { nome: "Ana", media: 7 },
];

function todosPassaram(elemento, index, array) {
  return elemento.media >= 7;
}

// Observação importante! O retorno do every é true ou false, se todos elementos passarem no teste lógico, o retorno será true, se pelo menos um falhar no teste lógico, o retorno será false

console.log(alunos.every(todosPassaram)); // false

const times = [
  { nome: "Sport", pontos: 75 },
  { nome: "Santa", pontos: 45 },
  { nome: "Naútico", pontos: 48 },
];

// Utilizando arrow functions
const livraramDoRebaixamento = (time) => time.pontos >= 45;

console.log(times.every(livraramDoRebaixamento)); // true
