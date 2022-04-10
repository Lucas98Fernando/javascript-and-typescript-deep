/*
    Array.prototype.concat()

    - O método concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro
 */

/*  
    Parâmetros
    
    - valorN : Arrays ou valores para concatenar (unir) ao array retornado.
*/

const pessoas = ["Lucas", "Fernando", "Silva"];
const idades = [23, 20, 25];

const concatenar = pessoas.concat(idades);

console.log(concatenar); 
// Resultado: [ 'Lucas', 'Fernando', 'Silva', 23, 20, 25 ]
