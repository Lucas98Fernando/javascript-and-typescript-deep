class WelcomeStatic {
  // Com a declaração static podemos acessar métodos ou atributos de uma classe sem a necessidade de criar uma nova instância, esse comportamento é conhecido pelo nome "membros estáticos"

  static username = "Lucas";

  static morning(username = "guest") {
    return `Hello, ${username}! Good morning.`;
  }
  static afternoon(username = "guest") {
    return `Hello, ${username}! Good afternoon.`;
  }
  static night(username = "guest") {
    return `Hello, ${username}! Good night.`;
  }
}

console.log(WelcomeStatic.username);
console.log(WelcomeStatic.morning("Fernando"));
console.log(WelcomeStatic.afternoon("Lucas"));
console.log(WelcomeStatic.night());

class WelcomeInstance {
  // Utilizando o conceito de membros de instância

  username = "Lucas";

  morning(username = "guest") {
    return `Hello, ${username}! Good morning.`;
  }
  afternoon(username = "guest") {
    return `Hello, ${username}! Good afternoon.`;
  }
  night(username = "guest") {
    return `Hello, ${username}! Good night.`;
  }
}

// Criando uma nova instância da classe WelcomeInstance
const greetings = new WelcomeInstance();
console.log(greetings.morning());
console.log(greetings.afternoon("Lucas"));
console.log(greetings.night("Fernando"));
