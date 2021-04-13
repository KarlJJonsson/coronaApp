import React from 'react';
import CountryList from './components/CountryList'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import OverViewPage from './components/OverviewPage';
import {StatusBar} from 'react-native';


const Tab = createMaterialTopTabNavigator();

StatusBar.setBarStyle('light-content', true);

export default function App() {
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