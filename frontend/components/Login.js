import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import * as Google from 'expo-google-app-auth';
import { OAuth_iOS, OAuth_Android } from "../keys";
import Expo from 'expo';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            photo: ""
        }
    }

    signIn = async () => {
        try {
            const result = await Google.logInAsync({
                androidClientId: OAuth_Android,
                iosClientId: OAuth_iOS,
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                this.setState({
                    name: result.user.name,
                    email: result.user.email,
                    photo: result.user.photoUrl
                })
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
                <Button title="Sign in with Google" onPress={() => this.signIn()}></Button>
                <Text>Hello, {this.state.name}</Text>
            </View>
        )
    }
}
