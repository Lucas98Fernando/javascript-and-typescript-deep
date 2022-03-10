const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const btnRegister = document.getElementById("btn-register");
const formRegister = document.getElementById("form");

function validateName() {
  if (!nameInput.value) {
    showError(0, "Informe o seu nome");
    return false;
  } else {
    hideError(0);
    return true;
  }
}

function validateEmail() {
  if (!emailInput.value) {
    showError(1, "Informe seu e-mail");
    return false;
  } else {
    hideError(1);
    return true;
  }
}

function validatePassword() {
  if (!passwordInput.value) {
    showError(2, "Informe sua senha");
    return false;
  } else if (passwordInput.value && passwordInput.value.length < 6) {
    showError(2, "Pelo menos 6 caracteres");
    return false;
  } else {
    hideError(2);
    return true;
  }
}

function validateForm() {
  if (validateName() && validateEmail() && validatePassword())
    btnRegister.disabled = false;
  else btnRegister.disabled = true;
}

function showError(index, message) {
  const element = formRegister.children[index].children[2];
  element.style.display = "block";
  element.innerHTML = message;
  btnRegister.disabled = true;
}

function hideError(index) {
  const element = formRegister.children[index].children[2];
  element.style.display = "none";
  btnRegister.disabled = false;
}
