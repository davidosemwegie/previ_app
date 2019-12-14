import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar
} from "react-native";

import PageTitle from './PageTitle'
import * as colors from '../colors'

const Header = (props) => {

    componentDidMount = () => {
        this.headerHeight = 100

        if (Platform.OS == 'android') {
            this.headerHeight = 100 + StatusBar.currentHeight
        }
    };

    const { container} = styles
    return (
        <View style={container}>
            <PageTitle title={props.title}/>
            {props.children}
        </View>
    )
}
export default Header;

const styles = StyleSheet.create({
    container: {
        height: 110,
        backgroundColor: colors.background
    }
})