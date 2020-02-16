import React, { Component } from "react";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    Alert
} from "react-native";
import { Auth } from "aws-amplify";

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
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
        // check empty username
        if (this.state.username == "") {
            Alert.alert("Username cannot be empty");
        }
        // check empty email
        else if (this.state.email == "") {
            Alert.alert("E-mail cannot be empty");
        }
        // check empty passwords
        else if (this.state.password == "" || this.state.confirmPassword == "") {
            Alert.alert("Passwords can not be empty!");
        }
        // check pass > 8 characters
        else if (this.state.password.length < 8 || this.state.confirmPassword.length < 8) {
            Alert.alert("Password length must be greater than 8 characters");
        }
        // check if passwords match
        else if (this.state.password == this.state.confirmPassword) {
            const { username, password, email } = this.state;
            Auth.signUp({ username, password, attributes: { email } });
            this.props.navigation.navigate("Verification", {
                username: this.state.username,
                email: this.state.email
            });
        } else {
            Alert.alert("Passwords do not match!");
        }
    };

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container} enabled>
                <View style={styles.formWrapper}>
                    <Text style={styles.title}> Sign Up </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={value => this.onChangeText("username", value)}
                        placeholder="Username"
                        placeholderTextColor="#777"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={value => this.onChangeText("email", value)}
                        placeholder="E-mail"
                        placeholderTextColor="#777"
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={value => this.onChangeText("password", value)}
                        placeholder="Password"
                        placeholderTextColor="#777"
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={value => this.onChangeText("confirmPassword", value)}
                        placeholder="Confirm Password"
                        placeholderTextColor="#777"
                    />
                </View>

                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.button} onPress={() => this.handleSignUp()}>
                        <Text style={styles.buttonText}>Sign Up</Text>
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
        marginBottom: 50
    },
    button: {
        width: 180,
        height: 60,
        borderWidth: 2,
        borderColor: "#63ace5",
        backgroundColor: "#63ace5",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100
    },
    buttonText: {
        fontSize: 16
    }
});
