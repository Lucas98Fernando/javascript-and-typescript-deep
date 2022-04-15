/*
    Array.prototype.fill()

    - O método fill() preenche todos os valores do array a partir do índice inicial a um índice final com um valor estático.
*/

/* 
    Parâmetros

    - valor: Valor para preencher o array.
    - início (opcional): Índice inicial.
    - fim (opcional): Índice final.
*/

const numeros = [1, 2, 3];

console.log(numeros.fill(4));
// Resultado: [4, 4, 4]

const notas = [9, 7, 10, 6, 8];

// console.log(notas.fill(10, 1))
// Resultado: [ 9, 10, 10, 10, 10 ]

console.log(notas.fill(10, 2, 4));
// Resultado: [ 9, 7, 10, 10, 8 ]
