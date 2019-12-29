import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import * as colors from '../../../colors'

const NewField = (props) => {

    const { container, title } = styles

    return (
        <View style={container}>
            <Text allowFontScaling={false} style={title}>{props.title}</Text>
            {props.children}
        </View>
    )
}
export default NewField;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
        //marginVertical: 7.5,
        //backgroundColor: "salmon"
    },
    title: {
        fontFamily: 'sf-rounded-semibold',
        color: colors.text.black,
        fontSize: 19,
        marginBottom: 15
    }
});