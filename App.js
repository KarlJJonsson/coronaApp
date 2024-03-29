import React, { useState, useEffect } from "react";
import {
  StatusBar,
  StyleSheet,
  Image,
  ActivityIndicator,
  View,
  Text,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import CountryList from "./components/CountryList";
import OverviewPage from "./components/OverviewPage";
import CountryDetailsScreen from "./components/CountryDetailsScreen";

import * as gf from "./GlobalFunctions";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

StatusBar.setBarStyle("light-content", true);

const TabScreens = () => {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      let response = await fetch(
        "https://coronavirus-19-api.herokuapp.com/countries"
      );
      let json = await response.json();
      setAPIData(json);
    } catch (error) {
      console.error(error);
    }
  };

  if (APIData.length == 0) {
    return (
      <View style={styles.loadingScreen}>
        <ActivityIndicator size="large" color="#00ce7c" />
      </View>
    );
  } else {
    return (
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
          children={() => <OverviewPage country={APIData[0]} />}
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
          children={() => <CountryList countries={APIData} />}
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
    );
  }
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Overview"
          children={() => <TabScreens />}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Countries"
          children={() => <TabScreens />}
        />
        <Stack.Screen
          name="CountryDetails"
          children={() => <CountryDetailsScreen />}
          options={({ route }) => ({
            headerTitle: (
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{
                    height: 25,
                    width: 25,
                    borderRadius: 25,
                  }}
                  source={gf.getImg(route.params.country.country.toLowerCase())}
                />
                <View style={{ paddingLeft: 10 }}>
                  <Text style={{ color: "#fff", fontSize: 18 }}>
                    {route.params.country.country}
                  </Text>
                </View>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#202124",
            },
            headerTitleStyle: {
              color: "#fff",
            },
            headerTintColor: "#fff",
            headerBackTitleVisible: false,
            headerTitleAlign: "left",
            /*             headerBackground: (
              <ImageHeader country={route.params.country.country} />
            ), */
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

/* const ImageHeader = (props) => (
  <View style={{ backgroundColor: "#eee" }}>
    <Image
      style={{ height: 25, width: 25, borderRadius: 25 / 2 }}
      source={getImg(props.country.toLowerCase())}
    />
    <Header {...props} style={{ backgroundColor: "transparent" }} />
  </View>
); */

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    backgroundColor: "#202124",
    justifyContent: "center",
  },
  tabBar: {
    backgroundColor: "#202124",
    paddingTop: 10,
  },
  tabBarIcon: {
    height: 25,
    width: 25,
  },
});

export default App;
