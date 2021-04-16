import React, {useState} from "react";
import { StyleSheet, View } from "react-native";

import TotalCard from "./TotalCard";
import DailyCard from "./DailyCard";
import Separator from "./Separator";

const OverviewPage = (props) => {
  const [world] = useState(props.country);

  return (
    <View style={styles.container}>
      <TotalCard country={world} />
      <Separator />
      <DailyCard country={world} />
      <Separator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202124",
    alignItems: "flex-start",
  },
});

export default OverviewPage;
