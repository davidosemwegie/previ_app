import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import BlinkView from 'react-native-blink-view'

import { Ionicons } from '@expo/vector-icons';
import * as colors from '../../../colors'
import { auth } from "firebase";
import { AuthSession } from "expo";

const CardMessages = (props) => {

    const daysMissed = props.days
    /* 
    0 = nuetral
    1 = winning 
    2 = loosing
    */

    if (props.daysMissed == 0) {
        return (
            <Text style={props.style}>Not completed today</Text>
        )
    } else if (props.daysMissed == 1) {
        return (
            <Text style={props.style}>You missed yesterday</Text>
        )
    } else if (props.daysMissed >= 2) {
        return (
            <Text style={props.style}>You have missed {props.daysMissed} days</Text>
        )
    } 
}

const StatusIndicatior = (props) => {

    const today = new Date();
    const year = today.getFullYear();      // 1980
    const month = today.getMonth() + 1;        // 6
    const date = today.getDate();          // 31

    const t = `${month}/${date}/${year}`

    const lastDate = new Date(props.lastDate).toDateString();
    const todayDate = new Date(t).toDateString();

    const isSame = lastDate === todayDate;

    const { good, warning, bad, incomplete } = styles

    if (props.daysMissed == 0) {
        if (isSame) {
            return (
                <TouchableOpacity style={incomplete} onPress={props.statusButtonPressed} ></TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity style={good} onPress={props.statusButtonPressed} ></TouchableOpacity>
            )
        }
    } else if (props.daysMissed == 1) {
        return (
            <TouchableOpacity onPress={props.statusButtonPressed}>
                <BlinkView delay={1000} style={warning} />
            </TouchableOpacity>
        )
    } else if (props.daysMissed >= 2) {
        return (
            <TouchableOpacity onPress={props.statusButtonPressed} >
                <BlinkView delay={500} style={bad} />
            </TouchableOpacity>
        )
    }
}

// class ActivityCard extends Component {

//     state = {
//         icon: "ios-checkmark-circle-outline",
//         isBlinking: false
//     }

//     render() {



//         // componentDidMount = () => {
//         //     this.setState({icon: "ios-checkmark-circle-outline"})
//         // }

//         const { container,
//             detailRow,
//             title,
//             message,
//             statusCircleOuter } = styles


//         return (
//             <View
//                 style={{
//                     marginTop: 25,
//                     marginHorizontal: 20,
//                     height: 100,
//                     //width:'90%',
//                     paddingHorizontal: 20,
//                     paddingVertical: 10,
//                     flexDirection: "column",
//                     justifyContent: "space-around",
//                     backgroundColor: `${this.props.color}`,
//                     borderRadius: 20,
//                     shadowColor: "#000",
//                     shadowOffset: {
//                         width: 0,
//                         height: 1,
//                     },
//                     shadowOpacity: 0.40,
//                     shadowRadius: 4,

//                     elevation: 5,
//                 }}>
//                 <View style={detailRow}>
//                     <Text style={title}>{this.props.title}</Text>
//                     {/* <Text style={lastCompleted}>{`Last Completed: \n ${this.props.date}`}</Text> */}
//                     <View style={statusCircleOuter}>
//                         <StatusIndicatior daysMissed={this.props.daysMissed}/>
//                     </View>
//                 </View>
//                 <View style={detailRow}>
//                     <CardMessages style={message} daysMissed={this.props.daysMissed} streak={this.props.streak} />
//                     {/* <Text style={streak}>{props.streak} {props.unit}</Text> */}
//                     {/* <TouchableOpacity onPress={() => this.setState({ icon: "ios-checkmark-circle" })}>
//                         <Ionicons name={`${this.state.icon}`} size={30} color={colors.icon} />
//                     </TouchableOpacity> */}
//                 </View>
//             </View>
//         )
//     }
// }

class ActivityCard extends Component {

    render() {



        // componentDidMount = () => {
        //     this.setState({icon: "ios-checkmark-circle-outline"})
        // }

        const { container,
            detailRow,
            title,
            message,
            statusCircleOuter,
            detailColumn } = styles


        return (
            <View
                style={[container, {backgroundColor: `${this.props.color}`, shadowColor: `${this.props.color}`}]}
                >
                <View style={detailColumn}>
                    <Text style={title}>{this.props.title}</Text>
                    <CardMessages style={message} daysMissed={this.props.daysMissed} streak={this.props.streak} />
                </View>
                <View style={detailRow}>
                    {/* <View style={statusCircleOuter}>
                        <StatusIndicatior daysMissed={this.props.daysMissed} {... this.props} />
                    </View> */}
                    {/* <Text style={streak}>{props.streak} {props.unit}</Text> */}
                    {/* <TouchableOpacity onPress={() => this.setState({ icon: "ios-checkmark-circle" })}>
                        <Ionicons name={`${this.state.icon}`} size={30} color={colors.icon} />
                    </TouchableOpacity> */}
                </View>
            </View>
        )
    }
}
export default ActivityCard;

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        marginHorizontal: 20,
        height: 80,
        marginBottom:10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 20,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.70,
        shadowRadius: 5,
        elevation: 5,

    },
    detailRow: {
        justifyContent: 'center'

    },
    detailColumn: {
        flexDirection: "column",
        justifyContent: "space-between",
    },
    title: {
        fontFamily: "sf-rounded-heavy",
        fontSize: 25,
        color: colors.text.light
    },
    message: {
        fontFamily: "sf-rounded-heavy",
        fontSize: 18,
        color: colors.text.light,
        justifyContent: 'center',
        marginTop: 10
    },
    lastCompleted: {
        fontSize: 12,
        fontFamily: "sf-rounded-heavy",
        color: "white"
    },
    statusCircleOuter: {
        height: 40,
        width: 40,
        borderRadius: 40 / 2,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    good: {
        height: 28,
        width: 28,
        borderRadius: 28 / 2,
        backgroundColor: `${colors.status.good}`,
        shadowColor: `${colors.status.good}`,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.70,
        shadowRadius: 5,
        elevation: 5,
    },
    warning: {
        height: 28,
        width: 28,
        borderRadius: 28 / 2,
        backgroundColor: `${colors.status.warning}`,
        shadowColor: `${colors.status.warning}`,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.70,
        shadowRadius: 5,
        elevation: 5,
    },
    bad: {
        height: 28,
        width: 28,
        borderRadius: 28 / 2,
        backgroundColor: `${colors.status.bad}`,
        shadowColor: `${colors.status.bad}`,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.70,
        shadowRadius: 5,
        elevation: 5,
    },
    incomplete: {
        height: 28,
        width: 28,
        borderRadius: 28 / 2,
        backgroundColor: `${colors.status.incomplete}`,
        shadowColor: `${colors.status.incomplete}`,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.70,
        shadowRadius: 5,
        elevation: 5,
    }
});