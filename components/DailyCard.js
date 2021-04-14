import React from "react";
import { StyleSheet, Text, View } from "react-native";

import * as gf from "../GlobalFunctions";

const DailyCard = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.headerText}>Today</Text>
      <Text style={styles.casesText}>
        + {gf.numberWithCommas(props.country.todayCases)} cases
      </Text>
      <Text style={styles.deathsText}>
        + {gf.numberWithCommas(props.country.todayDeaths)} deaths
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 20,
    alignItems: "stretch",
  },
  headerText: {
    color: "#fff",
    fontSize: 28,
    marginBottom: 20,
  },
  casesText: {
    color: "#FFA726",
    fontSize: 36,
  },
  deathsText: {
    color: "#EF5350",
    fontSize: 36,
  },
  defaultText: {
    color: "#fff",
  },
});

export default DailyCard;
