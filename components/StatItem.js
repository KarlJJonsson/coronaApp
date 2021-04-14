import React from "react";
import { View, StyleSheet, Text } from "react-native";

import * as gf from "../GlobalFunctions";

const StatItem = (props) => {
  return (
    <View style={styles.row}>
      <View
        style={{
          backgroundColor: props.backgroundColor,
          height: 15,
          width: 15,
          borderRadius: 15,
          marginRight: 5,
        }}
      ></View>
      <View>
        <Text style={styles.text}>{props.text}</Text>
        <Text style={styles.amount}>{gf.numberWithCommas(props.amount)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  circle: {
    height: 15,
    width: 15,
    borderRadius: 5,
  },
  text: {
    color: "#c0cad8",
  },
  amount: {
    color: "#fff",
    fontSize: 16,
  },
});

export default StatItem;
