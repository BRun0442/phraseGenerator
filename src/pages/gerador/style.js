import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#ABC4AA',
        paddingTop: 50,
        paddingBottom: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },

    headerTitle: {
        fontSize: 30,
        textTransform: 'uppercase',
        color: '#675D50',
        fontWeight: '600',
        textAlign: 'center',
    },

    container: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        backgroundColor: '#F3DEBA',
    },

    mainContainer: {
        height: '60%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20%',
    },  

    phraseContainer: {
        width: '90%',
        backgroundColor: '#A9907E',
        borderRadius: 10,
        paddingVertical: 30,
    },

    phrase: {
        fontSize: 22,
        margin: 'auto',
        textAlign: 'center',
    },

    button: {
        backgroundColor: '#A9907E',
        padding: 15,
        paddingHorizontal: 25,
        borderRadius: 5,
        textTransform: 'uppercase',
    },

    buttonText: {
        fontWeight: '500',
    }
  });

export default styles;