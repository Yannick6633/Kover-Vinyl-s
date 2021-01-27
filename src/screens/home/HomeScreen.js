import React, { useState } from 'react';
import { View, Pressable } from "react-native";
import styles from './styles';

import { useNavigation } from '@react-navigation/native';

import CarouselScreen from "../carousel/CarouselScreen";
import { Data } from "../../../assets/data/Data";

import GenderScreen from "../gender/GenderScreen";
import { Gender } from "../../../assets/data/Gender";

import {Appbar, Card, Paragraph, Title } from 'react-native-paper';
import { Platform } from 'react-native';

import { Searchbar } from 'react-native-paper';


const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const HomeScreen = () => {

    const navigation = useNavigation();

    const [showSearch, setShowSearch] = useState(false);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = React.useState('');

    setTimeout(() => {
        setLoading(false);
    }, 300)

    const onChangeSearch = query => setSearchQuery(query);


    return (
            <View>
                <Appbar.Header>
                    <Appbar.Content title="Koverteck" subtitle={'Petites annonces'} />
                    <Appbar.Action icon="magnify" onPress={() => { setShowSearch(!showSearch) }} />
                    <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
                </Appbar.Header>

                { showSearch &&
                <View style={styles.search}>
                    <Searchbar
                        placeholder="Recherche"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    /></View>
                }
                <View>
                    <CarouselScreen data={Data}/>
                </View>

                <View>
                    <GenderScreen data={Gender} />
                </View>

                {/*   <View>
                    <Pressable onPress={() => navigation.navigate('Search Results Page')}>
                        <Card>
                            <Card.Cover source={require('../../../assets/images/spirale.jpeg')}/>
                            <Card.Content>
                                <Title>Card title</Title>
                                <Paragraph>Card content</Paragraph>
                            </Card.Content>
                        </Card>
                    </Pressable>

                </View>*/}

        </View>
    );
};

export default HomeScreen;
