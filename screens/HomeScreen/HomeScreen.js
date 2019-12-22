import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
} from "react-native";
import * as firebase from 'firebase'
import * as colors from '../../colors';
import { TOGGLE } from '../../colors'

import * as common from '../../common/index'

import ActivityCard from './components/ActivityCard'
import ActivityList from './components/ActivityList'

class HomeScreen extends Component {

    state = {
        email: "",
        displayName: "",
        date: ""
    }


    componentDidMount() {

        // var user = firebase.auth().currentUser;

        // user.sendEmailVerification().then(function () {
        //     alert("You have been sent a verification email")
        // }).catch(function (error) {
        //     alert(error.message)
        // });


        const { email11, displayName } = firebase.auth().currentUser;

        //this.setState({ email, displayName })

        this.setState({ email: "david@gmail.com", displayName: "David" })


        /* INITALIING DATE */

        const today = new Date();

        const todayString = today.toDateString();

        const year = today.getFullYear();      // 1980
        const month = today.getMonth();         // 6
        const date =  today.getDate();          // 31
        const day = today.getDay();           // 4



        // this.setState({ date: `${date}-${month}-${year}` })
        this.setState({ date: todayString })
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }

    /* DATA OBJECT THAT SHOULD BE RETURNED FROM THE DATABASE */


    render() {

        const { container, instructionText, date } = styles
        return (
            <View style={container}>
                <common.Header title={`Hello ${this.state.displayName}`} iconType="md-menu" iconPress={() => this.props.navigation.navigate("NewActivity")} />
                <Text style={date}>{this.state.date}</Text>
                <View>
                    {/* <ActivityCard title="Had Coffee" date="07-12-2019" streak="4" unit = "days" /> */}
                    <ActivityList />
                </View>

                {/* <common.ContentView>

                    <Text>{this.state.date}</Text>
                    <Text style={instructionText} allowFontScaling={false}>{`Click the '+' button at the bottom of the screem to add a new activity`}</Text>
                </common.ContentView> */}

                {/* <Button title="Sign Out" onPress={() => this.signOutUser()} /> */}
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
    },
    date:{ 
        fontFamily: 'sf-rounded-semibold',
        fontSize: 20,
        color: colors.darkgrey,
        marginTop: 10
    }
});