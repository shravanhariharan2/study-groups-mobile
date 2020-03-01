import React, { Component } from "react";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard,
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
        const { username, password, email } = this.state;

        // check if username is blank cuz Auth.signUp doesn't check
        if (this.state.username.length < 5) {
            alert("Error: Username must be at least 5 characters long");
        }
        // check if passwords match cuz Auth.signUp doesn't check
        else if (this.state.password != this.state.confirmPassword) {
            alert("Error: Passwords do not match");
            this.setState({
                password: "",
                confirmPassword: ""
            });
        } else {
            Auth.signUp({ username, password, attributes: { email } })
                .then(user => {
                    console.log(user);
                    this.props.navigation.navigate("Verification", {
                        username: this.state.username,
                        email: this.state.email
                    });
                })
                .catch(err => {
                    console.log(err);
                    const errType = err["code"];
                    const errMessage = err["message"];
                    console.log(errType);
                    switch (errType) {
                        case "UsernameExistsException":
                            alert("Error: Username already exists");
                            break;
                        case "InvalidParameterException":
                            if (errMessage.includes("username")) {
                                alert("Error: Username must not contain invalid characters");
                            } else if (errMessage.includes("password")) {
                                alert("Error: Password must be 8 or more characters in length");
                            } else if (errMessage.includes("email")) {
                                alert("Error: Invalid email address format");
                            }
                            break;
                    }
                });
        }
    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
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
                            value={this.state.password}
                            onChangeText={value => this.onChangeText("password", value)}
                            placeholder="Password"
                            placeholderTextColor="#777"
                        />
                        <TextInput
                            secureTextEntry={true}
                            style={styles.input}
                            value={this.state.confirmPassword}
                            onChangeText={value => this.onChangeText("confirmPassword", value)}
                            placeholder="Confirm Password"
                            placeholderTextColor="#777"
                        />

                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.handleSignUp()}
                            >
                                <Text style={styles.buttonText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
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
        marginTop: 60,
        alignItems: "center"
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 40
    },
    input: {
        borderColor: "#000",
        borderBottomWidth: 2,
        padding: 10,
        width: 300,
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
        backgroundColor: "#63ace5",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100
    },
    buttonText: {
        fontSize: 20
    }
});
