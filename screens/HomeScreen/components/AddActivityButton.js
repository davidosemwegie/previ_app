import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import * as colors from '../../../colors'
import { Ionicons } from '@expo/vector-icons';

const AddActivityButton = (props) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={props.addActivityButtonPressed}>
            <Ionicons name="md-add" size={40} color="#FFFFFF" />
        </TouchableOpacity>

    )
}
export default AddActivityButton;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: colors.addbutton,
        height: 50,
        width: 50,
        borderRadius: 25,
        alignSelf: "center",
        paddingTop: 5,
        marginBottom: 25,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 10,
        elevation: 5,
        position: "absolute",
        bottom: 0
    },
    buttonText: {
        color: colors.text.light,
        fontFamily: 'sf-rounded-semibold',
        fontSize: 20
    }
});