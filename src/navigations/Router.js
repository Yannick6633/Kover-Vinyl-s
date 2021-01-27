import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchResultScreen from "../screens/searchResultsPage/SearchResultScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";

import HomeTabNavigator from "./HomeTabNavigator";
import PostScreen from "../screens/post/PostScreen";
import DetailPost from "../components/detailPost/DetailPost";

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"Home"}
                    component={HomeTabNavigator}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name={"Search Results Page"}
                    component={SearchResultScreen}
                    options={{
                        title: "Articles",
                    }}
                />

                <Stack.Screen
                    name={"Profile"}
                    component={ProfileScreen}
                    options={{
                        title: "Your Profile"
                    }}
                />

                <Stack.Screen
                    name={"Post"}
                    component={PostScreen}
                    options={{
                        title: "Detail article"
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
