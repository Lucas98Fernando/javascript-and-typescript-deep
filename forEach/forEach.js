// Array.prototype.forEach()
// O método forEach() executa uma dada função em cada elemento de um array.

const pessoas = [
  { nome: "Lucas", idade: 23, pais: "Brasil" },
  { nome: "Edward", idade: 25, pais: "Inglaterra" },
  { nome: "Carlos", idade: 19, pais: "Alemanha" },
  { nome: "Melissa", idade: 21, pais: "Espanha" },
  { nome: "João", idade: 20, pais: "Brasil" },
  { nome: "John", idade: 27, pais: "EUA" },
  { nome: "Lorena", idade: 16, pais: "Alemanha" },
];

const logElementosArray = (element, index, array) => {
  console.log(`elemento: ${element.nome}`);
  console.log(`index: ${index}`);
  console.log(`array: ${array[index].pais}`);
};

console.log(pessoas.forEach(logElementosArray));

// Gerando um novo Array de objetos com os dados do Array de pessoas, mas agora com chaves diferentes
let novoObjeto = [];
pessoas.forEach((el) =>
  novoObjeto.push({
    novoNome: el.nome,
    novaIdade: el.idade,
    novoPais: el.pais,
  })
);

console.log(novoObjeto);

Object.entries(pessoas).forEach(([key, value]) => {
  console.log(`key: ${key} | value: ${value.nome}`);
});
