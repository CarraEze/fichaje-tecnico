import { StyleSheet } from "react-native"

export const globalStyles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: "#000",
    },
    textWhite: {
        color: '#fff',
    },
    textBlack: {
        color: '#000',
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        color: 'white',
        borderRadius: 5,
    }
});
