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
                <Text>LoadingScreen</Text>
                <ActivityIndicator size = "large"></ActivityIndicator>
            </View>
        );
    }
}
export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});