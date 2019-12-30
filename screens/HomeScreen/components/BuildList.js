import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";
import ListTitle from './ListTitle'
import ActivityCard from './ActivityCard'

const BuildList = (props) => {
    return (
        <View style={styles.container}>
            <ListTitle title="Build" />
            <FlatList
                // data={this.props.data}
                data={props.data}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) =>
                    <ActivityCard
                        title={item.title}
                        daysMissed={item.days}
                        color={item.color}
                        lastDate={item.lastDate}
                        statusButtonPressed={() => this.resetActivity(item.activityId, item.lastDate)}
                    />
                }
                keyExtractor={(item) => item.activityId}
            />
        </View>
    )
}
export default BuildList;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 15,
        //backgroundColor: 'pink'
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});