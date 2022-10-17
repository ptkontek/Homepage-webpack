import "../scss/main.scss";

const menu = document.querySelector(".menu--js");

menu.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});