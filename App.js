import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
    StatusBar,
    ScrollView, View, Platform
} from 'react-native';

import Router from './src/navigations/Router';
import {Appbar, Searchbar} from "react-native-paper";
import styles from "./src/screens/home/styles";


const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const App = () => {

    const [showSearch, setShowSearch] = useState(false);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = React.useState('');

    setTimeout(() => {
        setLoading(false);
    }, 300)

    const onChangeSearch = query => setSearchQuery(query);

  return (
      <>
          <Appbar.Header>
              <Appbar.Content title="Koverteck" subtitle={'Petites annonces'} />
              <Appbar.Action icon="magnify" onPress={() => { setShowSearch(!showSearch) }} />
              <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
          </Appbar.Header>

          { showSearch &&
          <View style={styles.search}>
              <Searchbar
                  placeholder="Recherche"
                  onChangeText={onChangeSearch}
                  value={searchQuery}
              /></View>
          }
          <StatusBar
              backgroundColor='#FFFFFF'
              barStyle="dark-content"/>
          <Router />
      </>
  );
};

export default App;
