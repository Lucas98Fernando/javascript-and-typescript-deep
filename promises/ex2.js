function isMajor(age) {
  const feedbackMockup = "maior de idade";
  return new Promise((resolve, reject) => {
    if (age > 0) {
      if (age < 18) reject(`Não é ${feedbackMockup}`);
      else resolve(`É ${feedbackMockup}`);
    } else reject("Informe uma idade válida");
  });
}

isMajor(18).then(console.log).catch(console.log);
