import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
       margin: 20,
    },
    image: {
        flex: 1,
        width: '100%',
        aspectRatio: 3 / 3,
        resizeMode: 'cover',
        borderWidth: 1,
        borderRadius: 10,
        top: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    band: {
        fontSize: 22,    margin: 10,
        marginVertical: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    prices: {
        marginVertical: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#db0707',
        textDecorationLine: 'underline',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#171616',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default styles;
