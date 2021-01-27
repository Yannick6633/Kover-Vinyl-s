import React from 'react';
import {
    Text,
    Image,
    Pressable, View,
} from "react-native";
import styles from './style.js';
import { useNavigation } from '@react-navigation/native';


const Gender = (props) => {

    const gender = props.gender;

    const navigation = useNavigation();

    const goToGenderPage = () => {
        navigation.navigate('Gender', {genderId: gender.id});
    }

    return (
        <View style={styles.cardView}>
            <Pressable onPress={goToGenderPage} style={styles.container}>

                <Image
                    style={styles.image}
                    source={{uri: post.image}}/>

                <Text style={styles.genre} />

            </Pressable>
        </View>
    );
};

export default Gender;
