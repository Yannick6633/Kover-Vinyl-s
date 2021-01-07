import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchResultScreen from "../screens/searchResultsPage/SearchResultScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";

import HomeTabNavigator from "./HomeTabNavigator";

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"HomeScreen"}
                    component={HomeTabNavigator}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name={"Search Results Page"}
                    component={SearchResultScreen}
                    options={{
                        title: "Seeking your happiness"
                    }}
                />

                <Stack.Screen
                    name={"Profile"}
                    component={ProfileScreen}
                    options={{
                        title: "Your Profile"
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
