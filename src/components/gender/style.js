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
    genre: {
        marginVertical: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#db0707',
        textDecorationLine: 'underline',
    }
});

export default styles;
