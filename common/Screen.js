import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";

import Header from './Header'

const Screen = (props) => {
    return (
        <ScrollView style={styles.container} >
            <Header {... props} />
            <View style={styles.contentView}>
                {props.children}
            </View>
        </ScrollView>
    )
}

// class Screen extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Header {... this.props} />
//                 <ContentView>
//                     <Text>Testing 1, 2, 3</Text>
//                 </ContentView>
//             </View>
//         );
//     }
// }
export default Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'space-around'
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    contentView: {
        //backgroundColor: 'salmon',
        paddingTop: 25,
        height: '100%',
        marginBottom: 20
    }
});