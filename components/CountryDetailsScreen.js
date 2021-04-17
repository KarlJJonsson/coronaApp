import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

import TotalCard from "./TotalCard";
import DailyCard from "./DailyCard";
import Separator from "./Separator";
import Rates from "./Rates";

const CountryDetailsScreen = (props) => {
  const route = useRoute();
  const [country] = useState(route.params.country);
  const world = route.params.world;

  return (
    <View style={styles.scaffold}>
      <TotalCard country={country} />
      <View style={styles.divider}></View>
      <Rates country={country} world={world} />
      <Separator />
      <DailyCard country={country} />
      <Separator />
    </View>
  );
};

const styles = StyleSheet.create({
  scaffold: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#202124",
  },
  divider: {
    marginBottom: 20,
    height: 1,
    backgroundColor: "#303136",
    width: "100%",
  },
});

export default CountryDetailsScreen;
