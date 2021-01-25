import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 90,
        padding: 12,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#000',
    },
    textView: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        shadowColor: '#e30a0a',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        fontWeight: "bold",
        marginLeft: 20,
        marginTop: 25,
    },


});

export default styles;



