import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Auth } from "aws-amplify";
import axios from "axios";
import { TextInput } from "react-native-gesture-handler";

class Verification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.navigation.state.params.username,
            email: this.props.navigation.state.params.email,
            verificationCode: ""
        };
    }

    onChangeText(key, value) {
        this.setState({
            [key]: value
        });
    }

    verify() {
        const { username, verificationCode } = this.state;
        console.log(this.state);
        let success = true;

        try {
            Auth.confirmSignUp(username, verificationCode);
        } catch (err) {
            success = false;
            console.log("error signing up...", err);
        }

        if (success) {
            this.props.navigation.navigate("Home");
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Enter Verification Code</Text>
                <View>
                    <TextInput
                        placeholder="Code Here"
                        onChangeText={value => this.onChangeText("verificationCode", value)}
                    />
                </View>
                <Button title="Verify" onPress={() => this.verify()} />
            </View>
        );
    }
}
export default Verification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
