import React, {useState} from "react";
import { View, Text } from "react-native";
import { useRoute} from "@react-navigation/native";

import TotalCard from "./TotalCard";
import DailyCard from "./DailyCard";
import Separator from "./Separator";

const CountryDetailsScreen = (props) => {
  const route = useRoute();
  const [country, setCountry] = useState(route.params.country.country);
  console.log(route)
  return (
    <View>
      <Text>
        {country}
      </Text>
      {/*       <TotalCard country={country} />
      <Separator />
      <DailyCard country={country} />
      <Separator /> */}
    </View>
  );
};

export default CountryDetailsScreen;
