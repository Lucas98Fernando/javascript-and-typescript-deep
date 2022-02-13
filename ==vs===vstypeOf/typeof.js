// Diferenças entre (==) e (===)

const nome = "Lucas";
const sobrenome = "Fernando";
const idade = 23;
let hobby;
let tarefas = {};
const projetos = [];

console.log(nome == "Lucas"); // true
console.log(idade == "23"); // true
console.log(projetos == tarefas); // false
console.log(projetos == "[]"); // false
console.log(projetos == []); // false
console.log(tarefas == "{}"); // false
console.log(tarefas == {}); // false

console.log("======================================");

// Utilizando o operador de igualdade restrita será verificado o conteúdo e o tipo primitivo

console.log(nome === "Lucas"); // true
console.log(idade === "23"); // false
console.log(projetos === tarefas); // false
console.log(projetos === "[]"); // false
console.log(projetos === []); // false
console.log(tarefas === "{}"); // false
console.log(tarefas === {}); // false

console.log("======================================");

// typeof
// É utilizada para sabermos o tipo primitivo de uma variável

console.log(typeof nome); // string
console.log(typeof idade); // number
console.log(typeof hobby); // undefined
console.log(typeof tarefas); // object
console.log(typeof projetos); // object
