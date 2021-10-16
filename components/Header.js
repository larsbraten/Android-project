import "react-native-gesture-handler";
import React from "react";
import { Text, View, Image } from "react-native";
import HangedMan from "./HangedMan";
import i18n from "i18n-js";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Languages from "../assets/languages.png";

function HangMan() {
  return (
    <View>
      <HangedMan></HangedMan>
    </View>
  );
}

function ChangeLanguage() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={{ height: "50%", width: "100%", marginBottom: 20, marginTop: 0 }}
        source={Languages}
      ></Image>
      <Text>{i18n.t("changeLanguageInfo")}</Text>
    </View>
  );
}
function Info() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{i18n.t("info")}</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen component={HangMan} name={i18n.t("hangMan")} />
      <Drawer.Screen
        component={ChangeLanguage}
        name={i18n.t("changeLanguage")}
      />
      <Drawer.Screen component={Info} name={i18n.t("appInfo")} />
    </Drawer.Navigator>
  );
};
export default function Header() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
