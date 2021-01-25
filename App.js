import 'react-native-gesture-handler';
import React from 'react';
import {
    StatusBar,
    ScrollView
} from 'react-native';

import Router from './src/navigations/Router';

const App = () => {
  return (
      <>
          <StatusBar
              backgroundColor='#FFFFFF'
              barStyle="dark-content"/>
          <Router />
      </>
  );
};

export default App;
