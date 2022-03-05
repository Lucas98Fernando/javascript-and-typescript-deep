// Verifica se o número passado por parâmetro é PAR ou ÍMPAR
function evenNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) resolve(`O número ${number} é PAR`);
    else reject(`O número ${number} é ÍMPAR`);
  });
}

// Passando para o .then() e .catch() o resultado da promise
evenNumber(5).then(console.log).catch(console.log);
