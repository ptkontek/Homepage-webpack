import "../scss/main.scss";

console.log("Witaj przybyszu");
const firstName = "Patrycja Kontek";
const age = 28;
console.log(firstName);
console.log(age);
console.log(`${firstName}
${age}`);
console.log(`Nazywam się ${firstName} i mam ${age} lat.`); //literały

// const header = document.querySelector(".header__title--js");
// console.log(header.innerHTML);
//header.innerHTML = `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lat.`;

/*function calculate(myNumber) {
  console.log(`Dostałam ${myNumber}`);
 return myNumber * 7;
return `wynik ${myNumber}`; string
const myResult = calculate(1);
console.log(myResult);
}*/
const calculate = (myNumber) => myNumber * 6;
console.log(calculate(2));

/*function greet1(age, firstName) {
 console.log(
   `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lat.`
 );
}*/
const greet = (age, firstName) => {
  console.log(
    `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lat.`
  );
};
greet(age, firstName);

//const emptyParagraph = document.querySelector(".about__paragraph--js");
//emptyParagraph.innerHTML = `Uzupełniłam treść javascriptem! To jest sekcja o mnie.`;
/*function createContent(querySelectroContent, content) {
  const element = document.querySelector(querySelectroContent);
  element.innerHTML = content;
}
createContent(".about__paragraph--js", "Witaj świecie"); //bez return robi zmianę na stronie*/

//obiekt
const deathStar = {
  // obiekt
  diameter: 120000, //własności
  fire: (target) => {
    //metoda
    console.log(`${target} destroyed`);
  },
  isOperating: true,
  name: "Death Star",
  levels: 357,
  population: 10000,
  isLightOn: true,
  commander: {
    name: "Darth Vader",
    age: 44,
  },
};

console.log(deathStar); //cały obiekt
console.log(deathStar.name); //wywołanie pojedynczej własności: obiekt.własność
console.log(typeof deathStar.name); //typ własności -> string
console.log(deathStar.commander.age); //wywołanie dot notation
deathStar.fire("Rebel ship"); //wywołanie metody z obiektu
console.log(deathStar["name"]); //wywołanie bracket notation
//console.log(console) wszystkie metody, które ma obiekt console

const myProperty = "name"; // funkcja do wypisywania
const showMeProperty = (myProperty) => {
  console.log(`Twoja własność ${myProperty} to ${deathStar[myProperty]}`);
};
showMeProperty("population");

const humanOne = {
  name: "Maciek",
  age: 32,
  address: {
    street: "Warszawska",
    city: "Białystok",
  },
};

const humanTwo = {
  name: "Stefan",
  age: humanOne.age, //przypisanie połączenia, gdy zmienię age w humanOne to nie zmienia się age w humanTwo
  address: {
    street: humanOne.address.street,
    city: "Białystok",
  },
};

humanOne.address.street = "Lipowa";
console.log(humanOne);
console.log(humanTwo);

if (humanOne.age === humanTwo.age) {
  ///sprawdza typeof
  console.log("są równolatkami");
}

if (null) {
  console.log("to się nie wykona"); ///false, 0, '', "", ``,null,undefined, Nan - not a number
}

if ("abc") {
  console.log("to się wykona"); ///Truthy: 'tekst', 12, -4, {}, [], true itd
}

if (humanTwo.age === 32 && humanTwo.address) {
  //or || - jeden warunek prawdą
  console.log("to się wykona");
}

if (!false) {
  ///zaprzeczenie
  console.log("to się wykona");
}

if (humanOne.age > humanTwo.age) {
  console.log("Human One jest starszy");
} else {
  console.log("Human Two jest starszy lub są równolatkami");
}

if (humanOne.age > humanTwo.age) {
  console.log("Human One jest starszy");
} else if (humanOne.age === humanTwo.age) {
  console.log("Są równolatkami");
} else {
  console.log("Human Two jest starszy");
}

const myNumber = 7;
switch (myNumber) {
  case 7:
    console.log("jestem siódemką");
    break;
  case 9:
    console.log("jestem dziewiątką");
    break;
  default:
    console.log("jestem czymś innym");
}
///zapis skrócony
32 > 20 ? console.log("to prawda") : console.log("to nieprawda");

const result = 32 > 20 ? true : false; //moga byc obiekty i słowa kluczowe zamiast false i true
console.log(result);