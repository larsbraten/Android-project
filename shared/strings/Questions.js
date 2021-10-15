import i18n from "i18n-js";
let Capital = [
  "Oslo",
  "London",
  "Paris",
  "Amsterdam",
  "Andorra la Vella",
  "Stockholm",
  "Ankara",
  "Dubai",
  "Minsk",
  "Brussels",
  "Sofia",
  "Tallinn",
  "Kuala Lumpur",
  "Dublin",
  "Kabul",
  "Tirane",
  "Luanda",
  "Algiers",
  "Yerevan",
  "Nassau",
  "Dhaka",
  "Ouagadougou",
];
if ((i18n.locale = "nb-NO")) {
  Capital = [
    "Oslo",
    "London",
    "Paris",
    "Amsterdam",
    "Andorra la Vella",
    "Stockholm",
    "Ankara",
    "Dubai",
    "Minsk",
    "Brussel",
    "Sofia",
    "Tallinn",
    "Kuala Lumpur",
    "Dublin",
    "Kabul",
    "Tirana",
    "Luanda",
    "Alger",
    "Jerevan",
    "Nassau",
    "Dhaka",
    "Ouagadougou",
  ];
}

function drawRandomWord() {
  return Capital[Math.floor(Math.random() * Capital.length)];
}

export { drawRandomWord };
