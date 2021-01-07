import React from 'react';
import {Text, View, Image} from "react-native";
import styles from './styles.js';

const Post = (props) => {

    const post = props.post;

    return (
        <View style={styles.container}>
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
            <Text style={styles.description} numberOfLines={3}>
                {post.description}
            </Text>

            {/*Price*/}
            <Text style={styles.prices}>
                {post.price} €
            </Text>
        </View>
    );
};

export default Post;
