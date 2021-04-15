import React, {useEffect, useState} from "react";
import { StyleSheet, View } from "react-native";
import { useRoute } from '@react-navigation/native';

import TotalCard from "./TotalCard";
import DailyCard from "./DailyCard";
import Separator from "./Separator";

const OverviewPage = (props) => {
  const route = useRoute();

  let dataObject = (route.params != undefined) ? route.params.country : props.country;

  const [world, setWorld] = useState(props.country);

  useEffect(() =>{
    setWorld(dataObject);
    console.log(world);
  });

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
