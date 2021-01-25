import React from 'react';
import {
    Text,
    Image,
    Pressable,
} from "react-native";
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';


const Post = (props) => {

    const post = props.post;

    const navigation = useNavigation();

    const goToPostPage = () => {
        navigation.navigate('Post', {postId: post.id});
    }

    return (
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
    );
};

export default Post;
