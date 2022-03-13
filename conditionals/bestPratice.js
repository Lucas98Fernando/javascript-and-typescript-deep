function chooseLanguage(language) {
  const languages = ["php", "javascript", "java"];
  const languageLowerCase = language.toLowerCase();

  if (languages.includes(languageLowerCase)) return `Você escolheu ${language}`;
  else return "Você escolheu uma outra linguagem";
}

console.log(chooseLanguage("PHP"));

function setColor(info) {
  const dangerStatus = [1, 3, 5];
  const successStatus = [2, 4, 6];

  if (dangerStatus.includes(info.status) && info.new) return "Cor vermelha";
  if (successStatus.includes(info.status)) return "Cor verde";
  else return "Cor não encontrada";
}

console.log(setColor({ status: 3, new: false }));
