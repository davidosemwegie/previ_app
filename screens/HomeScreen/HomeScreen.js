import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList
} from "react-native";
import * as firebase from 'firebase'
import * as colors from '../../colors';


import * as common from '../../common/index'

import AddActivityButton from './components/AddActivityButton'
import * as comp from './components/index'
import { NavigationEvents } from 'react-navigation';
// import BuildList from './components/BuildList'
// import QuitList from './components/QuitList'

const HomeScreenRender = (props) => {
    if (this.state.data == []) {
        return (
            <Text style={instructionText} allowFontScaling={false}>{`Click the '+' button at the bottom of the screem to add a new activity`}</Text>
        )
    } else {
        <ActivityList data={this.state.data} />
    }
}

class HomeScreen extends Component {

    data = [
        {
            activityId: 1,
            title: "Had Coffee",
            days: 0,
            lastDate: '12/28/2019',
            color: "#318FEB",
            streak: 2
        },
        {
            activityId: 2,
            title: "Took a walk",
            days: 1,
            lastDate: '12/11/2019',
            color: "#3BC09E",
            streak: 3
        },
        {
            activityId: 3,
            title: "Go to the gym",
            days: 2,
            lastDate: '12/12/2019',
            color: "#D33632",
            streak: 18
        }, {
            activityId: 4,
            title: "Had Coffee",
            days: 0,
            lastDate: '12/14/2019',
            color: "#318FEB",
            streak: 2
        },
        // {
        //     activityId: 5,
        //     title: "Took a walk",
        //     days: 1,
        //     lastDate: '18-12-2019',
        //     color: "#3BC09E",
        //     streak: 3
        // },
        // {
        //     activityId: 6,
        //     title: "Go to the gym",
        //     days: 2,
        //     lastDate: '18-12-2019',
        //     color: "#D33632",
        //     streak: 18
        // },
        // {
        //     activityId: 7,
        //     title: "Had Coffee",
        //     days: 0,
        //     lastDate: '18-12-2019',
        //     color: "#318FEB",
        //     streak: 2
        // },
        // {
        //     activityId: 8,
        //     title: "Took a walk",
        //     days: 1,
        //     lastDate: '18-12-2019',
        //     color: "#3BC09E",
        //     streak: 3
        // },
        // {
        //     activityId: 9,
        //     title: "Go to the gym",
        //     days: 2,
        //     lastDate: '18-12-2019',
        //     color: "#D33632",
        //     streak: 18
        // },
        // {
        //     activityId: 10,
        //     title: "Had Coffee",
        //     days: 0,
        //     lastDate: '18-12-2019',
        //     color: "#318FEB",
        //     streak: 2
        // },
        // {
        //     activityId: 11,
        //     title: "Took a walk",
        //     days: 1,
        //     lastDate: '18-12-2019',
        //     color: "#3BC09E",
        //     streak: 3
        // },
        // {
        //     activityId: 12,
        //     title: "Go to the gym",
        //     days: 2,
        //     lastDate: '18-12-2019',
        //     color: "#D33632"
        // }
    ]

    // data = [
    // ]


    state = {
        email: "",
        name: "",
        date: "",
        data: [],
        list: []
    }


    componentDidMount() {


        // var user = firebase.auth().currentUser;

        // user.sendEmailVerification().then(function () {
        //     alert("You have been sent a verification email")
        // }).catch(function (error) {
        //     alert(error.message)
        // });


        const { email, displayName } = firebase.auth().currentUser;


        /* INITALIING DATE */

        const today = new Date();

        const todayString = today.toDateString();

        this.setState({ date: todayString })
        this.setState({ data: this.data })
        this.setState({ email: email })
        this.setState({ email })
        this.setState({ name: displayName })

        const { navigation } = this.props;
        //Adding an event listner om focus
        //So whenever the screen will have focus it will set the state to zero
        this.focusListener = navigation.addListener('didFocus', () => {
            this.setState({ count: 0 });
        });

        //alert(displayName)
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }



    render() {

        const { container, instructionText, date } = styles

        if (this.state.data.length == 0) {
            return (
                <View style={{ flex: 1 }}>
                    <common.Screen title={`Hello ${this.state.name}`} headerIcon="md-settings" headerIconPress={() => this.props.navigation.navigate("Settings")} subText={`${this.state.date}`}>
                        <Text style={instructionText} allowFontScaling={false}>{`Click the '+' button at the bottom of the screem to add a new activity`}</Text>
                    </common.Screen>
                    <AddActivityButton addActivityButtonPressed={() => this.props.navigation.navigate("NewActivity")} />
                </View>
            )
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <common.Screen title={`Hello ${this.state.name}`} headerIcon="md-settings" headerIconPress={() => this.props.navigation.navigate("Settings")} subText={`${this.state.date}`}>
                        {/* <comp.BuildList data={this.state.data} /> */}
                        <comp.QuitList data={this.state.data} />
                    </common.Screen  >
                    <AddActivityButton addActivityButtonPressed={() => this.props.navigation.navigate("NewActivity")} />
                </View>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                <common.Screen title={`Hello ${this.state.displayName}`} headerIcon="md-settings" headerIconPress={() => this.props.navigation.navigate("Settings")} subText={`${this.state.date}`}>
                    <ActivityList data={this.state.data} />
                </common.Screen>
                <AddActivityButton />
            </View>

            // <View style={container}>


            //     <common.Header title={`Hello ${this.state.displayName}`} iconType="md-menu" iconPress={() => this.props.navigation.navigate("NewActivity")} />
            //     <Text style={date}>{this.state.date}</Text>
            //     <View style={{
            //         height: 740
            //         }}>
            //         {/* <ActivityCard title="Had Coffee" date="07-12-2019" streak="4" unit = "days" /> */}
            //         <ActivityList />
            //     </View>

            //     {/* <common.ContentView>

            //         <Text>{this.state.date}</Text>
            //         <Text style={instructionText} allowFontScaling={false}>{`Click the '+' button at the bottom of the screem to add a new activity`}</Text>
            //     </common.ContentView> */}

            //     {/* <Button title="Sign Out" onPress={() => this.signOutUser()} /> */}
            // </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    instructionText: {
        color: colors.darkgrey,
        fontFamily: 'sf-rounded-semibold',
        fontSize: 20,
        marginTop: 25,
        marginHorizontal: 20
    },
    date: {
        fontFamily: 'sf-rounded-semibold',
        fontSize: 20,
        color: colors.darkgrey,
        marginTop: 10,
        marginLeft: 20
    }
});