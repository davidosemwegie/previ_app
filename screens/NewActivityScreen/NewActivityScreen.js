import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    DatePickerIOS
} from "react-native";

import * as firebase from 'firebase'
import 'firebase/firestore';

import ColorPalette from 'react-native-color-palette'
import * as common from '../../common/index'
import * as colors from '../../colors'
import * as comp from './components/index'
import NewField from "./components/NewField";


class NewActivityScreen extends Component {

    colorPicker = [
        "#318FEB",
        "#3BC09E",
        "#D33632",
        "#E34C9F",
        "#FDCB6E",
        "#A29BFE",
        "#81ECEC",
        "#FD79A8",
        "#E17055",
        "#55EFC4",
        "#FF7675"
    ]

    state = {
        activityTitle: "",
        maxLength: 30,
        characterCounter: 0,
        chosenDate: new Date(),
        selectedColor: '#C0392B'
    }

    setDate = (newDate) => {
        this.setState({ chosenDate: newDate });
    }

    // saveButton = () => {

    //     const { email, displayName, uid } = firebase.auth().currentUser;

    //     const db = firebase.firestore();

    //     const activityTitle = this.state.activityTitle
    //     const chosenDate = new Date(this.state.chosenDate);
    //     const year = chosenDate.getFullYear();      // 1980
    //     const month = chosenDate.getMonth() + 1;        // 6
    //     const date = chosenDate.getDate();          // 31
    //     const lastDate = `${month}/${date}/${year}`
    //     const color = this.state.selectedColor

    //     db.collection("activities").add({
    //         title: activityTitle,
    //         lastDate: lastDate,
    //         color: color,
    //         type: 2,
    //         uid
    //     })
    //     .then(function(docRef) {
    //         console.log("Document written with ID: ", docRef.id);
    //     })
    //     .catch(function(error) {
    //         console.error("Error adding document: ", error);
    //     });

    // }

    saveButton = () => {

        const { email, displayName, uid } = firebase.auth().currentUser;


        const activityTitle = this.state.activityTitle
        const chosenDate = new Date(this.state.chosenDate);
        const year = chosenDate.getFullYear();      // 1980
        const month = chosenDate.getMonth() + 1;        // 6
        const date = chosenDate.getDate();          // 31
        const lastDate = `${month}/${date}/${year}`
        const color = this.state.selectedColor
        const type = 2
        var list = ""

        if (type == 1) {
            list = "buildList"
        } else if (type == 2) {
            list = "quitList"
        }

        const db = firebase.database().ref(`/activities/${uid}/${list}`);

        const key = db.push().key
        db.child(key).set({
            title: activityTitle,
            lastDate: lastDate,
            color: color
        })

        this.props.navigation.goBack()

    }

    componentDidMount() {

        
    }

    render() {

        const {params} = this.props.navigation.state;

        const { container, textInputContainer, activityTitleInput } = styles
        return (
            <common.Screen title="Add Activity" headerIcon="md-close" headerIconPress={() => this.props.navigation.goBack()} >
                <View style={container}>
                    <NewField title="What activity would you like to track?">
                        <View style={textInputContainer}>
                            <View style={{ flex: 7, height: 50 }}>
                                <TextInput
                                    style={activityTitleInput}
                                    onChangeText={activityTitle => {
                                        this.setState({ activityTitle }, () => {
                                            this.setState({ characterCounter: this.state.activityTitle.length })
                                        })
                                        //const length = this.state.activityTitle.length
                                        this.setState({ characterCounter: this.state.activityTitle.length })
                                        //console.log(this.state.activityTitle.length)
                                    }}
                                    autoCapitalize="none"
                                    maxLength={30}
                                    fontSize={15}
                                />
                            </View>
                            <View style={{ flex: 1, height: 50, justifyContent: "center", alignItems: "center" }}>
                                <Text>{this.state.characterCounter}/{this.state.maxLength}</Text>
                            </View>
                        </View>
                    </NewField>
                    <NewField title="Start Date:">
                        <DatePickerIOS
                            mode='date'
                            date={this.state.chosenDate}
                            onDateChange={this.setDate}
                        />
                    </NewField>
                    <ColorPalette
                        onChange={color => this.setState({ selectedColor: color })}
                        value={this.state.selectedColor}
                        colors={this.colorPicker}
                        title={"Controlled Color Palette:"}
                        titleStyles={{
                            fontFamily: "sf-rounded-semibold",
                            fontSize: 18
                        }}
                    />
                    <comp.SaveButton onPress={() => this.saveButton()} buttonColor={this.state.selectedColor} />
                </View>
            </common.Screen>
        );
    }
}
export default NewActivityScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        height: '80%',
        flexDirection: "column",
        justifyContent: "space-around"
    },
    textInputContainer: {
        flex: 1,
        backgroundColor: colors.lightgrey,
        height: 50,
        borderRadius: 20,
        flexDirection: "row",
        paddingHorizontal: 10,
        fontFamily: "sf-rounded-semibold",
        fontSize: 18
    },
    activityTitleInput: {
        flex: 1
    }

});