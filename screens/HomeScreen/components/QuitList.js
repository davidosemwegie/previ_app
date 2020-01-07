// import React from "react";
// import { 
//     View,
//     Text,
//     StyleSheet,
//     FlatList
// } from "react-native";

// import ListTitle from './ListTitle'
// import ActivityCard from './ActivityCard'

// const QuitList = (props) => {
//     return(
//     <View style={styles.container}>
//         <ListTitle title="Quit"/>
//         <FlatList
//                     // data={this.props.data}
//                     data={props.data}
//                     showsVerticalScrollIndicator={false}
//                     renderItem={({ item }) =>
//                         <ActivityCard
//                         title={item.title}
//                         daysMissed = {item.days}
//                         color = {item.color}
//                         lastDate={item.lastDate}
//                         statusButtonPressed = {() => this.resetActivity(item.activityId, item.lastDate)}
//                              />
//                     }
//                     keyExtractor={(item) => item.activityId}
//                 />
//     </View>
//     )
//     }
// export default QuitList;

// const styles = StyleSheet.create({
//     container: {
//         margin: 20,
//         //backgroundColor: "salmon"
//         // alignItems: 'center',
//         // justifyContent: 'center'
//     }
// });


import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";
import { withNavigationFocus } from 'react-navigation';

import ListTitle from './ListTitle'
import QuitCard from './QuitCard'

import * as firebase from 'firebase'
import 'firebase/firestore';

class QuitList extends Component {
    state = {
        data: []
    }

    componentDidMount() {

        const { navigation } = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            // The screen is focused
            // Call any action
            var that = this
        const { email, displayName, uid } = firebase.auth().currentUser;
        var quitList = []

        const db = firebase.database().ref(`/activities/${uid}/quitList`);

        db.once('value')
            .then(function (snapshots) {
                snapshots.forEach(function (data) {

                    const activityId = data.key
                    const title = data.val().title
                    const lastDate = data.val().lastDate
                    const color = data.val().color


                    //Calculate Date Difference

                    const today = new Date();
                    const date1 = new Date(lastDate);
                    const date2 = today;
                    const diffTime = Math.abs(date2 - date1);
                    const streak = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                    const record = {
                        activityId,
                        title,
                        lastDate,
                        color,
                        streak
                    }


                    quitList.push(record)
                })

                that.setState({ data: quitList })
            })
        });

        var that = this
        const { email, displayName, uid } = firebase.auth().currentUser;
        var quitList = []

        const db = firebase.database().ref(`/activities/${uid}/quitList`);

        db.once('value')
            .then(function (snapshots) {
                snapshots.forEach(function (data) {

                    const activityId = data.key
                    const title = data.val().title
                    const lastDate = data.val().lastDate
                    const color = data.val().color


                    //Calculate Date Difference

                    const today = new Date();
                    const date1 = new Date(lastDate);
                    const date2 = today;
                    const diffTime = Math.abs(date2 - date1);
                    const streak = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                    const record = {
                        activityId,
                        title,
                        lastDate,
                        color,
                        streak
                    }


                    quitList.push(record)
                })

                that.setState({ data: quitList })
            })
    }

    componentWillUnmount() {
        // Remove the event listener before removing the screen from the stack
        this.focusListener.remove();
    }


    // componentDidMount() {
    //     const { email, displayName, uid } = firebase.auth().currentUser;

    //     var quitList = []

    //     const db = firebase.firestore().collection("activities").where("uid", "==", `${uid}`).where('type', "==", 2);

    //     db.get()
    //         .then(function (querySnapshot) {
    //             querySnapshot.forEach(function (doc) {
    //                 // doc.data() is never undefined for query doc snapshots

    //                 const activityId = doc.id
    //                 const title = doc.data().title
    //                 const lastDate = doc.data().lastDate
    //                 const color = doc.data().color


    //                 //Calculate Date Difference

    //                 const today = new Date();
    //                 const date1 = new Date(lastDate);
    //                 const date2 = today;
    //                 const diffTime = Math.abs(date2 - date1);
    //                 const streak = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    //                 const record = [
    //                     {
    //                         activityId,
    //                         title,
    //                         lastDate,
    //                         color,
    //                         streak
    //                     }
    //                 ]


    //                 quitList.push(record)

    //                 console.log(record)

    //             });
    //         })
    //         .catch(function (error) {
    //             console.log("Error getting documents: ", error);
    //         });

    //     this.setState({data: quitList})

    //     console.log(quitList)
    // }

    render() {
        return (
            <View style={styles.container}>
                <ListTitle title="Quit" />
                <FlatList
                    // data={this.props.data}
                    data={this.state.data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <QuitCard
                            title={item.title}
                            streak={item.streak}
                            color={item.color}
                            lastDate={item.lastDate}
                            statusButtonPressed={() => this.resetActivity(item.activityId, item.lastDate)}
                        />
                    }
                    keyExtractor={(item) => item.activityId}
                />
            </View>
        );
    }
}
export default withNavigationFocus(QuitList);

const styles = StyleSheet.create({
    container: {
        //margin: 20,
        //backgroundColor: "salmon"
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});