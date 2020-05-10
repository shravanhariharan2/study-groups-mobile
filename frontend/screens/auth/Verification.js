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
import AuthButton from "../../components/AuthButton";
import { Auth } from "aws-amplify";

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
                
                this.props.navigation.navigate("SelectCourses", {
                    username: this.state.username,
                    email: this.state.email
                });
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
                                placeholderTextColor="#5c5c5c"
                                style={styles.input}
                                value={this.state.verificationCode}
                                onChangeText={value => this.onChangeText("verificationCode", value)}
                            />
                        </View>
                    </View>
                    <AuthButton
                        text="Verify"
                        width={180}
                        fontSize={20}
                        onPress={() => this.verify()}
                    />
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
        backgroundColor: "#d9e7fc",
        alignItems: "center",
        justifyContent: "center"
    },
    formWrapper: {
        marginTop: 40,
        marginBottom: 100,
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
        width: 150,
        marginBottom: 30
    },
});
