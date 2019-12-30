import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator
} from "react-native";

import firebase from 'firebase';

class LoadingScreen extends Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth")
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.loadingText}>Please wait while we get everything ready for you</Text>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
}
export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    loadingText: {
        //marginTop: 32,
        fontSize: 35,
        textAlign: "center",
        //fontFamily: "sf-rounded-heavy",
        marginVertical: 20
    }
});