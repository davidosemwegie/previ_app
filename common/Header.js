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

    const { container } = styles
    return (
        <View style={container}>
            <View>
                <PageTitle {... props} />
            </View>
            <HeaderIcon  {... props}/>
            {props.children}
        </View>
    )
}
export default Header;

const styles = StyleSheet.create({
    container: {
        height: 110,
        backgroundColor: colors.background,
        flexDirection: "row",
        justifyContent: "flex-start"
    }
})