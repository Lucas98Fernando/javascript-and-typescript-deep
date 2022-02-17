const app = document.getElementById("app");
const global = document.querySelectorAll("*");

app.style.display = "grid";
app.style.gridTemplateColumns = "1fr 4fr";

(function createNavbar() {
  let navbar = document.createElement("nav");
  navbar.setAttribute("id", "navbar");
  app.appendChild(navbar);
  createContainer(navbar, "container-navbar");
  navbar.appendChild(createNavbarContent());
  navbar.style.height = "100vh";
  navbar.style.backgroundColor = "#222";
})();

function createNavbarContent() {
  let textElement = document.createElement("p");
  let textNode = document.createTextNode("Navbar");
  textElement.style.padding = "0.5rem";
  textElement.style.color = "#fff";
  textElement.appendChild(textNode);
  return textElement;
}

function createContainer(child, className = "") {
  let container = document.createElement("div");
  container.setAttribute("class", className);
  container.style.width = "100%";
  container.style.display = "block";
  app.appendChild(container).appendChild(child);
  return container;
}

(function contentAside() {
  let contentAside = document.createElement("div");
  app.appendChild(contentAside);
  let containerAside = createContainer(contentAside, "container-aside");
  containerAside.style.backgroundColor = "blue";
  containerAside.style.height = "100vh";
  let btnToggleInstance = toggleNavbarBtn();
  containerAside.appendChild(btnToggleInstance);
})();

function toggleNavbarBtn() {
  let btnToggle = document.createElement("i");
  let textBtn = document.createTextNode("");
  btnToggle.appendChild(textBtn);
  btnToggle.style.margin = "0.5rem";
  btnToggle.style.color = "#fff";
  btnToggle.style.cursor = "pointer";
  btnToggle.setAttribute("id", "btn-toggle");
  btnToggle.setAttribute("class", "fa-solid fa-bars");
  return btnToggle;
}

let btnToggleHandle = document.getElementById("btn-toggle");
let containerNavbar = document.querySelector(".container-navbar");

function toggleVisibility() {
  if (containerNavbar.style.display == "block") {
    containerNavbar.style.display = "none";
    app.style.gridTemplateColumns = "1fr";
  } else {
    containerNavbar.style.display = "block";
    app.style.gridTemplateColumns = "1fr 4fr";
  }
}

btnToggleHandle.addEventListener("click", () => toggleVisibility());
