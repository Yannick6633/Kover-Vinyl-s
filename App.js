import React from 'react';
import { StatusBar, SafeAreaView  } from 'react-native';
import HomeScreen from "./src/screens/home/HomeScreen";

const App = (props) => {
  return (
      <>
          <StatusBar barStyle="dark-content"/>
          <SafeAreaView>
              <HomeScreen />
          </SafeAreaView>

      </>
  );
};

export default App;
