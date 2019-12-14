import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Button,
    TextInput
} from "react-native";
import * as Google from 'expo-google-app-auth';
import * as firebase from 'firebase'

class LoginScreen extends Component {

    // onSignIn = (googleUser) => {
    //     console.log('Google Auth Response', googleUser);
    //     // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    //     var unsubscribe = firebase.auth().onAuthStateChanged(function (firebaseUser) {
    //         unsubscribe();
    //         // Check if we are already signed-in Firebase with the correct user.
    //         if (!isUserEqual(googleUser, firebaseUser)) {
    //             // Build Firebase credential with the Google ID token.
    //             var credential = firebase.auth.GoogleAuthProvider.credential(
    //                 googleUser.id_token,
    //                 googleUser.accessToken);
    //             // googleUser.getAuthResponse().id_token);
    //             // Sign in with credential from the Google user.
    //             firebase.auth().signInWithCredential(credential)
    //                 .then(() => {
    //                     console.log("user is signed in")
    //                 })
    //                 .catch(function (error) {
    //                     // Handle Errors here.
    //                     var errorCode = error.code;
    //                     var errorMessage = error.message;
    //                     // The email of the user's account used.
    //                     var email = error.email;
    //                     // The firebase.auth.AuthCredential type that was used.
    //                     var credential = error.credential;
    //                     // ...
    //                 });
    //         } else {
    //             console.log('User already signed-in Firebase.');
    //         }
    //     }.bind(this));
    // }

    // isUserEqual = (googleUser, firebaseUser) => {
    //     if (firebaseUser) {
    //         var providerData = firebaseUser.providerData;
    //         for (var i = 0; i < providerData.length; i++) {
    //             if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
    //                 providerData[i].uid === googleUser.getBasicProfile().getId()) {
    //                 // We don't need to reauth the Firebase connection.
    //                 return true;
    //             }
    //         }
    //     }
    //     return false;
    // }

    // signInWithGoogleAsync = async () => {
    //     try {
    //         const result = await Google.logInAsync({
    //             //androidClientId: YOUR_CLIENT_ID_HERE,
    //             behavour: 'web',
    //             iosClientId: '544189483067-sfqftifj1du8nb4g1e6og2jf4t8h6mm8.apps.googleusercontent.com',
    //             scopes: ['profile', 'email'],
    //         });

    //         if (result.type === 'success') {
    //             this.onSignIn(result)
    //             return result.accessToken;
    //         } else {
    //             return { cancelled: true };
    //         }
    //     } catch (e) {
    //         return { error: true };
    //     }
    // }

    state = {
        email: "",
        password: "",
        errorMessage: null
    }

    handleLogin = () => {
        const {email, password} = this.state
        
        firebase.auth().signInWithEmailAndPassword(email, password).catch(error => this.setState({errorMessage: error.message}))
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.greeting}>Previ</Text>

                <View style={styles.error}>
                    <Text style={{color: "red"}}>{this.state.errorMessage}</Text>
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput style={styles.input} onChangeText = {email => this.setState({email})} autoCapitalize="none"></TextInput>
                    </View>

                    <View>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput style={styles.input} secureTextEntry autoCapitalize="none" onChangeText = {password => this.setState({password})}></TextInput>
                    </View>
                </View>

                <Button title="Log in" onPress={()=> this.handleLogin()}/>

                <Button title="Sign up" onPress={()=> this.props.navigation.navigate("Register")}/>
            </View>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        textAlign: "center"
    },
    error: {
        height: 72,
        alignItems: "center",
        justifyContent: "center"
    },
    form: {
        marginBottom: 50,
        marginHorizontal:40
    },
    inputTitle: {
        marginTop: 20,
        color: "#8A8F9E",
        fontSize: 15,
        textTransform: "uppercase" 
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "black"
    }
});