import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import SearchResultScreen from "../screens/searchResultsPage/SearchResultScreen";

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name={'Welcome'}
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name={'SearchResults'}
                component={SearchResultScreen}
                options={{
                    title: '...',
                }}
            />
        </Stack.Navigator>
    );
};

export default Router;
