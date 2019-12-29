import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromBottom, fromTop } from 'react-navigation-transitions';

import * as firebase from 'firebase'

import * as Font from 'expo-font';
Font.loadAsync({
  'sf-rounded-semibold': require('./assets/fonts/SF_Font_Rounded.ttf'),
  'sf-rounded-heavy': require('./assets/fonts/SF-Pro-Rounded-Heavy.ttf'),
});

/* SCREEN IMPORTS */
import * as screens from './screens/index'
import { fromDebug } from 'bytebuffer';



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


/* HANDLING TRANSISITIONS */
const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];
 
  // Custom transitions go there
  if (prevScene
    && prevScene.route.routeName === 'Home'
    && nextScene.route.routeName === 'NewActivity') {
    return fromBottom();
  } else if (prevScene
    && prevScene.route.routeName === 'NewActivity'
    && nextScene.route.routeName === 'Home') {
    return fromTop();
  }
}

const AppStack = createStackNavigator({
  Home: screens.HomeScreen,
  NewActivity: screens.NewActivityScreen,
  Settings: screens.SettingsScreen
},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: true,
  },
  transitionConfig: (nav) => handleCustomTransition(nav)
})

const AuthStack = createStackNavigator({
  Login: screens.LoginScreen,
  Register: screens.RegisterScreen
},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: true,
  }
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

