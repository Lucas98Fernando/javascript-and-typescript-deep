/*
    Array.prototype.copyWithin()

    - O método copyWithin() copia parte de um array para outra localização dentro deste mesmo array e o retorna, sem alterar seu tamanho.
*/

/*
    Parâmetros

    - target: Posição para a qual os elementos serão copiados. Caso negativo, o target será contado a partir do final.
    - start: Índice inicial de onde se copiará os elementos. Caso negativo, o start será contado a partir do final.
    - end (opcional): Índice final de onde se copiará os elementos. Caso negativo, o end será contado a partir do final.
*/

const frutas = ["Banana", "Morango", "Laranja", "Manga", "Abacaxi"];

// Com indíce positivo
// console.log(frutas.copyWithin(0, 2));
// Resultado: [ 'Laranja', 'Manga', 'Abacaxi', 'Manga', 'Abacaxi' ]

// Com indíce negativo
// console.log(frutas.copyWithin(-1, 2));
// Resultado: [ 'Banana', 'Morango', 'Laranja', 'Manga', 'Laranja' ]

// Com end
// Quando o parâmetro end é passado, o seu valor precisa ser maior que o valor de start para que as mudanças seja feitas
console.log(frutas.copyWithin(0, 2, 4));
// Resultado: [ 'Laranja', 'Manga', 'Laranja', 'Manga', 'Abacaxi' ]
