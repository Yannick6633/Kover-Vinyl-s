import React from 'react';
import {
    Text,
    View,
    ImageBackground,
    Pressable,
} from "react-native";
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = (props) => {


    return (
        <View>
            <Pressable
                style={styles.searchButton}
                onPress={() => console.warn('Search Btn clicked')}>
                <Fontisto name="search" size={25} color={'#f15454'} />
                <Text style={styles.searchButtonText}>What do you want..?</Text>
            </Pressable>

            <ImageBackground
                source={require('../../../assets/images/spirale.jpeg')}
                style={styles.image}>
                <Text style={styles.title}>Kover Vinyl's</Text>
                
                <Pressable
                    style={styles.button}
                    onPress={() => console.warn('Explore Btn clicked')}>
                    <Text style={styles.buttonText}>Close to your home</Text>
                </Pressable>
            </ImageBackground>
        </View>
    );
};

export default HomeScreen;
