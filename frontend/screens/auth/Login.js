import React, { Component } from "react";
import {
    Text,
    View,
    Button,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import AuthButton from "../../components/AuthButton";
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

        // Check empty fields
        if(username.length == 0 || password.length == 0) {
            alert("Please enter valid details");
            return;
        }

        Auth.signIn({ username, password })
            .then(user => {
                console.log(user);
                this.props.navigation.navigate("Home");
            })
            .catch(err => {
                console.log(err);
                const errorType = err["code"];

                switch (errorType) {
                    case "UserNotFoundException":
                        alert("User does not exist");
                        break;
                    case "InvalidParameterException":
                        alert("Please enter both a username and a password");
                        break;
                    case "NotAuthorizedException":
                        alert("Username and password do not match");
                        break;
                }

                // clear password entry
                this.setState({
                    password: ""
                });
            });
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container} behavior="padding" enabled>
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
                            value={this.state.password}
                            onChangeText={value => this.onChangeText("password", value)}
                            placeholder="Password"
                            placeholderTextColor="#777"
                        />
                    </View>
                    <View style={styles.buttonWrapper}>
                        <AuthButton
                            text="Log In"
                            width={160}
                            fontSize={20}
                            onPress={() => this.handleLogin()}
                        />
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
        width: 300,
        marginBottom: 30
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 120
    },
});
