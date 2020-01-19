import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';

export default class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            signedIn: false,
            username: "",
            password: ""
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Text style={styles.title}> Sign Up </Text>
                <TextInput style={styles.input} placeholder="Username" />
                <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" />
                <TextInput secureTextEntry={true} style={styles.input} placeholder="Confirm Password" />
                <Button title = "Signup" onPress={() => this.props.navigation.navigate("Home")} />
            </KeyboardAvoidingView>
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
        fontWeight: "bold",
        marginBottom: 60
    },
    input: {
        borderColor: '#000',
        borderWidth: 2,
        padding: 10,
        width: 220,
        marginBottom: 30
    }

});
