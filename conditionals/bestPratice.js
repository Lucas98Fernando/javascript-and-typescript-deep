const chooseLanguage = (language) => {
  const languages = ["php", "javascript", "java"];
  const languageLowerCase = language.toLowerCase();

  if (languages.includes(languageLowerCase)) return `Você escolheu ${language}`;
  else return "Você escolheu uma outra linguagem";
};

console.log(chooseLanguage("PHP"));
