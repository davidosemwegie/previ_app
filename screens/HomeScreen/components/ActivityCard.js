import React, { Component }  from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { Ionicons } from '@expo/vector-icons';
import * as colors from '../../../colors'

const CardMessages = (props) => {
    const status = props.status

    /* 
    0 = nuetral
    1 = winning 
    2 = loosing
    */

    if (props.status == 0) {
        return (
            <Text style={props.style}>Just Started</Text>
        )
    } else if (props.status == 1) {
        return (
            <Text style={props.style}>{props.streak} days in a row</Text>
        )
    } else if (props.status == 2) {
        return (
            <Text style={props.style}>{props.streak} days ago</Text>
        )
    }
}

class ActivityCard extends Component  {

    state = {
        icon: "ios-checkmark-circle-outline"
    }

    render() {



        // componentDidMount = () => {
        //     this.setState({icon: "ios-checkmark-circle-outline"})
        // }

        const { container,
            detailRow,
            title,
            streakStyle } = styles


        return (
            <View style={{
                marginTop: 25,
                height: 100,
                paddingHorizontal: 20,
                paddingVertical: 10,
                flexDirection: "column",
                justifyContent: "space-around",
                backgroundColor: `${this.props.color}`,
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation: 5,
            }}>
                <View style={detailRow}>
                    <Text style={title}>{this.props.title}</Text>
                    <Text>{this.props.date}</Text>
                </View>
                <View style={detailRow}>
                    <CardMessages style={streakStyle} status={this.props.status} streak={this.props.streak} />
                    {/* <Text style={streak}>{props.streak} {props.unit}</Text> */}
                    <TouchableOpacity onPress={() => this.setState({icon: "ios-checkmark-circle"})}>
                        <Ionicons name={`${this.state.icon}`} size={40} color={colors.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default ActivityCard;

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        height: 100,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "column",
        justifyContent: 'space-between',
        backgroundColor: '#318FEB',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
    },
    detailRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontFamily: "sf-rounded-heavy",
        fontSize: 30,
        color: "white"
    },
    streakStyle: {
        fontFamily: "sf-rounded-heavy",
        fontSize: 25,
        color: "white",
        justifyContent: 'center',
        marginTop: 5
        // backgroundColor: 'yellow'
    }
});