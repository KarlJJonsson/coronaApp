import React from 'react';
import { Image, StyleSheet, Text, View, FlatList} from 'react-native';
import { SearchBar} from 'react-native-elements';

class CountryList extends React.Component{
  state = {
    search: "",
    data: data2,
    fulldata: data2,
  }

  updateSearch = (search) => {
    this.setState({search});
    this.handleSearch(search);
  };

  handleSearch = (search) => {
    const formattedSearch = search.toLowerCase();
    const data = this.state.fulldata.filter(country => {
      return this.contains(country.country.toLowerCase()
      , formattedSearch)
    });
    this.setState({data: data})
  }

  contains = (countryName, search) => {
    if(countryName.includes(search)){
      return true;
    }
    return false;
  };

  render (){
    const {search} = this.state;
    return (
      <View style={styles.page}>
        <SearchBar
          round
          placeHolder="Sök land"
          onChangeText={this.updateSearch}
          containerStyle ={{backgroundColor: "#202124", borderWidth: 1, borderRadius: 5, round: true}}
          value = {search}
        />
        <View style = {styles.container}>
          <FlatList
            data = {this.state.data}
            renderItem = {({index, item}) =>(
              <View style={styles.listing}>
              <View style={styles.listingSubContainer}>
                <Text style={styles.text}>
                    {index+1}.
                  </Text>
                  <Image
                  style = {{
                    height: 25,
                    width: 25,
                  }}
                  source={require("../assets/icons/flag.png")}
                  />
                  <Text style={styles.text}>
                    {item.country}
                </Text>
              </View>
              <View style={styles.listingSubContainer}>
                <Text style={styles.text}>
                  {item.active}
                </Text>
              </View>
              </View>
            )}
            keyExtractor= {item => item.country}
            ItemSeparatorComponent = {this.renderSeparator}
          />
        </View>
      </View>
    );
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#404040',
        }}
      />
    )
  };
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#202124',
  },
  listing: {
    flexDirection: 'row',
    borderColor: '#ffffff',
    justifyContent: 'space-between',
    padding: 15
  },
  listingSubContainer: {
    flexDirection: 'row',
  },
  container:{
    flex: 1,
    backgroundColor: '#202124',
  },
  text: {
    color: '#ffffff',
  },
});

export default CountryList;