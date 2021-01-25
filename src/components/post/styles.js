import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
       margin: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 3,
        resizeMode: 'cover',
        borderWidth: 1,
        borderRadius: 10,
        top: 20,
    },
    band: {
        fontSize: 22,
        marginVertical: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
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
    quality: {
        marginVertical: 10,
        fontSize: 18,
        color: '#f10a0a'
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
