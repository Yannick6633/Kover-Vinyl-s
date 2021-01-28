import React, {useState} from 'react';
import {View, Pressable} from "react-native";
import styles from './styles';

import {useNavigation} from '@react-navigation/native';

import CarouselScreen from "../carousel/CarouselScreen";
import {Data} from "../../../assets/data/Data";

import GenderScreen from "../gender/GenderScreen";
import {Gender} from "../../../assets/data/Gender";
import {Card, Paragraph, Text, Title} from "react-native-paper";
import {ScrollView, Image} from "react-native";

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <ScrollView style={{backgroundColor: '#ece2e2'}}>

            <View style={styles.cardView}>
                <Image style={styles.image} source={require('../../../assets/images/spirale.jpeg')}/>
                <View style={styles.textView}>
                    <Text style={styles.itemTitle}>Les derniers ajouts..</Text>
                    <Text style={styles.itemDescription}>Fonce !</Text>
                </View>
            </View>

            <CarouselScreen data={Data}/>

            <View style={styles.cardView}>
                <Image style={styles.image} source={require('../../../assets/images/spirale.jpeg')}/>
                <View style={styles.textView}>
                    <Text style={styles.itemTitle}>Nos catégories..</Text>
                    <Text style={styles.itemDescription}>Fonce !</Text>
                </View>
            </View>

            <GenderScreen data={Gender}/>

            <View style={styles.cardView}>
                <Pressable onPress={() => navigation.navigate('Search Results Page')}>
                    <Image style={styles.image} source={require('../../../assets/images/spirale.jpeg')}/>
                    <View style={styles.textView}>
                        <Text style={styles.itemTitle}>Notre sélection d'articles..</Text>
                        <Text style={styles.itemDescription}>Fonce !</Text>
                    </View>
                </Pressable>
            </View>

        </ScrollView>
    );
};

export default HomeScreen;
