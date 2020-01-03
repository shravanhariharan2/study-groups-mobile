import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import * as Google from 'expo-google-app-auth';
import { OAuth_iOS, OAuth_Android } from "../../keys";

import axios from "axios";
import Expo from 'expo';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            signedIn: false,
            name: "",
            email: "",
        }
    }

    signInWithGoogle = async () => {
        try {

            //Google OAuth credentials

            const result = await Google.logInAsync({
                androidClientId: OAuth_Android,
                iosClientId: OAuth_iOS,
                scopes: ['profile', 'email'],
            });

            // If signed in successfully

            if (result.type === 'success') {
                this.setState({
                    signedIn: true,
                    name: result.user.name,
                    email: result.user.email
                })

                axios.post("http://localhost:8080/users/", {
                    name: this.state.name,
                    email: this.state.email
                })
                    .then(
                        console.log(res)
                    )
                    .catch(err => console.log(err));

            } else {
                console.log("cancelled");
            }
        } catch (e) {
            console.log("error", e);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to Study Groups Mobile</Text>
                <Button title="Log in with Google" onPress={() => this.signInWithGoogle()}></Button>
                <Text>Don't have an account?</Text>
                <Button title="Sign up with Google" onPress={() => this.signInWithGoogle()}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 24,
        backgroundColor: '#e8e8e8',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 36,
        fontWeight: "bold"
    }
});
