// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import * as firebase from 'firebase'

/* SCREEN IMPORTS */
import * as screens from './screens/index'

var firebaseConfig = {
  apiKey: "AIzaSyAR7KvV0jPoxk7iQAq2WDO47eJ7FCF-qQc",
  authDomain: "previ-4a58d.firebaseapp.com",
  databaseURL: "https://previ-4a58d.firebaseio.com",
  projectId: "previ-4a58d",
  storageBucket: "previ-4a58d.appspot.com",
  messagingSenderId: "107790620509",
  appId: "1:107790620509:web:adc20192324c9b6abc3ab4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: screens.HomeScreen
})

const AuthStack = createStackNavigator({
  Login: screens.LoginScreen,
  Register: screens.RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: screens.LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)

