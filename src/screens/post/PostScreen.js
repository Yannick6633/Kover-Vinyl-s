import React from "react";
import { View } from "react-native";
import DetailPost from "../../components/detailPost/DetailPost";
import { useRoute } from '@react-navigation/native';

import places from '../../../assets/data/feed';

const PostScreen = () => {

    const route = useRoute();

    const post = places.find(place => place.id === route.params.postId);

    return (
        <View style={{backgroundColor: '#ece2e2'}}>
            <DetailPost post={post} />
        </View>
    );
};

export default PostScreen;
