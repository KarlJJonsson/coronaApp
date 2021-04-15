import React, {useEffect, useState} from "react";
import { StyleSheet, View } from "react-native";

import TotalCard from "./TotalCard";
import DailyCard from "./DailyCard";
import Separator from "./Separator";

const OverviewPage = (props) => {
  
  const [world, setWorld] = useState({"country":"World","cases":138976244,"todayCases":154903,"deaths":2988801,"todayDeaths":3817,"recovered":114490052,"active":21497391,"critical":106546,"casesPerOneMillion":17829,"deathsPerOneMillion":383,"totalTests":0,"testsPerOneMillion":0});
  
  // const [world, setWorld] = useState([]);
  // useEffect(() => {
  //   setWorld(props.countries[0]);
  // }, [props]);

  // const [world, setWorld] = useState(props.countries[0]);

  console.log("overviewData is: "+world);
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
