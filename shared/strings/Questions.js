import i18n from "i18n-js";
import * as Localization from "expo-localization";
i18n.locale = Localization.locale;

/* Will default to this list if the language is not en-GB or nb-NO */
let Capital = [
  "OSLO",
  "LONDON",
  "PARIS",
  "AMSTERDAM",
  "STOCKHOLM",
  "ANKARA",
  "DUBAI",
  "MINSK",
  "BRUSSELS",
  "SOFIA",
  "TALLINN",
  "DUBLIN",
  "KABUL",
  "TIRANE",
  "LUANDA",
  "ALGIERS",
  "YEREVAN",
  "NASSAU",
  "DHAKA",
  "OUAGADOUGOU",
  ,
];
/* Will default to this list if the language is en-GB */
if (i18n.locale == "en-GB") {
  Capital = [
    "OSLO",
    "LONDON",
    "PARIS",
    "AMSTERDAM",
    "STOCKHOLM",
    "ANKARA",
    "DUBAI",
    "MINSK",
    "BRUSSELS",
    "SOFIA",
    "TALLINN",
    "DUBLIN",
    "KABUL",
    "TIRANE",
    "LUANDA",
    "ALGIERS",
    "YEREVAN",
    "NASSAU",
    "DHAKA",
    "OUAGADOUGOU",
  ];
}
/* Will default to this list if the language is nb-NO */
if (i18n.locale == "nb-NO") {
  Capital = [
    "OSLO",
    "KONGSVINGER",
    "TRONDHEIM",
    "JESSHEIM",
    "ELVERUM",
    "LILLESTRØM",
    "STAVANGER",
    "DRAMMEN",
    "STEINKJER",
    "BERGEN",
    "ÅLESUND",
    "HAMAR",
    "GJØVIK",
    "KONGSBERG",
    "TØNSBERG",
    "KRISTIANSAND",
    "KRISTIANSUND",
    "FREDRIKSTAD",
    "MOLDE",
    "LILLEHAMMER",
  ];
}

function drawRandomWord() {
  return Capital[Math.floor(Math.random() * Capital.length)];
}

export { drawRandomWord };
