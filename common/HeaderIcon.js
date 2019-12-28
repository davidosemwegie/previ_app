import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import * as colors from '../colors'

const HeaderIcon = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.headerIconPress}>
                <Ionicons name={props.headerIcon} size={35} color={colors.icon} />
            </TouchableOpacity>
        </View>
    )
}
export default HeaderIcon;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: 65
    }
});