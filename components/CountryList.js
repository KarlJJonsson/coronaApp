import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { SearchBar} from 'react-native-elements';

class CountryList extends React.Component{
  state = {
    search: "",
  }

  updateSearch = (search) => {
    this.setState({search});
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
            data = {data2}
            renderItem = {({item}) =>(
              <View style={styles.listing}>
                <Text style={styles.text}>
                  {item.country}
                </Text>
                <Text style={styles.text}>
                  {item.active}
                </Text>
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
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#202124',
  },
  listing: {
    flexDirection: 'row'
  },
  container:{
    flex: 1,
    backgroundColor: '#202124',
    alignItems: 'center',
  },
  text: {
    color: '#00ce7c',
  },
});

export default CountryList;