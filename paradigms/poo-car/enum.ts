
// Um enum é uma coleção especial de valores constantes que permite utilizar nomes para representar um valor
enum color {
    red = 0,
    green = 1
}

const setColor: number = 1

if (setColor === color.red) console.log("A cor é vermelha!")
if (setColor === color.green) console.log("A cor é verde!")