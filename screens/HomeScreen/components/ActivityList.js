import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";

import ActvityCard from './ActivityCard'

class ActvityList extends Component {

    data = [
        {
            activityId: 1,
            title: "Had Coffee",
            activityStatus: 0,
            lastDate: '18-12-2019',
            color: "#318FEB",
            streak: 2
        },
        {
            activityId: 2,
            title: "Took a walk",
            activityStatus: 1,
            lastDate: '18-12-2019',
            color: "#3BC09E",
            streak: 3
        },
        {
            activityId: 3,
            title: "Go to the gym",
            activityStatus: 2,
            lastDate: '18-12-2019',
            color: "#D33632",
            streak: 18
        }
    ]
    

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    // data={this.props.data}
                    data={this.data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <ActvityCard
                        title={item.title}
                        status = {item.activityStatus}
                        color = {item.color}
                        streak = {item.streak}
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
        //flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: "blue",
    }
});