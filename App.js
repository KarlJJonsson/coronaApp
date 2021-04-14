import React from 'react';
import CountryList from './components/CountryList'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import OverViewPage from './components/OverviewPage';
import {StatusBar} from 'react-native';

global.data = [{id:"1"},{id:"2"},{id:"3"},]
global.data2;

const Tab = createMaterialTopTabNavigator();

StatusBar.setBarStyle('light-content', true);

export default function App() {
  getData();
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          tabStyle: { height: 100 },
          style: { backgroundColor: '#202124' },
          labelStyle: {color: '#fffaf0'},
          indicatorStyle: {backgroundColor: '#00ce7c', height: 3},
          showIcon: true,
        }}
      >
        <Tab.Screen name="Overview" component={OverViewPage} />
        <Tab.Screen name="Countries" component={CountryList} />
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