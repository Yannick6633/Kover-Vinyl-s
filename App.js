import React from 'react';
import { StatusBar, SafeAreaView  } from 'react-native';
import HomeScreen from "./src/screens/home/HomeScreen";
import Post from "./src/components/post/Post";

const App = (props) => {
  return (
      <>
          <StatusBar barStyle="dark-content"/>
          <SafeAreaView>
              {/*<HomeScreen />*/}
              <Post />
          </SafeAreaView>

      </>
  );
};

export default App;
