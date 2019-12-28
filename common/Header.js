import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    TouchableOpacity
} from "react-native";

import PageTitle from './PageTitle'
import HedaerIcon from './HeaderIcon'
import * as colors from '../colors'
import HeaderIcon from "./HeaderIcon";

const Header = (props) => {

    componentDidMount = () => {
        this.headerHeight = 100

        if (Platform.OS == 'android') {
            this.headerHeight = 100 + StatusBar.currentHeight
        }
    };

    const { container, subTitle, headerMain, title } = styles
    return (
        <View style={container}>
            <View style={headerMain}>
                <View>
                    <Text style={title}>{props.title}</Text>
                </View>
                <HeaderIcon  {...props} />
            </View>
            <Text style={subTitle}>{props.subText}</Text>
        </View>
    )
}
export default Header;

const styles = StyleSheet.create({
    container: {
        height: 120,
        backgroundColor: colors.backgroundColor,
    },
    headerMain: {
        flexDirection: "row",
        justifyContent: 'flex-end',
        marginHorizontal: 20,
    },
    title: {
        marginTop: 65,
        fontSize: 40,
        fontFamily: "sf-rounded-heavy",
        fontWeight: '100',
        color: colors.mainText
    },
    subTitle: {
        fontFamily: 'sf-rounded-semibold',
        fontSize: 20,
        color: colors.darkgrey,
        marginTop: 10,
        marginLeft: 20
    }
})