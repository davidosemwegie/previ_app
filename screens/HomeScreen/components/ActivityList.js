import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";

import ActivityCard from './ActivityCard'

class ActvityList extends Component {

    resetActivity = (activityId, prevDate) => {
        const today = new Date();
        const year = today.getFullYear();      // 1980
        const month = today.getMonth() + 1;        // 6
        const date = today.getDate();          // 31

        const t = `${month}/${date}/${year}`

        const lastDate = new Date(prevDate).toDateString();
        const todayDate = new Date(t).toDateString();

        const isSame = lastDate === todayDate;

        if (isSame) {
            alert("The dates are the same")
        } else {
            alert("They are different")
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    // data={this.props.data}
                    data={this.props.data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <ActivityCard
                        extraData={this.state}
                        title={item.title}
                        daysMissed = {item.days}
                        color = {item.color}
                        lastDate={item.lastDate}
                        statusButtonPressed = {() => this.resetActivity(item.activityId, item.lastDate)}
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
        //sjustifyContent: 'center',
        // backgroundColor: 'salmon'
    }
});