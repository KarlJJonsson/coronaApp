import React from "react";
import { StyleSheet, Text, View } from "react-native";

import StatItem from "./StatItem";
import * as gf from "../GlobalFunctions";

const TotalCard = (props) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.headerText}>{gf.numberWithCommas(130000000)}</Text>
        <Text style={{ color: "white" }}>Total cases</Text>
      </View>
      <View style={styles.chartSection}>
        <Text style={styles.defaultText}>CIRCULAR CHART</Text>
        <View>
          <StatItem backgroundColor="#FFA726" text="Active" amount="300000" />
          <StatItem
            backgroundColor="#66BB6A"
            text="Recovered"
            amount="2500000"
          />
          <StatItem backgroundColor="#EF5350" text="Deaths" amount="30041241" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 20,
    alignItems: "stretch",
  },
  container: {
    flex: 1,
    backgroundColor: "#202124",
    alignItems: "flex-start",
  },
  headerText: {
    color: "#fff",
    fontSize: 48,
  },
  chartSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  defaultText: {
    color: "#fff",
  },
});

export default TotalCard;
