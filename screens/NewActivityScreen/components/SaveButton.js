import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import * as colors from '../../../colors'

const SaveButton = (props) => {
    return(
    <TouchableOpacity 
    style={{
        height: 45,
       width: 120,
       alignSelf: "center",
       backgroundColor: `${props.buttonColor}`,
       borderRadius: 20,
       alignItems: "center",
       justifyContent: 'center'
    }} 
    onPress={props.onPress}>
        <Text 
        allowFontScaling={false}
        style={{
            fontFamily: "sf-rounded-heavy",
            fontSize: 20,
            fontWeight: '900',
            color: colors.text.light
        }}
        >SAVE</Text>
    </TouchableOpacity>
    )
    }
export default SaveButton;

const styles = StyleSheet.create({

});