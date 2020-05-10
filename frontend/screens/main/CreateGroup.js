import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class CreateGroup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>CreateGroup</Text>
            </View>
        );
    }
}
export default CreateGroup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});