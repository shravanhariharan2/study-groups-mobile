import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class SelectCourses extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>SelectCourses</Text>
            </View>
        );
    }
}
export default SelectCourses;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});