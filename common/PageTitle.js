import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar
} from "react-native";

import * as colors from '../colors'

const PageTitle = (props) => {

    componentDidMount  = () => {
        this.headerHeight = 100

        if (Platform.OS == 'android') {
            this.headerHeight = 100 + StatusBar.currentHeight
        }
    }

    const {container, title} = styles

    return (
        <View>
        <Text style={title} allowFontScaling={false}>{props.title}</Text>
    </View>
    )
}
export default PageTitle;

const styles = StyleSheet.create({
    title:{
        marginTop: 65,
        //marginLeft: 15,
        fontSize: 40,
        fontFamily: "sf-rounded-heavy",
        fontWeight: '100',
        color: colors.mainText
    }
});