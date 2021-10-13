import "react-native-gesture-handler";
import React from "react";
import Header from "./components/Header";
/* import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  Platform,
} from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

function ChangeLanguage() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
    </View>
  );
}
function Info() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tasks</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen component={ChangeLanguage} name="Change Language" />
      <Drawer.Screen component={Info} name="Hangman, React Native" />
    </Drawer.Navigator>
  );
}; */
export default function App() {
  return <Header />;
}
/* <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "red",
        flex: 1,
        flexDirection: "row-reverse",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }}
      >
        <Button
          style={{
            height: "100%",
            width: "100%",
          }}
          title="Preffss Me"
        ></Button>
      </View>
    </View> */

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
});*/
