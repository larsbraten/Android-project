import i18n from "i18n-js";
import * as Localization from "expo-localization";
i18n.locale = Localization.locale;

/* Will default to this string if the language is not en-GB or nb-NO */
let Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/* Will default to this string if the language is en-GB */
if (i18n.locale == "en-GB") {
  Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
/* Will default to this string if the language is nb-NO */
if (i18n.locale == "nb-NO") {
  Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ";
}

function getAlphabet() {
  return Alphabet;
}

export { getAlphabet };
