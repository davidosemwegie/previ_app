import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import * as common from '../common/index'
import * as colors from '../colors'

class NewActivityScreen extends Component {
    render() {
        return (
            <common.Screen title="Add Activity" headerIcon="md-close" headerIconPress={() => this.props.navigation.goBack()} >
                
            </common.Screen>
        );
    }
}
export default NewActivityScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        backgroundColor: colors.background
    }
});