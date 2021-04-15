import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, FlatList} from 'react-native';
import { SearchBar} from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import OverviewPage from './OverviewPage';
import { useRoute, useNavigation } from '@react-navigation/native';


contains = (countryName, search) => {
  if(countryName.includes(search)){
    return true;
  }
  return false;
};

getImg = (countryName) =>{
  switch(countryName){
    case 'afghanistan':
      return require('../assets/flags/afghanistan.png');
    case 'albania':
      return require('../assets/flags/albania.png');
    case 'algeria':
      return require('../assets/flags/algeria.png');
    case 'andorra':
      return require('../assets/flags/andorra.png');
    case 'angola':
      return require('../assets/flags/angola.png');
    case 'anguilla':
      return require('../assets/flags/anguilla.png');
    case 'antigua and barbuda':
      return require('../assets/flags/antigua and barbuda.png');
    case 'argentina':
      return require('../assets/flags/argentina.png');
    case 'armenia':
      return require('../assets/flags/armenia.png');
    case 'aruba':
      return require('../assets/flags/aruba.png');
    case 'australia':
      return require('../assets/flags/australia.png');
    case 'austria':
      return require('../assets/flags/austria.png');
    case 'azerbaijan':
      return require('../assets/flags/azerbaijan.png');
    case 'bahamas':
      return require('../assets/flags/bahamas.png');
    case 'bahrain':
      return require('../assets/flags/bahrain.png');
    case 'bangladesh':
      return require('../assets/flags/bangladesh.png');
    case 'barbados':
      return require('../assets/flags/barbados.png');
    case 'belarus':
      return require('../assets/flags/belarus.png');
    case 'belgium':
      return require('../assets/flags/belgium.png');
    case 'belize':
      return require('../assets/flags/belize.png');
    case 'benin':
      return require('../assets/flags/benin.png');
    case 'bermuda':
      return require('../assets/flags/bermuda.png');
    case 'bhutan':
      return require('../assets/flags/bhutan.png');
    case 'bolivia':
      return require('../assets/flags/bolivia.png');
    case 'bosnia and herzegovina':
      return require('../assets/flags/bosnia and herzegovina.png');
    case 'botswana':
      return require('../assets/flags/botswana.png');
    case 'brazil':
      return require('../assets/flags/brazil.png');
    case 'british virgin islands':
      return require('../assets/flags/british virgin islands.png');
    case 'brunei':
      return require('../assets/flags/brunei.png');
    case 'bulgaria':
      return require('../assets/flags/bulgaria.png');
    case 'burkina faso':
      return require('../assets/flags/burkina faso.png');
    case 'burundi':
      return require('../assets/flags/burundi.png');
    case 'cabo verde':
      return require('../assets/flags/cabo verde.png');
    case 'cambodia':
      return require('../assets/flags/cambodia.png');
    case 'cameroon':
      return require('../assets/flags/cameroon.png');
    case 'canada':
      return require('../assets/flags/canada.png');
    case 'car':
      return require('../assets/flags/car.png');
    case 'caribbean netherlands':
      return require('../assets/flags/caribbean netherlands.png');
    case 'cayman islands':
      return require('../assets/flags/cayman islands.png');
    case 'chad':
      return require('../assets/flags/chad.png');
    case 'channel islands':
      return require('../assets/flags/channel islands.png');
    case 'chile':
      return require('../assets/flags/chile.png');
    case 'china':
      return require('../assets/flags/china.png');
    case 'colombia':
      return require('../assets/flags/colombia.png');
    case 'comoros':
      return require('../assets/flags/comoros.png');
    case 'congo':
      return require('../assets/flags/congo.png');
    case 'costa rica':
      return require('../assets/flags/costa rica.png');
    case 'croatia':
      return require('../assets/flags/croatia.png');
    case 'cuba':
      return require('../assets/flags/cuba.png');
    case 'curaçao':
      return require('../assets/flags/curaçao.png');
    case 'cyprus':
      return require('../assets/flags/cyprus.png');
    case 'czechia':
      return require('../assets/flags/czechia.png');
    case 'denmark':
      return require('../assets/flags/denmark.png');
    case 'diamond princess':
      return require('../assets/flags/diamond princess.png');
    case 'djibouti':
      return require('../assets/flags/djibouti.png');
    case 'dominica':
      return require('../assets/flags/dominica.png');
    case 'dominican republic':
      return require('../assets/flags/dominican republic.png');
    case 'drc':
      return require('../assets/flags/drc.png');
    case 'ecuador':
      return require('../assets/flags/ecuador.png');
    case 'egypt':
      return require('../assets/flags/egypt.png');
    case 'el salvador':
      return require('../assets/flags/el salvador.png');
    case 'equatorial guinea':
      return require('../assets/flags/equatorial guinea.png');
    case 'eritrea':
      return require('../assets/flags/eritrea.png');
    case 'estonia':
      return require('../assets/flags/estonia.png');
    case 'eswatini':
      return require('../assets/flags/eswatini.png');
    case 'ethiopia':
      return require('../assets/flags/ethiopia.png');
    case 'faeroe islands':
      return require('../assets/flags/faeroe islands.png');
    case 'falkland islands':
      return require('../assets/flags/falkland islands.png');
    case 'fiji':
      return require('../assets/flags/fiji.png');
    case 'finland':
      return require('../assets/flags/finland.png');
    case 'france':
      return require('../assets/flags/france.png');
    case 'french guiana':
      return require('../assets/flags/french guiana.png');
    case 'french polynesia':
      return require('../assets/flags/french polynesia.png');
    case 'gabon':
      return require('../assets/flags/gabon.png');
    case 'gambia':
      return require('../assets/flags/gambia.png');
    case 'georgia':
      return require('../assets/flags/georgia.png');
    case 'germany':
      return require('../assets/flags/germany.png');
    case 'ghana':
      return require('../assets/flags/ghana.png');
    case 'gibraltar':
      return require('../assets/flags/gibraltar.png');
    case 'greece':
      return require('../assets/flags/greece.png');
    case 'greenland':
      return require('../assets/flags/greenland.png');
    case 'grenada':
      return require('../assets/flags/grenada.png');
    case 'guadeloupe':
      return require('../assets/flags/guadeloupe.png');
    case 'guatemala':
      return require('../assets/flags/guatemala.png');
    case 'guinea-bissau':
      return require('../assets/flags/guinea-bissau.png');
    case 'guinea':
      return require('../assets/flags/guinea.png');
    case 'guyana':
      return require('../assets/flags/guyana.png');
    case 'haiti':
      return require('../assets/flags/haiti.png');
    case 'honduras':
      return require('../assets/flags/honduras.png');
    case 'hong kong':
      return require('../assets/flags/hong kong.png');
    case 'hungary':
      return require('../assets/flags/hungary.png');
    case 'iceland':
      return require('../assets/flags/iceland.png');
    case 'india':
      return require('../assets/flags/india.png');
    case 'indonesia':
      return require('../assets/flags/indonesia.png');
    case 'iran':
      return require('../assets/flags/iran.png');
    case 'iraq':
      return require('../assets/flags/iraq.png');
    case 'ireland':
      return require('../assets/flags/ireland.png');
    case 'isle of man':
      return require('../assets/flags/isle of man.png');
    case 'israel':
      return require('../assets/flags/israel.png');
    case 'italy':
      return require('../assets/flags/italy.png');
    case 'ivory coast':
      return require('../assets/flags/ivory coast.png');
    case 'jamaica':
      return require('../assets/flags/jamaica.png');
    case 'japan':
      return require('../assets/flags/japan.png');
    case 'jordan':
      return require('../assets/flags/jordan.png');
    case 'kazakhstan':
      return require('../assets/flags/kazakhstan.png');
    case 'kenya':
      return require('../assets/flags/kenya.png');
    case 'kuwait':
      return require('../assets/flags/kuwait.png');
    case 'kyrgyzstan':
      return require('../assets/flags/kyrgyzstan.png');
    case 'laos':
      return require('../assets/flags/laos.png');
    case 'latvia':
      return require('../assets/flags/latvia.png');
    case 'lebanon':
      return require('../assets/flags/lebanon.png');
    case 'lesotho':
      return require('../assets/flags/lesotho.png');
    case 'liberia':
      return require('../assets/flags/liberia.png');
    case 'libya':
      return require('../assets/flags/libya.png');
    case 'liechtenstein':
      return require('../assets/flags/liechtenstein.png');
    case 'lithuania':
      return require('../assets/flags/lithuania.png');
    case 'luxembourg':
      return require('../assets/flags/luxembourg.png');
    case 'macao':
      return require('../assets/flags/macao.png');
    case 'madagascar':
      return require('../assets/flags/madagascar.png');
    case 'malawi':
      return require('../assets/flags/malawi.png');
    case 'malaysia':
      return require('../assets/flags/malaysia.png');
    case 'maldives':
      return require('../assets/flags/maldives.png');
    case 'mali':
      return require('../assets/flags/mali.png');
    case 'malta':
      return require('../assets/flags/malta.png');
    case 'marshall islands':
      return require('../assets/flags/marshall islands.png');
    case 'martinique':
      return require('../assets/flags/martinique.png');
    case 'mauritania':
      return require('../assets/flags/mauritania.png');
    case 'mauritius':
      return require('../assets/flags/mauritius.png');
    case 'mayotte':
      return require('../assets/flags/mayotte.png');
    case 'mexico':
      return require('../assets/flags/mexico.png');
    case 'micronesia':
      return require('../assets/flags/micronesia.png');
    case 'moldova':
      return require('../assets/flags/moldova.png');
    case 'monaco':
      return require('../assets/flags/monaco.png');
    case 'mongolia':
      return require('../assets/flags/mongolia.png');
    case 'montenegro':
      return require('../assets/flags/montenegro.png');
    case 'montserrat':
      return require('../assets/flags/montserrat.png');
    case 'morocco':
      return require('../assets/flags/morocco.png');
    case 'mozambique':
      return require('../assets/flags/mozambique.png');
    case 'ms zaandam':
      return require('../assets/flags/ms zaandam.png');
    case 'myanmar':
      return require('../assets/flags/myanmar.png');
    case 'namibia':
      return require('../assets/flags/namibia.png');
    case 'nepal':
      return require('../assets/flags/nepal.png');
    case 'netherlands':
      return require('../assets/flags/netherlands.png');
    case 'new caledonia':
      return require('../assets/flags/new caledonia.png');
    case 'new zealand':
      return require('../assets/flags/new zealand.png');
    case 'nicaragua':
      return require('../assets/flags/nicaragua.png');
    case 'niger':
      return require('../assets/flags/niger.png');
    case 'nigeria':
      return require('../assets/flags/nigeria.png');
    case 'north macedonia':
      return require('../assets/flags/north macedonia.png');
    case 'norway':
      return require('../assets/flags/norway.png');
    case 'oman':
      return require('../assets/flags/oman.png');
    case 'pakistan':
      return require('../assets/flags/pakistan.png');
    case 'palestine':
      return require('../assets/flags/palestine.png');
    case 'panama':
      return require('../assets/flags/panama.png');
    case 'papua new guinea':
      return require('../assets/flags/papua new guinea.png');
    case 'paraguay':
      return require('../assets/flags/paraguay.png');
    case 'peru':
      return require('../assets/flags/peru.png');
    case 'philippines':
      return require('../assets/flags/philippines.png');
    case 'poland':
      return require('../assets/flags/poland.png');
    case 'portugal':
      return require('../assets/flags/portugal.png');
    case 'qatar':
      return require('../assets/flags/qatar.png');
    case 'romania':
      return require('../assets/flags/romania.png');
    case 'russia':
      return require('../assets/flags/russia.png');
    case 'rwanda':
      return require('../assets/flags/rwanda.png');
    case 'réunion':
      return require('../assets/flags/réunion.png');
    case 's. korea':
      return require('../assets/flags/s. korea.png');
    case 'saint kitts and nevis':
      return require('../assets/flags/saint kitts and nevis.png');
    case 'saint lucia':
      return require('../assets/flags/saint lucia.png');
    case 'saint martin':
      return require('../assets/flags/saint martin.png');
    case 'saint pierre miquelon':
      return require('../assets/flags/saint pierre miquelon.png');
    case 'samoa':
      return require('../assets/flags/samoa.png');
    case 'san marino':
      return require('../assets/flags/san marino.png');
    case 'sao tome and principe':
      return require('../assets/flags/sao tome and principe.png');
    case 'saudi arabia':
      return require('../assets/flags/saudi arabia.png');
    case 'senegal':
      return require('../assets/flags/senegal.png');
    case 'serbia':
      return require('../assets/flags/serbia.png');
    case 'seychelles':
      return require('../assets/flags/seychelles.png');
    case 'sierra leone':
      return require('../assets/flags/sierra leone.png');
    case 'singapore':
      return require('../assets/flags/singapore.png');
    case 'sint maarten':
      return require('../assets/flags/sint maarten.png');
    case 'slovakia':
      return require('../assets/flags/slovakia.png');
    case 'slovenia':
      return require('../assets/flags/slovenia.png');
    case 'solomon islands':
      return require('../assets/flags/solomon islands.png');
    case 'somalia':
      return require('../assets/flags/somalia.png');
    case 'south africa':
      return require('../assets/flags/south africa.png');
    case 'south sudan':
      return require('../assets/flags/south sudan.png');
    case 'spain':
      return require('../assets/flags/spain.png');
    case 'sri lanka':
      return require('../assets/flags/sri lanka.png');
    case 'st. barth':
      return require('../assets/flags/st. barth.png');
    case 'st. vincent grenadines':
      return require('../assets/flags/st. vincent grenadines.png');
    case 'sudan':
      return require('../assets/flags/sudan.png');
    case 'suriname':
      return require('../assets/flags/suriname.png');
    case 'sweden':
      return require('../assets/flags/sweden.png');
    case 'switzerland':
      return require('../assets/flags/switzerland.png');
    case 'syria':
      return require('../assets/flags/syria.png');
    case 'taiwan':
      return require('../assets/flags/taiwan.png');
    case 'tajikistan':
      return require('../assets/flags/tajikistan.png');
    case 'tanzania':
      return require('../assets/flags/tanzania.png');
    case 'thailand':
      return require('../assets/flags/thailand.png');
    case 'timor-leste':
      return require('../assets/flags/timor-leste.png');
    case 'togo':
      return require('../assets/flags/togo.png');
    case 'trinidad and tobago':
      return require('../assets/flags/trinidad and tobago.png');
    case 'tunisia':
      return require('../assets/flags/tunisia.png');
    case 'turkey':
      return require('../assets/flags/turkey.png');
    case 'turks and caicos':
      return require('../assets/flags/turks and caicos.png');
    case 'uae':
      return require('../assets/flags/uae.png');
    case 'uganda':
      return require('../assets/flags/uganda.png');
    case 'uk':
      return require('../assets/flags/uk.png');
    case 'ukraine':
      return require('../assets/flags/ukraine.png');
    case 'uruguay':
      return require('../assets/flags/uruguay.png');
    case 'usa':
      return require('../assets/flags/usa.png');
    case 'uzbekistan':
      return require('../assets/flags/uzbekistan.png');
    case 'vanuatu':
      return require('../assets/flags/vanuatu.png');
    case 'vatican city':
      return require('../assets/flags/vatican city.png');
    case 'venezuela':
      return require('../assets/flags/venezuela.png');
    case 'vietnam':
      return require('../assets/flags/vietnam.png');
    case 'wallis and futuna':
      return require('../assets/flags/wallis and futuna.png');
    case 'western sahara':
      return require('../assets/flags/western sahara.png');
    case 'world':
      return require('../assets/flags/world.png');
    case 'yemen':
      return require('../assets/flags/yemen.png');
    case 'zambia':
      return require('../assets/flags/zambia.png');
    case 'zimbabwe':
      return require('../assets/flags/zimbabwe.png');
    default:
      return require('../assets/flags/world.png');
  }
}

const CountryList = (props) => {

  const navigation = useNavigation();
  const route = useRoute();

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);

  useEffect(() =>{
    setData(props.countries);
    setFullData(props.countries);
  }, [props]);

  updateSearch = (search) => {
    setQuery(search);
    handleSearch(search);
  };

  handleSearch = (search) => {
    const formattedSearch = search.toLowerCase();
    const filteredData = fullData.filter(country => {
      return contains(country.country.toLowerCase()
      , formattedSearch)
    });
    setData(filteredData);
  }

  return (
    <View style={styles.page}>

      <SearchBar
        round
        onChangeText={(text) => updateSearch(text)}
        containerStyle = {{backgroundColor: "#202124", round: true, borderBottomColor: '#202124', borderTopColor: '#202124'}}
        inputContainerStyle = {{backgroundColor: "#202124", borderWidth: 1, borderColor: '#737373', borderBottomColor: '#737373', borderBottomWidth: 1}}
        value = {query}
        placeholder = "Sök land"
        placeholderTextColor = '#999999'
      />

      <View>
        {/* dropdownmenu för sortering */}
      </View>

      <View style = {styles.container}>

        <FlatList
          data = {data}
            renderItem = {({index, item}) =>(
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("Overview", {country: item})}
            >
              <View style={styles.listing}>
                <View style={styles.listingSubContainer}>

                  <Text style={styles.text}>
                      {index+1}.
                  </Text>

                  <Image
                  style = {{
                    height: 25,
                    width: 25,
                    borderRadius: 25/2,
                  }}
                  source={getImg(item.country.toLowerCase())}
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
            </TouchableWithoutFeedback>
          )}
          keyExtractor= {item => item.country}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#202124',
  },
  listing: {
    flexDirection: 'row',
    borderColor: '#303136',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
  },
  listingSubContainer: {
    flexDirection: 'row',
  },
  container:{
    flex: 1,
    backgroundColor: '#202124',
    borderColor: '#303136',
    borderTopWidth: 1,
  },
  text: {
    color: '#ffffff',
    padding: 7,
  },
});

export default CountryList;