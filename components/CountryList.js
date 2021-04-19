import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View, FlatList, Button } from "react-native";
import { SearchBar } from "react-native-elements";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import ModalDropdown from "react-native-modal-dropdown";
import { Ionicons } from '@expo/vector-icons';

import * as gf from "../GlobalFunctions";

contains = (countryName, search) => {
  if (countryName.includes(search)) {
    return true;
  }
  return false;
};

function getAmount(item, dropdown) {
  switch (dropdown) {
    case 0:
      return item.cases;
    case 1:
      return item.recovered;
    case 2:
      return item.deaths;
    case 3:
      return item.active;
  }
  return item.cases;
}

const CountryList = (props) => {
  const navigation = useNavigation();

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [unSortedFullData, setUnSortedFullData] = useState([]);
  const [sortedFullData, setSortedFullData] = useState([]);
  const [dropdownValue, setDropdown] = useState("Cases");
  const dropdownOptions = ["Cases", "Recovered", "Deaths", "Active"];
  const [sortOrder, setSortOrder] = useState(true);
  const [sortedData, setSortedData] = useState([]);
  const [unSortedData, setUnSortedData] = useState([]);

  useEffect(() => {
    firstSort();
  }, [props]);

  firstSort = () => {
    const unsortedInitData = props.countries.filter(function (element) {
      return element.country != "World";
    });

    const unsortedInitData2 = props.countries.filter(function (element) {
      return element.country != "World";
    });
    const initData = unsortedInitData.sort(((a, b) => (getAmount(a, dropdownValue) >= getAmount(b, dropdownValue)) ? -1: 1));
    setSortedData(initData);
    setSortedFullData(initData);
    
    const initData2 = unsortedInitData2.sort(((a, b) => (getAmount(a, dropdownValue) >= getAmount(b, dropdownValue)) ? 1: -1));
    setUnSortedFullData(initData2);
    setUnSortedData(initData2);
  }

  updateSearch = (search) => {
    setQuery(search);
    applyFilterParams(search, dropdownValue);
  }

  updateDropdown = (filter) => {
    setDropdown(filter);
    applyFilterParams(query);
  }

  applyFilterParams = (search) => {
    const formattedSearch = search.toLowerCase();
    const searchedData1 = sortedFullData.filter((country) => {
      return contains(country.country.toLowerCase(), formattedSearch);
    });
    const searchedData2 = unSortedFullData.filter((country) => {
      return contains(country.country.toLowerCase(), formattedSearch);
    });
    setSortedData(searchedData1);
    setUnSortedData(searchedData2);
  }

  return (
    <>
    {sortedData.length != 0 && (
      <View style={styles.page}>
        <SearchBar
          round
          onChangeText={(text) => updateSearch(text)}
          containerStyle={{
            backgroundColor: "#202124",
            round: true,
            borderBottomColor: "#202124",
            borderTopColor: "#202124",
          }}
          inputContainerStyle={{
            backgroundColor: "#202124",
            borderWidth: 1,
            borderColor: "#737373",
            borderBottomColor: "#737373",
            borderBottomWidth: 1,
          }}
          value={query}
          placeholder="Sök land"
          placeholderTextColor="#999999"
        />
        {/* DropdownMenu */}
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",}}
        >
          <View style={styles.dropdown}>
            <ModalDropdown
              options={dropdownOptions}
              textStyle={{ fontSize: 18, color: "#00ce7c" }}
              dropdownStyle={{ backgroundColor: "#202124" }}
              defaultValue={"Sorting by Total Cases"}
              defaultIndex={0}
              isFullWidth={true}
              dropdownTextStyle={{ fontSize: 18 }}
              onSelect={updateDropdown}
            />
          </View>
          <View style={{
            justifyContent: "center",
          }}>
            {/* SortOrder button */}
            <TouchableOpacity onPress={() => {
              setSortOrder(!sortOrder);
            }}
            style={{
              padding: 10
            }}
            >
              <Ionicons name="swap-vertical" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <FlatList
            data={sortOrder === true ? sortedData : unSortedData}
            renderItem={({ index, item }) => (
              //Making entries touchable and sends user to CountryDetailsScreen
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate("CountryDetails", {
                    country: item,
                    world: props.countries[0],
                  })
                }
              >
                {/* rendering entry in list */}
                <View style={styles.listing}>
                  <View style={styles.listingSubContainer}>
                    {/* Adding index */}
                    <Text style={styles.text}>{index + 1}.</Text>
                    {/* Adding picture of country */}
                    <Image
                      style={{
                        height: 25,
                        width: 25,
                        borderRadius: 25 / 2,
                      }}
                      source={gf.getImg(item.country.toLowerCase().replace(/\s/g, ''))}
                    />
                  </View>
                  {/* Adding statistic to card, formatting statistic*/}
                  <View style={styles.listingSubContainer}>
                    <Text style={styles.text}>
                      {gf.numberWithCommas(getAmount(item, dropdownValue))}
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            )}
            keyExtractor={(item) => item.country}
          />
        </View>
      </View>
    )}
  </>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#202124",
  },
  dropdown: {
    padding: 10,
  },
  listing: {
    flexDirection: "row",
    borderColor: "#303136",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
  },
  listingSubContainer: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: "#202124",
    borderColor: "#303136",
    borderTopWidth: 1,
  },
  text: {
    color: "#ffffff",
    padding: 7,
  },
});

export default CountryList;