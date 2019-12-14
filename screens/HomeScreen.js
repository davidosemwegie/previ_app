import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import * as firebase from 'firebase'

class HomeScreen extends Component {

    state = {
        email: "",
        displayName: ""
    }

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;


        const name = displayName

        this.setState({ email, displayName})
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hi {this.state.displayName}</Text>

                <Button title="Sign Out" onPress={() => this.signOutUser()} />
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});