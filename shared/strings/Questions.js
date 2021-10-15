import i18n from "i18n-js";
import * as Localization from "expo-localization";
i18n.locale = Localization.locale;

/* Will default to this list if the language is not en-GB or nb-NO */
let Capital = [
  "Oslo",
  "London",
  "Paris",
  "Amsterdam",
  "Stockholm",
  "Ankara",
  "Dubai",
  "Minsk",
  "Brussels",
  "Sofia",
  "Tallinn",
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
/* Will default to this list if the language is en-GB */
if (i18n.locale == "en-GB") {
  Capital = [
    "Oslo",
    "London",
    "Paris",
    "Amsterdam",
    "Stockholm",
    "Ankara",
    "Dubai",
    "Minsk",
    "Brussels",
    "Sofia",
    "Tallinn",
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
}
/* Will default to this list if the language is nb-NO */
if (i18n.locale == "nb-NO") {
  Capital = [
    "Oslo",
    "London",
    "Paris",
    "Amsterdam",
    "Stockholm",
    "Ankara",
    "Dubai",
    "Minsk",
    "Brussel",
    "Sofia",
    "Tallinn",
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
