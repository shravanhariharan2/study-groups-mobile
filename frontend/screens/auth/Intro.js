import React, { Component } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

export default class Intro extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Study Groups Mobile</Text>
                    <Text style={styles.subTitle}>Find study groups easily</Text>
                </View>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate("Signup")}
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        title="Log in"
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate("Login")}
                    >
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        title="Settings"
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate("Settings")}
                    >
                        <Text style={styles.buttonText}>Settings Page</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#b3cde0"
    },
    titleWrapper: {
        marginTop: 160,
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold"
    },
    subTitle: {
        marginTop: 30,
        fontSize: 24
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 50
    },
    button: {
        width: 240,
        height: 60,
        borderWidth: 2,
        borderColor: "#63ace5",
        marginBottom: 30,
        backgroundColor: "#63ace5",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100
    },
    buttonText: {
        fontSize: 20
    }
});
