/* 
    Array.prototype.findIndex()

    - O método findIndex() retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.
*/

/*
    Parâmetros

    callback: Função que testa cada elemento, recebe três parametros: 
    
    - element: O elemento atual sendo processado na array.
    - index: O índice do elemento atual sendo processado na array.
    - array: O array sobre o qual findIndex foi chamado.
    
    thisArg: Valor a ser usado como this quando o callback é executado.
*/

function numeroPrimo(elemento, index, array) {
  let inicio = 2;
  while (inicio <= Math.sqrt(elemento)) {
    if (elemento % inicio++ < 1) return false;

  }
  return elemento > 1;
}

console.log([10, 20, 14, 7, 9].findIndex(numeroPrimo))
// Resultado: 3
