import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class Intro extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Study Groups Mobile</Text>
                <View style={styles.button}>
                   <Button title="Sign up" style={styles.button} onPress={() => this.props.navigation.navigate("Signup")}/>
                </View>
                <View style={styles.button}>
                    <Button title="Log in" style={styles.button} onPress={() => this.props.navigation.navigate("Login")} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 36,
        backgroundColor: '#e8e8e8',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 70
    },
    button: {
        width: 200,
        height: 30,
        marginBottom: 40
    }
});
