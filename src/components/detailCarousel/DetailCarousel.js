import React from 'react';
import {Text, ScrollView, Image} from "react-native";
import styles from './styles.js';

const DetailCarousel = (props) => {

    const post = props.post;

    return (
        <ScrollView style={styles.container}>
            {/*Image*/}
            <Image
                style={styles.image}
                source={{uri: post.image}}/>

            {/*Band & album*/}
            <Text style={styles.band}>
                {post.title}
            </Text>

            {/*Type*/}
            <Text style={styles.types}>
                {post.genre}
            </Text>

            {/*Description*/}
            <Text style={styles.description}>
                {post.description}
            </Text>

            <Text style={styles.quality}>
                State : {post.quality}
            </Text>

            {/*Price*/}
            <Text style={styles.prices}>
                {post.price} €
            </Text>
        </ScrollView>
    );
};

export default DetailCarousel;
