import React from 'react';
import {
    Text,
    View,
    ImageBackground,
    Pressable,
} from "react-native";
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Pressable
                style={styles.searchButton}
                onPress={() => navigation.navigate('Search Results Page')}>
                <Fontisto name="search" size={25} color={'#f15454'} />
                <Text style={styles.searchButtonText}>What do you want..?</Text>
            </Pressable>

            <ImageBackground
                source={require('../../../assets/images/spirale.jpeg')}
                style={styles.image}>
                <Text style={styles.title}>Kover Vinyl's</Text>

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

