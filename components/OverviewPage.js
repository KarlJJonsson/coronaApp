import React from "react";
import { StyleSheet, Text, View } from "react-native";

import TotalCard from "./TotalCard";
import DailyCard from "./DailyCard";
import Separator from "./Separator";

class OverViewPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TotalCard />
        <Separator />
        <DailyCard cases="3000" deaths="200" />
        <Separator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202124",
    alignItems: "flex-start",
  },
});

export default OverViewPage;
