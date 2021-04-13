import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class OverViewPage extends React.Component{
  render (){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Overview here</Text>
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

export default OverViewPage;