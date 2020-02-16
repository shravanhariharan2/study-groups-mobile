import React, { Component } from "react";
import {
    Text,
    View,
    Button,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity
} from "react-native";
import { Auth } from "aws-amplify";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signedIn: false,
            username: "",
            password: ""
        };

        this.handleLogin = this.handleLogin.bind(this);
    }

    onChangeText(key, value) {
        this.setState({
            [key]: value
        });
    }

    handleLogin() {
        const { username, password } = this.state;
        Auth.signIn({ username, password });
        this.props.navigation.navigate("Home");
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.formWrapper}>
                    <Text style={styles.title}> Login </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={value => this.onChangeText("username", value)}
                        placeholder="Username"
                        placeholderTextColor="#777"
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={value => this.onChangeText("password", value)}
                        placeholder="Password"
                        placeholderTextColor="#777"
                    />
                </View>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.button} onPress={() => this.handleLogin()}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 24,
        backgroundColor: "#b3cde0",
        alignItems: "center",
        justifyContent: "center"
    },
    formWrapper: {
        marginTop: 100,
        alignItems: "center"
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
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 120
    },
    button: {
        width: 180,
        height: 60,
        borderWidth: 2,
        borderColor: "#63ace5",
        marginBottom: 30,
        backgroundColor: "#63ace5",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100
    },
    buttonText: {
        fontSize: 16
    }
});
