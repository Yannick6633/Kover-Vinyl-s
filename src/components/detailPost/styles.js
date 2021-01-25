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
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5,
        marginVertical: 30,

        fontSize: 16,
        color: '#000',
    },
    types: {
        fontSize: 15,
        fontWeight: 'bold',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        marginBottom: 5,
    },
    description: {
        fontSize: 15,
        lineHeight: 26,
        color: '#5c5656',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowRadius: 3,
        marginBottom: 5,
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
    },
    longDescription: {
        marginVertical: 20,
        fontSize: 16,
        lineHeight: 24,
    }
});

export default styles;
