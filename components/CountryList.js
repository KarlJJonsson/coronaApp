import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Icon } from 'react-native';

class CountryList extends React.Component{
  render (){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>List countries here</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
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

export default CountryList;