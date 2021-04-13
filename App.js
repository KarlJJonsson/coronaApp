import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#00ce7c',
  },
});

const fetchCountries = async () => {
  try {
    let response = await fetch("https://coronavirus-19-api.herokuapp.com/countries");
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
