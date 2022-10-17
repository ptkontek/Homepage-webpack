import "../scss/main.scss";

//localstorage (trwalsze) i sessionstorage(do zamknięcia przeglądarki)
localStorage.setItem("human", "pati");
console.log(localStorage.getItem("human")); //pobranie
localStorage.removeItem("human"); //usunięcie

//obiekt -> JSON string
//zakodowanie obiektu - zwykły napis, nie obiekt
localStorage.setItem("nowyKlucz", JSON.stringify({ name: "patka" }));
console.log(localStorage.getItem("nowyKlucz"));

//odkodowanie PARSE - mamy obiekt
const myResult1 = localStorage.getItem("nowyKlucz");
console.log(JSON.parse(myResult1));
//można modyfikowac jak obiekt
const myNewObiect = JSON.parse(myResult1);
myNewObiect.surname = "kontek";
console.log(myNewObiect);

const entry = localStorage.getItem("entry");
let result1 = "";

if (entry) {
  result1 = entry;
}

const entryInput = document.querySelector(".entry--js");
entryInput.value = result1;

const button = document.querySelector(".action--js");
console.log(button);

button.addEventListener("click", () => {
  localStorage.setItem("entry", entryInput.value);
});

/// EDITOR
const textarea = document.querySelector(".textarea--js");
const save = document.querySelector(".save--js");
const load = document.querySelector(".load--js");

const currentValue = localStorage.getItem("entry");

if (currentValue) {
  document.querySelector(".info--js").innerHTML = "💁";
}

save.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("entry", textarea.value);
  if (textarea.value) {
    document.querySelector(".info--js").innerHTML = "💁";
  } else {
    document.querySelector(".info--js").innerHTML = "";
  }
});

load.addEventListener("click", (e) => {
  e.preventDefault();
  textarea.value = localStorage.getItem("entry");
});
