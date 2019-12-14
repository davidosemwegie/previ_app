import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import * as firebase from 'firebase'
import * as colors from '../colors';
import { TOGGLE } from '../colors'

import * as common from '../common/index'

class HomeScreen extends Component {

    state = {
        email: "",
        displayName: ""
    }

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;


        const name = displayName

        this.setState({ email, displayName })
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }

    render() {

        const { container, instructionText } = styles
        return (
            <View style={container}>
                <common.Header title={`Hello ${this.state.displayName}`} />

                <common.ContentView>
                    <Text style={instructionText} allowFontScaling={false}>{`Oh no! It seems like you have an active previ :( \n\nClick the '+' button at the bottom of the screem to add a new activity`}</Text>
                    
                </common.ContentView>


                {/* <Button title="ToggleDarkMode" onPress={() => TOGGLE()}/> */}

                <Button title="Sign Out" onPress={() => this.signOutUser()} />
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: colors.background
    },
    instructionText: {
        color: colors.darkgrey,
        fontFamily: 'sf-rounded-semibold',
        fontSize: 20
    }
});