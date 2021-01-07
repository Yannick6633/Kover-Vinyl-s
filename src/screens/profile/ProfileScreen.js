import React from 'react';
import {Text, View, Pressable} from "react-native";

const ProfileScreen = () => {

    return (
        <View style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Pressable
                style={{
                    width: '100%',
                    height: 40,
                    backgroundColor: '#c3c3c3',
                    justifyContent: 'center', alignItems: 'center'
                }}>
                <Text>Log out</Text>
            </Pressable>
        </View>
    );
};

export default ProfileScreen;
