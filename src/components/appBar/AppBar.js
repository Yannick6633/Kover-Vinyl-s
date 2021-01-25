import React from 'react'

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import {View, Text, Button, ImageBackground,} from "react-native";

import styles from './styles.js';

const AppBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.title}>Koverteck</Text>
            </View>
        </View>

    )
}

export default AppBar;
