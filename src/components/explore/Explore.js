import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import feed from "../../../assets/data/feed";
import Post from "../../components/post/Post";
import {useNavigation} from "@react-navigation/native";

const Explore = (props) => {
    const post = props.post;

    const navigation = useNavigation();

    const goToPostPage = () => {
        navigation.navigate('Post', {postId: post.id});
    }

        return (
            <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.post}
                           style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text>{this.props.name}</Text>
                </View>
            </View>
        );

}
export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
