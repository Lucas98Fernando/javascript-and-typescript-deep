const value = 20;
const validators = [
  {
    expression: value > 10,
    action: () => console.log("O valor é maior que 10"),
  },
  {
    expression: value === 20,
    action: () => console.log("O valor é igual a 20"),
  },
  {
    expression: value > 30,
    action: () => console.log("O valor é maior que 30"),
  },
];
for (const validator of validators) {
  if (validator.expression) {
    validator.action();
  }
}
