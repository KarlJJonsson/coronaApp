import React, {useState} from "react";
import { StyleSheet, View } from "react-native";
import { useRoute} from "@react-navigation/native";

import TotalCard from "./TotalCard";
import DailyCard from "./DailyCard";
import Separator from "./Separator";

const CountryDetailsScreen = (props) => {
  const route = useRoute();
  const [country] = useState(route.params.country);

  return (
    <View style={{
      flex: 1,
      alignItems: "flex-start",
    }}>
      <TotalCard country={country} />
      <Separator />
      <DailyCard country={country} />
      <Separator />
    </View>
  );
};

export default CountryDetailsScreen;
