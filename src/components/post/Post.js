import React from 'react';
import {Text, View, Image} from "react-native";
import styles from './styles.js';

const Post = () => {
    return (
        <View style={styles.container}>
            {/*Image*/}
            <Image
                style={styles.image}
                source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/61gUWjfhxsL._SL1000_.jpg'}}/>

            {/*Band & album*/}
            <Text style={styles.band}>
                Ibrahim Maalouf - Red & Black Light
            </Text>

            {/*Type*/}
            <Text style={styles.types}>
                Jazz :
            </Text>

            {/*Description*/}
            <Text style={styles.description} numberOfLines={2}>
                Enregistré à Ivry sur seine (France) avec Eric
                Legnini (Claviers),
                François Delporte (Guitare) et Stéphane Galland (Batterie), cet album est avant tout une envie de
                dessiner l’importance et la nécessaire complexité des choses et des personnes essentielles
            </Text>

            {/*Price*/}
            <Text style={styles.prices}>
                20 €
            </Text>
        </View>
    );
};

export default Post;
