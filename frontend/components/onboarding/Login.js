import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import * as Google from 'expo-google-app-auth';
import { OAuth_iOS, OAuth_Android } from "../keys";

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

    signIn = async () => {
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

                let newUser = {
                    name: this.state.name,
                    email: this.state.email
                }

                axios.post("http://localhost:8080/users/", newUser)
                    .then(
                        console.log(newUser)
                    )
                    .catch(err => console.log(err));


                //return result.accessToken;
            } else {
                console.log("cancelled");
                //return { cancelled: true };
            }
        } catch (e) {
            console.log("error", e);
            //return { error: true };
        }
    }

    render() {
        return (
            <View>
                <Text>Welcome to Study Groups Mobile</Text>
                <Button title="Sign in with Google" onPress={() => this.signIn()}></Button>
                <Text>Name: {this.state.name}</Text>
                <Text>Email: {this.state.email}</Text>
            </View>
        )
    }
}
