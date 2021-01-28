import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Dimensions, FlatList, Animated, Pressable} from 'react-native';

import GenderItem from './GenderItem'
import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get('window');

function infiniteScroll(dataList) {
    const numberOfData = dataList.length
    //let scrollValue = 0, scrolled = 0
}

const GenderScreen = ({data}) => {

    const navigation = useNavigation();

    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)
    const [dataList, setDataList] = useState(data)

    useEffect(() => {
        setDataList(data)
        infiniteScroll(dataList)
    })

    if (data && data.length) {
        return (
            <View style={{backgroundColor: '#ece2e2'}}>

                    <FlatList
                              data={data}
                              keyExtractor={(item, index) => 'key' + index}
                              horizontal
                              pagingEnabled
                              scrollEnabled
                              snapToAlignment="center"
                              scrollEventThrottle={16}
                              decelerationRate={"fast"}
                              showsHorizontalScrollIndicator={false}
                              renderItem={({item}) => {
                                  return <GenderItem item={item}/>
                              }}
                              onScroll={Animated.event(
                                  [{nativeEvent: {contentOffset: {x: scrollX}}}]
                              )}
                    />

                <View style={styles.dotView}>
                    {data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={i}
                                style={{
                                    opacity,
                                    height: 10,
                                    width: 10,
                                    backgroundColor: '#595959',
                                    margin: 8,
                                    borderRadius: 5
                                }}
                            />
                        )
                    })}

                </View>
            </View>
        )
    }

    console.log('Please provide Images')
    return null
}

const styles = StyleSheet.create({
    dotView: {flexDirection: 'row', justifyContent: 'center'}
})

export default GenderScreen;
