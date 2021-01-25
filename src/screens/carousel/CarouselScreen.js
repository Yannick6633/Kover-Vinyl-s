import React from 'react';
import {
    FlatList,
    View,
} from "react-native";

import feedCarousel from "../../../assets/data/feedCarousel";
import Carousel from "../../components/carousel/Carousel";


const CarouselScreen = () => {


    return (
        <View>
            <FlatList
                data={feedCarousel}
                renderItem={({item}) => <Carousel carousel={item}/>}
            />
        </View>
    );
};

export default CarouselScreen;
