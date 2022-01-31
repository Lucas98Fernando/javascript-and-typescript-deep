import createTagElement from "./createTagElement.js";

export default function createInput(label, id) {
  let divAllInputs = createTagElement("div");
  divAllInputs.setAttribute("id", "divInputLabel");
  divAllInputs.style.marginBottom = "0.7rem";
  let inputLabel = createTagElement("label", label);
  inputLabel.setAttribute("for", id);
  let input = createTagElement("input");
  input.setAttribute("id", id);
  divAllInputs.appendChild(inputLabel);
  divAllInputs.appendChild(input);
  app.appendChild(divAllInputs);
}
