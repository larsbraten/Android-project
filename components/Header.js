import "react-native-gesture-handler";
import React from "react";
import { Text, View, Button } from "react-native";
import HangedMan from "./HangedMan";
import i18n from "i18n-js";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

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
      <Button title={i18n.t("changeLanguage")} color="#841584" />
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
      <Drawer.Screen component={HangMan} name={i18n.t("HangMan")} />
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
