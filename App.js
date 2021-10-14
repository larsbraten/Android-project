import "react-native-gesture-handler";
import React from "react";
import Header from "./components/Header";
import i18n from "i18n-js";
import nb from "./shared/strings/no";
import en from "./shared/strings/en";
import * as Localization from "expo-localization";
i18n.fallbacks = true;
i18n.translations = {
  en,
  nb,
};
i18n.locale = Localization.locale;
console.log(i18n.locale);

export default function App() {
  return <Header />;
}
