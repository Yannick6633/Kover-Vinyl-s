import React from 'react';
import {Text, ScrollView, Image, Button, Alert, View, Pressable, FlatList} from "react-native";
import styles from './styles.js';


const Separator = () => (
    <View style={styles.separator}/>
);

const DetailPost = (props) => {

    const post = props.post;

    return (
        <View>
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
                <Text style={styles.description}> <Separator/>
                    {post.description}
                </Text>

                <Text style={styles.quality}>
                    State : {post.quality}
                </Text>

                {/*Price*/}
                <Text style={styles.prices}>
                    {post.price} €
                </Text>
                <Button style={styles.buttons} color="#000" title="Acheter"
                        onPress={() => Alert.alert('Button with adjusted color pressed')}/>
            </ScrollView>
            <Separator/>
        </View>

    );
};

export default DetailPost;
