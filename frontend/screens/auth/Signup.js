import React, { Component } from "react";
import { Text, View, Button, StyleSheet, TextInput, KeyboardAvoidingView } from "react-native";
import axios from "axios";
import { Auth } from "aws-amplify";

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: ""
        };
        this.onChangeText = this.onChangeText.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    onChangeText(key, value) {
        this.setState({
            [key]: value
        });
    }

    handleSignUp = () => {
        const { username, password, email } = this.state;
        Auth.signUp({ username, password, attributes: { email } });
        this.props.navigation.navigate("Verification", { username: this.state.username });
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Text style={styles.title}> Sign Up </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={value => this.onChangeText("username", value)}
                    placeholder="Username"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={value => this.onChangeText("email", value)}
                    placeholder="E-mail"
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={value => this.onChangeText("password", value)}
                    placeholder="Password"
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder="Confirm Password"
                />
                <Button title="Sign Up" onPress={() => this.handleSignUp()} />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 24,
        backgroundColor: "#e8e8e8",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 60
    },
    input: {
        borderColor: "#000",
        borderBottomWidth: 2,
        padding: 10,
        width: 220,
        marginBottom: 30
    }
});
