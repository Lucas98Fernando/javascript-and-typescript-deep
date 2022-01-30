import createElement from "./createElement.js";

export default function createInput(label, id) {
  let divAllInputs = createElement("div");
  divAllInputs.setAttribute("id", "divInputLabel");
  divAllInputs.style.marginBottom = "0.7rem";
  let inputLabel = createElement("label", label);
  inputLabel.setAttribute("for", id);
  let input = createElement("input");
  input.setAttribute("id", id);
  divAllInputs.appendChild(inputLabel);
  divAllInputs.appendChild(input);
  app.appendChild(divAllInputs);
}
