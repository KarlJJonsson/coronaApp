import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import * as gf from "../GlobalFunctions";

const Rates = (props) => {
  const countryRecoveredRate =
    (props.country.recovered / props.country.cases) * 100;
  const worldRecoveredRate = (props.world.recovered / props.world.cases) * 100;

  const countryDeathRate = (props.country.deaths / props.country.cases) * 100;
  const worldDeathRate = (props.world.deaths / props.world.cases) * 100;

  const green = "#66BB6A";
  const red = "#EF5350";

  return (
    <View>
      <View style={styles.row}>
        <Image
          style={styles.flag}
          source={gf.getImg(props.country.country.toLowerCase())}
        />
        <Image
          style={styles.flag}
          source={gf.getImg(props.world.country.toLowerCase())}
        />
      </View>
      <View style={styles.row}>
        <Text
          style={{
            color: countryRecoveredRate > worldRecoveredRate ? green : red,
          }}
        >
          {`${countryRecoveredRate.toFixed(2)}%`}
        </Text>
        <Text style={styles.defaultText}>Recovery rate</Text>
        <Text
          style={{ color: countryDeathRate < worldDeathRate ? green : red }}
        >
          {`${worldRecoveredRate.toFixed(2)}%`}
        </Text>
      </View>
      <View style={styles.row}>
        <Text
          style={{ color: countryDeathRate < worldDeathRate ? green : red }}
        >
          {`${countryDeathRate.toFixed(2)}%`}
        </Text>
        <Text style={styles.defaultText}>Death rate</Text>
        <Text
          style={{ color: countryDeathRate > worldDeathRate ? green : red }}
        >
          {`${worldDeathRate.toFixed(2)}%`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  defaultText: {
    color: "#fff",
  },
  flag: {
    height: 25,
    width: 25,
    borderRadius: 25 / 2,
  },
});

export default Rates;
