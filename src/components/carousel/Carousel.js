import React from 'react';
import {
    Text,
    Image,
    Pressable,
} from "react-native";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


const Carousel = (props) => {

    const carousel = props.carousel;

    const navigation = useNavigation();

    const goToPostPage = () => {
        navigation.navigate('Carousel', {carouselId: carousel.id});
    }

    return (
        <Pressable onPress={goToPostPage} style={styles.container}>
            {/*Image*/}
            <Image
                style={styles.image}
                source={{uri: carousel.image}}/>
        </Pressable>
    );
};

export default Carousel;
