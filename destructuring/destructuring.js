const informations = {
  username: "Lucas",
  age: 23,
  job: "Web developer",
  country: "Brazil",
  hobbies: {
    code: "60%",
    videogames: "30%",
    football: "10%",
  },
};

// O convencional é utilizarmos a estrutura do código abaixo para pegar os dados do objeto da variável informations

console.log(informations.username);
console.log(informations.age);
console.log(informations.job);

// Contudo... com a desestruturação do JS podemos simplificar as coisas

// Extraindo os dados do objeto e criando variáveis dos mesmos
const { username, age, job } = informations;

console.log(username);
console.log(age);
console.log(job);

// Renomeando o nome de um atributo e atribuindo o que sobrou dos dados para uma única variável
const {
  username: newUsername,
  hobbies: { videogames },
  ...otherInfos
} = informations;

console.log(newUsername);
console.log(videogames);
console.log(otherInfos);

// Desestruturando arrays

const clubs = ["Liverpool", "Sport Recife", "Borussia Dortmund"];

// Definindo um valor padrão para a variável fourth
const [first, second, third, fourth = "Leicester"] = clubs;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

// Desestruturação do retorno de uma função

function fnArray() {
  return [2, 3, 8];
}

// Igonorando valores retornados, nesse caso, o valor na posição [1] do array será ignorado
const [number1, , number2] = fnArray();

console.log(number1, number2);

const arrNumbers = [1, 2, 3, 4];

// Um novo array será gerado na variável rest, contendo os dados que sobraram na variável arrNumbers
const [firstNumber, ...rest] = arrNumbers;

console.log(firstNumber);
console.log(rest);
