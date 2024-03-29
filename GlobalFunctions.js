export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getImg(countryName) {
  switch (countryName) {
    case 'afghanistan':
      return require('./assets/flags/afghanistan.png');
     case 'albania':
      return require('./assets/flags/albania.png');
     case 'algeria':
      return require('./assets/flags/algeria.png');
     case 'andorra':
      return require('./assets/flags/andorra.png');
     case 'angola':
      return require('./assets/flags/angola.png');
     case 'anguilla':
      return require('./assets/flags/anguilla.png');
     case 'antiguaandbarbuda':
      return require('./assets/flags/antiguaandbarbuda.png');
     case 'argentina':
      return require('./assets/flags/argentina.png');
     case 'armenia':
      return require('./assets/flags/armenia.png');
     case 'aruba':
      return require('./assets/flags/aruba.png');
     case 'australia':
      return require('./assets/flags/australia.png');
     case 'austria':
      return require('./assets/flags/austria.png');
     case 'azerbaijan':
      return require('./assets/flags/azerbaijan.png');
     case 'bahamas':
      return require('./assets/flags/bahamas.png');
     case 'bahrain':
      return require('./assets/flags/bahrain.png');
     case 'bangladesh':
      return require('./assets/flags/bangladesh.png');
     case 'barbados':
      return require('./assets/flags/barbados.png');
     case 'belarus':
      return require('./assets/flags/belarus.png');
     case 'belgium':
      return require('./assets/flags/belgium.png');
     case 'belize':
      return require('./assets/flags/belize.png');
     case 'benin':
      return require('./assets/flags/benin.png');
     case 'bermuda':
      return require('./assets/flags/bermuda.png');
     case 'bhutan':
      return require('./assets/flags/bhutan.png');
     case 'bolivia':
      return require('./assets/flags/bolivia.png');
     case 'bosniaandherzegovina':
      return require('./assets/flags/bosniaandherzegovina.png');
     case 'botswana':
      return require('./assets/flags/botswana.png');
     case 'brazil':
      return require('./assets/flags/brazil.png');
     case 'britishvirginislands':
      return require('./assets/flags/britishvirginislands.png');
     case 'brunei':
      return require('./assets/flags/brunei.png');
     case 'bulgaria':
      return require('./assets/flags/bulgaria.png');
     case 'burkinafaso':
      return require('./assets/flags/burkinafaso.png');
     case 'burundi':
      return require('./assets/flags/burundi.png');
     case 'caboverde':
      return require('./assets/flags/caboverde.png');
     case 'cambodia':
      return require('./assets/flags/cambodia.png');
     case 'cameroon':
      return require('./assets/flags/cameroon.png');
     case 'canada':
      return require('./assets/flags/canada.png');
     case 'car':
      return require('./assets/flags/car.png');
     case 'caribbeannetherlands':
      return require('./assets/flags/caribbeannetherlands.png');
     case 'caymanislands':
      return require('./assets/flags/caymanislands.png');
     case 'chad':
      return require('./assets/flags/chad.png');
     case 'channelislands':
      return require('./assets/flags/channelislands.png');
     case 'chile':
      return require('./assets/flags/chile.png');
     case 'china':
      return require('./assets/flags/china.png');
     case 'colombia':
      return require('./assets/flags/colombia.png');
     case 'comoros':
      return require('./assets/flags/comoros.png');
     case 'congo':
      return require('./assets/flags/congo.png');
     case 'costarica':
      return require('./assets/flags/costarica.png');
     case 'croatia':
      return require('./assets/flags/croatia.png');
     case 'cuba':
      return require('./assets/flags/cuba.png');
     case 'curaçao':
      return require('./assets/flags/curaçao.png');
     case 'cyprus':
      return require('./assets/flags/cyprus.png');
     case 'czechia':
      return require('./assets/flags/czechia.png');
     case 'denmark':
      return require('./assets/flags/denmark.png');
     case 'diamondprincess':
      return require('./assets/flags/diamondprincess.png');
     case 'djibouti':
      return require('./assets/flags/djibouti.png');
     case 'dominica':
      return require('./assets/flags/dominica.png');
     case 'dominicanrepublic':
      return require('./assets/flags/dominicanrepublic.png');
     case 'drc':
      return require('./assets/flags/drc.png');
     case 'ecuador':
      return require('./assets/flags/ecuador.png');
     case 'egypt':
      return require('./assets/flags/egypt.png');
     case 'elsalvador':
      return require('./assets/flags/elsalvador.png');
     case 'equatorialguinea':
      return require('./assets/flags/equatorialguinea.png');
     case 'eritrea':
      return require('./assets/flags/eritrea.png');
     case 'estonia':
      return require('./assets/flags/estonia.png');
     case 'eswatini':
      return require('./assets/flags/eswatini.png');
     case 'ethiopia':
      return require('./assets/flags/ethiopia.png');
     case 'faeroeislands':
      return require('./assets/flags/faeroeislands.png');
     case 'falklandislands':
      return require('./assets/flags/falklandislands.png');
     case 'fiji':
      return require('./assets/flags/fiji.png');
     case 'finland':
      return require('./assets/flags/finland.png');
     case 'france':
      return require('./assets/flags/france.png');
     case 'frenchguiana':
      return require('./assets/flags/frenchguiana.png');
     case 'frenchpolynesia':
      return require('./assets/flags/frenchpolynesia.png');
     case 'gabon':
      return require('./assets/flags/gabon.png');
     case 'gambia':
      return require('./assets/flags/gambia.png');
     case 'georgia':
      return require('./assets/flags/georgia.png');
     case 'germany':
      return require('./assets/flags/germany.png');
     case 'ghana':
      return require('./assets/flags/ghana.png');
     case 'gibraltar':
      return require('./assets/flags/gibraltar.png');
     case 'greece':
      return require('./assets/flags/greece.png');
     case 'greenland':
      return require('./assets/flags/greenland.png');
     case 'grenada':
      return require('./assets/flags/grenada.png');
     case 'guadeloupe':
      return require('./assets/flags/guadeloupe.png');
     case 'guatemala':
      return require('./assets/flags/guatemala.png');
     case 'guinea-bissau':
      return require('./assets/flags/guinea-bissau.png');
     case 'guinea':
      return require('./assets/flags/guinea.png');
     case 'guyana':
      return require('./assets/flags/guyana.png');
     case 'haiti':
      return require('./assets/flags/haiti.png');
     case 'honduras':
      return require('./assets/flags/honduras.png');
     case 'hongkong':
      return require('./assets/flags/hongkong.png');
     case 'hungary':
      return require('./assets/flags/hungary.png');
     case 'iceland':
      return require('./assets/flags/iceland.png');
     case 'india':
      return require('./assets/flags/india.png');
     case 'indonesia':
      return require('./assets/flags/indonesia.png');
     case 'iran':
      return require('./assets/flags/iran.png');
     case 'iraq':
      return require('./assets/flags/iraq.png');
     case 'ireland':
      return require('./assets/flags/ireland.png');
     case 'isleofman':
      return require('./assets/flags/isleofman.png');
     case 'israel':
      return require('./assets/flags/israel.png');
     case 'italy':
      return require('./assets/flags/italy.png');
     case 'ivorycoast':
      return require('./assets/flags/ivorycoast.png');
     case 'jamaica':
      return require('./assets/flags/jamaica.png');
     case 'japan':
      return require('./assets/flags/japan.png');
     case 'jordan':
      return require('./assets/flags/jordan.png');
     case 'kazakhstan':
      return require('./assets/flags/kazakhstan.png');
     case 'kenya':
      return require('./assets/flags/kenya.png');
     case 'kuwait':
      return require('./assets/flags/kuwait.png');
     case 'kyrgyzstan':
      return require('./assets/flags/kyrgyzstan.png');
     case 'laos':
      return require('./assets/flags/laos.png');
     case 'latvia':
      return require('./assets/flags/latvia.png');
     case 'lebanon':
      return require('./assets/flags/lebanon.png');
     case 'lesotho':
      return require('./assets/flags/lesotho.png');
     case 'liberia':
      return require('./assets/flags/liberia.png');
     case 'libya':
      return require('./assets/flags/libya.png');
     case 'liechtenstein':
      return require('./assets/flags/liechtenstein.png');
     case 'lithuania':
      return require('./assets/flags/lithuania.png');
     case 'luxembourg':
      return require('./assets/flags/luxembourg.png');
     case 'macao':
      return require('./assets/flags/macao.png');
     case 'madagascar':
      return require('./assets/flags/madagascar.png');
     case 'malawi':
      return require('./assets/flags/malawi.png');
     case 'malaysia':
      return require('./assets/flags/malaysia.png');
     case 'maldives':
      return require('./assets/flags/maldives.png');
     case 'mali':
      return require('./assets/flags/mali.png');
     case 'malta':
      return require('./assets/flags/malta.png');
     case 'marshallislands':
      return require('./assets/flags/marshallislands.png');
     case 'martinique':
      return require('./assets/flags/martinique.png');
     case 'mauritania':
      return require('./assets/flags/mauritania.png');
     case 'mauritius':
      return require('./assets/flags/mauritius.png');
     case 'mayotte':
      return require('./assets/flags/mayotte.png');
     case 'mexico':
      return require('./assets/flags/mexico.png');
     case 'micronesia':
      return require('./assets/flags/micronesia.png');
     case 'moldova':
      return require('./assets/flags/moldova.png');
     case 'monaco':
      return require('./assets/flags/monaco.png');
     case 'mongolia':
      return require('./assets/flags/mongolia.png');
     case 'montenegro':
      return require('./assets/flags/montenegro.png');
     case 'montserrat':
      return require('./assets/flags/montserrat.png');
     case 'morocco':
      return require('./assets/flags/morocco.png');
     case 'mozambique':
      return require('./assets/flags/mozambique.png');
     case 'mszaandam':
      return require('./assets/flags/mszaandam.png');
     case 'myanmar':
      return require('./assets/flags/myanmar.png');
     case 'namibia':
      return require('./assets/flags/namibia.png');
     case 'nepal':
      return require('./assets/flags/nepal.png');
     case 'netherlands':
      return require('./assets/flags/netherlands.png');
     case 'newcaledonia':
      return require('./assets/flags/newcaledonia.png');
     case 'newzealand':
      return require('./assets/flags/newzealand.png');
     case 'nicaragua':
      return require('./assets/flags/nicaragua.png');
     case 'niger':
      return require('./assets/flags/niger.png');
     case 'nigeria':
      return require('./assets/flags/nigeria.png');
     case 'northmacedonia':
      return require('./assets/flags/northmacedonia.png');
     case 'norway':
      return require('./assets/flags/norway.png');
     case 'oman':
      return require('./assets/flags/oman.png');
     case 'pakistan':
      return require('./assets/flags/pakistan.png');
     case 'palestine':
      return require('./assets/flags/palestine.png');
     case 'panama':
      return require('./assets/flags/panama.png');
     case 'papuanewguinea':
      return require('./assets/flags/papuanewguinea.png');
     case 'paraguay':
      return require('./assets/flags/paraguay.png');
     case 'peru':
      return require('./assets/flags/peru.png');
     case 'philippines':
      return require('./assets/flags/philippines.png');
     case 'poland':
      return require('./assets/flags/poland.png');
     case 'portugal':
      return require('./assets/flags/portugal.png');
     case 'qatar':
      return require('./assets/flags/qatar.png');
     case 'romania':
      return require('./assets/flags/romania.png');
     case 'russia':
      return require('./assets/flags/russia.png');
     case 'rwanda':
      return require('./assets/flags/rwanda.png');
     case 'réunion':
      return require('./assets/flags/réunion.png');
     case 's.korea':
      return require('./assets/flags/s.korea.png');
     case 'saintkittsandnevis':
      return require('./assets/flags/saintkittsandnevis.png');
     case 'saintlucia':
      return require('./assets/flags/saintlucia.png');
     case 'saintmartin':
      return require('./assets/flags/saintmartin.png');
     case 'saintpierremiquelon':
      return require('./assets/flags/saintpierremiquelon.png');
     case 'samoa':
      return require('./assets/flags/samoa.png');
     case 'sanmarino':
      return require('./assets/flags/sanmarino.png');
     case 'saotomeandprincipe':
      return require('./assets/flags/saotomeandprincipe.png');
     case 'saudiarabia':
      return require('./assets/flags/saudiarabia.png');
     case 'senegal':
      return require('./assets/flags/senegal.png');
     case 'serbia':
      return require('./assets/flags/serbia.png');
     case 'seychelles':
      return require('./assets/flags/seychelles.png');
     case 'sierraleone':
      return require('./assets/flags/sierraleone.png');
     case 'singapore':
      return require('./assets/flags/singapore.png');
     case 'sintmaarten':
      return require('./assets/flags/sintmaarten.png');
     case 'slovakia':
      return require('./assets/flags/slovakia.png');
     case 'slovenia':
      return require('./assets/flags/slovenia.png');
     case 'solomonislands':
      return require('./assets/flags/solomonislands.png');
     case 'somalia':
      return require('./assets/flags/somalia.png');
     case 'southafrica':
      return require('./assets/flags/southafrica.png');
     case 'southsudan':
      return require('./assets/flags/southsudan.png');
     case 'spain':
      return require('./assets/flags/spain.png');
     case 'srilanka':
      return require('./assets/flags/srilanka.png');
     case 'st.barth':
      return require('./assets/flags/st.barth.png');
     case 'st.vincent grenadines':
      return require('./assets/flags/st.vincent grenadines.png');
     case 'sudan':
      return require('./assets/flags/sudan.png');
     case 'suriname':
      return require('./assets/flags/suriname.png');
     case 'sweden':
      return require('./assets/flags/sweden.png');
     case 'switzerland':
      return require('./assets/flags/switzerland.png');
     case 'syria':
      return require('./assets/flags/syria.png');
     case 'taiwan':
      return require('./assets/flags/taiwan.png');
     case 'tajikistan':
      return require('./assets/flags/tajikistan.png');
     case 'tanzania':
      return require('./assets/flags/tanzania.png');
     case 'thailand':
      return require('./assets/flags/thailand.png');
     case 'timor-leste':
      return require('./assets/flags/timor-leste.png');
     case 'togo':
      return require('./assets/flags/togo.png');
     case 'trinidadandtobago':
      return require('./assets/flags/trinidadandtobago.png');
     case 'tunisia':
      return require('./assets/flags/tunisia.png');
     case 'turkey':
      return require('./assets/flags/turkey.png');
     case 'turksandcaicos':
      return require('./assets/flags/turksandcaicos.png');
     case 'uae':
      return require('./assets/flags/uae.png');
     case 'uganda':
      return require('./assets/flags/uganda.png');
     case 'uk':
      return require('./assets/flags/uk.png');
     case 'ukraine':
      return require('./assets/flags/ukraine.png');
     case 'uruguay':
      return require('./assets/flags/uruguay.png');
     case 'usa':
      return require('./assets/flags/usa.png');
     case 'uzbekistan':
      return require('./assets/flags/uzbekistan.png');
     case 'vanuatu':
      return require('./assets/flags/vanuatu.png');
     case 'vaticancity':
      return require('./assets/flags/vaticancity.png');
     case 'venezuela':
      return require('./assets/flags/venezuela.png');
     case 'vietnam':
      return require('./assets/flags/vietnam.png');
     case 'wallisandfutuna':
      return require('./assets/flags/wallisandfutuna.png');
     case 'westernsahara':
      return require('./assets/flags/westernsahara.png');
     case 'world':
      return require('./assets/flags/world.png');
     case 'yemen':
      return require('./assets/flags/yemen.png');
     case 'zambia':
      return require('./assets/flags/zambia.png');
     case 'zimbabwe':
      return require('./assets/flags/zimbabwe.png');
    default:
      return require("./assets/flags/world.png");
  }
}
