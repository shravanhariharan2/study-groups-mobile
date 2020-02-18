import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import { Auth } from "aws-amplify";
import axios from "axios";

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

        Auth.confirmSignUp(username, verificationCode)
            .then(user => {
                console.log(user);
                // add user to our database
                axios
                    .post("https://study-groups-backend.herokuapp.com/users/", {
                        name: this.state.username,
                        email: this.state.email
                    })
                    .then(res => {
                        console.log(res);
                    })
                    .catch(err => {
                        console.log(err);
                    });
                this.props.navigation.navigate("Home");
            })
            .catch(err => {
                console.log(err);
                alert("Invalid verification code");
                this.setState({
                    verificationCode: ""
                });
            });
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <View style={styles.formWrapper}>
                        <Text style={styles.title}>Enter Verification Code</Text>
                        <Text style={styles.desc}>Code sent to {this.state.email}</Text>
                        <View>
                            <TextInput
                                placeholder="Code"
                                style={styles.input}
                                value={this.state.verificationCode}
                                onChangeText={value => this.onChangeText("verificationCode", value)}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity
                            style={styles.button}
                            title="Verify"
                            onPress={() => this.verify()}
                        >
                            <Text style={styles.buttonText}>Verify</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
export default Verification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 24,
        backgroundColor: "#b3cde0",
        alignItems: "center",
        justifyContent: "center"
    },
    formWrapper: {
        marginTop: 160,
        fontSize: 24,
        alignItems: "center"
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    },
    desc: {
        fontSize: 20,
        marginBottom: 40
    },
    input: {
        borderColor: "#000",
        borderBottomWidth: 2,
        padding: 10,
        width: 300,
        marginBottom: 30
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
    buttonWrapper: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 200
    },
    buttonText: {
        fontSize: 20
    }
});
