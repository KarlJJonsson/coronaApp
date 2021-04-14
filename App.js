import React from "react";
import { StatusBar, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CountryList from "./components/CountryList";
import OverViewPage from "./components/OverviewPage";

global.data = [{id:"1"},{id:"2"},{id:"3"},]
global.data2;

const Tab = createMaterialTopTabNavigator();
StatusBar.setBarStyle("light-content", true);

export default function App() {
  getData();
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          tabStyle: { height: 100 },
          style: styles.tabBar,
          labelStyle: { color: "#fffaf0" },
          indicatorStyle: { backgroundColor: "#00ce7c", height: 3 },
          showIcon: true,
          activeTintColor: "white",
        }}
      >
        <Tab.Screen
          name="Overview"
          component={OverViewPage}
          options={{
            tabBarIcon: () => (
              <Image
                source={require("./assets/icons/earth.png")}
                style={styles.tabBarIcon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Countries"
          component={CountryList}
          options={{
            tabBarIcon: () => (
              <Image
                source={require("./assets/icons/flag.png")}
                style={styles.tabBarIcon}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const fetchCountries = async () => {
  try {
    let response = await fetch("https://coronavirus-19-api.herokuapp.com/countries");
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

const getData = async () => {
  fetchCountries().then(
    (countries) => {
    data2 = countries;
    // console.log(data2);
    }
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#202124",
    paddingTop: 10,
  },
  tabBarIcon: {
    height: 25,
    width: 25,
  },
});