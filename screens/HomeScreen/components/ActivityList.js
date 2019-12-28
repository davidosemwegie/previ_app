import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";

import ActivityCard from './ActivityCard'

class ActvityList extends Component {

    data = [
        {
            activityId: 1,
            title: "Had Coffee",
            days: 0,
            lastDate: '18-12-2019',
            color: "#318FEB",
            streak: 2
        },
        {
            activityId: 2,
            title: "Took a walk",
            days: 1,
            lastDate: '18-12-2019',
            color: "#3BC09E",
            streak: 3
        },
        {
            activityId: 3,
            title: "Go to the gym",
            days: 2,
            lastDate: '18-12-2019',
            color: "#D33632",
            streak: 18
        },{
            activityId: 4,
            title: "Eat breakfast",
            days: 18,
            lastDate: '18-12-2019',
            color: "#318FEB",
            streak: 2
        },
        {
            activityId: 5,
            title: "Took a walk",
            days: 1,
            lastDate: '18-12-2019',
            color: "#3BC09E",
            streak: 3
        },
        {
            activityId: 6,
            title: "Go to the gym",
            days: 2,
            lastDate: '18-12-2019',
            color: "#D33632",
            streak: 18
        },
        {
            activityId: 7,
            title: "Had Coffee",
            days: 0,
            lastDate: '18-12-2019',
            color: "#318FEB",
            streak: 2
        },
        {
            activityId: 8,
            title: "Took a walk",
            days: 1,
            lastDate: '18-12-2019',
            color: "#3BC09E",
            streak: 3
        },
        {
            activityId: 9,
            title: "Go to the gym",
            days: 2,
            lastDate: '18-12-2019',
            color: "#D33632",
            streak: 18
        },
        {
            activityId: 10,
            title: "Had Coffee",
            days: 0,
            lastDate: '18-12-2019',
            color: "#318FEB",
            streak: 2
        },
        {
            activityId: 11,
            title: "Took a walk",
            days: 1,
            lastDate: '18-12-2019',
            color: "#3BC09E",
            streak: 3
        },
        {
            activityId: 12,
            title: "Go to the gym",
            days: 2,
            lastDate: '18-12-2019',
            color: "#D33632"
        }
    ]
    

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    // data={this.props.data}
                    data={this.props.data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <ActivityCard
                        title={item.title}
                        daysMissed = {item.days}
                        color = {item.color}
                        date={item.lastDate}
                             />
                    }
                    keyExtractor={(item) => item.activityId}
                />
            </View>
        );
    }
}
export default ActvityList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: 'salmon'
    }
});