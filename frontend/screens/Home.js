import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Auth } from "aws-amplify";

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
