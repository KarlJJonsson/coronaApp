import React, {useState, useEffect}from "react";
import { StatusBar, StyleSheet, Image, ActivityIndicator, View } from "react-native";
import { NavigationContainer} from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import CountryList from "./components/CountryList";
import OverviewPage from "./components/OverviewPage";
import CountryDetailsScreen from "./components/CountryDetailsScreen";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

StatusBar.setBarStyle("light-content", true);

const TabScreens = () => {
  const [APIData, setAPIData] = useState([]);

  useEffect(()=>{
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      let response = await fetch("https://coronavirus-19-api.herokuapp.com/countries");
      let json = await response.json();
      setAPIData(json);
    } catch (error) {
      console.error(error);
    }
  };

  if (APIData.length == 0) {
    return (<View style={styles.loadingScreen}>
      <ActivityIndicator size="large" color="#00ce7c" />
    </View>);
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
            children={() => 
              <OverviewPage country={APIData[0]}/>
            }
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
            children={() => 
              <CountryList countries={APIData}/>
            }
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
}

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Overview"
          children={() => <TabScreens/>}
        />
        <Stack.Screen
          name="Countries"
          children={() => <TabScreens/>}
        />
        <Stack.Screen
          name="CountryDetails"
          children={() => <CountryDetailsScreen/>}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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