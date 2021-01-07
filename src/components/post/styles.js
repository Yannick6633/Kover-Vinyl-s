import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
       margin: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 3,
        resizeMode: 'cover',
    },
    band: {
        marginVertical: 10,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
    },
    types: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 15,
        lineHeight: 26,
        color: '#5c5656',
    },
    prices: {
        marginVertical: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textDecorationLine: 'underline',
    }
});

export default styles;
