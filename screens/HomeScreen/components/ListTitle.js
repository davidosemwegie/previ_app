import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const ListTitle = (props) => {
    return(
    <View style={styles.container}>
        <Text style={styles.title} allowFontScaling={false}>{props.title}</Text>
    </View>
    )
    }
export default ListTitle;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 20
    },
    title: {
        fontFamily: "sf-rounded-semibold",
        fontSize: 30
    }
});