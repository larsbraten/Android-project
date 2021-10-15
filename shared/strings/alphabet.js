import i18n from "i18n-js";
import * as Localization from "expo-localization";
i18n.locale = Localization.locale;
let Alphabet = "";

if (i18n.locale == "en-GB") {
  Alphabet = "abcdefghijklmnopqrstuvwxyz";
}
if (i18n.locale == "nb-NO") {
  Alphabet = "abcdefghijklmnopqrstuvwxyzæøå";
}

function getAlphabet() {
  return Alphabet;
}

export { getAlphabet };
