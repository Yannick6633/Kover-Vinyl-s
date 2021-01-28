import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from "../screens/profile/ProfileScreen";

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from "react-native-vector-icons/Feather";
import Saved from "../screens/saved/Saved";
import SearchResultScreen from "../screens/searchResultsPage/SearchResultScreen";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
            activeTintColor: '#f15454'
        }}>
            <Tab.Screen
                name={'Home'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="home" size={25} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name={"Explore"}
                component={SearchResultScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <Fontisto name="search" size={25} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name={'Saved'}
                component={Saved}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="heart-o" size={25} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name={'Messages'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <Feather name="message-square" size={25} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name={"Profile"}
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <EvilIcons name="user" size={25} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default HomeTabNavigator;
