// Call Stack (Pilha de chamadas)

/**
 * Durante a execução do código, todas as funções serão ignoradas
 * O método saudacao() será adicionado a pilha de chamadas
 * Todo o código de saudacao() será executado
 * Quando chegar no método ola(), ele será adicionado a pilha de chamada e todo o código da função ola() será excutado
 * Logo em seguida, a execução será retornada para o método saudacao(), o resto do código será executado e o procedimento será encerrado
 */

function saudacao() {
    console.log("1")
    console.log("2")
    console.log("3")
    ola()
    console.log("4")
    console.log("5")
    console.log("6")
}

function ola() {
    return console.log("Olá, pessoal!")
}

saudacao()

/**
 * Resultado final:
 * 1
 * 2
 * 3
 * Olá, pessoal!
 * 4
 * 5
 * 6
 */