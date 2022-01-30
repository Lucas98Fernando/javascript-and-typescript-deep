const app = document.getElementById("app");
import createElement from "./scripts/createElement.js";
import createInput from "./scripts/createInput.js";
import createStyles from "./scripts/createStyles.js";

// Auto invoke function to display welcome message
(function welcome() {
  app.appendChild(createElement("h1", "Gerador de layout"));
  app.appendChild(createElement("p", "Bem-vindo ao gerador de layouts!"));
})();

(function askToCreate() {
  createInput("Quantas divs você deseja criar ? ", "qtdDivsToCreate");
  createInput("Cor de background de cada uma ? ", "divsColor");
  createInput("Tipo de display do container principal ? ", "displayContainer");
  createInput("Largura de cada div ? ", "divsWidth");
})();

(function btnCreate() {
  let btnCreate = createElement("button", "Criar");
  btnCreate.setAttribute("id", "btnCreate");
  createStyles(btnCreate, {
    styles: {
      backgroundColor: "blue",
      color: "white",
      padding: "0.3rem 0.9rem",
      borderRadius: "10px",
    },
  });
  app.appendChild(btnCreate);
})();

let btnCreate = document.getElementById("btnCreate");
let inputQtdDivs = document.getElementById("qtdDivsToCreate");
let inputColorDivs = document.getElementById("divsColor");
let inputDisplayContainer = document.getElementById("displayContainer");
let inputDivsWidth = document.getElementById("divsWidth");

btnCreate.addEventListener("click", () =>
  createDivs(
    inputQtdDivs.value,
    inputColorDivs.value,
    inputDisplayContainer.value,
    inputDivsWidth.value
  )
);

function createDivs(qtd, color, displayContainer, divsWidth) {
  let containerDiv = document.querySelector(".container");
  if (containerDiv) removeDivs();
  let container = createDivContainer(displayContainer);
  let item = 0;
  while (item < qtd) {
    let divsCreated = createElement("div");
    createStyles(divsCreated, {
      styles: {
        backgroundColor: color,
        width: divsWidth,
        height: "100px",
        margin: "0.5rem",
      },
    });
    container.appendChild(divsCreated);
    item++;
  }
}

function removeDivs() {
  let container = document.querySelector(".container");
  container.remove();
}

function createDivContainer(displayContainer) {
  let container = createElement("div");
  container.setAttribute("class", "container");
  createStyles(container, {
    styles: {
      display: displayContainer,
      width: "100%",
      height: "100%",
    },
  });
  app.appendChild(container);
  return container;
}
