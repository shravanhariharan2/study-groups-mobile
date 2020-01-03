import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class Intro extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={styles.title}>Welcome to Study Groups Mobile</Text>
                <Button title="Log in" onPress={this.props.navigator.navigate("Login")}></Button>
                <Text>Don't have an account?</Text>
                <Button title="Sign up" onPress={this.props.navigator.navigate("Signup")}></Button>

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
