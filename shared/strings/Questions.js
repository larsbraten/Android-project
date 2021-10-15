import i18n from "i18n-js";
import * as Localization from "expo-localization";
i18n.locale = Localization.locale;
let Capital = [];

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
