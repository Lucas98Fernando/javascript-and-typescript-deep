const users = ["Lucas", "João", "Maria"];

function findUser(users, userToFind) {
  // Criando uma cópia do array que será passado como parâmetro, dessa forma, o array passado permanecerá com seus dados imutáveis
  const usersReverse = [...users].reverse();
  const userFound = usersReverse.find((user) => user === userToFind);
  return userFound;
}

const found = findUser(users, "Lucas");
console.log(found);
