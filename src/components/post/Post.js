import React from 'react';
import {
    Text,
    Image,
    Pressable, View,
    Alert,
    Button
} from "react-native";
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

const Separator = () => (
    <View style={styles.separator} />
);

const Post = (props) => {

    const post = props.post;

    const navigation = useNavigation();

    const goToPostPage = () => {
        navigation.navigate('Post', {postId: post.id});
    }

    return (
        <View style={styles.cardView}>
        <Pressable onPress={goToPostPage} style={styles.container}>
            {/*Image*/}
            <Image
                style={styles.image}
                source={{uri: post.image}}/>

            {/*Band & album*/}
            <Text style={styles.band}>
                {post.title}
            </Text>

            {/*Price*/}
            <Text style={styles.prices}>
                {post.price} €
            </Text>
        </Pressable>
            <Separator />
        </View>

    );
};

export default Post;
