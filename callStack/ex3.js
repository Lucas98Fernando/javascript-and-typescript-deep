let saudacao = "Olá, mundo!"

function primeiro() {
    console.log("Dentro da primeira função") // 1
    segundo()
    console.log("Dentro da primeira função novamente") // 3
}

function segundo() {
    console.log("Dentro da segunda função") // 2
}

primeiro()
console.log("Javascript é legal!") // 4