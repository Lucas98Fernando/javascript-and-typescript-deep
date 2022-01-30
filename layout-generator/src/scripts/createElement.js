export default function createElement(element, content = "") {
  let htmlElement = document.createElement(element);
  let contentToElement = document.createTextNode(content);
  htmlElement.appendChild(contentToElement);
  return htmlElement;
}
