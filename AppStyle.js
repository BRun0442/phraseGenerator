import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#ABC4AA',
        paddingVertical: '2em',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
    },

    headerTitle: {
        fontSize: '1.2em',
        textTransform: 'uppercase',
        color: '#675D50',
        fontWeight: '600',
    },

    container: {
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#F3DEBA',
    },

    main: {
        width: '90%',
        height: '75%',
        backgroundColor: '#A9907E',
        margin: 'auto',
        borderRadius: '10px',
    },

    textMain: {
        fontSize: '1em',
    },
  });

export default styles;