import React from 'react';
import { StatusBar, SafeAreaView  } from 'react-native';
import HomeScreen from "./src/screens/home/HomeScreen";
import Post from "./src/components/post/Post";
import SearchResultScreen from "./src/screens/searchResultsPage/SearchResultScreen";

import feed from "./assets/data/feed";

const post1 = feed[0];
const post2 = feed[1];

const App = () => {
  return (
      <>
          <StatusBar barStyle="dark-content"/>
          <SafeAreaView>
              {/*<HomeScreen />*/}
              {/*<Post post={post2}/>*/}
              <SearchResultScreen />

          </SafeAreaView>

      </>
  );
};

export default App;
