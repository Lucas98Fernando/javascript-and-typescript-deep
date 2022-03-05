async function accountNumber(number) {
  console.log("Pegando número da conta");
  return number;
}

async function payment(number) {
  // if (true) throw new Error("Deu erro!");
  console.log("Processando pagamento");
  console.log(`Pagamento realizado na conta: ${number}`);
  return number;
}

async function sendEmail(number) {
  console.log("Enviando e-mail");
  console.log(`E-mail enviado para conta: ${number}`);
}

// accountNumber(123456)
//   .then((result) => payment(result))
//   .then((result) => sendEmail(result))
//   .catch((error) => console.log("Não foi possível realizar o pagamento"));

async function executePayment(number) {
  try {
    const numAccount = await accountNumber(number);
    payment(numAccount);
    sendEmail(numAccount);
  } catch {
    console.log("Não foi possível realizar o pagamento!");
  }
}

executePayment(457281);
