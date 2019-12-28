import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

import * as firebase from 'firebase'
import * as colors from '../../colors';


import * as common from '../../common/index'

class SettingsScreen extends Component {

    signOutUser = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <common.Screen title="Settings" headerIcon="md-close" headerIconPress={() => this.props.navigation.goBack()} >
                <Button title="Sign Out" onPress={() => this.signOutUser()} />
            </common.Screen>
        );
    }
}
export default SettingsScreen;

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // }
});