import React from 'react';
import {
    Text,
    View,
    ImageBackground,
    Pressable, FlatList, ScrollView,
} from "react-native";
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

import CarouselScreen from "../carousel/CarouselScreen";
import AppBar from "../../components/appBar/AppBar";



const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View>
            <>
                <AppBar />
            </>

            <Pressable
                style={styles.searchButton}
                onPress={() => navigation.navigate('Search Results Page')}>
                <Fontisto name="search" size={25} color={'#f15454'} />
                <Text style={styles.searchButtonText}>What do you want..?</Text>
            </Pressable>

            <ImageBackground
                source={require('../../../assets/images/spirale.jpeg')}
                style={styles.image}>
                <Text style={styles.title}>N°1 in used vinyl</Text>

                <Pressable
                    style={styles.button}
                    onPress={() => console.warn('Sign up Btn clicked')}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>

            </ImageBackground>
        </View>
    );
};

export default HomeScreen;

