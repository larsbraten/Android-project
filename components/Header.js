import "react-native-gesture-handler";
import React from "react";
import { Text, View } from "react-native";
import HangedMan from "./HangedMan";

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
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    ></View>
  );
}
function Info() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Information about app</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen component={HangMan} name="HangMan" />
      <Drawer.Screen component={ChangeLanguage} name="Change Language" />
      <Drawer.Screen component={Info} name="Information about the App" />
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
