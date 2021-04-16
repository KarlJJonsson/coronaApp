import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";

import StatItem from "./StatItem";
import * as gf from "../GlobalFunctions";

const TotalCard = (props) => {
  const country = props.country;

  const chartConfig = { color: () => "#fff" };
  const chartData = [
    { name: "Active", amount: country.active, color: "#FFA726" },
    { name: "Recovered", amount: country.recovered, color: "#66BB6A" },
    { name: "Deaths", amount: country.deaths, color: "#EF5350" },
  ];

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.headerText}>
          {gf.numberWithCommas(country.cases)}
        </Text>
        <Text style={{ color: "white" }}>Total cases</Text>
      </View>
      <View style={styles.chartSection}>
        <PieChart
          data={chartData}
          width={200}
          height={200}
          chartConfig={chartConfig}
          accessor={"amount"}
          center={[30, 0]}
          hasLegend={false}
        />
        <View>
          <StatItem
            backgroundColor="#FFA726"
            text="Active"
            amount={country.active}
          />
          <StatItem
            backgroundColor="#66BB6A"
            text="Recovered"
            amount={country.recovered}
          />
          <StatItem
            backgroundColor="#EF5350"
            text="Deaths"
            amount={country.deaths}
          />
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
    alignItems: "center",
  },
  pieChart: {
    height: 200,
    backgroundColor: "#fff",
  },
  defaultText: {
    color: "#fff",
  },
});

export default TotalCard;
