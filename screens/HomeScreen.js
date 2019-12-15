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

        // var user = firebase.auth().currentUser;

        // user.sendEmailVerification().then(function () {
        //     alert("You have been sent a verification email")
        // }).catch(function (error) {
        //     alert(error.message)
        // });


        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName })
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }



    render() {

        const { container, instructionText } = styles
        return (
            <View style={container}>
                <common.Header title={`Hello ${this.state.displayName}`} iconType="md-menu" iconPress={() => this.props.navigation.navigate("NewActivity")}/>

                <common.ContentView>
                    <Text style={instructionText} allowFontScaling={false}>{`Click the '+' button at the bottom of the screem to add a new activity`}</Text>
                    
                </common.ContentView>

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
        backgroundColor: colors.background
    },
    instructionText: {
        color: colors.darkgrey,
        fontFamily: 'sf-rounded-semibold',
        fontSize: 20
    }
});