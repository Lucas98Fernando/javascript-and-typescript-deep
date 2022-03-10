const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const btnRegister = document.getElementById("btn-register");
const formRegister = document.getElementById("form");

const elements = [nameInput, emailInput, passwordInput];

function validateFields(index, element, message = "Campo obrigatório") {
  if (!element.value) {
    showError(index, message);
    return false;
  } else {
    hideError(index);
    return true;
  }
}

function validateForm() {
  for (let i in elements) {
    validateFields(i, elements[i]);
  }
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
