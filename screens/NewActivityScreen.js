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
            <View style={styles.container}>
                <common.Header title="Add Activity" iconType="md-close" iconPress = {() => this.props.navigation.goBack()}/>
            </View>
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